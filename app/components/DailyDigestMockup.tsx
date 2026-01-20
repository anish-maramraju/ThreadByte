import { motion } from 'motion/react';
import { Home, MessageSquare, CheckSquare, Search, Settings, Clock, Flag, Calendar } from 'lucide-react';

export function DailyDigestMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[1200px] mx-auto bg-[#0F172A] rounded-2xl overflow-hidden border border-[#334155]"
      style={{
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className="flex h-[700px]">
        {/* Left Sidebar */}
        <div className="w-[240px] bg-[#0F172A] border-r border-[#334155] flex flex-col">
          {/* Logo & User */}
          <div className="p-5 border-b border-[#334155]">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/commcove-logo.png"
                alt="CommCove"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-semibold text-white text-sm">CommCove</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0EA5E9] flex items-center justify-center text-white text-xs font-semibold">
                A
              </div>
              <div className="flex-1">
                <div className="text-white text-xs font-medium">Anish</div>
                <div className="text-[#64748B] text-[10px]">@stanford.edu</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3">
            <NavItem icon={<Home className="w-4 h-4" />} label="Today's Digest" active />
            <NavItem icon={<MessageSquare className="w-4 h-4" />} label="All Messages" />
            <NavItem icon={<CheckSquare className="w-4 h-4" />} label="Action Items" />
            <NavItem icon={<Search className="w-4 h-4" />} label="Search" />
            <NavItem icon={<Settings className="w-4 h-4" />} label="Settings" />
          </nav>

          {/* Connected Accounts */}
          <div className="p-4 border-t border-[#334155]">
            <div className="text-[10px] text-[#64748B] uppercase tracking-wide mb-2">Connected</div>
            <div className="space-y-1.5">
              <PlatformPill name="Slack" color="#4A154B" detail="3 workspaces" />
              <PlatformPill name="Gmail" color="#EA4335" detail="Connected" />
              <PlatformPill name="GroupMe" color="#00AFF0" detail="5 groups" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="p-6 border-b border-[#334155]">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs text-[#64748B]">Wednesday, January 15, 2026 • 8:00 AM</div>
            </div>
            <h2 className="text-xl font-semibold text-white mb-1">Good morning, Anish</h2>
            <p className="text-sm text-[#94A3B8]">You have 12 updates across 3 platforms today</p>
          </div>

          {/* Quick Stats */}
          <div className="p-6 grid grid-cols-3 gap-3">
            <StatCard number="5" label="Action Items" color="#F59E0B" />
            <StatCard number="3" label="Club Updates" color="#3B82F6" />
            <StatCard number="4" label="Emails" color="#EA4335" />
          </div>

          {/* Digest Feed */}
          <div className="px-6 pb-6 space-y-4">
            {/* Priority Section */}
            <SectionHeader icon={<Flag className="w-4 h-4" />} title="Priority" />
            <DigestCard
              platform="Slack"
              platformColor="#4A154B"
              source="Marketing Club"
              message="Hey team! Budget approval deadline is tomorrow EOD. Please review the spreadsheet and vote on the proposal."
              time="2 hours ago"
              badge="Action Required"
              badgeColor="orange"
              delay={0.2}
            />

            {/* Today Section */}
            <SectionHeader icon={<Clock className="w-4 h-4" />} title="Today" />
            <DigestCard
              platform="Gmail"
              platformColor="#EA4335"
              source="CS 101 - Prof. Johnson"
              message="Reminder: Project presentations are next Wednesday. Make sure your team has signed up for a time slot."
              time="4 hours ago"
              badge="Due Next Week"
              badgeColor="blue"
              delay={0.3}
            />
            <DigestCard
              platform="GroupMe"
              platformColor="#00AFF0"
              source="Startup Weekend Team"
              message="Yo we're meeting at the library 6pm tonight to finalize the pitch deck. Don't forget!"
              time="1 hour ago"
              badge="Event Today"
              badgeColor="green"
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function NavItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <motion.div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg mb-1 cursor-pointer transition-colors ${
        active
          ? 'bg-[#0EA5E9]/10 text-white border-l-2 border-[#0EA5E9]'
          : 'text-[#94A3B8] hover:bg-[#1E293B]'
      }`}
      whileHover={{ x: active ? 0 : 3 }}
    >
      <div className={active ? 'text-[#0EA5E9]' : ''}>{icon}</div>
      <span className="text-xs font-medium">{label}</span>
    </motion.div>
  );
}

function PlatformPill({ name, color, detail }: { name: string; color: string; detail: string }) {
  return (
    <div className="flex items-center gap-2 px-2 py-1.5 bg-[#1E293B] rounded-md">
      <div className="w-3 h-3 rounded-sm" style={{ background: color }} />
      <div className="flex-1">
        <div className="text-[10px] text-white font-medium">{name}</div>
        <div className="text-[9px] text-[#64748B]">{detail}</div>
      </div>
    </div>
  );
}

function StatCard({ number, label, color }: { number: string; label: string; color: string }) {
  return (
    <motion.div
      className="bg-[#1E293B] rounded-lg p-3 border border-[#334155]"
      whileHover={{ y: -2, borderColor: color }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-2xl font-bold text-white mb-1">{number}</div>
      <div className="text-[10px] text-[#94A3B8]">{label}</div>
      <div className="w-8 h-1 rounded-full mt-2" style={{ background: color }} />
    </motion.div>
  );
}

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 text-[#94A3B8] mb-2">
      {icon}
      <span className="text-xs font-semibold uppercase tracking-wide">{title}</span>
    </div>
  );
}

function DigestCard({
  platform,
  platformColor,
  source,
  message,
  time,
  badge,
  badgeColor,
  delay,
}: {
  platform: string;
  platformColor: string;
  source: string;
  message: string;
  time: string;
  badge: string;
  badgeColor: string;
  delay: number;
}) {
  const badgeColors = {
    orange: 'bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/30',
    blue: 'bg-[#3B82F6]/20 text-[#3B82F6] border-[#3B82F6]/30',
    green: 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -2, borderColor: platformColor }}
      className="bg-[#1E293B] border border-[#334155] rounded-xl p-4 cursor-pointer transition-all"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded" style={{ background: platformColor }} />
          <span className="text-[10px] font-semibold" style={{ color: platformColor }}>
            {platform}
          </span>
        </div>
        <span className="text-[10px] text-[#64748B]">{time}</span>
      </div>

      {/* Body */}
      <div className="mb-3">
        <div className="text-sm font-semibold text-[#38BDF8] mb-1">{source}</div>
        <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">{message}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className={`px-2 py-1 rounded-md text-[10px] font-medium border ${badgeColors[badgeColor as keyof typeof badgeColors]}`}>
          {badge}
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-[10px] text-[#94A3B8] border border-[#334155] rounded-md hover:border-[#38BDF8] transition-colors">
            View
          </button>
          <button className="px-3 py-1 text-[10px] text-white bg-[#0EA5E9] rounded-md hover:bg-[#38BDF8] transition-colors">
            Reply
          </button>
        </div>
      </div>
    </motion.div>
  );
}
