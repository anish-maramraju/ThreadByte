import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

export function ProblemSolutionSection() {
  return (
    <section className="relative py-20 bg-[#0F172A] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-[#EF4444] opacity-5 blur-[120px] rounded-full"
          animate={{ x: ['-20%', '20%', '-20%'], y: ['0%', '30%', '0%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-[#10B981] opacity-5 blur-[120px] rounded-full"
          animate={{ x: ['20%', '-20%', '20%'], y: ['0%', '30%', '0%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ top: '20%', right: '10%' }}
        />
      </div>
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* The Problem - Right Aligned */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-right order-1 md:order-1"
          >
            <motion.div 
              className="mb-4 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-xs font-bold uppercase text-[#EF4444] tracking-wider">THE PROBLEM</span>
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Communication chaos is killing your productivity
            </motion.h2>
            <div className="space-y-4">
              <PainPoint text="Checking 5+ apps just to stay updated" delay={0.4} />
              <PainPoint text="Critical messages buried in platform noise" delay={0.5} />
              <PainPoint text="Action items lost in endless threads" delay={0.6} />
              <PainPoint text="No cross-platform context" delay={0.7} />
            </div>
          </motion.div>

          {/* Visual Divider - Glowing Line */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[80%]">
            <motion.div 
              className="w-full h-full bg-gradient-to-b from-transparent via-[#38BDF8] to-transparent"
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 0.5, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#38BDF8]"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* The Solution - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 md:order-2"
          >
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-xs font-bold uppercase text-[#10B981] tracking-wider">THE SOLUTION</span>
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              One intelligent digest. Every morning.
            </motion.h2>
            <div className="space-y-4">
              <Benefit text="Unified view across all platforms" delay={0.4} />
              <Benefit text="AI identifies what matters to you" delay={0.5} />
              <Benefit text="Never miss action items" delay={0.6} />
              <Benefit text="Cross-platform semantic search" delay={0.7} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PainPoint({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.div 
      className="flex items-center gap-3 justify-end group"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <p className="text-[#CBD5E1] leading-relaxed">{text}</p>
      <motion.div 
        className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EF4444]/10 flex items-center justify-center border border-[#EF4444]/20"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(239, 68, 68, 0.15)' }}
        transition={{ duration: 0.2 }}
      >
        <X className="w-4 h-4 text-[#EF4444]" strokeWidth={2.5} />
      </motion.div>
    </motion.div>
  );
}

function Benefit({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.div 
      className="flex items-center gap-3 group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div 
        className="flex-shrink-0 w-8 h-8 rounded-full bg-[#10B981]/10 flex items-center justify-center border border-[#10B981]/20"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(16, 185, 129, 0.15)' }}
        transition={{ duration: 0.2 }}
      >
        <Check className="w-4 h-4 text-[#10B981]" strokeWidth={2.5} />
      </motion.div>
      <p className="text-[#CBD5E1] leading-relaxed">{text}</p>
    </motion.div>
  );
}