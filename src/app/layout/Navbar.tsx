import { Link } from "react-router-dom";
import img from "../../assets/logo.png";
export default function Navbar() {
  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
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
            <Link to="/faq" className="hover:text-primary hover:-translate-y-0.5">
              FAQ
            </Link>
          </nav></div>

        <div className="flex gap-4">
          <button className="text-sm px-4 py-2 rounded-lg border border-[#9EC9FF] text-[#3499FF] hover:bg-[#3499FF] hover:text-white transition">
            Войти
          </button>
          <Link to="/pricing" className="bg-[#3499FF] text-white text-sm px-4 py-2 rounded-lg">
            Подобрать тариф
          </Link>
        </div>
      </div>
    </header>
  );
}
