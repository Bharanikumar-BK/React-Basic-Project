const Hero = () => {
  return (
    <section className="bg-gray-100 text-center py-16">
      <img
        className="h-64 mx-auto rounded-lg shadow-lg"
        src="https://sphero.com/cdn/shop/articles/coding_languages_1000x.png?v=1619126283"
        alt="Coding Image"
      />
      <h2 className="text-3xl font-bold mt-4">
        🎨 Building Amazing UIs with React&Vite
      </h2>
      <p className="text-gray-400 mt-4">
        ⚡ Fast, Lightweight and Modern frontend development
      </p>
      <button className="bg-blue-400 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition hover:cursor-pointer mt-4">
        💯 Get Started
      </button>
    </section>
  );
};
export default Hero;
