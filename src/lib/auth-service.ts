import { signInAnonymously, onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase';

export const loginAnonymously = async (): Promise<User> => {
  if (!auth) throw new Error("Firebase Auth not initialized");
  const userCredential = await signInAnonymously(auth);
  return userCredential.user;
};

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve) => {
    if (!auth) return resolve(null);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
};
