import { Button } from "@/components/ui/button";
import { Test } from "./features/test";

export default function Home() {
  return (
    <div>
      <Button variant="default">Click me</Button>
      <p className="text-red-500 font-semibold">Romel</p>
      <Test />
    </div>
  );
}
