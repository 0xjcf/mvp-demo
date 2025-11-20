import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

interface TradeEntryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TradeEntryModal({ open, onOpenChange }: TradeEntryModalProps) {
  const [formData, setFormData] = useState({
    symbol: "",
    side: "",
    quantity: "",
    price: "",
    orderType: "",
    timeInForce: "",
    stopPrice: "",
    limitPrice: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Trade submitted:", formData);
    onOpenChange(false);
  };

  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[900px] max-h-[90vh] p-0 gap-0">
        <DialogHeader className="px-6 pt-6 pb-4 border-b">
          <DialogTitle>New Trade Entry</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          <div className="px-6 py-5 overflow-y-auto">
            {/* Trade Details Section */}
            <div className="mb-5">
              <h3 className="mb-5">Trade Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                <div className="space-y-2">
                  <Label htmlFor="symbol">Symbol</Label>
                  <Input
                    id="symbol"
                    placeholder="e.g., AAPL"
                    className="h-[38px]"
                    value={formData.symbol}
                    onChange={(e) =>
                      setFormData({ ...formData, symbol: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="side">Side</Label>
                  <Select
                    value={formData.side}
                    onValueChange={(value) =>
                      setFormData({ ...formData, side: value })
                    }
                  >
                    <SelectTrigger id="side" className="h-[38px]">
                      <SelectValue placeholder="Select side" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buy">Buy</SelectItem>
                      <SelectItem value="sell">Sell</SelectItem>
                      <SelectItem value="short">Short</SelectItem>
                      <SelectItem value="cover">Cover</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Amounts Section */}
            <div className="mb-5">
              <h3 className="mb-5">Amounts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="e.g., 100"
                    className="h-[38px]"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    placeholder="e.g., 150.00"
                    className="h-[38px]"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Execution Section */}
            <div className="mb-5">
              <h3 className="mb-5">Execution</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                <div className="space-y-2">
                  <Label htmlFor="orderType">Order Type</Label>
                  <Select
                    value={formData.orderType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, orderType: value })
                    }
                  >
                    <SelectTrigger id="orderType" className="h-[38px]">
                      <SelectValue placeholder="Select order type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="market">Market</SelectItem>
                      <SelectItem value="limit">Limit</SelectItem>
                      <SelectItem value="stop">Stop</SelectItem>
                      <SelectItem value="stop-limit">Stop Limit</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeInForce">Time in Force</Label>
                  <Select
                    value={formData.timeInForce}
                    onValueChange={(value) =>
                      setFormData({ ...formData, timeInForce: value })
                    }
                  >
                    <SelectTrigger id="timeInForce" className="h-[38px]">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">Day</SelectItem>
                      <SelectItem value="gtc">Good Till Cancelled</SelectItem>
                      <SelectItem value="ioc">Immediate or Cancel</SelectItem>
                      <SelectItem value="fok">Fill or Kill</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stopPrice">Stop Price (Optional)</Label>
                  <Input
                    id="stopPrice"
                    type="number"
                    step="0.01"
                    placeholder="e.g., 145.00"
                    className="h-[38px]"
                    value={formData.stopPrice}
                    onChange={(e) =>
                      setFormData({ ...formData, stopPrice: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="limitPrice">Limit Price (Optional)</Label>
                  <Input
                    id="limitPrice"
                    type="number"
                    step="0.01"
                    placeholder="e.g., 155.00"
                    className="h-[38px]"
                    value={formData.limitPrice}
                    onChange={(e) =>
                      setFormData({ ...formData, limitPrice: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Optional Notes Section */}
            <div>
              <h3 className="mb-5">Optional Notes</h3>
              <div className="space-y-2">
                <Label htmlFor="notes">Trade Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Add any notes about this trade..."
                  className="min-h-[76px] resize-none"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <DialogFooter className="px-6 py-4 border-t bg-muted/20">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="min-h-[44px] min-w-[100px]"
            >
              Cancel
            </Button>
            <Button type="submit" className="min-h-[44px] min-w-[140px]">
              Confirm Trade
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
