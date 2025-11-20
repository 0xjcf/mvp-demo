import { useState } from "react";
import { Button } from "./components/ui/button";
import { TradeEntryModal } from "./components/TradeEntryModal";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="size-full flex items-center justify-center bg-muted/30">
      <Button onClick={() => setIsModalOpen(true)} className="min-h-[44px]">
        Open Trade Entry
      </Button>

      <TradeEntryModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
