"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingSlug: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  bookingSlug,
}: BookingModalProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#112250" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[90vh] p-0 overflow-hidden bg-white rounded-2xl border border-[#E0C58F]/20">
        <DialogHeader className="p-4 bg-[#F5F0E9] border-b border-[#E0C58F]/20 hidden">
          <DialogTitle className="text-[#112250]">Book Appointment</DialogTitle>
        </DialogHeader>
        <div className="w-full h-full overflow-hidden">
          <Cal
            calLink={`youthfulglowstudiobookings/${bookingSlug}`}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
