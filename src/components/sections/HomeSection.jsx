import { FaArrowDown, FaArrowRight, FaCode } from "react-icons/fa6";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-(--color-bg) px-6 pb-16 pt-28 text-(--color-text-primary) sm:px-10 lg:px-16"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-(--color-text-accent)/10 blur-3xl" />
        <div className="absolute -bottom-48 left-1/4 h-96 w-96 rounded-full bg-(--color-text-accent)/5 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-(--color-text-accent)/30 bg-(--color-text-accent)/5 px-4 py-2 text-sm text-(--color-text-accent)">
            <FaCode size={14} aria-hidden="true" />
            <span>Web development &amp; design</span>
          </div>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Thoughtful code.
            <br />
            <span className="text-(--color-text-accent)">Meaningful</span>
            <br />
            experiences.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-(--color-text-secondary) sm:text-xl">
            I&apos;m Győző Róbert, a developer who enjoys turning ideas into beautiful,
            useful digital experiences. Take a look around.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-(--color-text-accent) px-6 py-3.5 font-semibold text-(--color-bg) transition-transform hover:-translate-y-0.5"
            >
              Explore my work
              <FaArrowRight size={14} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 font-semibold text-(--color-text-primary) transition-colors hover:border-(--color-text-accent) hover:text-(--color-text-accent)"
            >
              Get in touch
            </a>
          </div>

          <a
            href="#about"
            className="mt-14 inline-flex items-center gap-3 text-sm text-(--color-text-secondary) transition-colors hover:text-(--color-text-accent)"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
              <FaArrowDown size={13} aria-hidden="true" />
            </span>
            Scroll to discover
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-3xl bg-(--color-text-accent)/10 blur-2xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111315]/95 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#06d6a0]" />
              </div>
              <span className="font-mono text-xs text-white/40">portfolio.jsx</span>
              <FaCode className="text-(--color-text-accent)" size={15} aria-hidden="true" />
            </div>

            <div className="overflow-x-auto p-6 font-mono text-xs leading-7 sm:p-8 sm:text-sm">
              <div className="min-w-max">
                <p><span className="text-[#c792ea]">const</span> <span className="text-[#82aaff]">developer</span> = {"{"}</p>
                <p className="pl-5"><span className="text-[#89ddff]">name</span>: <span className="text-[#c3e88d]">&quot;Győző Róbert&quot;</span>,</p>
                <p className="pl-5"><span className="text-[#89ddff]">focus</span>: [</p>
                <p className="pl-10"><span className="text-[#c3e88d]">&quot;clean code&quot;</span>,</p>
                <p className="pl-10"><span className="text-[#c3e88d]">&quot;thoughtful design&quot;</span>,</p>
                <p className="pl-10"><span className="text-[#c3e88d]">&quot;great experiences&quot;</span></p>
                <p className="pl-5">],</p>
                <p className="pl-5"><span className="text-[#89ddff]">alwaysLearning</span>: <span className="text-[#ff9cac]">true</span></p>
                <p>{"}"}</p>
                <p className="mt-4 text-white/35"><span className="text-[#c792ea]">//</span> Let&apos;s build something great.</p>
                <p className="mt-2"><span className="text-[#82aaff]">developer</span>.<span className="text-[#82aaff]">create</span>()<span className="animate-pulse text-(--color-text-accent)">_</span></p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-xs text-white/40">
              <span>Made with care</span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-(--color-text-accent)" />
                Open to ideas
              </span>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-5 hidden rounded-xl border border-white/10 bg-[#1d2023] px-4 py-3 shadow-xl sm:block">
            <p className="font-mono text-xs text-white/50">{"<"} ideas /{">"}</p>
            <p className="mt-1 text-sm font-semibold text-(--color-text-primary)">Made tangible</p>
          </div>
        </div>
      </div>
    </section>
  );
}