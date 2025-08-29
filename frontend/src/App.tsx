import { useEffect } from "react";
import ReactFlow, { Background, type Edge, type Node } from "reactflow";
import "reactflow/dist/style.css";
import ELK from "elkjs/lib/elk.bundled.js";
import { Circle, Square } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useFlowStore } from "@/store";

// Instance of the ELK layout engine.
const elk = new ELK();

// Starting nodes and edges. Icons help prove lucide-react works.
const initialNodes: Node[] = [
  { id: "1", data: { label: "Circle", icon: Circle }, position: { x: 0, y: 0 }, type: "icon" },
  { id: "2", data: { label: "Square", icon: Square }, position: { x: 0, y: 0 }, type: "icon" },
];
const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];

// Custom node renderer that shows an icon and label.
function IconNode({ data }: { data: { label: string; icon: React.ComponentType<{ className?: string }> } }) {
  const Icon = data.icon;
  return (
    <div className="flex items-center gap-2 rounded-md bg-white px-2 py-1 shadow">
      <Icon className="h-4 w-4" />
      <span>{data.label}</span>
    </div>
  );
}
const nodeTypes = { icon: IconNode };

export default function App() {
  const { nodes, edges, setElements } = useFlowStore();

  useEffect(() => {
    // Use ELK to compute a tidy layout so nodes aren't overlapping.
    const graph = {
      id: "root",
      layoutOptions: { "elk.algorithm": "layered" },
      children: initialNodes.map((n) => ({ id: n.id, width: 80, height: 40 })),
      edges: initialEdges.map((e) => ({ id: e.id, sources: [e.source], targets: [e.target] })),
    };

    elk.layout(graph).then((g) => {
      const laidOut = initialNodes.map((n) => {
        const node = g.children?.find((c: any) => c.id === n.id);
        return { ...n, position: { x: node?.x || 0, y: node?.y || 0 } };
      });
      setElements(laidOut, initialEdges);
    });
  }, [setElements]);

  return (
    <div className="h-screen w-screen">
      {/* Button from shadcn/ui to reset the demo graph */}
      <div className="p-2">
        <Button onClick={() => setElements(initialNodes, initialEdges)}>Reset Layout</Button>
      </div>
      {/* React Flow renders the interactive canvas */}
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} fitView>
        <Background />
      </ReactFlow>
    </div>
  );
}
