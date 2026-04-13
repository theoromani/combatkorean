'use client';

import { useEffect } from 'react';
import { Board } from '@/components/board/Board';
import { useQSortStore } from '@/lib/store';
import { Card } from '@/types';

import { loginAnonymously } from '@/lib/auth-service';
import { getSession } from '@/lib/db';

// Initial sample data for demonstration
const SAMPLE_CARDS: Card[] = Array.from({ length: 60 }, (_, i) => ({
  id: `card-${i + 1}`,
  content: `Culture Card #${i + 1}: ${
    [
      "Decisions are made top-down",
      "We value speed over perfection",
      "Collaboration is highly rewarded",
      "Failure is seen as a learning step",
      "Strict adherence to hierarchy",
      "Flexible work hours are standard",
      "Direct feedback is encouraged",
      "Focus on individual performance",
      "Strong emphasis on social impact",
      "Innovation happens in silos"
    ][i % 10]
  }`,
}));

export default function Home() {
  const { setCards, setUid, setPhase } = useQSortStore();

  useEffect(() => {
    const init = async () => {
      // 1. Set cards
      setCards(SAMPLE_CARDS);
      
      // 2. Auth
      try {
        const user = await loginAnonymously();
        setUid(user.uid);
        
        // 3. Optional: Load existing session (commented out until keys are real)
        /*
        const snap = await getSession(user.uid);
        if (snap.exists()) {
          const data = snap.data();
          // Update store with data
        }
        */
      } catch (err) {
        console.error("Auth failed:", err);
      }
    };
    init();
  }, [setCards, setUid, setPhase]);

  return (
    <main className="min-h-screen">
      <Board />
    </main>
  );
}
