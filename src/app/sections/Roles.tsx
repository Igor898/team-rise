import Container from "../layout/Container";

const roles = [
  {
    title: "Собственник / CEO",
    text: "Прозрачность структуры и масштабируемость отдела продаж.",
  },
  {
    title: "РОП",
    text: "Меньше ручного контроля и стандартизированная адаптация.",
  },
  {
    title: "Коммерческий директор",
    text: "Единый стандарт управления результатом.",
  },
];

export default function Roles() {
  return (
    <section className="py-24 bg-soft">
      <Container>
        <h2 className="text-3xl font-semibold mb-16">
          Для кого подходит система
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role) => (
            <div
              key={role.title}
              className="border border-border rounded-xl p-8 bg-white interactive-card"
            >
              <h3 className="text-xl font-medium">{role.title}</h3>
              <p className="mt-4 text-muted">{role.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
