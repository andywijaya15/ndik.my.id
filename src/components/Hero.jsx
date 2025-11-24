import { Card } from "./Card";

export default function Hero() {
  return (
    <>
      <div
        className="hero w-full min-h-screen bg-cover bg-center"
        id="home"
        style={{
          // backgroundImage: `url("/mm_photography-937.jpg")`,
          backgroundImage: `url("/DSC01240.jpeg")`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left px-6 gap-10">
          {/* <img src="DSC01240.jpeg" className="w-40 sm:w-56 rounded-lg shadow-2xl" /> */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold">👋 Hey, I'm Andy</h1>
            <p className="py-6 max-w-md">
              I’m a full-stack developer who loves crafting clean, scalable web applications. My goal is to build
              solutions that offer both exceptional performance and a delightful user experience.
            </p>
          </div>
        </div>
      </div>
      <section className="bg-base-100 py-20 px-6 min-h-screen" id="my-projects">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card
            title="Warehouse Managemenet System"
            desc="A full-featured warehouse management system that tracks inventory, automates stock updates, and integrates with ERP solutions for real-time monitoring."
            image="Jenis-gudang-dan-kelebihannya.jpg"
          />
          <Card
            title="Point Of Sales"
            desc="A user-friendly POS system for retail stores, enabling fast checkout, sales reporting, and inventory synchronization."
            image="Kasir-1024x683.jpg"
          />
          <Card
            title="Document Control"
            desc="A document management solution to organize, track, and secure company documents with version control and access permissions."
            image="Documents-2.jpg"
          />
        </div>
      </section>
    </>
  );
}
