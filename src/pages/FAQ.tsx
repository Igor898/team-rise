import Navbar from "../app/layout/Navbar";
import Container from "../app/layout/Container";
import Footer from "../app/layout/Footer";

const questions = [
  {
    title: "Как быстро можно начать пользоваться платформой?",
    answer:
      "Достаточно 15 минут на базовую настройку. Мы предоставляем готовые шаблоны онбординга и обучения, которые можно адаптировать под ваши задачи сразу после регистрации.",
    open: true,
  },
  {
    title: "Интегрируется ли Rise Staff с другими нашими системами (например, 1С или CRM)?",
    open: false,
  },
  {
    title: "Где хранятся данные сотрудников и учебные материалы? Насколько это безопасно?",
    open: false,
  },
  {
    title: "Можно ли настроить программу обучения под специфику нашей компании?",
    open: false,
  },
  {
    title: "Как на практике оценить эффективность платформы для нашего бизнеса?",
    open: false,
  },
];

export default function FAQ() {
  return (
    <>
      <Navbar />
      <section className="py-20">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-4xl font-semibold text-primary">
              Часто задаваемые вопросы
            </h1>
            <button className="self-start sm:self-auto bg-white text-[#3499FF] border border-[#9EC9FF] rounded-full px-6 py-2.5 shadow-[0_6px_18px_rgba(52,153,255,0.22)]">
              #Вопросы
            </button>
          </div>

          <div className="mt-10 space-y-3">
            {questions.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-border bg-[#F5F5F5] px-4 sm:px-6 py-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl sm:text-2xl font-medium text-primary leading-snug">
                    {item.title}
                  </h2>
                  <span className="text-3xl leading-none text-primary">
                    {item.open ? "−" : "+"}
                  </span>
                </div>
                {item.open && (
                  <p className="mt-3 text-muted text-lg leading-relaxed max-w-5xl">
                    {item.answer}
                  </p>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
