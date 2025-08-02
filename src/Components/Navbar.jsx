import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";
function Navbar() {
  const navLink = [
    {
      name: "Home",
      icon: <FaHome />,
      href: "#",
    },
    {
      name: "About",
      icon: <FaInfoCircle />,
      href: "#",
    },
    {
      name: "Services",
      icon: <FaServicestack />,
      href: "#",
    },
    {
      name: "Contact",
      icon: <FaEnvelope />,
      href: "#",
    },
  ];

  return (
    <>
      <nav className="bg-gray-900 text-white p-4">
        <div className="container flex mx-auto items-center justify-between">
          <h1 className="text-2xl font-bold">🚀 My Website</h1>
          <ul className="flex space-x-6">
            {/* <li className="flex hover:cursor-pointer  hover:text-blue-600">
              <a href="#" className="flex items-center gap-1">
                <FaHome />
                Home
              </a>
            </li>
            <li className="flex hover:cursor-pointer hover:text-blue-600">
              <a href="#" className="flex items-center gap-1">
                <FaInfoCircle />
                About
              </a>
            </li>
            <li className="flex hover:cursor-pointer hover:text-blue-600">
              <a href="#" className="flex items-center gap-1">
                <FaServicestack />
                Services
              </a>
            </li>
            <li className="hover:cursor-pointer hover:text-blue-600">
              <a href="#" className="flex items-center gap-1">
                <FaEnvelope />
                Contact
              </a>
            </li> */}
            {navLink.map((link, index) => (
              <li
                className="flex hover:cursor-pointer  hover:text-blue-600"
                key={index}
              >
                <a href={link.href} className="flex items-center gap-1">
                  {/* <FaHome /> */ link.icon}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
