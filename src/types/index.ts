export type Card = {
  id: string;
  content: string;
  category?: string;
};

export type Slot = {
  id: string; // e.g., 'col-1-row-2'
  columnWeight: number; // e.g., -4, 0, +4
  row: number;
  col: number;
};

export type ColumnConfig = {
  weight: number;
  capacity: number;
};

export type DistributionConfig = {
  id: string;
  columns: ColumnConfig[];
};

export type PlacementMap = Record<string, string>; // cardId -> slotId

export type SessionPhase = 'CURRENT' | 'IDEAL' | 'REPORT';

export type UserSession = {
  uid: string;
  phase: SessionPhase;
  currentPlacements: PlacementMap;
  idealPlacements: PlacementMap;
  completed: boolean;
};
