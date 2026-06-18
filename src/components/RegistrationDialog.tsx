import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";
import seminarSpeaker from "@/assets/seminar-speaker.png";

const RegistrationDialog = () => {
  const [open, setOpen] = useState(false);

  const targetDate = new Date("2026-03-28T09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());
  const isLive = timeLeft <= 0;

  // ✅ FIXED timer effect (properly inside useEffect)
  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = targetDate - new Date().getTime();
      setTimeLeft(remaining > 0 ? remaining : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("registration-dismissed", "true");
  };

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    // ✅ THIS LINE ENSURES IT NEVER OPENS
    <Dialog open={false} onOpenChange={(v) => { if (!v) handleClose(); }}>
      
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden border-0 bg-black text-white">

        <div
          className="relative w-full min-h-[520px] bg-cover bg-center flex flex-col justify-end"
          style={{ backgroundImage: `url(${seminarSpeaker})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

          <div className="relative z-10 p-6 text-white">
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-heading text-white">
                🎓 Career Counselling Seminar
              </DialogTitle>

              <DialogDescription className="text-center text-white/80 text-sm">
                A Comprehensive Career Counselling Seminar!
              </DialogDescription>
            </DialogHeader>

            {isLive ? (
              <div className="mt-4 text-center">
                <div className="text-xl font-bold text-green-400 animate-pulse">
                  🚀 EVENT IS LIVE
                </div>
              </div>
            ) : (
              <div className="mt-4 grid grid-cols-4 gap-2 text-center">
                <div className="bg-black/70 rounded-lg p-2">
                  <div className="text-lg font-bold">{days}</div>
                  <div className="text-xs text-white/70">Days</div>
                </div>
                <div className="bg-black/70 rounded-lg p-2">
                  <div className="text-lg font-bold">{hours}</div>
                  <div className="text-xs text-white/70">Hours</div>
                </div>
                <div className="bg-black/70 rounded-lg p-2">
                  <div className="text-lg font-bold">{minutes}</div>
                  <div className="text-xs text-white/70">Minutes</div>
                </div>
                <div className="bg-black/70 rounded-lg p-2">
                  <div className="text-lg font-bold">{seconds}</div>
                  <div className="text-xs text-white/70">Seconds</div>
                </div>
              </div>
            )}

            <div className="space-y-2 pt-4 text-sm">
              <div className="flex items-center gap-2 text-white/90">
                <CalendarDays size={15} />
                <span>Check Events page for schedule</span>
              </div>

              <div className="flex items-center gap-2 text-white/90">
                <MapPin size={15} />
                <span>
                  Convention hall SOA Campus 2 Near SUM Hospital, Bhubaneswar
                </span>
              </div>

              <a
                href="/Events"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-saffron-gradient text-primary-foreground font-medium shadow-saffron hover:opacity-90 transition-opacity text-sm"
              >
                <ExternalLink size={14} /> View All Events
              </a>
            </div>
          </div>
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default RegistrationDialog;
