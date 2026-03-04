import { Link } from "react-router-dom";
import Container from "../layout/Container";

export default function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="max-w-2xl animate-fade-up">
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
              Система управления отделом продаж: от найма до результата
            </h1>
            <p className="mt-6 text-lg text-muted">
              TeamRise соединяет найм, адаптацию, ежедневную работу и мотивацию
              продавцов в одной системе.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://rise-staff.vercel.app/" target="_blank" className="bg-[#3499FF] text-white px-6 py-3 rounded-lg hover:bg-[#3499FF]/90 transition text-center">
                Запросить демо
              </a>
              <Link to="/product" className="border border-border px-6 py-3 rounded-lg bg-white hover:bg-gray-50 transition text-center">
                Подробнее
              </Link>
            </div>
          </div>

          <div className="animate-fade-up-delay">
            <div className="overflow-hidden rounded-2xl border border-border bg-soft shadow-sm">
              <img
                src="/image_1_1771441718325.jpg"
                alt="Интерфейс TeamRise"
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
