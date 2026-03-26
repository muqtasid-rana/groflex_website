import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';

const BLOGS_COLLECTION = 'blogs';

/**
 * Lazy-initialize Firestore to avoid loading Firebase on every page visit.
 * Firebase SDK (90KB+) was previously loaded eagerly, blocking the critical path.
 */
let _db = null;
async function getDb() {
  if (_db) return _db;
  const { db } = await import('./firebase');
  _db = db;
  return _db;
}

/**
 * Serialize Firestore Timestamp fields to ISO strings
 */
function serializeBlog(docSnap) {
  const data = docSnap.data();
  return {
    id: docSnap.id,
    ...data,
    createdAt: data.createdAt?.toDate?.() ? data.createdAt.toDate().toISOString() : null,
    updatedAt: data.updatedAt?.toDate?.() ? data.updatedAt.toDate().toISOString() : null,
  };
}

/**
 * Get all published blogs, ordered by date descending
 */
export async function getAllBlogs() {
  const db = await getDb();
  const q = query(
    collection(db, BLOGS_COLLECTION),
    orderBy('date', 'desc')
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(serializeBlog);
}

/**
 * Get a single blog by its slug
 */
export async function getBlogBySlug(slug) {
  const db = await getDb();
  const q = query(
    collection(db, BLOGS_COLLECTION),
    where('slug', '==', slug)
  );
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  return serializeBlog(snapshot.docs[0]);
}

/**
 * Get a single blog by its Firestore document ID
 */
export async function getBlogById(id) {
  const db = await getDb();
  const docRef = doc(db, BLOGS_COLLECTION, id);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  return serializeBlog(docSnap);
}

/**
 * Create a new blog post
 */
export async function createBlog(data) {
  const db = await getDb();
  const docRef = await addDoc(collection(db, BLOGS_COLLECTION), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

/**
 * Update an existing blog post
 */
export async function updateBlog(id, data) {
  const db = await getDb();
  const docRef = doc(db, BLOGS_COLLECTION, id);
  await updateDoc(docRef, {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Delete a blog post
 */
export async function deleteBlog(id) {
  const db = await getDb();
  const docRef = doc(db, BLOGS_COLLECTION, id);
  await deleteDoc(docRef);
}
