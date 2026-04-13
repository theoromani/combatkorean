'use client';

import { useDroppable } from '@dnd-kit/core';
import { Slot as SlotType } from '@/types';
import { clsx } from 'clsx';
import React from 'react';

interface SlotProps {
  slot: SlotType;
  children?: React.ReactNode;
}

export function Slot({ slot, children }: SlotProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: slot.id,
  });

  return (
    <div
      ref={setNodeRef}
      className={clsx(
        'w-34 h-22 min-w-[136px] min-h-[88px] border-2 border-dashed flex items-center justify-center rounded transition-colors',
        isOver ? 'border-blue-400 bg-blue-50' : 'border-slate-200 bg-slate-50/50',
        children ? 'border-solid border-slate-300' : 'border-dashed'
      )}
    >
      {children}
    </div>
  );
}
