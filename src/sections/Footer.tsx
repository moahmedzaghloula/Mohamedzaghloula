import { Logo } from "../components/Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <Logo />
      <p>Built with code, caffeine &amp; too many YAML files.</p>
      <p className="font-mono text-signal-green">
        $ uptime <span className="text-slate-300">&gt; still learning</span>
      </p>
      <p>Mohamed Zaghloula © 2026</p>
    </footer>
  );
}
