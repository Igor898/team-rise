import Navbar from "../app/layout/Navbar";
import Container from "../app/layout/Container";
import Placeholder from "../app/ui/Placeholder";

export default function Product() {
  return (
    <>
      <Navbar />
      <section className="py-24">
        <Container>
          <h1 className="text-4xl font-semibold">
            Продукт TeamRise
          </h1>

          <p className="mt-6 text-muted max-w-3xl">
            TeamRise объединяет найм, работу сотрудников и мотивацию
            в единую систему управления отделом продаж.
          </p>

          <div className="mt-16 space-y-24">
            <div>
              <h2 className="text-2xl font-semibold">Модуль Найм</h2>
              <p className="mt-4 text-muted">
                Демо-должности, видео задания и интеграция с HH.
              </p>
              <div className="mt-8">
                <Placeholder height="h-72" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Модуль Работа</h2>
              <p className="mt-4 text-muted">
                Уровни, челленджи и автоматический переход.
              </p>
              <div className="mt-8">
                <Placeholder height="h-72" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Модуль Мотивация</h2>
              <p className="mt-4 text-muted">
                Баллы и внутренний магазин компании.
              </p>
              <div className="mt-8">
                <Placeholder height="h-72" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
