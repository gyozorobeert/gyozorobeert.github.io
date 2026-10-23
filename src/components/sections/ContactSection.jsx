import { FaArrowRight, FaDiscord, FaFacebook, FaGithub, FaInstagram, FaPaperPlane } from "react-icons/fa6";

export default function ContactSection() {
    const contactLinks = [
        {
            label: "Discord",
            detail: "Join the community",
            href: "https://discord.gg/TyYtwgKpez",
            Icon: FaDiscord,
        },
        {
            label: "Instagram",
            detail: "Follow along",
            href: "https://www.instagram.com/gyozorobeert/",
            Icon: FaInstagram,
        },
        {
            label: "GitHub",
            detail: "Explore my code",
            href: "https://github.com/gyozorobeert",
            Icon: FaGithub,
        },
        {
            label: "Facebook",
            detail: "Connect with me",
            href: "https://www.facebook.com/profile.php?id=100093204785817",
            Icon: FaFacebook,
        },
    ];

    return (
        <section
            id="contact"
            className="relative flex min-h-screen w-full items-center overflow-hidden bg-(--color-bg-inverse) px-6 py-24 text-(--color-text-inverse-primary) sm:px-10 lg:px-16"
        >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-(--color-text-accent-inverse)/10 blur-3xl" />
                <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(0,0,0,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.12)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
            </div>

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
                <div className="max-w-2xl">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm text-(--color-text-inverse-secondary)">
                        <FaPaperPlane className="text-cyan-700" size={14} aria-hidden="true" />
                        <span>Let&apos;s connect</span>
                    </div>

                    <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Have a thought?
                        <br />
                        <span className="text-cyan-700">Let&apos;s talk.</span>
                    </h2>

                    <p className="mt-7 max-w-xl text-lg leading-8 text-(--color-text-inverse-secondary)">
                        Whether you want to talk about a project, share an idea, or just say hello,
                        I&apos;d be happy to hear from you. Find me on one of these channels.
                    </p>

                    <a
                        href="https://discord.gg/TyYtwgKpez"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-9 inline-flex items-center justify-center gap-3 rounded-lg bg-[#5865f2] px-6 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
                    >
                        <FaDiscord size={18} aria-hidden="true" />
                        Say hello on Discord
                        <FaArrowRight size={14} aria-hidden="true" />
                    </a>

                    <p className="mt-5 font-mono text-xs text-(--color-text-inverse-secondary)">
                        {"//"} Good conversations start with hello.
                    </p>
                </div>

                <div className="relative mx-auto w-full max-w-lg">
                    <div aria-hidden="true" className="absolute -inset-4 rounded-3xl bg-cyan-500/10 blur-2xl" />
                    <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-[#17191b] p-6 text-white shadow-2xl shadow-black/20 sm:p-8">
                        <div className="flex items-center justify-between border-b border-white/10 pb-5">
                            <div>
                                <p className="font-mono text-xs text-white/40">connection_options</p>
                                <h3 className="mt-1 text-lg font-semibold">Find me online</h3>
                            </div>
                            <span className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 font-mono text-xs text-emerald-200">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                                SOCIALS
                            </span>
                        </div>

                        <ul className="mt-5 space-y-3">
                            {contactLinks.map(({ label, detail, href, onClick, Icon }) => {
                                const content = (
                                    <>
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-300 transition-colors group-hover:bg-cyan-300/20">
                                            <Icon size={19} aria-hidden="true" />
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span className="block font-semibold">{label}</span>
                                            <span className="mt-1 block text-sm text-white/50">{detail}</span>
                                        </span>
                                        <FaArrowRight
                                            className="shrink-0 text-white/35 transition-all group-hover:translate-x-1 group-hover:text-cyan-300"
                                            size={14}
                                            aria-hidden="true"
                                        />
                                    </>
                                );
                                const className = "group flex w-full items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left transition-colors hover:border-cyan-300/40 hover:bg-white/[0.06]";

                                return (
                                    <li key={label}>
                                        {href ? (
                                            <a href={href} target="_blank" rel="noreferrer" className={className}>
                                                {content}
                                            </a>
                                        ) : (
                                            <button type="button" onClick={onClick} className={className}>
                                                {content}
                                            </button>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-6 border-t border-white/10 pt-5 font-mono text-xs text-white/40">
                            <span className="text-cyan-300">const</span> nextConversation = {" "}
                            <span className="text-emerald-200">&quot;up to you&quot;</span>;
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
