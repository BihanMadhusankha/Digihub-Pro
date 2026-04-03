export interface FBPage {
  name: string;
  followers: string;
  logo?: string;
  color: string;
  basePrice: number;
}

export const corePages: FBPage[] = [
  { name: "SUPUN LIYANARACHCHI", followers: "559k+", logo: "/images/supun liyanarachchi.jpeg", color: "from-blue-500 to-cyan-700", basePrice: 5000 },
  { name: "දිලු", followers: "279k+", logo: "/images/dilu.jpeg", color: "from-green-500 to-emerald-700", basePrice: 3000 },
];

export const nichePages: FBPage[] = [
  { name: "HELA CINEMA", followers: "56k+", logo: "/images/HELA CINEMA.jpeg", color: "from-zinc-600 to-zinc-800", basePrice: 2000 },
  { name: "Walauwa", followers: "31k+", logo: "/images/walauwa.jpeg", color: "from-amber-500 to-orange-700", basePrice: 1000 },
  { name: "Yanthare", followers: "17k+", logo: "/images/yanthare.jpeg", color: "from-sky-500 to-blue-700", basePrice: 500 },
];
