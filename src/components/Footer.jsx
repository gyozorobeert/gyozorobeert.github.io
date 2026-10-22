import { FaFacebook, FaInstagram, FaDiscord, FaGithub, FaEnvelope } from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const socialLinks = [
        { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100093204785817", Icon: FaFacebook },
        { label: "Instagram", href: "https://www.instagram.com/gyozorobeert/", Icon: FaInstagram },
        { label: "Discord Server", href: "https://discord.gg/SqQWMZqVFr", Icon: FaDiscord },
        { label: "GitHub", href: "https://github.com/gyozorobeert", Icon: FaGithub },
    ];

    return (
        <footer className="bg-(--color-bg) text-(--color-text-primary)">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <a href="#home" className="text-xl font-bold">
                        <span className="text-(--color-text-accent)">Robert</span>'s Portfolio
                    </a>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-(--color-text-secondary)">
                        Thanks for stopping by. Have a project in mind or just want to say hello?
                        I would love to hear from you.
                    </p>
                    <a
                        href="#contact"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-(--color-text-accent) hover:underline"
                    >
                        <FaEnvelope size={16} aria-hidden="true" />
                        Get in touch
                    </a>
                </div>

                <nav aria-label="Footer navigation">
                    <h2 className="text-sm font-semibold uppercase tracking-wider">Explore</h2>
                    <ul className="mt-4 space-y-3 text-sm text-(--color-text-secondary)">
                        {[
                            ["Home", "#home"],
                            ["About", "#about"],
                            ["Projects", "#projects"],
                            ["Contact", "#contact"],
                        ].map(([label, href]) => (
                            <li key={label}>
                                <a className="transition-colors hover:text-(--color-text-accent)" href={href}>
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wider">Find me online</h2>
                    <ul className="mt-4 space-y-3 text-sm text-(--color-text-secondary)">
                        {socialLinks.map(({ label, href, Icon }) => (
                            <li key={label}>
                                <a
                                    className="inline-flex items-center gap-2 transition-colors hover:text-(--color-text-accent)"
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Icon size={17} aria-hidden="true" />
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-(--color-text-secondary)/20">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-xs text-(--color-text-secondary) sm:flex-row sm:text-left">
                    <p>&copy; {currentYear} Győző Róbert. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}