import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './firebase';
import { PlacementMap, SessionPhase } from '@/types';

export const saveSession = async (
  uid: string, 
  data: {
    phase: SessionPhase;
    currentPlacements: PlacementMap;
    idealPlacements: PlacementMap;
  }
) => {
  if (!db) return;
  const sessionRef = doc(db, 'sessions', uid);
  await setDoc(sessionRef, {
    ...data,
    updatedAt: serverTimestamp(),
  }, { merge: true });
};

export const getSession = async (uid: string) => {
  if (!db) return null;
  const sessionRef = doc(db, 'sessions', uid);
  const snap = getDoc(sessionRef);
  return snap;
};
