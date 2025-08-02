import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Article from "./Components/Article";
import Tablesection from "./Components/Tablesection";
import Aside from "./Components/Aside";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <div className="container flex flex-col md:flex-row mx-auto p-6">
        <main className="flex-1">
          <Article />
          <Tablesection />
        </main>
        <Aside />
      </div>
      <Footer />
    </>
  );
}

export default App;
