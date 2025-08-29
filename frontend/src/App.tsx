import { KeyRound, PlugZap, Usb } from "lucide-react";

interface DriveProps {
  label: string;
  secret?: boolean;
}

function UsbDrive({ label, secret }: DriveProps) {
  return (
    <div className="relative flex items-center gap-1 rounded-sm border border-slate-400 bg-slate-200 px-2 py-1 text-xs">
      <Usb className="h-4 w-4" />
      <span>{label}</span>
      {secret && (
        <KeyRound className="absolute -right-1 -top-1 h-3 w-3 text-red-500" />
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-100">
      <div className="relative">
        <div className="flex h-64 w-64 items-center justify-center rounded border-4 border-slate-500 bg-white text-xl font-bold">
          Pod
        </div>

        <div className="absolute left-0 top-8 -translate-x-full flex items-center">
          <UsbDrive label="ConfigMap" />
          <div className="h-2 w-4 bg-slate-500" />
        </div>

        <div className="absolute left-0 top-32 -translate-x-full flex items-center">
          <UsbDrive label="Secret" secret />
          <div className="h-2 w-4 bg-slate-500" />
        </div>

        <div className="absolute right-0 top-28 translate-x-full flex items-center">
          <div className="h-1 w-24 bg-yellow-400 animate-pulse" />
          <div className="ml-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-yellow-400 bg-white">
            <PlugZap className="h-6 w-6 text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
