import { motion } from "framer-motion"

type ItemProps = {
  title: string
  subtitle?: string
  text?: string
}

type Tech = { name: string; icon: string }
type Project = { title: string; description: string; status: "Ongoing" | "Unpublished" | "Published"; link?: string }

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}
const techStack: Tech[] = [
  { name: "React", icon: "/tech/react.png" },
  { name: "Next.js", icon: "/tech/nextjs.png" },
  { name: "TypeScript", icon: "/tech/typescript.png" },
  { name: "JavaScript", icon: "/tech/javascript.png" },
  { name: "Redux", icon: "/tech/redux.png" },
  { name: "Tailwind CSS", icon: "/tech/tailwindcss.png" },
  { name: "HTML", icon: "/tech/html.png" },
  { name: "CSS", icon: "/tech/css.png" },
];



const projects: Project[] = [
  { title: "Zi-Home", description: "A website for online household items", status: "Unpublished"},
  { title: "Hotel Mojan", description: "Frontend almost complete. Backend still under development.", status: "Ongoing" },
  { title: "NikeK", description: "Modern online shoe shop concept with nightwing theme.", status: "Published", link: "https://nike-k.vercel.app" },
]

export default function Content() {
  return (
    <main className="flex-1 p-4 md:p-8">
      <Section title="About Me">
        <p className="text-sm md:text-base leading-relaxed">
          Frontend Developer with 6 months of professional experience and 6 months of internship. Passionate about building scalable products that improve people's lives.
        </p>
      </Section>

      <Section title="Tech Stack">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techStack.map(tech => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-3 border border-slate-700 rounded-lg p-3"
            >
              <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
              <span className="text-sm md:text-base font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section title="Experience">
        <Item title="Frontend Developer Intern" subtitle="6 Months" text="Worked with React and Next.js on real-world projects." />
      </Section>

      <Section title="Projects">
        {projects.map(project => (
          <div key={project.title} className="mb-4">
            <h3 className="font-medium flex items-center gap-2">
              {project.title}
              <span className="text-xs px-2 py-0.5 rounded-full border border-primary text-primary">
                {project.status}
              </span>
            </h3>
            <p className="text-sm md:text-base mb-1">{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-primary hover:underline">
                View Project →
              </a>
            )}
          </div>
        ))}
      </Section>

      <Section title="Education">
        <Item title="Bachelor of Computer Engineering" text="Islamic Azad University, South Tehran Branch" />
      </Section>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-8"
    >
      <h2 className="text-primary text-lg md:text-xl font-semibold border-b border-slate-800 pb-1 mb-3">{title}</h2>
      {children}
    </motion.section>
  )
}

function Item({ title, subtitle, text }: ItemProps) {
  return (
    <div className="mb-4">
      <h3 className="font-medium">{title}</h3>
      {subtitle && <p className="text-xs md:text-sm text-gray-400">{subtitle}</p>}
      {text && <p className="text-sm md:text-base">{text}</p>}
    </div>
  )
}
