import Container from "../layout/Container";
import Placeholder from "../ui/Placeholder";

export default function HowItWorks() {
  const steps = [
    {
      title: "Найм",
      text: "Вы видите, как кандидат работает, до выхода.",
    },
    {
      title: "Работа",
      text: "Продавец понимает, что делать и как расти.",
    },
    {
      title: "Мотивация",
      text: "Мотивация управляется действиями.",
    },
  ];

  return (
    <section className="py-24">
      <Container>
        <h2 className="text-3xl font-semibold mb-16">
          Как работает продукт
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.title}>
              <Placeholder height="h-40" />
              <h3 className="mt-6 text-xl font-medium">{step.title}</h3>
              <p className="mt-3 text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
