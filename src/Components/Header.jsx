const Header = () => {
  return (
    <header
      className="h-96 bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlY2h8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      <h1 className="text-4xl font-bold bg-black/50 rounded-lg backdrop-blur-sm p-4 text-white">
        🚀 Welcome to My Website
      </h1>
    </header>
  );
};
export default Header;
