import Container from "../layout/Container";

export default function HowItWorks() {
  const steps = [
    {
      title: "Найм",
      text: "Вы видите, как кандидат работает, до выхода.",
      image: "/teamrise.png",
      alt: "Шаг найма в TeamRise",
    },
    {
      title: "Работа",
      text: "Продавец понимает, что делать и как расти.",
      image: "/work.png",
      alt: "Шаг работы в TeamRise",
    },
    {
      title: "Мотивация",
      text: "Мотивация управляется действиями.",
      image: "/motivation.png",
      alt: "Шаг мотивации в TeamRise",
    },
  ];

  return (
    <section className="py-24 bg-soft">
      <Container>
        <h2 className="text-3xl font-semibold mb-16">
          Как работает продукт
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.title}>
              <div className="overflow-hidden rounded-xl border border-border bg-soft">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="w-full object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-medium">{step.title}</h3>
              <p className="mt-3 text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
