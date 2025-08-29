import { create } from "zustand";
import type { Edge, Node } from "reactflow";

// Simple store that keeps track of nodes and edges for React Flow.
interface FlowState {
  nodes: Node[];
  edges: Edge[];
  setElements: (nodes: Node[], edges: Edge[]) => void;
}

export const useFlowStore = create<FlowState>((set) => ({
  nodes: [],
  edges: [],
  setElements: (nodes, edges) => set({ nodes, edges }),
}));
