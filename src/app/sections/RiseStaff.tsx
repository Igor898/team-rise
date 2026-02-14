import Container from "../layout/Container";
import Placeholder from "../ui/Placeholder";

export default function RiseStaff() {
  return (
    <section className="py-24 bg-soft">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold">
              Rise Staff — управление через оргструктуру
            </h2>

            <p className="mt-6 text-muted">
              Оргструктура — это ядро системы. В ней создаются отделы,
              назначаются должности и добавляются сотрудники.
            </p>

            <ul className="mt-8 space-y-3 text-muted">
              <li>— Одна должность = один сотрудник</li>
              <li>— Доступ к модулю «Работа» только через структуру</li>
              <li>— Управление ролями и правами</li>
            </ul>
          </div>

          <Placeholder height="h-96" />
        </div>
      </Container>
    </section>
  );
}
