// WhatsAppButton — floating WhatsApp contact button
// Phone: +91 63715 19735
// Mobile optimized, accessible, animated
// Place this in Layout.tsx so it appears on every page
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_PHONE = '916371519735'; // +91 63715 19735 without spaces/+
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=Hello%20Satsang%20OUTR%2C%20I%20would%20like%20to%20know%20more.`;

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Satsang OUTR on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp-green focus-visible:ring-offset-2"
      style={{ backgroundColor: 'hsl(var(--whatsapp-green))', outlineColor: 'hsl(var(--whatsapp-green) / 0.7)' }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: 'hsl(var(--whatsapp-green))' }}
        animate={{ scale: [1, 1.4, 1.4], opacity: [0.7, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />
      <MessageCircle size={28} className="text-white relative z-10" fill="white" />
    </motion.a>
  );
};

export default WhatsAppButton;
