"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, Github, Linkedin } from "lucide-react"; // Contact Icons
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiGithub,
  SiPostman,
  SiMysql,
  SiGit,
  SiVercel,
  SiRender,
  SiPython,
  SiCplusplus,
  SiC,
} from "react-icons/si";

export default function Portfolio() {

    const projects = [
    {
      title: "Cyber Chef",
      tech: ["React", "JavaScript"],
      desc: "A fun coding game where players add code 'ingredients' line by line to prepare recipes (tasks).",
      link: "https://github.com/OviyaSenthilk/CyberChef.git",
      deploy: "#",
    },
    {
      title: "Oviya Nursery School Website",
      tech: ["Express", "Tailwind", "React", "JS", "Node.js"],
      desc: "A clean and informative school website highlighting programs, gallery, and contact details.",
      link: "https://github.com/OviyaSenthilk/OviyaSchool.git",
      deploy: "#",
    },
    {
      title: "E-commerce Platform",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      desc: "A fully functional e-commerce platform with authentication, product catalog, cart, and payments.",
      link: "https://github.com/OviyaSenthilk/EFalong.git",
      deploy: "#",
    },
    {
      title: "Portfolio Website",
      tech: ["Next.js", "Tailwind CSS"],
      desc: "A personal portfolio showcasing my journey, projects, and skills.",
      link: "https://github.com/OviyaSenthilk/Portfolio.git",
      deploy: "#",
    },
  ];


  return (
      <div className="bg-gray-50 text-gray-800 relative">
      {/* ================= Home ================= */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center h-[90vh] px-8 gap-12 pt-28"
      >
        {/* Left - Profile Image */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <Image
            src="/profile.jpg"
            alt="Oviya"
            width={280}
            height={280}
            className="rounded-full shadow-lg border-4 border-blue-200"
          />
        </motion.div>

        {/* Right - Intro */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold"
          >
            Hi, I’m Oviya 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-lg max-w-xl"
          >
            Turning ideas into reality with{" "}
            <span className="font-semibold text-blue-600">Java</span>,{" "}
            <span className="font-semibold text-blue-600">Python</span>, and{" "}
            <span className="font-semibold text-blue-600">SQL</span>. Passionate
            about problem solving, full-stack development, and mentoring the next
            generation of coders.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 flex justify-center md:justify-start"
          >
            <a
              href="/Oviya-Kalvium-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            >
              View Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= About ================= */}
      <section id="about" className="min-h-screen px-6 pt-28" >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-8"
          >
            About Me
          </motion.h1>

          <p className="text-lg mb-4 leading-relaxed italic font-[cursive]">
            I’m an enthusiastic developer with a background in{" "}
            <span className="font-semibold">Agricultural Engineering (BE)</span> from
            Sri Shakthi Institute of Engineering and Technology, Coimbatore, and
            currently pursuing{" "}
            <span className="font-semibold">MBA at Bharathiyar University</span>.
          </p>

          <p className="text-lg mb-4 leading-relaxed italic font-[cursive]">
            At <span className="font-semibold text-blue-600">Kalvium</span>, I’ve
            thrived as a <span className="font-semibold">Technical Mentor</span>,
            guiding squads, managing student placements, and fostering a
            collaborative learning culture — sharpening both my leadership and
            technical skills.
          </p>

          <p className="text-lg mb-6 leading-relaxed italic font-[cursive]">
            Skilled in{" "}
            <span className="font-semibold">Java, React, OOP, SQL, DSA</span>, I’ve
            built <span className="text-blue-600">MERN applications</span>,
            console-based projects, and scalable solutions.
          </p>
        </div>
      </section>

      {/* ================= Skills ================= */}
      <section id="skills" className="min-h-screen px-6 pt-38">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-center mb-12"
          >
            My Skills
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Frontend */}
            <SkillCategory title="Frontend" color="text-blue-600">
              <Skill icon={FaHtml5} name="HTML" delay={0.1} color="#E34F26" />
              <Skill icon={FaCss3Alt} name="CSS" delay={0.2} color="#1572B6" />
              <Skill icon={SiJavascript} name="JavaScript" delay={0.3} color="#F7DF1E" />
              <Skill icon={FaReact} name="React" delay={0.4} color="#61DAFB" />
              <Skill icon={SiNextdotjs} name="Next.js" delay={0.5} color="black" />
              <Skill icon={SiTailwindcss} name="Tailwind" delay={0.6} color="#38BDF8" />
            </SkillCategory>

            {/* Backend */}
            <SkillCategory title="Backend" color="text-green-600">
              <Skill icon={FaNodeJs} name="Node.js" delay={0.7} color="#68A063" />
              <Skill icon={SiExpress} name="Express.js" delay={0.8} color="black" />
              <Skill icon={SiMongodb} name="MongoDB" delay={0.9} color="#4DB33D" />
              <Skill icon={FaJava} name="Java" delay={1.0} color="#E76F00" />
              <Skill icon={SiMysql} name="MySQL" delay={1.1} color="#00758F" />
              <Skill icon={SiPython} name="Python" delay={1.2} color="#3776AB" />
              <Skill icon={SiCplusplus} name="C++" delay={1.3} color="#00599C" />
              <Skill icon={SiC} name="C" delay={1.4} color="#A8B9CC" />
            </SkillCategory>

            {/* Tools */}
            <SkillCategory title="Tools & Others" color="text-purple-600">
              <Skill icon={SiGit} name="Git" delay={1.5} color="#F1502F" />
              <Skill icon={SiGithub} name="GitHub" delay={1.6} color="black" />
              <Skill icon={SiPostman} name="Postman" delay={1.7} color="#FF6C37" />
              <Skill icon={SiFigma} name="Figma" delay={1.8} color="#F24E1E" />
              <Skill icon={SiVercel} name="Vercel" delay={1.9} color="black" />
              <Skill icon={SiRender} name="Render" delay={2.0} color="#46E3B7" />
            </SkillCategory>
          </div>
        </div>
      </section>

      {/* ================= Projects ================= */}
      <motion.section
              id="projects"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="py-24 px-6 bg-white min-h-screen "
            >
              <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-black-600 mb-6">My Projects</h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Here are some of my key projects showcasing skills in development,
                  problem solving, and innovation.
                </p>
              </div>

              {/* Projects Grid */}
          <div className="mt-12 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-xl shadow-md text-left hover:shadow-xl transition"
              >
                <h2 className="text-xl font-semibold text-black mb-2">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{project.desc}</p>
                <div className="flex gap-4">
                  {/* GitHub Repo Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
                  >
                    View Project
                  </a>

                  {/* Deployment Button (placeholder) */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
                  >
                    View Deployment
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          </motion.section>
      {/* ================= Contact ================= */}
      <section id="contact" className="min-h-screen px-6 flex flex-col justify-between pt-28">
        <div>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold mb-6"
            >
              Contact Me
            </motion.h1>
            <p className="text-lg max-w-2xl mx-auto">
              Let’s connect! You can reach me directly or explore my work on GitHub
              and LinkedIn.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid gap-6 max-w-3xl mx-auto">
            <ContactCard
              icon={<Mail className="text-blue-600" />}
              text="oviya.s2604@gmail.com"
              link="mailto:oviya.s2604@gmail.com"
            />
            <ContactCard
              icon={<Phone className="text-green-600" />}
              text="+91 7904133213"
            />
            <ContactCard
              icon={<Github className="text-gray-600" />}
              text="github.com/OviyaSenthilk"
              link="https://github.com/OviyaSenthilk"
            />
            <ContactCard
              icon={<Linkedin className="text-blue-700" />}
              text="linkedin.com/in/oviya2604"
              link="https://linkedin.com/in/oviya2604"
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-600 text-gray-300 py-6 mt-16 rounded-t-xl">
          <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Oviya | Built with{" "}
              <span className="text-blue-400">Next.js</span> &{" "}
              <span className="text-green-400">Tailwind CSS</span>
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="https://github.com/OviyaSenthilk" target="_blank">GitHub</a>
              <a href="https://linkedin.com/in/oviya2604" target="_blank">LinkedIn</a>
              <a href="mailto:oviya.s2604@gmail.com">Email</a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}

/* 🔹 Reusable Components */
function SkillCategory({ title, color, children }) {
  return (
    <div>
      <h3 className={`text-xl font-semibold ${color} mb-6 text-center`}>{title}</h3>
      <div className="flex flex-wrap justify-center gap-8">{children}</div>
    </div>
  );
}

function Skill({ icon: Icon, name, delay, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="text-center flex flex-col items-center"
    >
      <Icon size={50} color={color} />
      <p className="mt-2 text-sm">{name}</p>
    </motion.div>
  );
}

function ContactCard({ icon, text, link }) {
  return (
    <motion.a
      href={link || "#"}
      target={link ? "_blank" : ""}
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition"
    >
      {icon}
      <span className="text-gray-700">{text}</span>
    </motion.a>
  );
}
