export default function Hero() {
  return (
    <section className="min-h-screen w-full bg-linear-to-br from-gray-50 to-gray-200 flex items-center py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* TEXT */}
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-6xl font-extrabold leading-tight">
            <span className="bg-linear-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Andy Wijaya
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-md">
            I develop APIs, manage servers, and implement monitoring and observability for long-term stability.
          </p>
        </div>

        {/* IMAGE AREA */}
        <div className="relative flex justify-center animate-fade-in delay-300">
          <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/30 border border-white/40">
            <img
              src="https://avatars.githubusercontent.com/u/79361187"
              alt="Profile"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
            />
          </div>

          {/* Glow */}
          <div className="absolute -inset-10 bg-green-900/10 blur-[120px]"></div>
        </div>
      </div>
    </section>
  );
}
