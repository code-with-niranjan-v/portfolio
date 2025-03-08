import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data";
import { MediaViewer } from "../components/MediaViewer";

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const [selectedMedia, setSelectedMedia] = useState<{
    type: "image" | "video";
    url: string;
  } | null>(null);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 pt-24"
    >
      <div className="container mx-auto max-w-4xl px-6">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-gray-800 mb-6"
        >
          {project.name}
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-8 shadow-lg mb-12"
        >
          <p className="text-xl text-gray-600 mb-8">{project.description}</p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gray-100 rounded-full text-gray-700"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            View on GitHub
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {project.screenshots.map((screenshot, index) => (
            <motion.div
              key={`image-${index}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() =>
                setSelectedMedia({ type: "image", url: screenshot })
              }
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={screenshot}
                alt={`${project.name} Screenshot ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}

          {project.videos?.map((video, index) => (
            <motion.div
              key={`video-${index}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: (project.screenshots.length + index) * 0.1 }}
              className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => setSelectedMedia({ type: "video", url: video })}
              whileHover={{ scale: 1.02 }}
            >
              <video
                src={video}
                className="w-full h-full object-cover"
                preload="metadata"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <MediaViewer
        isOpen={!!selectedMedia}
        onClose={() => setSelectedMedia(null)}
        media={selectedMedia || { type: "image", url: "" }}
      />
    </motion.div>
  );
}
