import { Header } from "@/components";
import { Hero } from "@/content";

const Home = () => {
  return (
    <main className="relative  ">
      <Header />
      <section className="max-container padding">
        <Hero />
      </section>
    </main>
  )
}

export default Home;