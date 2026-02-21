import { Link } from "react-router-dom";
import img from "../../assets/logo.png";
export default function Navbar() {
  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="font-semibold text-lg hover:opacity-80">
          <img src={img} alt="TeamRise Logo" className="size-12 w-auto" />
        </Link>

        <nav className="hidden md:flex gap-8 text-sm text-muted">
          <Link to="/product" className="hover:text-primary hover:-translate-y-0.5">
            Продукт
          </Link>
          <Link to="/advantages" className="hover:text-primary hover:-translate-y-0.5">
            Преимущества
          </Link>
          <Link to="/pricing" className="hover:text-primary hover:-translate-y-0.5">
            Цены
          </Link>
        </nav>

        <button className="bg-[#3499FF] text-white text-sm px-4 py-2 rounded-lg">
          Запросить демо
        </button>
      </div>
    </header>
  );
}
