import Navbar from "../app/layout/Navbar";
import Container from "../app/layout/Container";

const plans = [
  {
    name: "Start",
    description: "Базовый функционал для небольших команд.",
  },
  {
    name: "Pro",
    description: "Расширенные уровни и мотивация.",
  },
  {
    name: "Enterprise",
    description: "Индивидуальные условия и интеграции.",
  },
];

export default function Pricing() {
  return (
    <>
      <Navbar />
      <section className="py-24">
        <Container>
          <h1 className="text-4xl font-semibold mb-16">
            Тарифы
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="border border-border rounded-xl p-8"
              >
                <h3 className="text-xl font-semibold">
                  {plan.name}
                </h3>

                <p className="mt-4 text-muted">
                  {plan.description}
                </p>

                <button className="mt-8 w-full bg-[#3499FF] text-white py-3 rounded-lg">
                  Выбрать
                </button>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
