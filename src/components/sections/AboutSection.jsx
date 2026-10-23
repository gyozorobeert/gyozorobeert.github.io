import {
    FaArrowRight,
    FaBriefcase,
    FaCode,
    FaGraduationCap,
    FaLightbulb,
    FaPalette,
} from "react-icons/fa6";

export default function AboutSection() {
    const education = [
        {
            period: "2025 - Present",
            title: "Business Informatics Engineer (BSc)",
            subtitle: "Óbuda University",
            description: "Currently pursuing a degree in Business Informatics Engineering, focusing on the intersection of technology and business processes.",
        },
        {
            period: "2019 - 2023",
            title: "IT Systems and Applications Operations Technician",
            subtitle: "István Széchenyi Technical School and College of Nyíregyháza Vocational Training Center",
            description: "Completed a comprehensive program in IT systems and applications operations, gaining hands-on experience in managing and maintaining IT infrastructures.",
        }
    ];
    const workExperience = [
        {
            period: "Autumn 2026",
            title: "Front-End Developer",
            subtitle: "Freelance",
            description: "Created this portfolio website to showcase my skills and projects. Focused on front-end development, responsive design, and user experience.",
        },
        {
            period: "2024 - Present",
            title: "Junior Full-Stack Developer",
            subtitle: "Hungarian Defense Forces",
            description: "Working as a Junior Full-Stack Developer, contributing to the development and maintenance of web applications, and collaborating with cross-functional teams to deliver high-quality software solutions.",
        },
        {
            period: "Summer 2022",
            title: "Front-End Developer Intern / Erasmus+ Trainee",
            subtitle: "Braga",
            description: "Participated in an internship program in Braga, focusing on front-end development. Gained practical experience in building responsive web interfaces and enhancing user experiences through modern web technologies.",
        }
    ];

    const interests = [
        {
            title: "Development",
            description: "Building thoughtful, responsive experiences for the web.",
            Icon: FaCode,
        },
        {
            title: "Design",
            description: "Making interfaces feel clear, considered, and easy to use.",
            Icon: FaPalette,
        },
        {
            title: "Curiosity",
            description: "Learning continuously and finding better ways to make ideas real.",
            Icon: FaLightbulb,
        },
    ];

    return (
        <section
            id="about"
            className="relative flex min-h-screen w-full items-center overflow-hidden bg-(--color-bg-inverse) px-6 py-24 text-(--color-text-inverse-primary) sm:px-10 lg:px-16"
        >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-(--color-text-accent-inverse)/10 blur-3xl" />
                <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.12)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
            </div>

            <div className="relative mx-auto w-full max-w-7xl">
                <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-(--color-text-inverse-primary)/10 bg-white/60 px-4 py-2 text-sm text-(--color-text-inverse-secondary)">
                            <FaCode className="text-cyan-700" size={14} aria-hidden="true" />
                            <span>A little about me</span>
                        </div>

                        <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            I turn curious ideas into
                            <span className="text-cyan-700"> useful experiences.</span>
                        </h2>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-(--color-text-inverse-secondary)">
                            I&apos;m Győző Róbert, a passionate developer with an interest in web
                            development and design. I enjoy bringing the two together to create
                            websites that look considered and work beautifully.
                        </p>

                        <a
                            href="#projects"
                            className="mt-8 inline-flex items-center gap-3 font-semibold text-cyan-800 transition-colors hover:text-cyan-600"
                        >
                            See what I&apos;ve been working on
                            <FaArrowRight size={14} aria-hidden="true" />
                        </a>
                    </div>

                    <div className="relative mx-auto w-full max-w-lg">
                        <div aria-hidden="true" className="absolute -inset-4 rounded-3xl bg-cyan-500/10 blur-2xl" />
                        <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-[#17191b] p-6 text-white shadow-2xl shadow-black/20 sm:p-8">
                            <div className="flex items-center justify-between border-b border-white/10 pb-5">
                                <span className="font-mono text-xs text-white/45">the_approach.txt</span>
                                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 font-mono text-xs text-cyan-200">
                                    IN PROGRESS
                                </span>
                            </div>

                            <div className="py-7">
                                <p className="font-mono text-sm text-white/40">{"//"} What matters</p>
                                <p className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl">
                                    Good work lives at the intersection of
                                    <span className="text-cyan-300"> clarity</span> and
                                    <span className="text-cyan-300"> craft.</span>
                                </p>
                            </div>

                            <ul className="space-y-3">
                                {interests.map(({ title, description, Icon }, index) => (
                                    <li
                                        key={title}
                                        className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                                    >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300">
                                            <Icon size={17} aria-hidden="true" />
                                        </span>
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-xs text-white/35">0{index + 1}</span>
                                                <h3 className="font-semibold">{title}</h3>
                                            </div>
                                            <p className="mt-1 text-sm leading-6 text-white/55">{description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="animate-gentle-float absolute -bottom-5 -left-4 hidden rounded-xl border border-black/10 bg-white px-4 py-3 shadow-xl sm:block">
                            <p className="font-mono text-xs text-(--color-text-inverse-secondary)">{"<"} make it matter /{">"}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-24">
                    <div className="mb-10 max-w-2xl">
                        <p className="font-mono text-xs tracking-[0.2em] text-cyan-800">THE JOURNEY</p>
                        <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            A little more about <span className="text-cyan-700">my path.</span>
                        </h3>
                        <p className="mt-4 leading-7 text-(--color-text-inverse-secondary)">
                            The places I&apos;ve learned, the work I&apos;ve done, and what came next.
                        </p>
                    </div>

                    <div className="grid items-start gap-8 md:grid-cols-2">
                        {[
                            {
                                title: "Education",
                                eyebrow: "LEARNING",
                                Icon: FaGraduationCap,
                                entries: education,
                                emptyMessage: "Education details coming soon.",
                            },
                            {
                                title: "Work experience",
                                eyebrow: "EXPERIENCE",
                                Icon: FaBriefcase,
                                entries: workExperience,
                                emptyMessage: "Work experience details coming soon.",
                            },
                        ].map(({ title, eyebrow, Icon, entries, emptyMessage }) => (
                            <section
                                key={title}
                                aria-label={title}
                                className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-sm sm:p-8"
                            >
                                <div className="flex items-center gap-4 border-b border-black/10 pb-5">
                                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-700/10 text-cyan-800">
                                        <Icon size={19} aria-hidden="true" />
                                    </span>
                                    <div>
                                        <p className="font-mono text-xs tracking-[0.18em] text-black/45">{eyebrow}</p>
                                        <h4 className="mt-1 text-2xl font-bold">{title}</h4>
                                    </div>
                                </div>

                                <ol className="mt-6 space-y-6">
                                    {entries.length > 0 ? entries.map(({ period, title: entryTitle, subtitle, description }) => (
                                        <li key={`${period}-${entryTitle}`} className="relative border-l border-cyan-700/30 pb-1 pl-6 last:border-l-transparent">
                                            <span aria-hidden="true" className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-cyan-700 ring-4 ring-white" />
                                            <p className="font-mono text-sm text-cyan-800">{period}</p>
                                            <h5 className="mt-2 text-lg font-semibold">{entryTitle}</h5>
                                            <p className="mt-1 text-base text-(--color-text-inverse-secondary)">{subtitle}</p>
                                            {description && (
                                                <p className="mt-3 text-base leading-7 text-black/60">{description}</p>
                                            )}
                                        </li>
                                    )) : (
                                        <li className="relative border-l border-cyan-700/30 py-1 pl-6">
                                            <span aria-hidden="true" className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-cyan-700 ring-4 ring-white" />
                                            <p className="text-base leading-7 text-black/55">{emptyMessage}</p>
                                        </li>
                                    )}
                                </ol>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};