import React from 'react';
import { motion } from 'framer-motion';

const FeaturesAnimation = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Achievement System',
      description: 'Track your progress with intelligent metrics',
      gradient: 'feature1Gradient',
      delay: 0,
    },
    {
      icon: '📚',
      title: 'Smart Resources',
      description: 'AI-curated learning materials',
      gradient: 'feature2Gradient',
      delay: 0.2,
    },
    {
      icon: '⚡',
      title: 'Focused Practice',
      description: 'Personalized exercises that adapt to you',
      gradient: 'feature3Gradient',
      delay: 0.4,
    }
  ];

  return (
    <div className="w-full bg-gray-900 min-h-[500px]">
      <div className="max-w-7xl mx-auto px-4 py-16 flex items-center justify-between">
        {/* Left side - Animation */}
        <div className="w-1/2">
          <motion.svg
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-lg"
            initial="initial"
            animate="animate"
          >
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </radialGradient>

              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood floodColor="#a855f7" floodOpacity="0.3" />
                <feComposite in2="blur" operator="in" />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background glow */}
            <motion.circle
              cx="200"
              cy="200"
              r="160"
              fill="url(#centerGlow)"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Center circle */}
            <motion.circle
              cx="200"
              cy="200"
              r="60"
              fill="#a855f7"
              filter="url(#glow)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            <motion.text
              x="200"
              y="190"
              textAnchor="middle"
              fill="white"
              fontSize="20"
              fontWeight="bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              SMART
            </motion.text>
            <motion.text
              x="200"
              y="210"
              textAnchor="middle"
              fill="white"
              fontSize="16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              LEARNING
            </motion.text>

            {/* Feature nodes */}
            {features.map((feature, index) => {
              const angle = (index * 2 * Math.PI) / features.length - Math.PI / 2;
              const x = 200 + Math.cos(angle) * 120;
              const y = 200 + Math.sin(angle) * 120;

              return (
                <motion.g
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: feature.delay }}
                >
                  {/* Connection line */}
                  <motion.line
                    x1="200"
                    y1="200"
                    x2={x}
                    y2={y}
                    stroke="#a855f7"
                    strokeWidth="2"
                    strokeDasharray="4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: feature.delay }}
                  />

                  {/* Feature circle */}
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="40"
                    fill="#9333ea"
                    filter="url(#glow)"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />

                  {/* Feature icon */}
                  <text
                    x={x}
                    y={y - 5}
                    textAnchor="middle"
                    fill="white"
                    fontSize="18"
                  >
                    {feature.icon}
                  </text>

                  {/* Feature title */}
                  <text
                    x={x}
                    y={y + 15}
                    textAnchor="middle"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    {feature.title}
                  </text>
                </motion.g>
              );
            })}

            {/* Decorative dots */}
            {[...Array(12)].map((_, i) => (
              <motion.circle
                key={`dot-${i}`}
                r="2"
                fill="#d8b4fe"
                filter="url(#glow)"
                initial={{
                  cx: 200,
                  cy: 200,
                  opacity: 0,
                }}
                animate={{
                  cx: 200 + Math.cos((i * Math.PI) / 6) * 140,
                  cy: 200 + Math.sin((i * Math.PI) / 6) * 140,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </motion.svg>
        </div>

        {/* Right side - Content */}
        <div className="w-1/2 pl-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Intelligent Language Learning
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Experience a revolutionary way to master languages with our AI-powered
              platform. Smart learning adapts to your pace, while focused practice
              ensures rapid progress.
            </p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <motion.li
                  key={feature.title}
                  className="flex items-start space-x-3 text-gray-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: feature.delay + 0.5 }}
                >
                  <span className="text-xl mt-1">{feature.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm">{feature.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
            <motion.button
              className="mt-8 bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Learning Now →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAnimation;
