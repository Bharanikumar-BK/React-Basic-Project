const Article = () => {
  return (
    <section className="container mx-auto p-6">
      <h2 className="font-bold text-2xl">📰 Latest News</h2>
      <div className="flex flex-col shadow-lg p-4 mt-2 bg-gray-300 sm:flex-row rounded-lg lg:bg-gray-200">
        <img
          className="h-44 rounded-lg shadow-lg sm:h-56"
          src="https://cdn.pixabay.com/photo/2017/06/26/19/03/news-2444778_1280.jpg"
          alt="News Image"
        />

        <div className="ml-4">
          <h2 className="text-xl font-semiboldbold mt-4">
            🚀 Vite is revolutioning frontend
          </h2>
          <p className="text-gray-500 mt-2">
            Vite is a next-gen frontend <br />
            tool that delivers fast <br />
            development
          </p>
        </div>
      </div>
    </section>
  );
};
export default Article;
