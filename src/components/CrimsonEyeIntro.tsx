import { useEffect, useState } from "react";

export default function CrimsonEyeIntro() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setHidden(true), reduceMotion ? 600 : 3100);
    return () => window.clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="eye-intro" aria-label="Opening visual animation">
      <div className="ink-ripple ripple-a" />
      <div className="ink-ripple ripple-b" />
      <svg className="eye-core" viewBox="0 0 420 420" role="img" aria-label="Rotating crimson eye motif">
        <defs>
          <radialGradient id="irisGlow" cx="50%" cy="48%" r="58%">
            <stop offset="0%" stopColor="#ffefe4" />
            <stop offset="13%" stopColor="#ee1d2f" />
            <stop offset="52%" stopColor="#98101b" />
            <stop offset="100%" stopColor="#1a0506" />
          </radialGradient>
          <filter id="emberBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <circle className="eye-haze" cx="210" cy="210" r="188" />
        <circle className="eye-disc" cx="210" cy="210" r="138" fill="url(#irisGlow)" />
        <circle className="eye-ring outer" cx="210" cy="210" r="138" />
        <circle className="eye-ring mid" cx="210" cy="210" r="86" />
        <g className="ember-orbit">
          {[0, 120, 240].map((rotation) => (
            <g key={rotation} transform={`rotate(${rotation} 210 210)`}>
              <circle className="ember-dot" cx="210" cy="96" r="22" />
              <path
                className="ember-tail"
                d="M225 109c28 18 34 46 16 70-5-24-20-42-46-52 14-2 24-8 30-18Z"
              />
            </g>
          ))}
        </g>
        <circle className="pupil" cx="210" cy="210" r="34" />
        <circle className="pupil-cut" cx="210" cy="210" r="12" />
        <circle className="spark spark-a" cx="162" cy="134" r="6" filter="url(#emberBlur)" />
        <circle className="spark spark-b" cx="282" cy="268" r="5" filter="url(#emberBlur)" />
      </svg>
      <p className="seal-text">OPENING THE SCROLL</p>
      <button className="skip-intro" type="button" onClick={() => setHidden(true)}>
        Skip
      </button>
    </div>
  );
}
