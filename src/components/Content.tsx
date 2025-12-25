import { motion } from "framer-motion";

type Tech = {
  name: string;
  icon: string;
};

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

type ItemProps = {
  title: string;
  subtitle?: string;
  text?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Content() {
  return (
    <main className="flex-1 p-8">
      <Section title="About Me">
        <p className="text-sm leading-relaxed">
          Frontend Developer with 6 months of professional experience and 6
          months of internship. Passionate about building scalable products that
          improve people's lives.
        </p>
      </Section>

      <Section title="Tech Stack">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex items-center gap-3
        border border-slate-700 rounded-lg p-3
        hover:border-primary transition">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 object-contain"
              />
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Experience">
        <Item
          title="Frontend Developer Intern"
          subtitle="6 Months"
          text="Worked with React and Next.js on real-world projects."
        />
      </Section>

      <Section title="Projects">
        <Item title="Zi-home (Unpublished)" />
        <Item title="Hotel Mojan (Ongoing)" />

        <a
          href="https://nike-k.vercel.app"
          target="_blank"
          className="text-primary">
          NikeK
        </a>
      </Section>

      <Section title="Education">
        <Item
          title="Bachelor of Computer Engineering"
          text="Islamic Azad University, South Tehran Branch"
        />
      </Section>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mb-8">
      <h2
        className="text-primary text-lg font-semibold
        border-b border-slate-800 pb-1 mb-3">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function Item({ title, subtitle, text }: ItemProps) {
  return (
    <div className="mb-4">
      <h3 className="font-medium">{title}</h3>
      {subtitle && <p className="text-xs text-gray-400">{subtitle}</p>}
      {text && <p className="text-sm">{text}</p>}
    </div>
  );
}
