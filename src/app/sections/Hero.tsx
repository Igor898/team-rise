import Container from "../layout/Container";
import Placeholder from "../ui/Placeholder";

export default function Hero() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
            Система управления отделом продаж: от найма до результата
          </h1>
          <p className="mt-6 text-lg text-muted">
            TeamRise соединяет найм, адаптацию, ежедневную работу и мотивацию
            продавцов в одной системе.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-lg">
              Запросить демо
            </button>
            <button className="border border-border px-6 py-3 rounded-lg">
              Подробнее
            </button>
          </div>
        </div>

        <div className="mt-16">
          <Placeholder height="h-96" />
        </div>
      </Container>
    </section>
  );
}
