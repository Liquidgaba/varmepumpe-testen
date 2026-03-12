export interface Varmepumpe {
  slug: string;
  merke: string;
  modell: string;
  tagline: string;
  rating: number;
  anmeldelser: number;
  prisKr: number;
  effektKw: number;
  scoP: number;
  stoy: number; // dB
  minTemp: number; // grader celsius yttertemperatur
  badge?: "best" | "billigst" | "stille";
  fordeler: string[];
  ulemper: string[];
  passerFor: string;
  energiKlasse: string;
  affiliateUrl: string;
  logoUrl: string;
}

export const varmepumper: Varmepumpe[] = [
  {
    slug: "panasonic-bluefin-75",
    merke: "Panasonic",
    modell: "Bluefin 7.5 Flagship NEO",
    tagline: "Testvinner 2026 – best ytelse i norsk kulde, ned til −25°C",
    rating: 4.8,
    anmeldelser: 2341,
    prisKr: 39000,
    effektKw: 7.9,
    scoP: 5.7,
    stoy: 46,
    minTemp: -25,
    badge: "best",
    fordeler: [
      "Dokumentert effekt ned til −25°C",
      "Energiklasse A+++ med SCOP 5,7",
      "Innebygd WiFi og Comfort Cloud-app",
      "nanoe™ X luftrensing inkludert",
      "5 års fabrikkgaranti",
    ],
    ulemper: [
      "Prisen er i øvre sjikt",
      "Krever 16A sikring",
    ],
    passerFor: "Boliger 80–175 m² i områder med kalde vintre",
    energiKlasse: "A+++",
    affiliateUrl: "https://track.adtraction.com/t/t?a=TJENESTETORGET&as=CHANNEL&t=2&tk=",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Panasonic_logo_%28Blue%29.svg/320px-Panasonic_logo_%28Blue%29.svg.png",
  },
  {
    slug: "mitsubishi-kaiteki-6600",
    merke: "Mitsubishi",
    modell: "Kaiteki 6600",
    tagline: "Bestselger i Norge – stilrent design, stille drift og A+++ effektivitet",
    rating: 4.6,
    anmeldelser: 3102,
    prisKr: 32000,
    effektKw: 6.6,
    scoP: 5.2,
    stoy: 19,
    minTemp: -25,
    badge: "stille",
    fordeler: [
      "Kun 19 dB innendørs – nesten lydløs",
      "Plasma Quad Plus luftrenser",
      "Elegant design som passer alle interiører",
      "Fungerer effektivt ned til −25°C",
    ],
    ulemper: [
      "Dyrere enn basismodeller",
      "Mange funksjoner kan oppleves komplekst",
    ],
    passerFor: "Boliger 80–130 m² der støynivå er viktig",
    energiKlasse: "A+++",
    affiliateUrl: "https://track.adtraction.com/t/t?a=TJENESTETORGET&as=CHANNEL&t=2&tk=",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Mitsubishi_Electric_logo.svg/320px-Mitsubishi_Electric_logo.svg.png",
  },
  {
    slug: "wilfa-svalbard-extreme",
    merke: "Wilfa",
    modell: "Svalbard Extreme",
    tagline: "Norsk favoritt – mye varmepumpe for pengene, utviklet for norske forhold",
    rating: 4.5,
    anmeldelser: 1876,
    prisKr: 24900,
    effektKw: 7.2,
    scoP: 4.9,
    stoy: 42,
    minTemp: -25,
    badge: "billigst",
    fordeler: [
      "Best pris/ytelse-forhold",
      "Leverer 5300W ved −15°C",
      "7 års fabrikkgaranti",
      "Spesialutviklet for norsk klima",
    ],
    ulemper: [
      "Noe høyere støynivå enn toppmodellene",
      "Færre smarte funksjoner",
    ],
    passerFor: "Boliger 60–120 m² med godt budsjett-fokus",
    energiKlasse: "A++",
    affiliateUrl: "https://track.adtraction.com/t/t?a=TJENESTETORGET&as=CHANNEL&t=2&tk=",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Wilfa_logo.svg/320px-Wilfa_logo.svg.png",
  },
];
