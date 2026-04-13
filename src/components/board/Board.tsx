'use client';

import React, { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from '@dnd-kit/core';
import { useQSortStore } from '@/lib/store';
import { DEFAULT_DISTRIBUTION, generateSlots } from '@/lib/qsort-utils';
import { Slot } from './Slot';
import { Card } from './Card';
import { clsx } from 'clsx';

export function Board() {
  const { 
    cards, 
    uid,
    phase, 
    currentPlacements, 
    idealPlacements, 
    placeCard,
    setPhase
  } = useQSortStore();
  const [activeId, setActiveId] = useState<string | null>(null);
  const slots = generateSlots(DEFAULT_DISTRIBUTION);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  );

  const placements = phase === 'CURRENT' ? currentPlacements : idealPlacements;

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { over, active } = event;
    const cardId = active.id as string;

    if (over) {
      const slotId = over.id as string;
      placeCard(cardId, slotId);
    } else {
      placeCard(cardId, null);
    }
    setActiveId(null);

    // Persist to Firestore if UID exists
    if (uid) {
      const { saveSession } = await import('@/lib/db');
      saveSession(uid, {
        phase,
        currentPlacements,
        idealPlacements
      });
    }
  };

  const handleComplete = async () => {
    if (phase === 'CURRENT') {
      setPhase('IDEAL');
    } else {
      // Navigate to report
      console.log('Diagnosis complete!');
    }
  };

  // Reverse mapping for easy lookup: slotId -> cardId
  const slotToCard = Object.entries(placements).reduce((acc: Record<string, string>, [cardId, slotId]) => {
    if (typeof slotId === 'string') {
      acc[slotId] = cardId;
    }
    return acc;
  }, {} as Record<string, string>);

  // Unplaced cards (still in pool)
  const poolCards = cards.filter(c => !placements[c.id]);
  const activeCard = cards.find(c => c.id === activeId);

  // Group slots by columns for visualization
  const columns = Array.from({ length: DEFAULT_DISTRIBUTION.columns.length }, (_, i) => 
    slots.filter(s => s.col === i)
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col gap-8 p-8 h-screen overflow-hidden">
        
        {/* Header/Controls */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border border-slate-200">
          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Q-Sort Diagnosis: <span className="text-blue-600">{phase}</span>
            </h1>
            <p className="text-sm text-slate-500">
              Drag cards to the grid. {60 - Object.keys(placements).length} cards remaining.
            </p>
          </div>
          <button 
            onClick={handleComplete}
            className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 disabled:opacity-50 transition-all"
            disabled={Object.keys(placements).length < 60}
          >
            {phase === 'CURRENT' ? 'Next: Ideal Culture' : 'Finish & See Report'}
          </button>
        </div>

        <div className="flex gap-8 flex-1 min-h-0">
          {/* Card Pool */}
          <div className="w-80 bg-slate-100 rounded-xl p-4 flex flex-col border border-slate-200 shadow-inner">
            <h3 className="font-bold mb-4 text-slate-700 flex items-center justify-between">
              Card Pool
              <span className="text-xs bg-slate-200 px-2 py-1 rounded">{poolCards.length}</span>
            </h3>
            <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
              {poolCards.map(card => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          </div>

          {/* Grid Area */}
          <div className="flex-1 bg-white rounded-xl p-6 border border-slate-200 shadow-sm overflow-x-auto overflow-y-auto custom-scrollbar">
            <div className="flex justify-center gap-4 min-w-max pb-8">
              {columns.map((colSlots, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-4 items-center">
                  <div className="text-sm font-bold text-slate-400 mb-2">
                    {DEFAULT_DISTRIBUTION.columns[colIdx].weight > 0 ? '+' : ''}
                    {DEFAULT_DISTRIBUTION.columns[colIdx].weight}
                  </div>
                  {colSlots.map(slot => (
                    <Slot key={slot.id} slot={slot}>
                      {slotToCard[slot.id] && (
                        <Card card={cards.find(c => c.id === slotToCard[slot.id])!} />
                      )}
                    </Slot>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <DragOverlay dropAnimation={null}>
        {activeCard ? <Card card={activeCard} isOverlay /> : null}
      </DragOverlay>
    </DndContext>
  );
}
