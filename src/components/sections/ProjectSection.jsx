import { FaArrowRight, FaCode, FaLayerGroup, FaWandMagicSparkles } from "react-icons/fa6";

export default function ProjectSection() {
    const projects = [
        {
            number: "01",
            label: "CURRENT BUILD",
            title: "Personal portfolio",
            description: "A home for my work, ideas, and the things I enjoy building for the web.",
            tags: ["React", "Tailwind CSS"],
            Icon: FaCode,
            visual: "from-cyan-400/25 via-cyan-400/5 to-transparent",
        },
        {
            number: "02",
            label: "IN THE WORKSHOP",
            title: "Interface explorations",
            description: "Trying out layouts, details, and interactions that make digital products feel good.",
            tags: ["UI design", "Experiments"],
            Icon: FaWandMagicSparkles,
            visual: "from-violet-400/25 via-violet-400/5 to-transparent",
        },
        {
            number: "03",
            label: "UP NEXT",
            title: "More on the way",
            description: "I’m always exploring new ideas. Check back as I add more projects here.",
            tags: ["Learning", "Building"],
            Icon: FaLayerGroup,
            visual: "from-emerald-400/20 via-emerald-400/5 to-transparent",
        },
    ];

    return (
        <section
            id="projects"
            className="relative flex min-h-screen w-full items-center overflow-hidden bg-(--color-bg) px-6 py-24 text-(--color-text-primary) sm:px-10 lg:px-16"
        >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-(--color-text-accent)/10 blur-3xl" />
                <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl">
                <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--color-text-accent)/30 bg-(--color-text-accent)/5 px-4 py-2 text-sm text-(--color-text-accent)">
                            <FaLayerGroup size={14} aria-hidden="true" />
                            <span>A selection of what I do</span>
                        </div>
                        <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Ideas, meet <span className="text-(--color-text-accent)">execution.</span>
                        </h2>
                        <p className="mt-5 max-w-xl text-lg leading-8 text-(--color-text-secondary)">
                            A few things I&apos;m making, exploring, and learning along the way.
                        </p>
                    </div>
                    <a
                        href="#contact"
                        className="inline-flex shrink-0 items-center gap-3 self-start rounded-lg border border-white/20 px-5 py-3 font-semibold transition-colors hover:border-(--color-text-accent) hover:text-(--color-text-accent) md:self-auto"
                    >
                        Have an idea?
                        <FaArrowRight size={14} aria-hidden="true" />
                    </a>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map(({ number, label, title, description, tags, Icon, visual }) => (
                        <article
                            key={number}
                            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-transform duration-300 hover:-translate-y-1 hover:border-white/20"
                        >
                            <div className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${visual}`}>
                                <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />
                                <div className="absolute left-5 top-5 font-mono text-xs tracking-widest text-white/50">
                                    PROJECT_{number}
                                </div>
                                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/20 bg-[#101214]/80 text-(--color-text-accent) shadow-2xl transition-transform duration-300 group-hover:scale-105">
                                    <Icon size={34} aria-hidden="true" />
                                </div>
                                <span className="absolute bottom-5 right-5 font-mono text-xs text-white/50">
                                    {label}
                                </span>
                            </div>

                            <div className="p-6 sm:p-7">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="font-mono text-xs text-(--color-text-accent)">{number} / 03</p>
                                        <h3 className="mt-2 text-xl font-bold">{title}</h3>
                                    </div>
                                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50">
                                        <FaArrowRight size={13} aria-hidden="true" />
                                    </span>
                                </div>
                                <p className="mt-3 min-h-12 text-sm leading-6 text-(--color-text-secondary)">
                                    {description}
                                </p>
                                <ul className="mt-5 flex flex-wrap gap-2">
                                    {tags.map((tag) => (
                                        <li
                                            key={tag}
                                            className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-white/60"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};