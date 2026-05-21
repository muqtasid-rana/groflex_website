import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';

const COLLECTION = 'gameplan_submissions';

let _db = null;
async function getDb() {
  if (_db) return _db;
  const { db } = await import('./firebase');
  _db = db;
  return _db;
}

function serialize(docSnap) {
  const data = docSnap.data();
  return {
    id: docSnap.id,
    ...data,
    createdAt: data.createdAt?.toDate?.()
      ? data.createdAt.toDate().toISOString()
      : null,
  };
}

export async function addSubmission(payload) {
  const db = await getDb();
  return addDoc(collection(db, COLLECTION), {
    ...payload,
    createdAt: serverTimestamp(),
  });
}

export async function getAllSubmissions() {
  const db = await getDb();
  const q = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(serialize);
}

export async function deleteSubmission(id) {
  const db = await getDb();
  return deleteDoc(doc(db, COLLECTION, id));
}
