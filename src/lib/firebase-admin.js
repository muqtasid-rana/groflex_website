/**
 * Firebase Auth + Storage — ONLY for admin routes.
 * Separated from firebase.js to avoid loading auth/iframe.js (90KB)
 * on public pages where only Firestore is needed.
 */
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { app } from './firebase';

export const auth = getAuth(app);
export const storage = getStorage(app);
