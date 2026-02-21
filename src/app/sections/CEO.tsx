import Container from "../layout/Container";

export default function CEO() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-semibold">
              Рустам Таржакаев
            </h2>

            <p className="mt-6 text-muted">
              Создатель методологии TeamRise.
              Отвечает за библиотеку сценариев
              и лично курирует развитие продукта.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden ml-auto">
              <img
                src="/owner.jpg"
                alt="Рустам Таржакаев"
                className="size-40 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
