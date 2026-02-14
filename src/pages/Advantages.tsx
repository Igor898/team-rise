import Navbar from "../app/layout/Navbar";
import Container from "../app/layout/Container";

const advantages = [
  "Система вместо хаоса",
  "Управление через действия",
  "Прозрачная оргструктура",
  "Масштабируемая архитектура",
];

export default function Advantages() {
  return (
    <>
      <Navbar />
      <section className="py-24">
        <Container>
          <h1 className="text-4xl font-semibold mb-16">
            Преимущества TeamRise
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((item) => (
              <div
                key={item}
                className="border border-border rounded-xl p-8"
              >
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
