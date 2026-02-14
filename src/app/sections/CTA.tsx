import Container from "../layout/Container";

export default function CTA() {
  return (
    <section className="py-24 bg-primary text-white">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold">
            Выстраивайте отдел продаж как систему
          </h2>

          <p className="mt-6 text-white/80">
            Оставьте заявку и получите демонстрацию продукта.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <input
              placeholder="Имя"
              className="px-4 py-3 rounded-lg text-primary w-full"
            />
            <input
              placeholder="Телефон"
              className="px-4 py-3 rounded-lg text-primary w-full"
            />
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium">
              Запросить демо
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
