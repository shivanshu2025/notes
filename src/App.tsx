import { useRef } from 'react';
import IntroSection from './components/IntroSection';
import ToolGrid from './components/ToolGrid';

export default function App() {
  const toolsRef = useRef<HTMLElement>(null);

  return (
    <main className="relative min-h-screen overflow-hidden border-t-[8px] border-[#0c0c10] bg-[#f7f3ee] text-[#11121a]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_42%_27%_at_99%_3%,rgba(155,125,222,0.30),transparent_80%),radial-gradient(ellipse_35%_28%_at_2%_95%,rgba(176,144,240,0.30),transparent_85%),radial-gradient(ellipse_28%_24%_at_103%_98%,rgba(131,110,231,0.34),transparent_84%),radial-gradient(ellipse_25%_28%_at_59%_51%,rgba(232,220,233,0.22),transparent_90%)]" />

      <div className="relative mx-auto grid w-full max-w-[946px] grid-cols-[402px_1fr] gap-[43px] pb-[38px] pt-[96px] max-[1010px]:max-w-none max-[1010px]:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] max-[1010px]:gap-7 max-[1010px]:px-10 max-[700px]:block max-[700px]:px-7 max-[700px]:pt-12 max-[430px]:px-5">
        <IntroSection onExplore={() => toolsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })} />
        <ToolGrid gridRef={toolsRef} />
      </div>
    </main>
  );
}