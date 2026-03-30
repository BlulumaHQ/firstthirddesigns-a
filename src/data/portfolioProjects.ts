export interface PortfolioProject {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  cover: string;
  hero: string;
  gallery: string[];
}

const projects: PortfolioProject[] = [
  {
    slug: "dripneedle-med-spa",
    name: "DripNeedle Med Spa",
    tagline: "A brand experience, not just a website.",
    description:
      "We elevated her visual design, restructured her service flow, and spotlighted her expertise to create a digital presence that feels premium, professional, and unmistakably DripNeedle. Now, her site communicates the high-touch, results-driven care she's known for.",
    cover: "https://static.showit.co/1600/FCEBECixG_oi_9Es4VArjA/235620/20.png",
    hero: "https://static.showit.co/1600/FCEBECixG_oi_9Es4VArjA/235620/20.png",
    gallery: [
      "https://static.showit.co/1200/fG4m4xKxTJAPV1rx4ZMn4Q/235620/mock_ups.png",
      "https://static.showit.co/1200/n6H7Rj05r5Z0700SG0gu0A/235620/21.png",
    ],
  },
  {
    slug: "klover-beauty",
    name: "Klover Beauty",
    tagline: "Turning vision into a cohesive brand.",
    description:
      "Klover had the colors, vibe, and vision — but needed help pulling it all together. We created a beauty brand website design that turned her inspiration into a cohesive, elevated, and functional site that finally brings her fairytale vision to life.",
    cover: "https://static.showit.co/1200/og4z50CXUl4oxPI9GpWkmg/235620/annie-spratt-h5juyyspcdc-unsplash.jpg",
    hero: "https://static.showit.co/1200/og4z50CXUl4oxPI9GpWkmg/235620/annie-spratt-h5juyyspcdc-unsplash.jpg",
    gallery: [
      "https://static.showit.co/800/mu0nYeT5aYHJ_YWfTNiy4w/235620/4.png",
      "https://static.showit.co/800/N01v6R85EAJ4JZpbEvuzAg/235620/florist.png",
    ],
  },
  {
    slug: "cait-designs",
    name: "Cait Designs",
    tagline: "A creative home her brand deserves.",
    description:
      "Like many creatives, Cait was so focused on her clients that her own site sat unfinished. We designed a Showit website that showcases her portfolio, organizes her services, and captures her artistic personality — a polished site that finally feels like the creative home her brand deserves.",
    cover: "https://static.showit.co/1200/KGeYD_o-a4YbGX-rTqnm3Q/235620/cherrydeck-ovwc3lehrz8-unsplash.jpg",
    hero: "https://static.showit.co/1200/KGeYD_o-a4YbGX-rTqnm3Q/235620/cherrydeck-ovwc3lehrz8-unsplash.jpg",
    gallery: [
      "https://static.showit.co/800/Q3lo-QOdKEvqGw6irMREkA/235620/33.png",
      "https://static.showit.co/800/ZKGcK-rZamHuLDZqZ7iYtw/235620/event_space.png",
    ],
  },
  {
    slug: "kc-childcare",
    name: "KC Childcare",
    tagline: "Professional meets playful.",
    description:
      "As a new business, KC Childcare needed a first website that struck the balance between professional and playful. We designed a family-friendly site with clear program details, welcoming visuals, and local SEO to help parents find and trust them.",
    cover: "https://static.showit.co/1200/X3FXO9qBpvZEabMNuQbLhA/235620/screencapture-firstandthirddesigns-63-showitpreview-home-2025-09-08-15_02_40.png",
    hero: "https://static.showit.co/1200/X3FXO9qBpvZEabMNuQbLhA/235620/screencapture-firstandthirddesigns-63-showitpreview-home-2025-09-08-15_02_40.png",
    gallery: [],
  },
  {
    slug: "chestertown-farmers-market",
    name: "Chestertown Farmers Market",
    tagline: "A digital presence matching market-day energy.",
    description:
      "Their old website wasn't pulling in visitors the way the Saturday market does. We built a refreshed nonprofit website design with vendor highlights, event updates, and a newsletter signup to bring more eyes — and feet — to the market.",
    cover: "https://static.showit.co/1200/kD9N8LsPA5xju58h4vuRQQ/235620/pexels-esranurkalay-13673111.jpg",
    hero: "https://static.showit.co/1200/kD9N8LsPA5xju58h4vuRQQ/235620/pexels-esranurkalay-13673111.jpg",
    gallery: [],
  },
  {
    slug: "wryly-edits",
    name: "Wryly Edits",
    tagline: "Effortless and client-ready.",
    description:
      "Wryly started building her own site but quickly realized it didn't feel cohesive. We stepped in to create a professional Showit website design with clean navigation, strategic SEO, and a layout that reflects her witty, approachable voice.",
    cover: "https://static.showit.co/1600/MQIJA2ySuQuyAiry9mNTaw/235620/pexels-merilisdayoff-18204711.jpg",
    hero: "https://static.showit.co/1600/MQIJA2ySuQuyAiry9mNTaw/235620/pexels-merilisdayoff-18204711.jpg",
    gallery: [],
  },
];

export default projects;
