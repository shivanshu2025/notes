function BenefitIcon({ type }: { type: 'bolt' | 'card' | 'check' }) {
  return <span className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full bg-[#eae2f5]/80 text-[#7659ce] shadow-[0_0_20px_rgba(152,115,229,0.1)]">
    {type === 'bolt' && <svg viewBox="0 0 32 32" className="h-[29px] w-[29px]" fill="currentColor"><path d="M17.5 1 7 18h7l-1.5 13L25 13h-8l.5-12Z"/></svg>}
    {type === 'card' && <svg viewBox="0 0 32 32" className="h-[32px] w-[32px]" fill="none" stroke="currentColor" strokeWidth="2.1"><rect x="2.5" y="6" width="27" height="20" rx="2"/><path d="M3 12h26M7 21h9"/></svg>}
    {type === 'check' && <svg viewBox="0 0 32 32" className="h-[33px] w-[33px]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 16 7 7L27 8"/></svg>}
  </span>;
}

export default function IntroSection({ onExplore }: { onExplore: () => void }) {
  return (
    <section className="intro-reveal flex min-w-0 flex-col items-start" aria-labelledby="page-title">
      <div className="text-[17px] font-medium uppercase tracking-[0.32em] max-[430px]:text-[13px]">Curated for <span className="text-[#7660ad]">2026</span></div>
      <div className="mt-[29px] h-[3px] w-[86px] bg-gradient-to-r from-[#724cc5] via-[#8364cb] to-transparent" />

      <h1 id="page-title" className="mt-[57px] flex flex-col font-['Times_New_Roman',serif] font-normal tracking-[-0.065em] max-[1010px]:mt-12 max-[700px]:mt-10">
        <span className="block h-[208px] bg-gradient-to-br from-[#d2b5e7] via-[#7651dc] to-[#5d49d3] bg-clip-text text-[270px] leading-[0.78] text-transparent max-[1010px]:h-[17vw] max-[1010px]:text-[23vw] max-[700px]:h-[145px] max-[700px]:text-[185px] max-[430px]:h-[122px] max-[430px]:text-[157px]">7</span>
        <span className="block whitespace-nowrap text-[66px] leading-[1.05] max-[1010px]:text-[6vw] max-[700px]:text-[11vw]">FULL STACK</span>
        <span className="block whitespace-nowrap bg-gradient-to-b from-[#6550df] to-[#7655cf] bg-clip-text text-[86px] leading-[1.05] text-transparent max-[1010px]:text-[8vw] max-[700px]:text-[15vw]">WEB DEV</span>
      </h1>

      <p className="mt-[22px] font-['Times_New_Roman',serif] text-[37px] leading-[1.1] tracking-[-0.035em] text-[#62616a] max-[1010px]:text-[3.3vw] max-[700px]:text-[34px] max-[430px]:text-[7vw]">Essential topics to become a full stack developer</p>
      <div className="mt-[34px] h-[2px] w-[81px] bg-gradient-to-r from-[#c2b0df] to-transparent" />

      <ul className="mt-[51px] space-y-[20px] text-[21px] tracking-[-0.025em] max-[1010px]:text-[18px] max-[700px]:mt-10 max-[430px]:text-[17px]">
        <li className="flex items-center gap-[26px]"><BenefitIcon type="bolt"/><span>Frontend to backend</span></li>
        <li className="flex items-center gap-[26px]"><BenefitIcon type="card"/><span>Easy-to-revise notes</span></li>
        <li className="flex items-center gap-[26px]"><BenefitIcon type="check"/><span>Practical coding concepts</span></li>
      </ul>

      <button type="button" onClick={onExplore} className="group mt-[88px] flex items-center gap-[26px] text-[21px] tracking-[-0.025em] transition-colors hover:text-[#6d4cbe] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7357c5] max-[700px]:mt-12 max-[430px]:text-[18px]">
        <span className="flex h-[55px] w-[55px] items-center justify-center rounded-full border-[1.5px] border-[#957ad2] text-[#7860c7] transition-transform duration-300 group-hover:translate-x-1">
          <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 16h23m-9-9 9 9-9 9"/></svg>
        </span>
        <span>Swipe to explore</span>
      </button>
    </section>
  );
}