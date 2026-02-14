import Container from "../layout/Container";

export default function Problem() {
  const items = [
    "Нанимают по резюме, а не по действиям",
    "Адаптация хаотичная",
    "Контроль через отчёты",
    "Мотивация не управляется",
  ];

  return (
    <section className="py-24 bg-soft">
      <Container>
        <h2 className="text-3xl font-semibold">
          Отдел продаж не управляется как система
        </h2>

        <ul className="mt-10 space-y-4 text-muted">
          {items.map((item) => (
            <li key={item}>— {item}</li>
          ))}
        </ul>

        <p className="mt-10 text-lg font-medium">
          Отдел продаж работает не как система, а как набор людей.
        </p>
      </Container>
    </section>
  );
}
