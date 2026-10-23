import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaCode, FaLayerGroup, FaCalculator, FaDiscord } from "react-icons/fa6";
import portfolioScreenshot from "../../assets/portfolio_screenshot.png";

export default function ProjectSection() {
    const projects = [
        {
            number: "01",
            label: "UNDER DEVELOPMENT",
            title: "Personal portfolio",
            description: "A home for my work, ideas, and the things I enjoy building for the web.",
            details: "This project is a personal portfolio website built using React and Tailwind CSS. It serves as a showcase for my projects, skills, and experiences in web development. The website features a clean and modern design, responsive layout, and interactive elements to provide an engaging user experience.",
            links: [
                { label: "View source", url: "https://github.com/gyozorobeert/gyozorobeert.github.io" },
            ],
            tags: ["React", "Tailwind CSS", "JavaScript", "Frontend Development", "Portfolio", "Web Design"],
            Icon: FaCode,
            image: portfolioScreenshot,
            imageAlt: "Screenshot of the personal portfolio website",
            visual: "from-cyan-400/25 via-cyan-400/5 to-transparent",
        },
        {
            number: "02",
            label: "DONE",
            title: "C# Calculator",
            description: "A simple calculator application built with C# and Windows Forms, demonstrating basic arithmetic operations and a user-friendly interface.",
            details: "This project showcases my ability to create functional desktop applications using C# and Windows Forms. It includes features such as addition, subtraction, multiplication, and division, along with a clear and intuitive user interface.",
            links: [
                { label: "View source", url: "https://github.com/gyozorobeert/calculator" },
            ],
            tags: ["C#", "Windows Forms", "Desktop Application", "GUI", "Arithmetic Operations"],
            Icon: FaCalculator,
            image: null,
            imageAlt: "",
            visual: "from-violet-400/25 via-violet-400/5 to-transparent",
        },
        {
            number: "03",
            label: "UNDER RECONSIDERATION",
            title: "Robert's Developer Discord Server Bot",
            description: "A Discord bot built with Node.js and Discord.js, designed to enhance server management and provide interactive features for users.",
            details: "This project demonstrates my skills in backend development and API integration. The bot includes features such as moderation commands, user engagement tools, and custom commands to improve the overall experience of the Discord server.",
            links: [
                { label: "View source", url: "https://github.com/gyozorobeert/Roberts-Developer-Community-Discord-Bot" },
                { label: "Join Discord server", url: "https://discord.gg/SqQWMZqVFr" },
            ],
            tags: ["Python", "Discord.py", "Bot Development", "API Integration", "Server Management"],
            Icon: FaDiscord,
            image: null,
            imageAlt: "",
            visual: "from-emerald-400/20 via-emerald-400/5 to-transparent",
        },
    ];
    const [selectedProject, setSelectedProject] = useState(null);
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        const lockedElements = [];

        if (selectedProject && dialog && !dialog.open) {
            dialog.showModal();

            const scrollContainers = new Set([
                document.documentElement,
                document.body,
                document.querySelector("#root > div"),
            ]);
            let ancestor = dialog.parentElement;
            while (ancestor && ancestor !== document.body) {
                const { overflowY } = window.getComputedStyle(ancestor);
                if (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") {
                    scrollContainers.add(ancestor);
                }
                ancestor = ancestor.parentElement;
            }

            scrollContainers.forEach((element) => {
                if (!element) return;
                lockedElements.push({
                    element,
                    overflow: element.style.overflow,
                    scrollTop: element.scrollTop,
                });
                element.style.overflow = "hidden";
            });
        }

        return () => {
            if (dialog?.open) {
                dialog.close();
            }
            lockedElements.forEach(({ element, overflow, scrollTop }) => {
                element.style.overflow = overflow;
                element.scrollTop = scrollTop;
            });
        };
    }, [selectedProject]);

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
                    {projects.map((project) => {
                        const { number, label, title, description, tags, Icon, image, imageAlt, visual } = project;

                        return (
                        <article
                            key={number}
                            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-(--color-text-accent)/60 hover:shadow-[0_0_24px_rgba(0,240,255,0.12)]"
                        >
                            <button
                                type="button"
                                onClick={() => setSelectedProject(project)}
                                aria-haspopup="dialog"
                                aria-label={`View details for ${title}`}
                                className="block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-text-accent)"
                            >
                                <div className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${visual}`}>
                                {image ? (
                                    <>
                                        <img
                                            src={image}
                                            alt={imageAlt || `${title} preview`}
                                            className="absolute inset-0 h-full w-full object-cover"
                                        />
                                        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-black/20" />
                                    </>
                                ) : (
                                    <>
                                        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]" />
                                        <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/20 bg-[#101214]/80 text-(--color-text-accent) shadow-2xl transition-transform duration-300 group-hover:scale-105">
                                            <Icon size={34} aria-hidden="true" />
                                        </div>
                                    </>
                                )}
                                <div className="absolute left-5 top-5 font-mono text-xs tracking-widest text-white/50">
                                    PROJECT_{number}
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
                                    <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50 transition-colors duration-300 group-hover:border-(--color-text-accent)/60 group-hover:bg-(--color-text-accent)/10 group-hover:text-(--color-text-accent)">
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
                            </button>
                        </article>
                        );
                    })}
                </div>
            </div>

            {selectedProject && (
                <dialog
                    ref={dialogRef}
                    aria-labelledby="project-dialog-title"
                    onClick={(event) => {
                        if (event.target === event.currentTarget) {
                            event.currentTarget.close();
                        }
                    }}
                    onClose={() => setSelectedProject(null)}
                    className="fixed inset-0 m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-3xl overscroll-contain overflow-y-auto rounded-2xl border border-white/10 bg-[#17191b] p-0 text-(--color-text-primary) shadow-2xl backdrop:bg-black/75"
                >
                    <div className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br sm:h-72 ${selectedProject.visual}`}>
                        {selectedProject.image ? (
                            <>
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.imageAlt || `${selectedProject.title} preview`}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/20" />
                            </>
                        ) : (
                            <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-white/20 bg-[#101214]/80 text-(--color-text-accent) shadow-2xl">
                                <selectedProject.Icon size={34} aria-hidden="true" />
                            </div>
                        )}
                        <p className="absolute left-6 top-6 font-mono text-xs tracking-widest text-white/70">
                            PROJECT_{selectedProject.number}
                        </p>
                        <button
                            type="button"
                            autoFocus
                            onClick={() => dialogRef.current?.close()}
                            aria-label="Close project details"
                            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xl text-white transition-colors hover:border-(--color-text-accent) hover:bg-(--color-text-accent) hover:text-[#101214] focus-visible:outline-2 focus-visible:outline-(--color-text-accent)"
                        >
                            &times;
                        </button>
                    </div>

                    <div className="p-6 sm:p-9">
                        <p className="font-mono text-sm text-(--color-text-accent)">
                            {selectedProject.label}
                        </p>
                        <h3 id="project-dialog-title" className="mt-2 text-3xl font-bold sm:text-4xl">
                            {selectedProject.title}
                        </h3>
                        <p className="mt-5 text-base leading-7 text-(--color-text-secondary)">
                            {selectedProject.description}
                        </p>
                        {selectedProject.details && (
                            <p className="mt-4 whitespace-pre-line text-base leading-7 text-(--color-text-secondary)">
                                {selectedProject.details}
                            </p>
                        )}

                        <ul className="mt-6 flex flex-wrap gap-2">
                            {selectedProject.tags.map((tag) => (
                                <li
                                    key={tag}
                                    className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-white/60"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>

                        {selectedProject.links.length > 0 && (
                            <div className="mt-8 flex flex-wrap gap-3">
                                {selectedProject.links.map(({ label, url }) => (
                                    <a
                                        key={url}
                                        href={url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-3 rounded-lg bg-(--color-text-accent) px-5 py-3 font-semibold text-[#101214] transition-colors hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-text-accent)"
                                    >
                                        {label}
                                        <FaArrowRight size={14} aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </dialog>
            )}
        </section>
    );
};