import Container from "../layout/Container";
import Placeholder from "../ui/Placeholder";

export default function CEO() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Placeholder height="h-80" />

          <div>
            <h2 className="text-3xl font-semibold">
              Рустам Таржакаев
            </h2>

            <p className="mt-6 text-muted">
              Создатель методологии TeamRise.
              Отвечает за библиотеку сценариев
              и лично курирует развитие продукта.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
