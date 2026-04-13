'use client';

import { useDraggable } from '@dnd-kit/core';
import { Card as CardType } from '@/types';
import { clsx } from 'clsx';

export function Card({ card, isOverlay }: { card: CardType; isOverlay?: boolean }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: card.id,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={clsx(
        'w-32 h-20 p-2 text-xs font-medium bg-white border border-slate-200 rounded shadow-sm cursor-grab active:cursor-grabbing flex items-center justify-center text-center select-none',
        isDragging && !isOverlay && 'opacity-30',
        isOverlay && 'shadow-lg ring-2 ring-blue-500 z-50'
      )}
    >
      {card.content}
    </div>
  );
}
