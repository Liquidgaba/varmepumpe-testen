import Link from "next/link";
export default function Footer() {
  return (
    <footer style={{backgroundColor:"var(--color-vp-navy)"}} className="text-white mt-16">
      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3"><span className="text-2xl">🌡️</span>
            <span className="font-extrabold text-lg">Varmepumpe<span style={{color:"var(--color-vp-orange-light)"}}>Testen</span></span>
          </div>
          <p className="text-sm text-gray-400">Uavhengige varmepumpe-tester siden 2024. Vi hjelper nordmenn velge riktig.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-xs uppercase tracking-wide text-gray-400">Tester</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/varmepumpe/panasonic-bluefin-75" className="hover:text-white">Panasonic Bluefin 7.5</Link></li>
            <li><Link href="/varmepumpe/mitsubishi-kaiteki-6600" className="hover:text-white">Mitsubishi Kaiteki</Link></li>
            <li><Link href="/varmepumpe/wilfa-svalbard-extreme" className="hover:text-white">Wilfa Svalbard</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-xs uppercase tracking-wide text-gray-400">Guider</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/guide/velg-varmepumpe" className="hover:text-white">Velg riktig varmepumpe</Link></li>
            <li><Link href="/guide/installasjon" className="hover:text-white">Installasjon og kostnad</Link></li>
            <li><Link href="/priskalkulator" className="hover:text-white">Strømsparingskalkulator</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-xs uppercase tracking-wide text-gray-400">Om oss</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/om-oss" className="hover:text-white">Om VarmepumpeTesten</Link></li>
            <li><Link href="/personvern" className="hover:text-white">Personvern</Link></li>
            <li><Link href="/kontakt" className="hover:text-white">Kontakt</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 max-w-5xl mx-auto px-4 py-4 text-xs text-gray-500">
        © {new Date().getFullYear()} VarmepumpeTesten · Inneholder affiliatelenker
      </div>
    </footer>
  );
}
