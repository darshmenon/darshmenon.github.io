import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Home | Darsh Menon" },
    { name: "description", content: "Portfolio Home" },
    { property: "og:image", content: "https://darshmenon.github.io/assets/seo/home_preview.png" },
    { name: "twitter:image", content: "https://darshmenon.github.io/assets/seo/home_preview.png" },
  ];
}

export default function Home() {
  return <Welcome />;
}
