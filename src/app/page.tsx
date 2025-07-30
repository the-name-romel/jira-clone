import { Button } from "@/components/ui/button";
import { Test } from "./features/test";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Button>Primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="teritary">Teritary</Button>
      <Button variant="outline">outline</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="muted">muted</Button>
    </div>
  );
}
