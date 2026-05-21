'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { getAllSubmissions, deleteSubmission } from '@/lib/gameplans';
import Link from 'next/link';

export default function AdminGameplans() {
  const { user, loading: authLoading, logout } = useAuth();
  const router = useRouter();
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    if (!authLoading && !user) router.push('/admin/login');
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) load();
  }, [user]);

  const load = async () => {
    setLoading(true);
    try {
      setSubmissions(await getAllSubmissions());
    } catch (err) {
      console.error('Failed to fetch submissions:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete submission from "${name}"? This cannot be undone.`)) return;
    try {
      await deleteSubmission(id);
      setSubmissions((arr) => arr.filter((s) => s.id !== id));
    } catch (err) {
      alert('Delete failed: ' + err.message);
    }
  };

  const toggle = (id) => setExpanded((p) => ({ ...p, [id]: !p[id] }));

  const handleLogout = async () => {
    await logout();
    router.push('/admin/login');
  };

  if (authLoading || !user) return null;

  return (
    <div className="admin-dash">
      <div className="admin-dash__topbar">
        <h1 className="admin-dash__title">Gameplan Submissions</h1>
        <div className="admin-dash__actions-top">
          <Link href="/admin" className="admin-dash__btn admin-dash__btn--ghost">
            <i className="fa-solid fa-arrow-left"></i> Blogs
          </Link>
          <button onClick={handleLogout} className="admin-dash__btn admin-dash__btn--ghost">
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </button>
        </div>
      </div>

      {loading ? (
        <div className="admin-dash__loading">Loading submissions...</div>
      ) : submissions.length === 0 ? (
        <div className="admin-dash__empty">
          <i className="fa-solid fa-inbox"></i>
          <h3>No submissions yet</h3>
          <p>Once a founder completes the gameplan quiz, it’ll appear here.</p>
        </div>
      ) : (
        <div className="admin-dash__table-wrap">
          <table className="admin-dash__table">
            <thead>
              <tr>
                <th>When</th>
                <th>Name</th>
                <th>Email</th>
                <th>Stage</th>
                <th>Blocker (excerpt)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s) => (
                <SubmissionRow
                  key={s.id}
                  s={s}
                  expanded={!!expanded[s.id]}
                  onToggle={() => toggle(s.id)}
                  onDelete={() => handleDelete(s.id, s.name)}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function SubmissionRow({ s, expanded, onToggle, onDelete }) {
  const when = s.createdAt ? new Date(s.createdAt).toLocaleString() : '—';
  const blockerShort = (s.blocker || '').slice(0, 80) + ((s.blocker || '').length > 80 ? '…' : '');
  return (
    <>
      <tr>
        <td className="admin-dash__td-date">{when}</td>
        <td className="admin-dash__td-title">{s.name}</td>
        <td className="admin-dash__td-slug">{s.email}</td>
        <td className="admin-dash__td-slug">{s.stageCode} — {s.stageName}</td>
        <td className="admin-dash__td-slug">{blockerShort}</td>
        <td className="admin-dash__td-actions">
          <button onClick={onToggle} className="admin-dash__action-btn admin-dash__action-btn--view" title={expanded ? 'Collapse' : 'Expand'}>
            <i className={`fa-solid ${expanded ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </button>
          <button onClick={onDelete} className="admin-dash__action-btn admin-dash__action-btn--delete" title="Delete">
            <i className="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
      {expanded && (
        <tr>
          <td colSpan={6} style={{ background: '#f8f8fc', padding: '1.25rem 1.5rem' }}>
            <SubmissionDetail s={s} />
          </td>
        </tr>
      )}
    </>
  );
}

function SubmissionDetail({ s }) {
  const ai = s.ai || {};
  const h = s.humanAnswers || {};
  const cs = ai.constraints || {};
  return (
    <div style={{ display: 'grid', gap: '1rem', fontSize: '0.92rem', lineHeight: 1.55 }}>
      <DetailBlock title="Quiz Answers">
        <p><strong>Q1 — Where the product is:</strong> {h.q1 || '—'}</p>
        <p><strong>Q2 — Their day:</strong> {h.q2 || '—'}</p>
        <p><strong>Q3 — Closest to home:</strong> {h.q3 || '—'}</p>
      </DetailBlock>

      <DetailBlock title="Their Biggest Blocker (own words)">
        <p style={{ whiteSpace: 'pre-wrap' }}>{s.blocker}</p>
      </DetailBlock>

      <DetailBlock title="Their 90-Day Goal (own words)">
        <p style={{ whiteSpace: 'pre-wrap' }}>{s.goal}</p>
      </DetailBlock>

      <DetailBlock title="AI — Personal Truth">
        <p>{ai.personalTruth || '—'}</p>
      </DetailBlock>

      <DetailBlock title={`AI — Focus: ${ai.focus?.area || '—'}`}>
        <p><strong>The Problem:</strong> {ai.focus?.problem || '—'}</p>
        <p><strong>The Cause:</strong> {ai.focus?.cause || '—'}</p>
        <p><strong>When Solved:</strong> {ai.focus?.whenSolved || '—'}</p>
      </DetailBlock>

      <DetailBlock title="AI — Pillar Diagnosis">
        {Object.keys(cs).length === 0 ? <p>—</p> : (
          <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            {Object.entries(cs).map(([id, data]) => (
              <li key={id} style={{ marginBottom: '0.5rem' }}>
                <strong>{id}</strong> — <span style={{
                  textTransform: 'uppercase', fontWeight: 700,
                  color: data.status === 'red' ? '#d9484b' : data.status === 'yellow' ? '#b08800' : '#1fa971',
                }}>{data.status}</span>
                <br />Reason: {data.reason}
                <br />How to: {data.howTo}
              </li>
            ))}
          </ul>
        )}
      </DetailBlock>

      <DetailBlock title="AI — Bottom Line">
        <p>{ai.bottomLine || '—'}</p>
      </DetailBlock>

      <DetailBlock title="AI — Next Stage Teaser">
        <p>{ai.nextStageTeaser || '—'}</p>
      </DetailBlock>
    </div>
  );
}

function DetailBlock({ title, children }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #e6e6f0', borderRadius: 8, padding: '0.9rem 1.1rem' }}>
      <h4 style={{ margin: '0 0 0.4rem', fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#070052' }}>{title}</h4>
      {children}
    </div>
  );
}
