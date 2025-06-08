import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-4 py-2 flex justify-between items-center">
      <h1 className="text-xl font-bold">Crestwave Studio</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
        <Link to="/portfolio" className="text-gray-700 hover:text-blue-500">Portfolio</Link>
      </div>
    </nav>
  );
}
