const terminalLines = [
  { prompt: "mohamed@portfolio:~$", command: "whoami", output: "Mohamed Zaghloula" },
  { prompt: "mohamed@portfolio:~$", command: "role", output: "DevOps Engineer" },
  {
    prompt: "mohamed@portfolio:~$",
    command: "focus",
    output: "Cloud / Kubernetes / Automation / SRE",
  },
  { prompt: "mohamed@portfolio:~$", command: "status", output: "Always learning ..." },
];

export function TerminalPanel() {
  return (
    <div className="terminal-panel" data-reveal>
      <div className="terminal-chrome" aria-hidden="true">
        <span className="bg-signal-red" />
        <span className="bg-signal-yellow" />
        <span className="bg-signal-green" />
      </div>
      <div className="space-y-4 font-mono text-sm leading-relaxed sm:text-base">
        {terminalLines.map((line, index) => (
          <div key={line.command}>
            <p>
              <span className="text-signal-green">{line.prompt}</span>{" "}
              <span className="text-off-white">{line.command}</span>
            </p>
            <p className="text-slate-200">
              &gt; {line.output}
              {index === terminalLines.length - 1 ? <span className="terminal-cursor" /> : null}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
