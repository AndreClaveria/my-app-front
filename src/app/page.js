import Hero from "@/components/UI/Hero";
import Slider from "@/components/UI/Slider";
import BackgroundHero from "../../public/background_hero.jpg";
import articles from "@/data/data.json";
import GridPosts from "@/components/UI/GridPosts";
import NewsLetter from "@/components/UI/NewsLetter";
export default async function Home() {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/graphql`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     query: GET_ARTICLES
  //   }),
  // });

  // const articles = await res.json();

  return (
    <div style={{ height: "3000px" }}>
      <Hero
        subtitle="We talk about"
        title="Cloud computing"
        image={BackgroundHero.src}
        buttonLink="/"
        buttonText="Discover"
      />
      <GridPosts articles={articles} />
      <NewsLetter />
      <Slider />
    </div>
  );
}
