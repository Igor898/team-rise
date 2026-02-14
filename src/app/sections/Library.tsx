import Container from "../layout/Container";
import Placeholder from "../ui/Placeholder";

export default function Library() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Placeholder height="h-96" />

          <div>
            <h2 className="text-3xl font-semibold">
              Глобальная библиотека сценариев
            </h2>

            <p className="mt-6 text-muted">
              Готовые демо-должности, уровни и челленджи доступны
              всем компаниям после регистрации.
            </p>

            <ul className="mt-8 space-y-3 text-muted">
              <li>— Можно копировать</li>
              <li>— Можно редактировать</li>
              <li>— Можно комбинировать без ограничений</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
