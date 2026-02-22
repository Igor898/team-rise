import Navbar from "../app/layout/Navbar";
import Container from "../app/layout/Container";
import Footer from "../app/layout/Footer";

export default function Product() {
  const modules = [
    {
      title: "Модуль Найм",
      text: "Демо-должности, видео задания и интеграция с HH.",
      image: "/teamrise.png",
      alt: "Модуль найма TeamRise",
    },
    {
      title: "Модуль Работа",
      text: "Уровни, челленджи и автоматический переход.",
      image: "/work.png",
      alt: "Модуль работы TeamRise",
    },
    {
      title: "Модуль Мотивация",
      text: "Баллы и внутренний магазин компании.",
      image: "/motivation.png",
      alt: "Модуль мотивации TeamRise",
    },
  ];

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
            {modules.map((module, index) => (
              <div
                key={module.title}
                className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
              >
                <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                  <h2 className="text-2xl font-semibold">{module.title}</h2>
                  <p className="mt-4 text-muted">{module.text}</p>
                </div>

                <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                  <div className="overflow-hidden rounded-2xl border border-border bg-soft shadow-sm">
                    <img
                      src={module.image}
                      alt={module.alt}
                      className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
