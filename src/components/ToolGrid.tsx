import type { Ref } from 'react';

type Tool = {
  name: string;
  description: string;
  url: string;
  logo: 'html' | 'css' | 'javascript' | 'react' | 'node' | 'express' | 'mongodb';
};

const tools: Tool[] = [
  { name: 'HTML5', description: 'Structure of web pages, semantic tags and forms.', url: 'pdfs/html-notes.pdf', logo: 'html' },
  { name: 'CSS3', description: 'Styling, Flexbox, Grid, animations and responsive design.', url: 'pdfs/css-notes.pdf', logo: 'css' },
  { name: 'JavaScript', description: 'Variables, functions, DOM, events, promises and APIs.', url: 'pdfs/javascript-notes.pdf', logo: 'javascript' },
  { name: 'React.js', description: 'Components, props, hooks and frontend applications.', url: 'pdfs/react-notes.pdf', logo: 'react' },
  { name: 'Node.js', description: 'Server-side JavaScript, APIs and backend logic.', url: 'pdfs/node-notes.pdf', logo: 'node' },
  { name: 'Express.js', description: 'Routing, middleware and REST APIs.', url: 'pdfs/express-notes.pdf', logo: 'express' },
  { name: 'MongoDB', description: 'Database, CRUD operations and data storage.', url: 'pdfs/mongodb-notes.pdf', logo: 'mongodb' },
];

function Logo({ type }: { type: Tool['logo'] }) {
  const label = `${type === 'node' ? 'Node.js' : type === 'mongodb' ? 'MongoDB' : type === 'react' ? 'React' : type.toUpperCase()} logo`;
  if (type === 'html' || type === 'css') return (
    <svg viewBox="0 0 100 100" className="h-[94px] w-[94px]" role="img" aria-label={label}>
      <path d="M9 5h82l-7.5 84L50 98 16.5 89Z" fill={type === 'html' ? '#e44d26' : '#264de4'}/>
      <path d="M50 91 77 83l6-71H50Z" fill={type === 'html' ? '#f16529' : '#2965f1'}/>
      {type === 'html' ? <><path d="M25 24h50l-1.5 10H37l1 12h34l-3 31-19 5-19-5-1-16h11l1 8 8 2 9-2 1-13H28Z" fill="#ebebeb"/><path d="M50 24h25l-1.5 10H50Zm0 22h22l-3 31-19 5V71l9-2 1-13H50Z" fill="#fff"/></> : <><path d="M25 24h50l-1 10H37l1 12h35l-3 31-20 5-19-5-1-16h11l1 8 8 2 9-2 1-13H28Z" fill="#ebebeb"/><path d="M50 24h25l-1 10H50Zm0 22h23l-3 31-20 5V71l9-2 1-13H50Z" fill="#fff"/></>}
    </svg>
  );
  if (type === 'javascript') return (
    <svg viewBox="0 0 100 100" className="h-[94px] w-[94px]" role="img" aria-label={label}>
      <rect x="5" y="5" width="90" height="90" fill="#f7df1e"/>
      <text x="48" y="78" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="53" letterSpacing="-5" fill="#222">JS</text>
    </svg>
  );
  if (type === 'react') return (
    <svg viewBox="0 0 100 100" className="h-[94px] w-[94px]" fill="none" role="img" aria-label={label}>
      <g stroke="#61dafb" strokeWidth="4"><ellipse cx="50" cy="50" rx="45" ry="17"/><ellipse cx="50" cy="50" rx="45" ry="17" transform="rotate(60 50 50)"/><ellipse cx="50" cy="50" rx="45" ry="17" transform="rotate(120 50 50)"/></g>
      <circle cx="50" cy="50" r="8" fill="#61dafb"/>
    </svg>
  );
  if (type === 'node') return (
    <svg viewBox="0 0 100 100" className="h-[94px] w-[94px]" role="img" aria-label={label}>
      <path d="M50 3 91 26v48L50 97 9 74V26Z" fill="#539e43"/>
      <path d="M50 3 91 26v48L50 97V3Z" fill="#438d3d"/>
      <text x="50" y="62" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="30" fill="white">node</text>
    </svg>
  );
  if (type === 'express') return (
    <svg viewBox="0 0 100 100" className="h-[94px] w-[94px]" role="img" aria-label={label}>
      <text x="50" y="64" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="300" fontSize="45" letterSpacing="-4" fill="#25252a">ex</text>
      <path d="M20 75h60" stroke="#25252a" strokeWidth="2"/>
    </svg>
  );
  return (
    <svg viewBox="0 0 100 100" className="h-[94px] w-[94px]" role="img" aria-label={label}>
      <path d="M50 4C28 25 24 48 37 73c4 8 10 14 13 17 3-3 9-9 13-17C76 48 72 25 50 4Z" fill="#47a248"/>
      <path d="M50 4v86c3-3 9-9 13-17C76 48 72 25 50 4Z" fill="#3d9141"/>
      <path d="M50 28c-2 22-2 44 0 68" fill="none" stroke="#285b32" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  );
}

export default function ToolGrid({ gridRef }: { gridRef: Ref<HTMLElement> }) {
  return (
    <section ref={gridRef} id="tools" aria-label="Seven full stack web development topics" className="grid scroll-mt-6 grid-cols-2 items-start gap-x-[31px] gap-y-[20px] pt-[9px] max-[1010px]:gap-x-4 max-[700px]:mt-14 max-[700px]:pt-0 max-[430px]:gap-3">
      {tools.map((tool, index) => (
        <a key={tool.name} href={tool.url} aria-label={`Open ${tool.name} PDF notes`} style={{ animationDelay: `${120 + index * 70}ms` }} className={`tool-reveal group flex h-[292px] min-w-0 flex-col items-center rounded-[23px] bg-[#fcf9f6]/90 px-[18px] pt-[43px] text-center shadow-[9px_15px_18px_-7px_rgba(48,43,50,0.20),0_1px_5px_rgba(255,255,255,0.8)_inset] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[12px_20px_25px_-8px_rgba(48,43,50,0.24)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#7357c5] max-[1010px]:h-[270px] max-[1010px]:px-3 max-[1010px]:pt-9 max-[700px]:h-[280px] max-[430px]:h-[250px] max-[430px]:rounded-[18px] max-[430px]:px-2 max-[430px]:pt-7 ${index === 6 ? 'h-[264px] pt-[26px] max-[1010px]:h-[250px] max-[700px]:h-[270px] max-[430px]:h-[245px]' : ''}`}>
          <div className="flex h-[94px] shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105 max-[430px]:scale-[0.8] max-[430px]:origin-top"><Logo type={tool.logo} /></div>
          <h2 className="mt-[14px] whitespace-nowrap text-[22px] font-semibold leading-[1.2] tracking-[-0.055em] max-[1010px]:text-[clamp(15px,2vw,22px)] max-[700px]:text-[clamp(16px,3.5vw,22px)] max-[430px]:mt-[-4px] max-[430px]:text-[clamp(14px,4vw,18px)]">{tool.name}</h2>
          <div className="mt-[13px] h-px w-[80%] bg-gradient-to-r from-transparent via-[#dcd8d4] to-transparent max-[430px]:mt-[10px]" />
          <p className="mt-[11px] max-w-[173px] text-[15px] leading-[1.42] tracking-[-0.025em] max-[1010px]:text-[13px] max-[700px]:text-[14px] max-[430px]:mt-2 max-[430px]:text-[12px]">{tool.description}</p>
        </a>
      ))}
    </section>
  );
}
