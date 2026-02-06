'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Code, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface ChatLandingProps {
  submitQuery: (query: string) => void;
}

const ChatLanding: React.FC<ChatLandingProps> = ({
  submitQuery,
}) => {
  // Kullanıcının tıklayabileceği önerilen sorular
  const suggestedQuestions = [
    {
      icon: <MessageSquare className="h-4 w-4" />,
      text: 'Sen kimsin?',
    },
    {
      icon: <Code className="h-4 w-4" />,
      text: 'Hangi projelerde çalıştın?',
    },
    {
      icon: <Award className="h-4 w-4" />,
      text: 'Yeteneklerin neler?',
    },
    {
      icon: <Mail className="h-4 w-4" />,
      text: 'Sana nasıl ulaşabilirim?',
    },
  ];

  // Animation variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className="flex w-full flex-col items-center px-4 py-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
     
    </motion.div>
  );
};

export default ChatLanding;
