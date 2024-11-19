import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import * as THREE from 'three';

const blogContents = {
  1: {
    title: "Mastering a New Language: Tips and Tricks",
    summary: "Discover effective strategies and proven methods to accelerate your language learning journey.",
    content: `
      <div class="prose prose-lg prose-purple dark:prose-invert max-w-none">
        <p class="lead">Learning a new language can be both exciting and challenging. Here are some effective strategies to accelerate your progress and make your learning journey more enjoyable and successful.</p>
        
        <h2>Key Strategies for Success</h2>
        <ul class="list-disc list-inside space-y-3">
          <li>
            <strong>Set Clear Goals:</strong> Define what you want to achieve and set realistic milestones.
            <p class="ml-6">Break down your language learning journey into manageable chunks and celebrate small victories along the way.</p>
          </li>
          <li>
            <strong>Practice Consistently:</strong> Dedicate regular time each day to study and practice.
            <p class="ml-6">Even 15-20 minutes of focused practice daily is better than irregular longer sessions.</p>
          </li>
          <li>
            <strong>Immerse Yourself:</strong> Surround yourself with the language through media, conversations, and reading.
            <p class="ml-6">Watch movies, listen to podcasts, and read books in your target language to improve comprehension.</p>
          </li>
          <li>
            <strong>Use Language Apps:</strong> Leverage tools like Langwa to personalize your learning experience.
            <p class="ml-6">Modern language learning apps use AI to adapt to your learning style and pace.</p>
          </li>
        </ul>

        <h2>The Role of Active Learning</h2>
        <p>Active learning involves engaging with the language in meaningful ways rather than passive memorization. Here are some effective active learning techniques:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Speaking practice with language exchange partners</li>
          <li>Writing journal entries in your target language</li>
          <li>Recording yourself speaking and analyzing your pronunciation</li>
          <li>Teaching concepts you've learned to others</li>
        </ul>

        <blockquote>
          "The limits of my language mean the limits of my world." - Ludwig Wittgenstein
        </blockquote>

        <h2>Creating a Sustainable Practice Routine</h2>
        <p>Success in language learning comes from consistent, deliberate practice. Here's a suggested weekly routine:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Monday-Friday: 30 minutes of structured learning</li>
          <li>Saturday: 1 hour of conversation practice</li>
          <li>Sunday: Review and planning for the next week</li>
        </ul>

        <p class="text-xl font-semibold mt-8">Remember: Every expert was once a beginner. With dedication and the right approach, mastering a new language is within your reach!</p>
      </div>
    `,
    author: {
      name: "Sarah Johnson",
      role: "Language Learning Expert",
      avatar: "https://i.pravatar.cc/100"
    },
    date: "November 1, 2024",
    readTime: "5 min read",
    imageUrl: "https://picsum.photos/1200/600",
    tags: ["Language Learning", "Education", "Self Improvement"],
    category: "Learning Strategies"
  },
  // Add other blog posts...
};

const ShareButton = ({ icon: Icon, label, onClick, className }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`p-2 rounded-full flex items-center space-x-2 ${className}`}
    onClick={onClick}
  >
    <Icon className="w-5 h-5" />
    <span className="hidden md:inline">{label}</span>
  </motion.button>
);

const BlogPost = () => {
  const { id } = useParams();
  const post = blogContents[id];
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const canvasRef = useRef(null);
  const threeSceneRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkTheme(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    if (!isDarkTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Three.js background setup (same as before)
  useEffect(() => {
    if (canvasRef.current && !threeSceneRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ 
        canvas: canvasRef.current, 
        alpha: true,
        antialias: true,
      });

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = window.innerWidth < 768 ? 200 : 500;
      const positions = new Float32Array(particlesCount * 3);

      for (let i = 0; i < particlesCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 100;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        color: isDarkTheme ? 0xcccccc : 0x6a0dad,
        size: 0.5,
        sizeAttenuation: true,
      });

      const particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      camera.position.z = 50;

      const animate = () => {
        requestAnimationFrame(animate);
        particles.rotation.y += 0.0005;
        renderer.render(scene, camera);
      };

      animate();

      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        renderer.dispose();
      };
    }
  }, [isDarkTheme]);

  if (!post) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDarkTheme ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-purple-50 to-white'}`}>
        <div className="text-center">
          <h2 className={`text-3xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-4`}>
            404 - Post Not Found
          </h2>
          <Link 
            to="/"
            className={`text-purple-600 dark:text-purple-400 hover:underline inline-flex items-center`}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this article: ${post.title}`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`);
        break;
      default:
        navigator.clipboard.writeText(url);
    }
  };

  return (
    <div className={`min-h-screen ${isDarkTheme ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-purple-50 to-white'} overflow-x-hidden`}>
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? `${isDarkTheme ? 'bg-gray-900/90' : 'bg-white/90'} shadow-lg backdrop-blur-lg` 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              to="/"
              className="flex items-center space-x-2 group"
            >
              <ArrowLeft className={`w-5 h-5 ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} group-hover:transform group-hover:-translate-x-1 transition-transform`} />
              <span className={`text-lg font-bold ${isDarkTheme ? 'text-purple-400' : 'text-purple-700'}`}>
                Back to Blog
              </span>
            </Link>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-sm px-3 py-1 rounded-full ${
                      isDarkTheme 
                        ? 'bg-gray-800 text-gray-300' 
                        : 'bg-purple-100 text-purple-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${
                  isDarkTheme 
                    ? 'bg-gray-800 text-yellow-400' 
                    : 'bg-purple-100 text-purple-700'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {isDarkTheme ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <h1 className={`text-4xl md:text-5xl font-bold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-6`}>
              {post.title}
            </h1>

            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className={`flex items-center ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                <Calendar className="w-5 h-5 mr-2" />
                {post.date}
              </div>
              <div className={`flex items-center ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                <Clock className="w-5 h-5 mr-2" />
                {post.readTime}
              </div>
              <div className={`flex items-center ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}>
                <span className="text-sm px-3 py-1 rounded-full bg-purple-100 dark:bg-gray-800">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Author info */}
            <div className="flex items-center mb-8">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className={`font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'}`}>
                  {post.author.name}
                </h3>
                <p className={`text-sm ${isDarkTheme ? 'text-gray-400' : 'text-gray-600'}`}>
                  {post.author.role}
                </p>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative rounded-xl overflow-hidden mb-8">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Summary */}
            <p className={`text-xl ${isDarkTheme ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              {post.summary}
            </p>
          </header>

          {/* Content */}
          <div
            className={`${isDarkTheme ? 'text-gray-300' : 'text-gray-600'}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share buttons */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
            <h3 className={`text-lg font-semibold ${isDarkTheme ? 'text-white' : 'text-gray-900'} mb-4`}>
                Share this article
              </h3>
              <div className="flex items-center space-x-4">
                <ShareButton
                  icon={Facebook}
                  label="Facebook"
                  onClick={() => handleShare('facebook')}
                  className={`${isDarkTheme ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-600'}`}
                />
                <ShareButton
                  icon={Twitter}
                  label="Twitter"
                  onClick={() => handleShare('twitter')}
                  className={`${isDarkTheme ? 'bg-gray-800 text-sky-400' : 'bg-sky-100 text-sky-600'}`}
                />
                <ShareButton
                  icon={Linkedin}
                  label="LinkedIn"
                  onClick={() => handleShare('linkedin')}
                  className={`${isDarkTheme ? 'bg-gray-800 text-blue-400' : 'bg-blue-100 text-blue-600'}`}
                />
                <ShareButton
                  icon={Share2}
                  label="Copy Link"
                  onClick={() => handleShare('copy')}
                  className={`${isDarkTheme ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
                />
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`text-sm px-3 py-1 rounded-full ${
                    isDarkTheme 
                      ? 'bg-gray-800 text-gray-300' 
                      : 'bg-purple-100 text-purple-700'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </main>

      {/* Related Articles - You can add this section if needed */}
    </div>
  );
};

export default BlogPost;
