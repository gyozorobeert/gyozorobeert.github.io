import { FaArrowRight, FaCode, FaLaptopCode, FaScrewdriverWrench } from "react-icons/fa6";

export default function SkillsSection() {
    const skillGroups = [
        {
            title: "Frontend & UI",
            description: "Building responsive interfaces for the web.",
            Icon: FaLaptopCode,
            skills: ["React", "Tailwind CSS", "Responsive design", "UI/UX principles", "Accessibility", "Cross-browser compatibility"],
        },
        {
            title: "Programming",
            description: "Languages and frameworks used across my projects.",
            Icon: FaCode,
            skills: ["C#", ".NET Core", "Python", "Discord.py", "JavaScript", "MySQL", "MSSQL", "Entity Framework Core"],
        },
        {
            title: "Tools & platforms",
            description: "Tools and environments I have worked with.",
            Icon: FaScrewdriverWrench,
            skills: ["GitHub", "Windows Forms", "API integration", "Visual Studio", "Figma", "Linux"],
        },
    ];

    return (
        <section
            id="skills"
            className="relative w-full overflow-hidden bg-(--color-bg) px-6 py-24 text-(--color-text-primary) sm:px-10 lg:px-16"
        >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-(--color-text-accent)/10 blur-3xl" />
                <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl">
                <div className="mb-12 max-w-2xl">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--color-text-accent)/30 bg-(--color-text-accent)/5 px-4 py-2 text-sm text-(--color-text-accent)">
                        <FaCode size={14} aria-hidden="true" />
                        <span>Skills &amp; tools</span>
                    </div>
                    <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                        The tools I use to make
                        <span className="text-(--color-text-accent)"> ideas real.</span>
                    </h2>
                    <p className="mt-5 max-w-xl text-lg leading-8 text-(--color-text-secondary)">
                        A snapshot of the technologies and practices I&apos;ve used in my work and projects.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {skillGroups.map(({ title, description, Icon, skills }) => (
                        <article
                            key={title}
                            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--color-text-accent)/10 text-(--color-text-accent)">
                                <Icon size={19} aria-hidden="true" />
                            </span>
                            <h3 className="mt-5 text-xl font-bold">{title}</h3>
                            <p className="mt-2 min-h-12 text-sm leading-6 text-(--color-text-secondary)">
                                {description}
                            </p>
                            <ul className="mt-5 flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-xs text-white/70"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className="mt-8 grid items-center gap-6 rounded-2xl border border-(--color-text-accent)/20 bg-(--color-text-accent)/[0.04] p-6 sm:p-8 md:grid-cols-[1fr_auto]">
                    <div>
                        <p className="font-mono text-xs tracking-[0.18em] text-(--color-text-accent)">CURRENTLY LEARNING &amp; BUILDING</p>
                        <h3 className="mt-3 text-2xl font-bold">Business Informatics and this portfolio</h3>
                        <p className="mt-3 max-w-3xl leading-7 text-(--color-text-secondary)">
                            I&apos;m continuing my Business Informatics studies while developing this portfolio with React and Tailwind CSS.
                        </p>
                    </div>
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-3 font-semibold text-(--color-text-accent) transition-colors hover:text-white"
                    >
                        Explore my projects
                        <FaArrowRight size={14} aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    );
}
