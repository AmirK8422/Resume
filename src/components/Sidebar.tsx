type SectionProps = {
  title: string;
  children: React.ReactNode;
};

type SocialLink = {
  label: string;
  url: string;
};

const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    url: "https://github.com/AmirK8422",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/amir-khorramdel-avval-826b94377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    label: "Telegram",
    url: "https://t.me/RoyaleBurger",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-full md:w-[320px] p-6 border-r border-slate-800 bg-dark light:bg-white">
      <div className="text-center md:text-left mb-8">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 mx-auto md:mx-0 rounded-full border-4 border-primary object-cover"
        />
        <h1 className="mt-4 text-lg md:text-xl font-semibold">
          Amir Khorramdel Avval
        </h1>
        <p className="text-primary text-sm md:text-base">Frontend Developer</p>
      </div>

      <Section title="Contact">
        <p>📞 +98 991-232-7476</p>
        <p>📧 amirkhoramdelaval@gmail.com</p>
        <p>📍 Tehran, Iran</p>
      </Section>

      <Section title="Social">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm md:text-base text-primary hover:underline">
            {link.label}
          </a>
        ))}
      </Section>

      <Section title="Soft Skills">
        <div className="flex flex-wrap gap-2">
          {[
            "Adaptability",
            "Communication",
            "Problem Solving",
            "Teamwork",
            "Time Management",
            "Creative Thinking",
          ].map((skill) => (
            <span
              key={skill}
              className="border border-primary px-2 py-1 text-xs md:text-sm rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </Section>
    </aside>
  );
}

function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-6">
      <h2 className="text-primary font-semibold mb-2">{title}</h2>
      <div className="text-sm md:text-base space-y-1">{children}</div>
    </div>
  );
}
