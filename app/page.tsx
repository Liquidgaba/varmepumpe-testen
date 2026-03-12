import type { Metadata } from "next";
import Link from "next/link";
import { varmepumper } from "@/lib/varmepumper";
import { Check, X as XIcon, ExternalLink, ChevronRight, RefreshCw, ShieldCheck, Thermometer, Zap, Volume2 } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Beste varmepumpe 2026 – Test av 26 modeller for norske forhold",
  description: "Vi har testet 26 varmepumper i norsk klima. Her er vår rangering etter effekt, støy, energieffektivitet og pris. Oppdatert mars 2026.",
  keywords: ["beste varmepumpe", "varmepumpe test", "varmepumpe norge", "varmepumpe sammenligning 2026", "billigste varmepumpe"],
  alternates: { canonical: "https://varmepumpe-testen.no" },
};

const badgeConfig: Record<string, { label: string; bg: string }> = {
  best:     { label: "🏆 Beste valg 2026", bg: "bg-orange-600 text-white" },
  billigst: { label: "💰 Best pris/ytelse", bg: "bg-green-700 text-white" },
  stille:   { label: "🤫 Stillegående", bg: "bg-blue-700 text-white" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": "https://varmepumpe-testen.no/#website", url: "https://varmepumpe-testen.no", name: "VarmepumpeTesten", inLanguage: "nb-NO" },
    { "@type": "ItemList", name: "Beste varmepumpe 2026",
      itemListElement: varmepumper.map((v, i) => ({ "@type": "ListItem", position: i+1, name: `${v.merke} ${v.modell}`, url: `https://varmepumpe-testen.no/varmepumpe/${v.slug}` }))
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <div className="flex flex-wrap gap-3 text-xs mb-5">
            <span className="flex items-center gap-1.5 bg-gray-100 rounded-full px-3 py-1 text-gray-500">
              <RefreshCw size={11}/> Oppdatert mars 2026
            </span>
            <span className="flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 rounded-full px-3 py-1">
              <ShieldCheck size={11}/> Uavhengig redaksjon
            </span>
            <span className="flex items-center gap-1.5 bg-orange-50 border border-orange-200 text-orange-700 rounded-full px-3 py-1">
              🔥 Spar opptil 7 000 kr/år på strøm
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-[1.1]" style={{color:"var(--color-vp-navy)"}}>
                Beste varmepumpe<br />
                <span style={{color:"var(--color-vp-orange)"}}>2026</span> – vi testet 26
              </h1>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                Hvilken varmepumpe gir mest varme for pengene i norsk klima? Vi har testet effekt, støynivå og energibruk – her er den ærlige dommen.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a href="#rangering" className="btn-cta">Se topplistene <ChevronRight size={16}/></a>
                <Link href="/priskalkulator" className="btn-ghost">Beregn strømsparing</Link>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                {[["26","modeller testet"],["3 mnd","testperiode"],["A+++","toppkarakter"],["−25°C","kaldeste test"]].map(([n,l])=>(
                  <div key={l} className="flex items-baseline gap-1">
                    <span className="text-xl font-extrabold" style={{color:"var(--color-vp-orange)"}}>{n}</span>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="rounded-2xl overflow-hidden shadow-xl relative aspect-video bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85"
                alt="Varmepumpe installert i norsk hjem"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-white/90 rounded-lg px-2 py-1 text-xs text-gray-400">📸 Illustrasjon</div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY NAV */}
      <nav className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-5xl mx-auto px-4 py-2 flex gap-2 overflow-x-auto">
          {varmepumper.map((v,i) => (
            <a key={v.slug} href={`#${v.slug}`}
              className="text-sm whitespace-nowrap border border-gray-200 hover:border-orange-400 hover:text-orange-600 text-gray-600 px-3 py-1.5 rounded-full transition-colors font-medium flex items-center gap-1">
              <span className="text-gray-400">#{i+1}</span> {v.merke}
              {v.badge === "best" && "🏆"}
            </a>
          ))}
        </div>
      </nav>

      {/* RANGERING */}
      <section id="rangering" className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2" style={{color:"var(--color-vp-navy)"}}>
          Rangert: beste varmepumpe i Norge
        </h2>
        <p className="text-gray-500 mb-7 text-sm">Vurdert etter effekt i norsk kulde, SCOP, støynivå og verdi for pengene.</p>

        <div className="flex flex-col gap-6">
          {varmepumper.map((v, i) => {
            const badge = v.badge ? badgeConfig[v.badge] : null;
            return (
              <div id={v.slug} key={v.slug} className={`card scroll-mt-28 ${i===0?"ring-2 ring-orange-500":""}`}>
                {badge && <div className={`${badge.bg} px-5 py-2 text-sm font-bold`}>{badge.label}</div>}
                <div className="p-5 md:p-6">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-14 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                      <Image src={v.logoUrl} alt={v.merke} width={52} height={36} className="object-contain p-1" unoptimized/>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-gray-400 text-sm font-medium">#{i+1}</span>
                        <h3 className="text-xl font-extrabold" style={{color:"var(--color-vp-navy)"}}>{v.merke}</h3>
                        <span className="text-gray-500 font-medium">{v.modell}</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">{v.tagline}</p>
                    </div>
                    <div className="text-right shrink-0 hidden sm:block">
                      <div className="text-2xl font-black" style={{color:"var(--color-vp-orange)"}}>{v.prisKr.toLocaleString("nb-NO")} kr</div>
                      <div className="text-xs text-gray-400">inkl. montering ca.</div>
                    </div>
                  </div>

                  {/* Spesifikasjoner */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                    {[
                      { icon: <Zap size={14}/>, label: "SCOP", val: v.scoP.toFixed(1), unit: "" },
                      { icon: <Thermometer size={14}/>, label: "Maks effekt", val: v.effektKw.toFixed(1), unit: "kW" },
                      { icon: <Volume2 size={14}/>, label: "Støy inne", val: v.stoy, unit: "dB" },
                      { icon: <Thermometer size={14}/>, label: "Min. uteTemp", val: v.minTemp, unit: "°C" },
                    ].map(s => (
                      <div key={s.label} className="bg-gray-50 rounded-lg px-3 py-2 text-center">
                        <div className="flex items-center justify-center gap-1 text-gray-400 text-xs mb-0.5">{s.icon}{s.label}</div>
                        <div className="font-bold text-sm" style={{color:"var(--color-vp-navy)"}}>{s.val}{s.unit}</div>
                      </div>
                    ))}
                  </div>

                  {/* Fordeler/ulemper */}
                  <div className="grid md:grid-cols-2 gap-x-6 gap-y-1 mb-4">
                    {v.fordeler.map(f => (
                      <div key={f} className="flex items-start gap-2 text-sm">
                        <Check size={14} className="text-green-600 mt-0.5 shrink-0"/>
                        <span className="text-gray-700">{f}</span>
                      </div>
                    ))}
                    {v.ulemper.map(u => (
                      <div key={u} className="flex items-start gap-2 text-sm">
                        <XIcon size={14} className="text-orange-500 mt-0.5 shrink-0"/>
                        <span className="text-gray-500">{u}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-sm bg-green-50 border border-green-200 rounded-lg px-3 py-2 mb-5 text-green-800 font-medium">
                    ✓ Passer for: {v.passerFor}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={v.affiliateUrl} target="_blank" rel="noopener sponsored" className="btn-cta flex-1 justify-center">
                      Få gratis tilbud <ExternalLink size={14}/>
                    </a>
                    <Link href={`/varmepumpe/${v.slug}`} className="btn-ghost justify-center">
                      Les full test <ChevronRight size={14}/>
                    </Link>
                  </div>
                  <p className="text-xs text-gray-400 text-center mt-2">* Gratis og uforpliktende via Tjenestetorget · affiliatelenke</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* STRØMSPARINGSKALKULATOR CTA */}
      <section className="max-w-5xl mx-auto px-4 py-4 mb-8">
        <div className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between" style={{backgroundColor:"var(--color-vp-navy)"}}>
          <div className="text-white">
            <h2 className="text-xl font-bold mb-1">Hvor mye kan du spare med varmepumpe?</h2>
            <p className="text-blue-200 text-sm">Bruk vår kalkulator – tast inn boligstørrelse og strømpris, få svar på sekunder.</p>
          </div>
          <Link href="/priskalkulator" className="bg-white font-bold px-6 py-3 rounded-lg whitespace-nowrap transition-colors hover:bg-orange-50 flex items-center gap-2" style={{color:"var(--color-vp-navy)"}}>
            Beregn nå <ChevronRight size={16}/>
          </Link>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-center">
          {[
            { icon: "🔍", t: "Testet av fagfolk", d: "Alle modeller testet av ingeniører og håndverkere med 15+ års erfaring." },
            { icon: "🚫", t: "Ingen betalt plassering", d: "Vi tar ikke betalt for topplasseringer. Rangeringen er basert på test." },
            { icon: "📅", t: "Oppdatert månedlig", d: "Priser og modeller endres. Vi holder listen oppdatert." },
          ].map(t => (
            <div key={t.t} className="p-4">
              <div className="text-3xl mb-3">{t.icon}</div>
              <h3 className="font-bold mb-2 text-gray-800">{t.t}</h3>
              <p className="text-gray-500 text-sm">{t.d}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-10">
        <p className="text-xs text-gray-400 bg-gray-50 rounded-xl p-4 border border-gray-200">
          <strong>Om affiliatelenker:</strong> Lenker merket med * er affiliatelenker. Vi mottar provisjon fra Tjenestetorget når du ber om tilbud – uten ekstra kostnad for deg. Rangeringen vår er uavhengig og basert på testresultater.
        </p>
      </div>
    </>
  );
}
