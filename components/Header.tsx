"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌡️</span>
          <span className="font-extrabold text-lg" style={{color:"var(--color-vp-navy)"}}>
            Varmepumpe<span style={{color:"var(--color-vp-orange)"}}>Testen</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium" style={{color:"var(--color-vp-muted)"}}>
          <Link href="/beste-varmepumpe" className="hover:text-orange-600 transition-colors">Beste varmepumpe</Link>
          <Link href="/varmepumpe-test" className="hover:text-orange-600 transition-colors">Tester</Link>
          <Link href="/guide" className="hover:text-orange-600 transition-colors">Guide</Link>
          <Link href="/priskalkulator" className="hover:text-orange-600 transition-colors">Kalkulator</Link>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>{open ? <X size={22}/> : <Menu size={22}/>}</button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3 text-sm font-medium">
          <Link href="/beste-varmepumpe" onClick={()=>setOpen(false)}>Beste varmepumpe</Link>
          <Link href="/varmepumpe-test" onClick={()=>setOpen(false)}>Tester</Link>
          <Link href="/guide" onClick={()=>setOpen(false)}>Guide</Link>
        </div>
      )}
    </header>
  );
}
