import Container from "../layout/Container";
import Placeholder from "../ui/Placeholder";

export default function Solution() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold">
            Одна логика для всего жизненного цикла продавца
          </h2>

          <p className="mt-6 text-muted">
            Кандидат проходит демо-должность, становится сотрудником,
            развивается через уровни и челленджи, получает баллы
            и управляемую мотивацию.
          </p>
        </div>

        <div className="mt-16">
          <Placeholder height="h-80" />
        </div>
      </Container>
    </section>
  );
}
