export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <div>
          <span className="font-display text-lg text-ink">
            MZ<span className="text-red">/</span>&gt;
          </span>
          <span className="ml-3 font-mono text-xs text-muted">
            Built with code, caffeine &amp; too many YAML files.
          </span>
        </div>

        <p className="font-mono text-xs text-muted">
          $ uptime <span className="text-green">&gt; still learning</span>
        </p>

        <p className="font-mono text-xs text-muted">Mohamed Zaghloula &copy; {year}</p>
      </div>
    </footer>
  )
}
