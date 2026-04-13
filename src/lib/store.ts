import { create } from 'zustand';
import { Card, PlacementMap, SessionPhase } from '../types';

interface QSortState {
  // Master data
  cards: Card[];
  uid: string | null;
  
  // Current user's session state
  phase: SessionPhase;
  currentPlacements: PlacementMap;
  idealPlacements: PlacementMap;
  
  // Actions
  setCards: (cards: Card[]) => void;
  setUid: (uid: string) => void;
  setPhase: (phase: SessionPhase) => void;
  placeCard: (cardId: string, slotId: string | null) => void;
  resetPlacements: () => void;
}

export const useQSortStore = create<QSortState>((set) => ({
  cards: [],
  uid: null,
  phase: 'CURRENT',
  currentPlacements: {},
  idealPlacements: {},

  setCards: (cards) => set({ cards }),
  setUid: (uid) => set({ uid }),
  setPhase: (phase) => set({ phase }),
  
  placeCard: (cardId, slotId) => set((state) => {
    const currentPhaseKey = state.phase === 'CURRENT' ? 'currentPlacements' : 'idealPlacements';
    const currentMap = { ...state[currentPhaseKey] };
    
    if (slotId === null) {
      delete currentMap[cardId];
    } else {
      // Logic: Ensure slot is only used once by removing any card already there
      Object.keys(currentMap).forEach((cid) => {
        if (currentMap[cid] === slotId) delete currentMap[cid];
      });
      currentMap[cardId] = slotId;
    }

    return { [currentPhaseKey]: currentMap };
  }),

  resetPlacements: () => set((state) => ({
    [state.phase === 'CURRENT' ? 'currentPlacements' : 'idealPlacements']: {}
  })),
}));
