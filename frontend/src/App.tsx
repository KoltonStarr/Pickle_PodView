import "reactflow/dist/style.css";
import ReactFlow, {
  Handle,
  Position,
  type Edge,
  type Node,
} from "reactflow";
import { KeyRound, PlugZap, Usb } from "lucide-react";

function PodNode() {
  return (
    <div className="flex h-64 w-64 items-center justify-center rounded border-4 border-slate-500 bg-white text-xl font-bold">
      Pod
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="!-left-2 h-4 w-4 bg-slate-500"
      />
      <Handle
        type="target"
        position={Position.Right}
        id="right"
        className="!-right-2 h-4 w-4 bg-yellow-400"
      />
    </div>
  );
}

interface DriveData {
  label: string;
  secret?: boolean;
}

function DriveNode({ data }: { data: DriveData }) {
  return (
    <div className="relative flex items-center gap-1 rounded-sm border border-slate-400 bg-slate-200 px-2 py-1 text-xs">
      <Usb className="h-4 w-4" />
      <span>{data.label}</span>
      {data.secret && (
        <KeyRound className="absolute -right-1 -top-1 h-3 w-3 text-red-500" />
      )}
      <Handle
        type="source"
        position={Position.Right}
        className="!-right-2 h-2 w-2 bg-slate-500"
      />
    </div>
  );
}

function ServiceNode() {
  return (
    <div className="flex items-center justify-center rounded-full border-2 border-yellow-400 bg-white p-2">
      <PlugZap className="h-6 w-6 text-yellow-500" />
      <Handle
        type="source"
        position={Position.Left}
        className="!-left-2 h-2 w-2 bg-yellow-400"
      />
    </div>
  );
}

const nodeTypes = {
  pod: PodNode,
  drive: DriveNode,
  service: ServiceNode,
};

const nodes: Node[] = [
  { id: "pod", type: "pod", position: { x: 250, y: 150 }, data: {} },
  {
    id: "configmap",
    type: "drive",
    position: { x: 50, y: 100 },
    data: { label: "ConfigMap" },
  },
  {
    id: "secret",
    type: "drive",
    position: { x: 50, y: 200 },
    data: { label: "Secret", secret: true },
  },
  { id: "service", type: "service", position: { x: 500, y: 150 }, data: {} },
];

const edges: Edge[] = [
  {
    id: "configmap-pod",
    source: "configmap",
    target: "pod",
    targetHandle: "left",
    style: { stroke: "#64748b", strokeWidth: 2 },
  },
  {
    id: "secret-pod",
    source: "secret",
    target: "pod",
    targetHandle: "left",
    style: { stroke: "#64748b", strokeWidth: 2 },
  },
  {
    id: "service-pod",
    source: "service",
    target: "pod",
    targetHandle: "right",
    animated: true,
    style: { stroke: "#facc15", strokeWidth: 2 },
  },
];

export default function App() {
  return (
    <div className="h-screen bg-slate-100">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
      />
    </div>
  );
}

