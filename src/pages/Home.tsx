import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { techStacks, projects } from "../data";
import { ProjectCard } from "../components/ProjectCard";

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/30 backdrop-blur-3xl"
              style={{
                width: Math.random() * 400 + 200,
                height: Math.random() * 400 + 200,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, 30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-64 h-64 rounded-full overflow-hidden shadow-xl"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQGWdWKs74IXUQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1666355049808?e=1746662400&v=beta&t=nCE65N3p9g2-918aE5cTEBqPuu0C3p7rY0xbkQSXsLc"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              >
                Hi, I'm Niranjan V
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-gray-600 mb-8"
              >
                I am a curious and adaptable individual passionate about
                technology and innovation. With expertise in Android development
                (Kotlin, MVVM, Retrofit, Room, Firebase) and full-stack web
                development using the MERN stack, I enjoy building efficient,
                scalable applications. My strong communication skills help me
                collaborate effectively and bring ideas to life. Always eager to
                learn, I embrace new challenges and strive to create impactful
                solutions
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex gap-6 justify-center md:justify-start"
              >
                {[
                  {
                    href: "https://github.com/code-with-niranjan-v",
                    icon: Github,
                  },
                  {
                    href: "https://www.linkedin.com/in/niranjan-vinayagarathinam/",
                    icon: Linkedin,
                  },
                  { href: "mailto:niranjanv1004@gmail.com", icon: Mail },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Technical Skills
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {techStacks.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-6">{stack.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {stack.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-gray-50 rounded-full text-gray-700 shadow-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
