// src/components/BlogPost.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogContents = {
  1: {
    title: "Mastering a New Language: Tips and Tricks",
    content: `
      <p>Learning a new language can be both exciting and challenging. Here are some effective strategies to accelerate your progress:</p>
      <ul class="list-disc list-inside">
        <li><strong>Set Clear Goals:</strong> Define what you want to achieve and set realistic milestones.</li>
        <li><strong>Practice Consistently:</strong> Dedicate regular time each day to study and practice.</li>
        <li><strong>Immerse Yourself:</strong> Surround yourself with the language through media, conversations, and reading.</li>
        <li><strong>Use Language Apps:</strong> Leverage tools like Langwa to personalize your learning experience.</li>
      </ul>
      <p>With dedication and the right approach, mastering a new language is within your reach!</p>
    `,
    date: "November 1, 2024",
    readTime: "5 min read",
    imageUrl: "/api/placeholder/600/400",
  },
  2: {
    title: "The Science Behind Language Acquisition",
    content: `
      <p>Understanding how our brain processes new languages can significantly enhance your learning journey. Here's a deep dive into the science of language acquisition:</p>
      <ul class="list-disc list-inside">
        <li><strong>Neuroplasticity:</strong> The brain's ability to reorganize itself by forming new neural connections.</li>
        <li><strong>Memory Retention:</strong> Techniques like spaced repetition improve long-term retention of vocabulary.</li>
        <li><strong>Cognitive Load:</strong> Managing the amount of information processed at once to avoid overload.</li>
        <li><strong>Emotional Connection:</strong> Associating learning with positive emotions enhances motivation and retention.</li>
      </ul>
      <p>By aligning your learning strategies with these scientific principles, you can optimize your language acquisition process.</p>
    `,
    date: "October 28, 2024",
    readTime: "7 min read",
    imageUrl: "/api/placeholder/600/400",
  },
  3: {
    title: "Cultural Immersion: Beyond Words",
    content: `
      <p>True language mastery goes beyond vocabulary and grammar; it involves understanding the cultural context in which the language is used. Here's why cultural immersion is crucial:</p>
      <ul class="list-disc list-inside">
        <li><strong>Contextual Understanding:</strong> Grasping the nuances and idiomatic expressions used in everyday conversations.</li>
        <li><strong>Cultural Norms:</strong> Learning about customs, traditions, and social behaviors that influence language usage.</li>
        <li><strong>Enhanced Communication:</strong> Building rapport and effective communication by respecting cultural differences.</li>
        <li><strong>Motivation and Engagement:</strong> Staying motivated by connecting with the culture and its people.</li>
      </ul>
      <p>Incorporating cultural elements into your language learning journey enriches your experience and leads to genuine fluency.</p>
    `,
    date: "October 25, 2024",
    readTime: "6 min read",
    imageUrl: "/api/placeholder/600/400",
  },
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogContents[id];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">404 - Post Not Found</h2>
          <Link to="/" className="text-purple-600 dark:text-purple-400 hover:underline">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative z-10 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="max-w-3xl mx-auto">
        <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        <h1 className={`text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300`}>{post.title}</h1>
        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-300">
          <p className="mr-4">{post.date}</p>
          <p>{post.readTime}</p>
        </div>
        <div
          className="prose dark:prose-dark max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="mt-8">
          <Link
            to="/"
            className="text-purple-600 dark:text-purple-400 hover:underline transition-colors duration-300"
          >
            &larr; Back to Blog
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPost;

