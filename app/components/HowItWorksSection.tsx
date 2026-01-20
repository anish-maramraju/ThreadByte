import { motion } from 'motion/react';
import { Link, Lock, Bell } from 'lucide-react';

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-20 bg-[#0F172A]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get started in minutes
          </motion.h2>
          <motion.p
            className="text-xl text-[#94A3B8]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Simple setup, powerful results
          </motion.p>
        </motion.div>

        {/* 3-Step Process */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-24">
          <Step
            number={1}
            title="Connect Your Apps"
            description="OAuth setup for your communication platforms in under 2 minutes"
            icon={<Link className="w-12 h-12 text-white" />}
            delay={0.2}
          >
            <motion.div
              className="mt-6 p-6 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#38BDF8]/30 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-8 rounded bg-[#4A154B]" />
                <div className="w-8 h-8 rounded bg-[#EA4335]" />
                <div className="w-8 h-8 rounded bg-[#00AFF0]" />
                <motion.div
                  className="text-[#38BDF8] font-bold"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  +
                </motion.div>
              </div>
              <p className="text-[#CBD5E1] text-sm text-center mb-2">
                Connect all your communication platforms
              </p>
              <p className="text-[#64748B] text-xs text-center">
                Slack, Gmail, GroupMe and more to come
              </p>
            </motion.div>
            <motion.p
              className="text-xs text-[#94A3B8] italic mt-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Read-only access. We never send on your behalf.
            </motion.p>
          </Step>

          <Step
            number={2}
            title="Personalize Your Digest"
            description="Choose your projects, set your preferences, and define what matters"
            icon={<Lock className="w-12 h-12 text-white" />}
            delay={0.3}
          >
            <motion.div
              className="space-y-3 mt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ToggleOption label="Daily digest at 8am" enabled delay={0.6} />
              <ToggleOption label="Action item tracking" enabled delay={0.7} />
              <ToggleOption label="Cross-platform search" enabled delay={0.8} />
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-2 mt-4 justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Tag text="Marketing Club" />
              <Tag text="CS 101" />
              <Tag text="Startup Weekend" />
            </motion.div>
          </Step>

          <Step
            number={3}
            title="Get Your Morning Digest"
            description="Every morning at 8am, everything you need in one intelligent summary"
            icon={<Bell className="w-12 h-12 text-white" />}
            delay={0.4}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="mt-6 p-6 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#38BDF8] rounded-xl cursor-pointer"
              style={{
                boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)',
              }}
            >
              <motion.div
                className="text-[#38BDF8] text-xs font-semibold mb-2"
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                8:00 AM
              </motion.div>
              <div className="text-white text-sm font-semibold mb-2">Your Morning Digest 📬</div>
              <div className="text-[#94A3B8] text-xs">3 action items • 5 updates • 2 reminders</div>
            </motion.div>
          </Step>
        </div>

        {/* Live Digest Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[900px] mx-auto"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here's what your morning digest looks like
          </motion.h3>
          <motion.div
            className="p-6 md:p-10 bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-[#334155] rounded-3xl space-y-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(56, 189, 248, 0.15)',
            }}
          >
            <DigestItem
              platform="Slack"
              platformColor="#4A154B"
              project="Marketing Club"
              message="Meeting moved to Thursday 3pm - prepare slide deck"
              badge="Action Required"
              badgeColor="red"
              delay={0.5}
            />
            <DigestItem
              platform="Gmail"
              platformColor="#EA4335"
              project="CS 101"
              message="Assignment submission deadline extended to Friday"
              badge="Due Tomorrow"
              badgeColor="yellow"
              delay={0.6}
            />
            <DigestItem
              platform="GroupMe"
              platformColor="#00AFF0"
              project="Startup Weekend"
              message="Team standup at 10am, don't forget pitch draft"
              badge="FYI"
              badgeColor="gray"
              delay={0.7}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  description,
  icon,
  delay,
  children,
}: {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="flex justify-center mb-4">
        <div
          className="w-20 h-20 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#0EA5E9] flex items-center justify-center font-bold text-white text-3xl"
          style={{
            boxShadow: '0 8px 16px rgba(14, 165, 233, 0.3)',
          }}
        >
          {number}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-[#94A3B8] mb-6 max-w-[300px] mx-auto">{description}</p>
      {children}
    </motion.div>
  );
}

function ToggleOption({ label, enabled, delay }: { label: string; enabled: boolean; delay: number }) {
  return (
    <motion.div
      className="flex items-center justify-between p-3 bg-[#0F172A] border border-[#334155] rounded-lg hover:border-[#38BDF8]/50 transition-colors duration-200"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ x: 5 }}
    >
      <span className="text-[#94A3B8] text-sm">{label}</span>
      <motion.div
        className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
          enabled ? 'bg-[#0EA5E9]' : 'bg-[#334155]'
        }`}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
            enabled ? 'translate-x-6' : 'translate-x-1'
          }`}
          animate={{ rotate: enabled ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <div className="px-3 py-1 bg-[#0EA5E9]/20 text-[#38BDF8] text-xs font-semibold rounded-full border border-[#38BDF8]/30">
      {text}
    </div>
  );
}

function DigestItem({
  platform,
  platformColor,
  project,
  message,
  badge,
  badgeColor,
  delay,
}: {
  platform: string;
  platformColor: string;
  project: string;
  message: string;
  badge: string;
  badgeColor: string;
  delay: number;
}) {
  const badgeColors = {
    red: 'bg-[#EF4444]/20 text-[#EF4444] border-[#EF4444]/30',
    yellow: 'bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/30',
    gray: 'bg-[#64748B]/20 text-[#94A3B8] border-[#64748B]/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className="flex items-center justify-between p-4 bg-[#0F172A] border border-[#334155] rounded-lg hover:border-[#38BDF8] transition-colors duration-200"
    >
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 rounded" style={{ background: platformColor }} />
        <div>
          <div className="text-[#38BDF8] text-sm font-semibold">{project}</div>
          <div className="text-[#94A3B8] text-sm">{message}</div>
        </div>
      </div>
      <div className={`px-3 py-1 rounded text-xs border ${badgeColors[badgeColor as keyof typeof badgeColors]}`}>
        {badge}
      </div>
    </motion.div>
  );
}