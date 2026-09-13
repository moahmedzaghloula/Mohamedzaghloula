export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        <div>
          <a href="#home" className="portfolio-logo" aria-label="Back to home"><span>MZ</span><span>/&gt;</span></a>
          <span className="footer-note ml-3 text-muted">
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
