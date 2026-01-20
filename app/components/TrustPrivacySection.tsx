import { motion } from 'motion/react';
import { Shield, Lock, User, ArrowRight } from 'lucide-react';

export function TrustPrivacySection() {
  return (
    <section className="relative py-24 bg-[#0F172A] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] bg-[#38BDF8] opacity-5 blur-[120px] rounded-full"
          animate={{ 
            x: ['-50%', '50%', '-50%'],
            y: ['0%', '40%', '0%']
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          style={{ top: '50%', left: '50%' }}
        />
      </div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your privacy is non-negotiable
          </motion.h2>
          <motion.p 
            className="text-xl text-[#94A3B8]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Built for you, not your employer
          </motion.p>
        </motion.div>

        {/* Trust Pillars */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          <TrustPillar
            icon={<Shield className="w-8 h-8 text-[#38BDF8]" />}
            title="Read-Only Access"
            description="We can only read your messages—never send, delete, or forward without your explicit approval."
            delay={0.2}
          />
          <TrustPillar
            icon={<Lock className="w-8 h-8 text-[#38BDF8]" />}
            title="You're In Control"
            description="Every AI-drafted action requires your approval. No auto-sending, no surprises. Ever."
            delay={0.3}
          />
          <TrustPillar
            icon={<User className="w-8 h-8 text-[#38BDF8]" />}
            title="Your Assistant, Not Surveillance"
            description="Built for personal productivity, not employer monitoring. Your data is yours—we never sell it."
            delay={0.4}
          />
        </div>

        {/* Privacy Policy Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-[#38BDF8] hover:text-[#0EA5E9] transition-colors group"
            whileHover={{ x: 5 }}
          >
            <span className="text-lg">Read our full privacy policy</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function TrustPillar({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="text-center group cursor-default"
    >
      <motion.div 
        className="flex justify-center mb-6"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="w-20 h-20 rounded-full bg-[#1E293B] border-2 border-[#38BDF8] flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]"
          style={{
            boxShadow: '0 0 20px rgba(56, 189, 248, 0.2)',
          }}
        >
          {icon}
        </div>
      </motion.div>
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-[#94A3B8] leading-relaxed text-base">{description}</p>
    </motion.div>
  );
}