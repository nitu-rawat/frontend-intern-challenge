"use client";

import { motion } from "framer-motion";
import { BookOpen, Brain, Database } from "lucide-react";

const courses = [
  {
    title: "Advanced React Patterns",
    progress: 75,
    icon: BookOpen,
  },
  {
    title: "Machine Learning",
    progress: 60,
    icon: Brain,
  },
  {
    title: "Data Structures",
    progress: 90,
    icon: Database,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex">
      
      {/* Sidebar */}
      <aside className="hidden md:block w-64 bg-zinc-900 p-6 border-r border-zinc-800">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <nav className="mt-8 space-y-4">
          <p className="cursor-pointer hover:text-blue-400">Home</p>
          <p className="cursor-pointer hover:text-blue-400">Courses</p>
          <p className="cursor-pointer hover:text-blue-400">Profile</p>
        </nav>
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-8">

        {/* Hero Tile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900 rounded-3xl p-8 mb-6 border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-800"
        >
          <h2 className="text-3xl font-bold">
            Welcome Back, Nitu 👋
          </h2>

          <p className="mt-2 text-zinc-400">
            Learning Streak: 12 Days 🔥
          </p>
        </motion.div>

        {/* Activity Tile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-zinc-900 rounded-3xl p-6 mb-6 border border-zinc-800"
        >
          <h3 className="text-xl font-semibold mb-4">
            Weekly Activity
          </h3>

          <div className="flex items-end gap-2 h-32">
            <div className="bg-blue-500 w-6 h-12 rounded"></div>
            <div className="bg-blue-500 w-6 h-20 rounded"></div>
            <div className="bg-blue-500 w-6 h-16 rounded"></div>
            <div className="bg-blue-500 w-6 h-28 rounded"></div>
            <div className="bg-blue-500 w-6 h-24 rounded"></div>
            <div className="bg-blue-500 w-6 h-18 rounded"></div>
          </div>
        </motion.div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800"
              >
                <Icon size={32} className="mb-3 text-blue-400" />

                <h3 className="text-lg font-semibold">
                  {course.title}
                </h3>

                <div className="mt-4 w-full bg-zinc-700 h-3 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1 }}
                    className="bg-blue-500 h-3 rounded-full"
                  />
                </div>

                <p className="mt-3 text-zinc-300">
                  {course.progress}% Complete
                </p>
              </motion.article>
            );
          })}

        </div>

      </section>
    </main>
  );
}
