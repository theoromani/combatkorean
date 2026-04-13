import { DistributionConfig, Slot, ColumnConfig } from '../types';

/**
 * Standard 60-card Q-Sort distribution (9 columns)
 * -4: 2 slots
 * -3: 4 slots
 * -2: 6 slots
 * -1: 9 slots
 *  0: 12 slots
 * +1: 9 slots
 * +2: 6 slots
 * +3: 4 slots
 * +4: 2 slots
 * Total: 60
 */
export const DEFAULT_DISTRIBUTION: DistributionConfig = {
  id: 'standard-60',
  columns: [
    { weight: -4, capacity: 2 },
    { weight: -3, capacity: 4 },
    { weight: -2, capacity: 6 },
    { weight: -1, capacity: 9 },
    { weight: 0, capacity: 12 },
    { weight: 1, capacity: 9 },
    { weight: 2, capacity: 6 },
    { weight: 3, capacity: 4 },
    { weight: 4, capacity: 2 },
  ],
};

/**
 * Generate slot definitions from a distribution config
 */
export function generateSlots(config: DistributionConfig): Slot[] {
  const slots: Slot[] = [];
  config.columns.forEach((col, colIdx) => {
    for (let rowIdx = 0; rowIdx < col.capacity; rowIdx++) {
      slots.push({
        id: `col-${colIdx}-row-${rowIdx}`,
        columnWeight: col.weight,
        col: colIdx,
        row: rowIdx,
      });
    }
  });
  return slots;
}
