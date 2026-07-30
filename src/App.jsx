import React, { useState, useEffect } from 'react';
import {
  Music,
  Mic,
  Disc,
  Trophy,
  Calendar,
  DollarSign,
  UserCheck,
  Sparkles,
  AlertTriangle,
  Send,
  Sliders,
  Printer,
  ChevronRight,
  ChevronLeft,
  Sun,
  Moon,
  Layers,
  Presentation,
  CheckCircle2,
  FileText,
  Megaphone,
  Scale,
  Building2,
  ArrowRight,
  Info,
  AtSign
} from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('dark'); // 'dark' or 'light'
  const [viewMode, setViewMode] = useState('scroll'); // 'scroll', 'slide', 'calc'
  const [activeSlide, setActiveSlide] = useState(0);

  // Simulation State for Interactive Calculator
  const [songCount, setSongCount] = useState(100);
  const [songFee, setSongFee] = useState(1000);
  const [buyoutCount, setBuyoutCount] = useState(1);
  const [buyoutFee, setBuyoutFee] = useState(10000);

  const [singerCount, setSingerCount] = useState(10);
  const [singerFee, setSingerFee] = useState(10000);

  const [cdCost, setCdCost] = useState(80000);
  const [promoCost, setPromoCost] = useState(30000);
  const [operationCost, setOperationCost] = useState(20000);

  // Calculated values
  const creatorRevenue = songCount * songFee;
  const creatorExpense = buyoutCount * buyoutFee;
  const creatorBalance = creatorRevenue - creatorExpense;

  const kosakaRevenue = singerCount * singerFee;
  const kosakaExpense = cdCost + promoCost + operationCost;
  const kosakaBalance = kosakaRevenue - kosakaExpense;

  const slidesCount = 7;

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const scrollToSection = (id) => {
    setViewMode('scroll');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-[#0b0819] text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Dynamic Background Effects for Dark Theme */}
      {isDark && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -right-40 w-96 h-96 bg-pink-600/15 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        </div>
      )}

      {/* Top Fixed Header / Navigation */}
      <header className={`sticky top-0 z-50 backdrop-blur-md transition-colors border-b ${
        isDark 
          ? 'bg-[#0b0819]/80 border-purple-900/40 text-slate-200' 
          : 'bg-white/80 border-slate-200 text-slate-700'
      } no-print`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('cover')}>
            <div className="p-2 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white font-bold shadow-lg shadow-purple-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">
                AI × VOICE
              </span>
              <span className="text-xs px-2 py-0.5 ml-2 rounded-full font-semibold border bg-purple-500/10 text-purple-400 border-purple-500/30">
                PROJECT 2026
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <button onClick={() => scrollToSection('concept')} className="hover:text-purple-400 transition-colors">概要</button>
            <button onClick={() => scrollToSection('roles')} className="hover:text-purple-400 transition-colors">主催・体制</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-purple-400 transition-colors">選考フロー</button>
            <button onClick={() => scrollToSection('guidelines')} className="hover:text-purple-400 transition-colors">募集要項</button>
            <button onClick={() => scrollToSection('financials')} className="hover:text-purple-400 transition-colors">収支試算</button>
            <button onClick={() => scrollToSection('schedule')} className="hover:text-purple-400 transition-colors">日程</button>
            <button onClick={() => scrollToSection('terms')} className="hover:text-purple-400 transition-colors">規約</button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className={`flex items-center p-1 rounded-xl border ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                onClick={() => setViewMode('scroll')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                  viewMode === 'scroll'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="1ページスクロール表示"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">LP型</span>
              </button>
              <button
                onClick={() => setViewMode('slide')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                  viewMode === 'slide'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="スライドデッキ表示"
              >
                <Presentation className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">スライド</span>
              </button>
              <button
                onClick={() => setViewMode('calc')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all ${
                  viewMode === 'calc'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="収支シミュレーター"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">収支計算機</span>
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-colors ${
                isDark
                  ? 'bg-slate-900/80 border-slate-800 text-amber-400 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
              title="テーマ切替"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Print Button */}
            <button
              onClick={() => window.print()}
              className={`p-2 rounded-xl border transition-colors ${
                isDark
                  ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
              title="印刷 / PDF保存"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="relative z-10">

        {/* SLIDE MODE PRESENTATION CONTAINER */}
        {viewMode === 'slide' && (
          <div className="max-w-5xl mx-auto px-4 py-8">
            {/* Slide Navigation Bar */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-semibold text-purple-400">
                SLIDE {activeSlide + 1} / {slidesCount}
              </span>
              <div className="flex items-center gap-2">
                <button
                  disabled={activeSlide === 0}
                  onClick={() => setActiveSlide(prev => Math.max(0, prev - 1))}
                  className="p-2 rounded-lg border border-purple-500/30 bg-purple-500/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-purple-500/20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  disabled={activeSlide === slidesCount - 1}
                  onClick={() => setActiveSlide(prev => Math.min(slidesCount - 1, prev + 1))}
                  className="p-2 rounded-lg border border-purple-500/30 bg-purple-500/10 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-purple-500/20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Active Slide Display */}
            <div className={`p-8 md:p-12 rounded-3xl border transition-all duration-300 ${
              isDark ? 'bg-slate-900/90 border-purple-900/50 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'
            }`}>
              {activeSlide === 0 && <CoverSlide isDark={isDark} />}
              {activeSlide === 1 && <ConceptSlide isDark={isDark} />}
              {activeSlide === 2 && <ProcessSlide isDark={isDark} />}
              {activeSlide === 3 && <GuidelinesSlide isDark={isDark} />}
              {activeSlide === 4 && <FinancialsSlide isDark={isDark} creatorBalance={creatorBalance} kosakaBalance={kosakaBalance} />}
              {activeSlide === 5 && <ScheduleSlide isDark={isDark} />}
              {activeSlide === 6 && <TermsSlide isDark={isDark} />}
            </div>

            {/* Slide dots */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {Array.from({ length: slidesCount }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeSlide === idx ? 'w-8 bg-purple-500' : 'w-2.5 bg-slate-600/40 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* INTERACTIVE CALCULATOR MODE */}
        {viewMode === 'calc' && (
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className={`p-8 rounded-3xl border ${
              isDark ? 'bg-slate-900/90 border-purple-900/40' : 'bg-white border-slate-200 shadow-xl'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                  <Sliders className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">収支シミュレーター (リアルタイム試算)</h2>
                  <p className="text-sm opacity-70">応募数や単価を変更して、miya & Humal・小坂さん 両サイドの予測利益を試算できます</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* miya & Humal Settings */}
                <div className={`p-6 rounded-2xl border ${
                  isDark ? 'bg-purple-950/20 border-purple-900/40' : 'bg-purple-50 border-purple-200'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="font-bold text-lg flex items-center gap-2 text-purple-400">
                        <Music className="w-5 h-5" /> miya & Humal サイド（AI楽曲統括）
                      </span>
                      <span className="text-xs font-mono text-purple-300">@miya_SUEMYST / @whisky_tail</span>
                    </div>
                    <span className={`text-xl font-extrabold px-3 py-1 rounded-xl ${
                      creatorBalance >= 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                    }`}>
                      収支 ≒ {creatorBalance >= 0 ? `+${creatorBalance.toLocaleString()}` : creatorBalance.toLocaleString()} 円
                    </span>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>募集楽曲数: <strong className="text-purple-300">{songCount} 曲</strong></span>
                        <span>収入: +{(songCount * songFee).toLocaleString()}円</span>
                      </div>
                      <input
                        type="range" min="10" max="200" step="5" value={songCount}
                        onChange={e => setSongCount(Number(e.target.value))}
                        className="w-full accent-purple-500"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span>1曲あたりのエントリーフィー: <strong className="text-purple-300">{songFee.toLocaleString()} 円</strong></span>
                      </div>
                      <input
                        type="range" min="500" max="5000" step="500" value={songFee}
                        onChange={e => setSongFee(Number(e.target.value))}
                        className="w-full accent-purple-500"
                      />
                    </div>

                    <div className="pt-2 border-t border-purple-900/30">
                      <div className="flex justify-between mb-1">
                        <span>買取決定数: <strong className="text-purple-300">{buyoutCount} 曲</strong></span>
                        <span>支出: -{(buyoutCount * buyoutFee).toLocaleString()}円</span>
                      </div>
                      <input
                        type="range" min="1" max="10" step="1" value={buyoutCount}
                        onChange={e => setBuyoutCount(Number(e.target.value))}
                        className="w-full accent-purple-500"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span>1曲あたりの買取費用: <strong className="text-purple-300">{buyoutFee.toLocaleString()} 円</strong></span>
                      </div>
                      <input
                        type="range" min="5000" max="30000" step="1000" value={buyoutFee}
                        onChange={e => setBuyoutFee(Number(e.target.value))}
                        className="w-full accent-purple-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Kosaka Settings */}
                <div className={`p-6 rounded-2xl border ${
                  isDark ? 'bg-pink-950/20 border-pink-900/40' : 'bg-pink-50 border-pink-200'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="font-bold text-lg flex items-center gap-2 text-pink-400">
                        <Mic className="w-5 h-5" /> 小坂さん サイド（シンガー・CD制作統括）
                      </span>
                      <span className="text-xs text-pink-300">オーディション・CD制作資金</span>
                    </div>
                    <span className={`text-xl font-extrabold px-3 py-1 rounded-xl ${
                      kosakaBalance >= 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                    }`}>
                      収支 ≒ {kosakaBalance >= 0 ? `+${kosakaBalance.toLocaleString()}` : kosakaBalance.toLocaleString()} 円
                    </span>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>シンガー合格数: <strong className="text-pink-300">{singerCount} 名</strong></span>
                        <span>収入: +{(singerCount * singerFee).toLocaleString()}円</span>
                      </div>
                      <input
                        type="range" min="5" max="30" step="1" value={singerCount}
                        onChange={e => setSingerCount(Number(e.target.value))}
                        className="w-full accent-pink-500"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span>1名あたりオーディションフィー: <strong className="text-pink-300">{singerFee.toLocaleString()} 円</strong></span>
                      </div>
                      <input
                        type="range" min="5000" max="30000" step="1000" value={singerFee}
                        onChange={e => setSingerFee(Number(e.target.value))}
                        className="w-full accent-pink-500"
                      />
                    </div>

                    <div className="pt-2 border-t border-pink-900/30">
                      <div className="flex justify-between mb-1">
                        <span>CD制作・レコーディング費: <strong className="text-pink-300">{cdCost.toLocaleString()} 円</strong></span>
                      </div>
                      <input
                        type="range" min="30000" max="200000" step="5000" value={cdCost}
                        onChange={e => setCdCost(Number(e.target.value))}
                        className="w-full accent-pink-500"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span>プロモーション・広告費: <strong className="text-pink-300">{promoCost.toLocaleString()} 円</strong></span>
                      </div>
                      <input
                        type="range" min="10000" max="100000" step="5000" value={promoCost}
                        onChange={e => setPromoCost(Number(e.target.value))}
                        className="w-full accent-pink-500"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <span>運営費・審査費用: <strong className="text-pink-300">{operationCost.toLocaleString()} 円</strong></span>
                      </div>
                      <input
                        type="range" min="0" max="50000" step="5000" value={operationCost}
                        onChange={e => setOperationCost(Number(e.target.value))}
                        className="w-full accent-pink-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Project Summary */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-pink-900/30 border border-purple-500/30 flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <div className="font-bold text-lg">プロジェクト全体合計収支</div>
                  <div className="text-xs opacity-75">（miya & Humal × 小坂さん）企画全体の予想損益バランス</div>
                </div>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  ≒ {(creatorBalance + kosakaBalance) >= 0 ? `+${(creatorBalance + kosakaBalance).toLocaleString()}` : (creatorBalance + kosakaBalance).toLocaleString()} 円
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCROLL LP MODE (STANDARD HIGH IMPACT VIEW) */}
        {viewMode === 'scroll' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">

            {/* SECTION 1: COVER / HERO */}
            <section id="cover" className="relative py-12 md:py-20 text-center rounded-3xl overflow-hidden print-page">
              <div className="relative z-10 max-w-4xl mx-auto px-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-inner">
                  <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
                  NEW AUDITION PROJECT 2026
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6">
                  <span className="block text-gradient">AI × VOICE</span>
                  <span className="block text-slate-100 dark:text-white mt-1">PROJECT</span>
                </h1>

                <p className="text-lg sm:text-2xl font-medium tracking-wide text-purple-200/90 mb-10">
                  〜 AIが生んだ楽曲に、本物の声を乗せる 〜
                </p>

                {/* Organizer Cards Header Overlay */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
                  <div className={`p-5 rounded-2xl border transition-transform hover:-translate-y-1 ${
                    isDark ? 'bg-purple-950/40 border-purple-800/50' : 'bg-white border-purple-200 shadow-lg'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 shrink-0">
                        <Music className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs opacity-70">AI楽曲クリエイター統括</div>
                        <div className="font-bold text-base sm:text-lg text-purple-300 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                          <span>miya</span>
                          <span className="text-xs font-mono opacity-80">@miya_SUEMYST</span>
                          <span className="text-xs opacity-60">/</span>
                          <span>Humal</span>
                          <span className="text-xs font-mono opacity-80">@whisky_tail</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs opacity-80 pl-12">楽曲募集・審査・管理</p>
                  </div>

                  <div className={`p-5 rounded-2xl border transition-transform hover:-translate-y-1 ${
                    isDark ? 'bg-pink-950/40 border-pink-800/50' : 'bg-white border-pink-200 shadow-lg'
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2.5 rounded-xl bg-pink-600/20 text-pink-400 border border-pink-500/30 shrink-0">
                        <Mic className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs opacity-70">シンガー・CD制作統括</div>
                        <div className="font-bold text-lg text-pink-300">
                          小坂さん
                        </div>
                      </div>
                    </div>
                    <p className="text-xs opacity-80 pl-12">オーディション・CD制作資金</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 text-xs opacity-60">
                  <span>新オーディション企画 提案書</span>
                  <span>•</span>
                  <span>発行日：2026年7月30日</span>
                </div>
              </div>
            </section>


            {/* SECTION 2: CONCEPT & ROLES */}
            <section id="concept" className="scroll-mt-20">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">CONCEPT & STRUCTURE</span>
                <h2 className="text-3xl font-extrabold mt-1">企画概要・主催体制</h2>
                <p className="text-sm opacity-75 mt-2">AIクリエイターの「作る才能」とシンガーの「歌う才能」をマッチング</p>
              </div>

              {/* Main Concept Highlight Card */}
              <div className={`p-8 rounded-3xl border mb-10 relative overflow-hidden ${
                isDark ? 'bg-gradient-to-r from-purple-950/50 via-slate-900 to-indigo-950/50 border-purple-800/40' : 'bg-gradient-to-r from-purple-50 via-white to-pink-50 border-purple-200 shadow-lg'
              }`}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-gradient-to-tr from-amber-400 to-pink-500 text-slate-950 font-bold shrink-0 mt-1 shadow-lg">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-purple-300">✨ 新時代の音楽オーディション</h3>
                    <p className="leading-relaxed text-base sm:text-lg opacity-90">
                      本企画は、<strong className="text-purple-400 font-bold underline decoration-purple-500/50 underline-offset-4">AI音楽クリエイターが制作した楽曲</strong>に命を吹き込む<strong className="text-pink-400 font-bold underline decoration-pink-500/50 underline-offset-4">リアルシンガー</strong>を発掘する、まったく新しいオーディションプロジェクトです。
                      AIと人間の声が融合する時代に、「作る才能」と「歌う才能」をマッチングさせ、<strong className="text-amber-300 font-bold">CDデビューという夢の舞台</strong>へと導きます。
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Pillars Role Grid */}
              <div id="roles" className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-mt-24">
                <div className={`p-6 rounded-2xl border flex flex-col justify-between transition-all hover:border-purple-500/50 ${
                  isDark ? 'bg-slate-900/80 border-purple-900/30' : 'bg-white border-slate-200 shadow-md'
                }`}>
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4 border border-purple-500/30">
                      <Music className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-purple-400 tracking-wider">AI楽曲クリエイター統括</div>
                    <h4 className="text-xl font-black mt-1 mb-1">miya & Humal</h4>
                    <div className="text-xs font-mono text-purple-400 space-y-0.5 mb-4">
                      <div>miya: @miya_SUEMYST</div>
                      <div>Humal: @whisky_tail</div>
                    </div>
                    <ul className="space-y-2 text-sm opacity-80">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                        AI楽曲の募集・審査・管理
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                        エントリーフィーの回収
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-purple-900/20 text-xs text-purple-300 font-semibold">
                    担当: 楽曲クリエイター窓口
                  </div>
                </div>

                <div className={`p-6 rounded-2xl border flex flex-col justify-between transition-all hover:border-pink-500/50 ${
                  isDark ? 'bg-slate-900/80 border-pink-900/30' : 'bg-white border-slate-200 shadow-md'
                }`}>
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-pink-500/20 text-pink-400 flex items-center justify-center mb-4 border border-pink-500/30">
                      <Mic className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-pink-400 tracking-wider">シンガーオーディション統括</div>
                    <h4 className="text-2xl font-black mt-1 mb-4">小坂さん</h4>
                    <ul className="space-y-2 text-sm opacity-80">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                        シンガー募集・審査
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                        オーディション運営・フィー回収
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-pink-900/20 text-xs text-pink-300 font-semibold">
                    担当: シンガー選考窓口
                  </div>
                </div>

                <div className={`p-6 rounded-2xl border flex flex-col justify-between transition-all hover:border-emerald-500/50 ${
                  isDark ? 'bg-slate-900/80 border-emerald-900/30' : 'bg-white border-slate-200 shadow-md'
                }`}>
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/30">
                      <Disc className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-emerald-400 tracking-wider">CD制作資金スポンサー</div>
                    <h4 className="text-2xl font-black mt-1 mb-4">小坂さん</h4>
                    <ul className="space-y-2 text-sm opacity-80">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        レコーディング費用の負担
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        CD制作・リリース費用の負担
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6 pt-4 border-t border-emerald-900/20 text-xs text-emerald-300 font-semibold">
                    担当: プロデュース・資金提供
                  </div>
                </div>
              </div>
            </section>


            {/* SECTION 3: PROCESS TIMELINE (5 STEPS) */}
            <section id="process" className="scroll-mt-24">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold tracking-widest text-pink-400 uppercase">PROCESS</span>
                <h2 className="text-3xl font-extrabold mt-1">企画の流れ (全5ステップ)</h2>
                <p className="text-sm opacity-75 mt-2">AI楽曲のエントリーから優勝者CDデビューまでの完全プロセス</p>
              </div>

              <div className="space-y-4 max-w-4xl mx-auto">
                <ProcessStepCard
                  step="01"
                  title="AI楽曲クリエイター エントリー"
                  tag="100曲募集"
                  tagColor="bg-purple-500/20 text-purple-300 border-purple-500/40"
                  owner="miya & Humal 担当"
                  desc="商用利用可能なAI生成楽曲を募集。エントリーフィー 1,000円/曲"
                  icon={<Music className="w-5 h-5 text-purple-400" />}
                  isDark={isDark}
                />

                <ProcessStepCard
                  step="02"
                  title="楽曲審査・選定"
                  tag="優秀楽曲を買取"
                  tagColor="bg-indigo-500/20 text-indigo-300 border-indigo-500/40"
                  owner="miya & Humal 担当"
                  desc="審査通過楽曲を 10,000円 で買取。CDおよびオーディション用楽曲として確保"
                  icon={<CheckCircle2 className="w-5 h-5 text-indigo-400" />}
                  isDark={isDark}
                />

                <ProcessStepCard
                  step="03"
                  title="シンガー オーディション"
                  tag="10名募集"
                  tagColor="bg-pink-500/20 text-pink-300 border-pink-500/40"
                  owner="小坂さん 担当"
                  desc="オーディションフィー 10,000円/名。選定楽曲から1曲選んで歌唱音源を提出"
                  icon={<Mic className="w-5 h-5 text-pink-400" />}
                  isDark={isDark}
                />

                <ProcessStepCard
                  step="04"
                  title="審査・最終選考"
                  tag="総合選考"
                  tagColor="bg-blue-500/20 text-blue-300 border-blue-500/40"
                  owner="共同審査"
                  desc="書類審査 → 実技審査 → 審査員・ファン投票による総合評価"
                  icon={<UserCheck className="w-5 h-5 text-blue-400" />}
                  isDark={isDark}
                />

                {/* Grand Prize Highlight Step 5 */}
                <div className={`p-6 sm:p-8 rounded-3xl border relative overflow-hidden transition-all transform hover:scale-[1.01] ${
                  isDark ? 'bg-gradient-to-r from-amber-950/40 via-purple-900/40 to-pink-950/40 border-amber-500/50 shadow-2xl shadow-amber-500/10' : 'bg-gradient-to-r from-amber-50 via-purple-50 to-pink-50 border-amber-300 shadow-xl'
                }`}>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-black text-2xl shadow-lg shrink-0">
                        05
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 uppercase tracking-wide">
                            🏆 GRAND PRIZE
                          </span>
                          <span className="text-xs opacity-75">小坂さん 資金負担</span>
                        </div>
                        <h3 className="text-2xl font-black text-amber-300 flex items-center gap-2">
                          優勝者1名 CDデビュー <Trophy className="w-6 h-6 text-amber-400 animate-bounce" />
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-base sm:text-lg opacity-90 pl-0 sm:pl-18">
                    AIクリエイターの楽曲を使用したシングルCDを本格制作・全国リリース！
                  </p>
                </div>
              </div>
            </section>


            {/* SECTION 4: GUIDELINES (PART 1 & PART 2) */}
            <section id="guidelines" className="scroll-mt-24">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase">REQUIREMENTS</span>
                <h2 className="text-3xl font-extrabold mt-1">募集要項</h2>
                <p className="text-sm opacity-75 mt-2">AI楽曲クリエイター部門とシンガー部門の条件一覧</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Part 1: AI Music Creator */}
                <div className={`p-8 rounded-3xl border flex flex-col justify-between ${
                  isDark ? 'bg-slate-900/80 border-purple-900/40' : 'bg-white border-purple-200 shadow-xl'
                }`}>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/20 text-purple-300 text-xs font-bold mb-4 border border-purple-500/30">
                      PART 1 — miya & Humal 担当
                    </div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Music className="w-7 h-7 text-purple-400" /> AI楽曲クリエイター 募集要項
                    </h3>

                    <table className="w-full text-sm">
                      <tbody className="divide-y divide-purple-900/20">
                        <tr>
                          <td className="py-3 font-semibold opacity-70 w-1/3">募集楽曲数</td>
                          <td className="py-3 font-bold text-purple-300">100曲 (先着順)</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-semibold opacity-70">エントリーフィー</td>
                          <td className="py-3 font-bold text-emerald-400">1,000円 / 1楽曲</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-semibold opacity-70">対象楽曲</td>
                          <td className="py-3">商用利用可能なAI音楽制作ツールで制作したオリジナル楽曲</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-semibold opacity-70">ジャンル</td>
                          <td className="py-3">不問 (J-POP, バラード, R&B, アニソン等)</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-semibold opacity-70">提出物</td>
                          <td className="py-3">楽曲データ(MP3/WAV), タイトル, 制作コンセプト</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-semibold opacity-70">窓口担当</td>
                          <td className="py-3 font-bold text-purple-300">
                            miya (@miya_SUEMYST) / Humal (@whisky_tail)
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Important Note */}
                    <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs leading-relaxed">
                      <div className="font-bold flex items-center gap-1.5 text-amber-400 mb-1 text-sm">
                        <AlertTriangle className="w-4 h-4" /> 楽曲買取条件 (重要)
                      </div>
                      審査通過楽曲は <strong>10,000円</strong> で買取 (miya・Humal・小坂さん 協議の上決定)。CD・オーディション楽曲使用権を取得。買取費はエントリーフィーから充当。選外は返金不可。
                    </div>
                  </div>
                </div>

                {/* Part 2: Singer Audition */}
                <div className={`p-8 rounded-3xl border flex flex-col justify-between ${
                  isDark ? 'bg-slate-900/80 border-pink-900/40' : 'bg-white border-pink-200 shadow-xl'
                }`}>
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-pink-500/20 text-pink-300 text-xs font-bold mb-4 border border-pink-500/30">
                      PART 2 — 小坂さん 担当
                    </div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Mic className="w-7 h-7 text-pink-400" /> シンガー オーディション 募集要項
                    </h3>

                    <table className="w-full text-sm">
                      <tbody className="divide-y divide-pink-900/20">
                        <tr>
                          <td className="py-3 font-semibold opacity-70 w-1/3">募集人数</td>
                          <td className="py-3 font-bold text-pink-300">10名 (書類審査通過者)</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-semibold opacity-70">オーディションフィー</td>
                          <td className="py-3 font-bold text-emerald-400">10,000円 / 1名</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-semibold opacity-70">応募資格</td>
                          <td className="py-3">性別・年齢・プロアマ不問。歌いたい気持ちがあれば応募可能</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-semibold opacity-70">提出物</td>
                          <td className="py-3">歌唱音源(選定曲から1曲), プロフィール, 写真, 志望動機</td>
                        </tr>
                        <tr>
                          <td className="py-3 font-semibold opacity-70">窓口担当</td>
                          <td className="py-3 font-bold text-pink-300">小坂さん</td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Audition Steps */}
                    <div className="mt-6 p-4 rounded-2xl bg-pink-500/10 border border-pink-500/30 text-xs space-y-2">
                      <div className="font-bold text-pink-300 text-sm mb-1">オーディション選考プロセス</div>
                      <div className="flex items-center gap-2 opacity-90">
                        <span className="w-5 h-5 rounded-full bg-pink-500 text-white font-bold flex items-center justify-center text-[10px]">1</span>
                        <span>書類審査: プロフィール・歌唱音源による一次選考</span>
                      </div>
                      <div className="flex items-center gap-2 opacity-90">
                        <span className="w-5 h-5 rounded-full bg-pink-500 text-white font-bold flex items-center justify-center text-[10px]">2</span>
                        <span>実技審査: 選考通過者によるライブ審査 (または動画審査)</span>
                      </div>
                      <div className="flex items-center gap-2 opacity-90">
                        <span className="w-5 h-5 rounded-full bg-pink-500 text-white font-bold flex items-center justify-center text-[10px]">3</span>
                        <span>最終選考: 審査員・ファン投票による総合評価</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            {/* SECTION 5: FINANCIAL SIMULATION */}
            <section id="financials" className="scroll-mt-24">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">FINANCIAL SIMULATION</span>
                <h2 className="text-3xl font-extrabold mt-1">収支シミュレーション (担当別)</h2>
                <p className="text-sm opacity-75 mt-2">各主催者ごとの予想収入・支出・利益試算</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* miya & Humal Financial Card */}
                <div className={`p-8 rounded-3xl border ${
                  isDark ? 'bg-slate-900/90 border-purple-800/40' : 'bg-white border-purple-200 shadow-xl'
                }`}>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-purple-900/30">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
                        <Music className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-purple-300">miya & Humal サイド</h3>
                        <p className="text-xs font-mono text-purple-400">@miya_SUEMYST / @whisky_tail</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs opacity-70">概算収支</div>
                      <div className="text-2xl font-black text-emerald-400">≒ +90,000円</div>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <span>楽曲エントリーフィー収入 (100曲 × 1,000円)</span>
                      <span className="font-bold text-emerald-400">+100,000円</span>
                    </div>

                    <div className="flex justify-between items-center p-3 rounded-xl bg-rose-500/10 border border-rose-500/20">
                      <span>楽曲買取費用 (選定分)</span>
                      <span className="font-bold text-rose-400">-10,000円〜</span>
                    </div>
                  </div>
                </div>

                {/* Kosaka Financial Card */}
                <div className={`p-8 rounded-3xl border ${
                  isDark ? 'bg-slate-900/90 border-pink-800/40' : 'bg-white border-pink-200 shadow-xl'
                }`}>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-pink-900/30">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-pink-500/20 text-pink-400">
                        <Mic className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-pink-300">小坂さん サイド</h3>
                        <p className="text-xs opacity-70">シンガー・CD制作管理</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs opacity-70">概算収支</div>
                      <div className="text-2xl font-black text-rose-400">≒ -30,000円〜</div>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <span>オーディションフィー収入 (10名 × 10,000円)</span>
                      <span className="font-bold text-emerald-400">+100,000円</span>
                    </div>

                    <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/40">
                      <span className="opacity-80">CD制作・レコーディング費</span>
                      <span className="font-semibold text-rose-400">-80,000円〜</span>
                    </div>

                    <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/40">
                      <span className="opacity-80">プロモーション・広告費</span>
                      <span className="font-semibold text-rose-400">-30,000円〜</span>
                    </div>

                    <div className="flex justify-between items-center p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/40">
                      <span className="opacity-80">運営費・審査費用</span>
                      <span className="font-semibold text-rose-400">-20,000円〜</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note callout */}
              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-400 font-bold block mb-1 text-base">収支に関する補足事項</strong>
                  上記は概算です。CDの制作枚数・流通方法・プロモーション規模によって変動します。
                  <strong>CD販売収益・配信収益の分配</strong>については、miya・Humal・小坂さん間で別途協議のうえ決定してください。
                </div>
              </div>
            </section>


            {/* SECTION 6: SCHEDULE */}
            <section id="schedule" className="scroll-mt-24">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">TIMELINE</span>
                <h2 className="text-3xl font-extrabold mt-1">スケジュール（案）</h2>
                <p className="text-sm opacity-75 mt-2">2026年8月〜2027年3月 CDリリースまでのロードマップ</p>
              </div>

              <div className={`p-8 rounded-3xl border overflow-x-auto ${
                isDark ? 'bg-slate-900/80 border-cyan-900/40' : 'bg-white border-slate-200 shadow-xl'
              }`}>
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b border-cyan-900/30 text-xs uppercase tracking-wider opacity-70">
                      <th className="py-3 px-4">フェーズ</th>
                      <th className="py-3 px-4">期間 (目安)</th>
                      <th className="py-3 px-4">担当</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40 text-sm">
                    <tr className="hover:bg-cyan-500/5 transition-colors">
                      <td className="py-4 px-4 font-semibold flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                        企画発表・告知開始
                      </td>
                      <td className="py-4 px-4 font-mono">2026年8月〜</td>
                      <td className="py-4 px-4"><span className="px-2.5 py-1 rounded-full bg-slate-800 text-xs">全員</span></td>
                    </tr>
                    <tr className="hover:bg-cyan-500/5 transition-colors">
                      <td className="py-4 px-4 font-semibold flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                        AI楽曲クリエイター エントリー受付
                      </td>
                      <td className="py-4 px-4 font-mono">2026年8月〜9月 (約2ヶ月)</td>
                      <td className="py-4 px-4"><span className="px-2.5 py-1 rounded-full bg-purple-900/40 text-purple-300 text-xs border border-purple-500/30">miya & Humal</span></td>
                    </tr>
                    <tr className="hover:bg-cyan-500/5 transition-colors">
                      <td className="py-4 px-4 font-semibold flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                        楽曲審査・買取
                      </td>
                      <td className="py-4 px-4 font-mono">2026年10月</td>
                      <td className="py-4 px-4"><span className="px-2.5 py-1 rounded-full bg-indigo-900/40 text-indigo-300 text-xs border border-indigo-500/30">miya, Humal, 小坂さん</span></td>
                    </tr>
                    <tr className="hover:bg-cyan-500/5 transition-colors">
                      <td className="py-4 px-4 font-semibold flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span>
                        シンガー エントリー受付
                      </td>
                      <td className="py-4 px-4 font-mono">2026年10月〜11月 (約2ヶ月)</td>
                      <td className="py-4 px-4"><span className="px-2.5 py-1 rounded-full bg-pink-900/40 text-pink-300 text-xs border border-pink-500/30">小坂さん</span></td>
                    </tr>
                    <tr className="hover:bg-cyan-500/5 transition-colors">
                      <td className="py-4 px-4 font-semibold flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                        審査・最終選考
                      </td>
                      <td className="py-4 px-4 font-mono">2026年12月</td>
                      <td className="py-4 px-4"><span className="px-2.5 py-1 rounded-full bg-pink-900/40 text-pink-300 text-xs border border-pink-500/30">小坂さん</span></td>
                    </tr>
                    <tr className="hover:bg-cyan-500/5 transition-colors">
                      <td className="py-4 px-4 font-semibold flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                        CDレコーディング・制作
                      </td>
                      <td className="py-4 px-4 font-mono">2027年1月〜2月</td>
                      <td className="py-4 px-4"><span className="px-2.5 py-1 rounded-full bg-pink-900/40 text-pink-300 text-xs border border-pink-500/30">小坂さん</span></td>
                    </tr>
                    <tr className="bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-amber-900/20 font-bold text-amber-300">
                      <td className="py-4 px-4 flex items-center gap-2">
                        <Disc className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
                        🎵 CDリリース (目標)
                      </td>
                      <td className="py-4 px-4 font-mono text-base">2027年3月 (目標)</td>
                      <td className="py-4 px-4"><span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs border border-amber-500/40">全メンバー</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>


            {/* SECTION 7: PROMOTION & TERMS */}
            <section id="terms" className="scroll-mt-24 space-y-8">
              {/* Promotion */}
              <div className={`p-8 rounded-3xl border ${
                isDark ? 'bg-slate-900/80 border-purple-900/40' : 'bg-white border-slate-200 shadow-xl'
              }`}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-purple-300">
                  <Megaphone className="w-5 h-5 text-purple-400" /> 告知・プロモーション戦略 (案)
                </h3>
                <ul className="space-y-3 text-sm opacity-90">
                  <li className="flex items-start gap-3">
                    <span className="p-1 rounded bg-purple-500/20 text-purple-400 shrink-0 mt-0.5">▶</span>
                    <span><strong>SNS（Instagram / X / TikTok）にて企画を広告配信。</strong> 参加クリエイター・シンガーによる拡散でムーブメント創出</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="p-1 rounded bg-purple-500/20 text-purple-400 shrink-0 mt-0.5">▶</span>
                    <span><strong>音楽系YouTuber・インフルエンサーへのタイアップ依頼</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="p-1 rounded bg-purple-500/20 text-purple-400 shrink-0 mt-0.5">▶</span>
                    <span><strong>Spotify / Apple Music など</strong> 音楽配信プラットフォームへのCD楽曲登録</span>
                  </li>
                </ul>
              </div>

              {/* Terms */}
              <div className={`p-8 rounded-3xl border ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
              }`}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-amber-400">
                  <Scale className="w-5 h-5" /> 応募規約 (要点)
                </h3>

                <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-semibold flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                  <div>
                    <strong className="block text-rose-400 mb-0.5">重要：エントリーフィーは原則返金不可</strong>
                    楽曲エントリーフィー（1,000円）・シンガーオーディションフィー（10,000円）は、いかなる理由においても原則として返金いたしません。
                  </div>
                </div>

                <ol className="space-y-3 text-sm opacity-90 list-decimal pl-5">
                  <li>エントリー楽曲は商用利用可能なAI生成楽曲に限ります</li>
                  <li>楽曲の著作権・使用権については、買取時にmiyaを通じて共同主催者（miya・Humal・小坂さん）へ移転するものとします</li>
                  <li>シンガーのオーディション音源の著作隣接権は共同主催者に帰属するものとします</li>
                  <li>CD販売・配信収益の分配については、miya・Humal・小坂さん 間で別途書面にて合意するものとします</li>
                  <li>応募者は本企画の規約に同意したものとみなします</li>
                </ol>
              </div>
            </section>


            {/* SECTION 8: CONTACT */}
            <section id="contact" className={`p-8 rounded-3xl border ${
              isDark ? 'bg-gradient-to-br from-slate-900 via-purple-950/40 to-slate-900 border-purple-800/40' : 'bg-white border-slate-200 shadow-xl'
            }`}>
              <div className="text-center mb-8">
                <span className="text-xs font-bold tracking-widest text-purple-400 uppercase">CONTACT</span>
                <h2 className="text-2xl font-bold mt-1">お問い合わせ・窓口情報</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl border border-purple-500/30 bg-purple-950/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Music className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="text-xs opacity-70">AI楽曲エントリー窓口</div>
                      <div className="text-xl font-extrabold text-purple-300">miya / Humal</div>
                    </div>
                  </div>
                  <div className="text-xs opacity-80 space-y-1">
                    <div>AI楽曲クリエイター統括</div>
                    <div className="font-mono text-purple-300 flex flex-wrap items-center gap-2 mt-1">
                      <span className="flex items-center gap-1"><AtSign className="w-3.5 h-3.5" /> miya_SUEMYST</span>
                      <span className="flex items-center gap-1"><AtSign className="w-3.5 h-3.5" /> whisky_tail</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl border border-pink-500/30 bg-pink-950/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Mic className="w-6 h-6 text-pink-400" />
                    <div>
                      <div className="text-xs opacity-70">シンガー・CD制作窓口</div>
                      <div className="text-xl font-extrabold text-pink-300">小坂さん</div>
                    </div>
                  </div>
                  <div className="text-xs opacity-80 space-y-1">
                    <div>シンガーオーディション・CD制作統括</div>
                    <div>連絡先：（ご記入欄）</div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-slate-800/40 text-center text-xs opacity-60 no-print">
        <p>AI × VOICE PROJECT — 2026 © (miya @miya_SUEMYST & Humal @whisky_tail) × 小坂さん</p>
      </footer>
    </div>
  );
}

{/* Helper components for slides */}
function CoverSlide({ isDark }) {
  return (
    <div className="text-center py-12">
      <span className="px-4 py-1.5 rounded-full border border-purple-500/40 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-6 inline-block">
        NEW AUDITION PROJECT 2026
      </span>
      <h1 className="text-5xl font-black text-gradient mb-4">AI × VOICE PROJECT</h1>
      <p className="text-xl text-purple-200 mb-10">〜 AIが生んだ楽曲に、本物の声を乗せる 〜</p>

      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-left mb-8">
        <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-950/30">
          <div className="text-xs opacity-70">AI楽曲統括</div>
          <div className="font-bold text-purple-300 text-base">miya & Humal</div>
          <div className="text-xs font-mono text-purple-400">@miya_SUEMYST / @whisky_tail</div>
        </div>
        <div className="p-4 rounded-xl border border-pink-500/30 bg-pink-950/30">
          <div className="text-xs opacity-70">シンガー・CD制作</div>
          <div className="font-bold text-pink-300 text-lg">小坂さん</div>
          <div className="text-xs opacity-75">オーディション・資金負担</div>
        </div>
      </div>
      <div className="text-xs opacity-50">発行日：2026年7月30日</div>
    </div>
  );
}

function ConceptSlide({ isDark }) {
  return (
    <div className="space-y-6">
      <div className="text-xs font-bold text-purple-400 uppercase tracking-wider">CONCEPT</div>
      <h2 className="text-3xl font-extrabold">企画概要 & 主催体制</h2>

      <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-lg leading-relaxed">
        本企画は、<strong>AI音楽クリエイターが制作した楽曲</strong>に命を吹き込む<strong>リアルシンガー</strong>を発掘する、まったく新しいオーディションプロジェクトです。
        AIと人間の声が融合する時代に、「作る才能」と「歌う才能」をマッチングさせ、<strong>CDデビューという夢の舞台</strong>へと導きます。
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-xl border border-purple-500/30">
          <div className="font-bold text-purple-300">miya & Humal</div>
          <div className="text-xs opacity-75">AI楽曲の募集・審査・管理・フィー回収</div>
        </div>
        <div className="p-4 rounded-xl border border-pink-500/30">
          <div className="font-bold text-pink-300">小坂さん</div>
          <div className="text-xs opacity-75">シンガー募集・審査・運営・CD制作資金負担</div>
        </div>
      </div>
    </div>
  );
}

function ProcessSlide({ isDark }) {
  return (
    <div className="space-y-6">
      <div className="text-xs font-bold text-pink-400 uppercase tracking-wider">PROCESS</div>
      <h2 className="text-3xl font-extrabold">企画の流れ</h2>
      <div className="space-y-3 text-sm">
        <div className="p-3 rounded-xl border border-purple-500/30 flex items-center justify-between">
          <span><strong>STEP 01</strong>: AI楽曲エントリー (100曲募集 / 1,000円)</span>
          <span className="text-xs text-purple-300">miya & Humal</span>
        </div>
        <div className="p-3 rounded-xl border border-indigo-500/30 flex items-center justify-between">
          <span><strong>STEP 02</strong>: 楽曲審査・買取り (優秀楽曲を1万円で買取)</span>
          <span className="text-xs text-indigo-300">miya & Humal</span>
        </div>
        <div className="p-3 rounded-xl border border-pink-500/30 flex items-center justify-between">
          <span><strong>STEP 03</strong>: シンガー オーディション (10名募集 / 1万円)</span>
          <span className="text-xs text-pink-300">小坂さん</span>
        </div>
        <div className="p-3 rounded-xl border border-blue-500/30 flex items-center justify-between">
          <span><strong>STEP 04</strong>: 審査・最終選考 (書類 → 実技 → 投票)</span>
          <span className="text-xs text-blue-300">共同</span>
        </div>
        <div className="p-4 rounded-xl border border-amber-500/50 bg-amber-500/10 flex items-center justify-between font-bold text-amber-300">
          <span><strong>STEP 05</strong>: 🏆 優勝者1名 CDデビュー (シングルCD全国リリース)</span>
          <span className="text-xs">小坂さん 資金負担</span>
        </div>
      </div>
    </div>
  );
}

function GuidelinesSlide({ isDark }) {
  return (
    <div className="space-y-6">
      <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider">REQUIREMENTS</div>
      <h2 className="text-3xl font-extrabold">募集要項</h2>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="p-4 rounded-2xl border border-purple-500/30 space-y-2">
          <div className="font-bold text-purple-300 text-base">AI楽曲部門 (miya & Humal)</div>
          <div>• 募集: 100曲 (先着)</div>
          <div>• エントリー: 1,000円/曲</div>
          <div>• 買取: 通過曲を10,000円で買取</div>
          <div>• ジャンル: 不問 (商用利用可能AI)</div>
        </div>

        <div className="p-4 rounded-2xl border border-pink-500/30 space-y-2">
          <div className="font-bold text-pink-300 text-base">シンガー部門 (小坂さん)</div>
          <div>• 募集: 10名 (書類通過者)</div>
          <div>• フィー: 10,000円/名</div>
          <div>• 資格: 年齢・性別・プロアマ不問</div>
          <div>• 選考: 書類 → 実技 → 最終選考</div>
        </div>
      </div>
    </div>
  );
}

function FinancialsSlide({ isDark, creatorBalance, kosakaBalance }) {
  return (
    <div className="space-y-6">
      <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">FINANCIALS</div>
      <h2 className="text-3xl font-extrabold">収支シミュレーション</h2>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="p-5 rounded-2xl border border-purple-500/30 space-y-2">
          <div className="font-bold text-purple-300">miya & Humal サイド</div>
          <div className="text-emerald-400 font-semibold">+100,000円 (楽曲エントリー)</div>
          <div className="text-rose-400 font-semibold">-10,000円 (楽曲買取)</div>
          <div className="pt-2 border-t border-purple-900/30 font-bold text-lg text-emerald-300">
            収支 ≒ +90,000円
          </div>
        </div>

        <div className="p-5 rounded-2xl border border-pink-500/30 space-y-2">
          <div className="font-bold text-pink-300">小坂さん サイド</div>
          <div className="text-emerald-400 font-semibold">+100,000円 (オーディション)</div>
          <div className="text-rose-400 font-semibold">-130,000円 (制作・広告・運営)</div>
          <div className="pt-2 border-t border-pink-900/30 font-bold text-lg text-rose-400">
            収支 ≒ -30,000円〜
          </div>
        </div>
      </div>
      <p className="text-xs opacity-70">※CD販売・配信収益の分配は別途協議にて決定</p>
    </div>
  );
}

function ScheduleSlide({ isDark }) {
  return (
    <div className="space-y-6">
      <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">SCHEDULE</div>
      <h2 className="text-3xl font-extrabold">スケジュール</h2>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between p-2.5 rounded-lg border border-slate-800">
          <span>2026年8月〜</span>
          <span>企画発表・告知開始 (全員)</span>
        </div>
        <div className="flex justify-between p-2.5 rounded-lg border border-purple-900/30 bg-purple-950/20">
          <span>2026年8月〜9月</span>
          <span>AI楽曲 エントリー受付 (miya & Humal)</span>
        </div>
        <div className="flex justify-between p-2.5 rounded-lg border border-indigo-900/30">
          <span>2026年10月</span>
          <span>楽曲審査・買取 (miya, Humal, 小坂さん)</span>
        </div>
        <div className="flex justify-between p-2.5 rounded-lg border border-pink-900/30 bg-pink-950/20">
          <span>2026年10月〜11月</span>
          <span>シンガー エントリー受付 (小坂さん)</span>
        </div>
        <div className="flex justify-between p-2.5 rounded-lg border border-amber-900/30 font-bold text-amber-300">
          <span>2027年3月 (目標)</span>
          <span>🎵 CDリリース (全員)</span>
        </div>
      </div>
    </div>
  );
}

function TermsSlide({ isDark }) {
  return (
    <div className="space-y-6">
      <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">TERMS & CONTACT</div>
      <h2 className="text-3xl font-extrabold">規約・お問い合わせ</h2>

      <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold">
        ⚠️ エントリーフィー（1,000円） / オーディションフィー（10,000円）は原則返金不可。
      </div>

      <div className="grid grid-cols-2 gap-4 text-xs">
        <div className="p-4 rounded-xl border border-purple-500/30">
          <div className="font-bold text-purple-300 text-sm mb-1">AI楽曲窓口</div>
          <div>miya (@miya_SUEMYST)</div>
          <div>Humal (@whisky_tail)</div>
        </div>
        <div className="p-4 rounded-xl border border-pink-500/30">
          <div className="font-bold text-pink-300 text-sm mb-1">シンガー窓口</div>
          <div>小坂さん (オーディション・CD制作)</div>
        </div>
      </div>
    </div>
  );
}

function ProcessStepCard({ step, title, tag, tagColor, owner, desc, icon, isDark }) {
  return (
    <div className={`p-5 rounded-2xl border transition-all hover:translate-x-1 ${
      isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-md'
    }`}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 font-bold text-purple-300 flex items-center justify-center text-sm shrink-0">
            {step}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${tagColor}`}>
                {tag}
              </span>
              <span className="text-xs opacity-60">{owner}</span>
            </div>
            <h4 className="font-bold text-base flex items-center gap-2">
              {icon} {title}
            </h4>
          </div>
        </div>
      </div>
      <p className="mt-2 text-xs opacity-75 pl-14">{desc}</p>
    </div>
  );
}
