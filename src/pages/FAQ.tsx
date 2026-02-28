import { useState } from "react";
import Navbar from "../app/layout/Navbar";
import Container from "../app/layout/Container";
import Footer from "../app/layout/Footer";

const questions = [
  {
    title: "Как быстро можно начать пользоваться платформой?",
    answer: [
      "Достаточно 15 минут на базовую настройку.",
      "Мы предоставляем готовые шаблоны онбординга и обучения, которые можно адаптировать под ваши задачи сразу после регистрации.",
    ],
  },
  {
    title: "Интегрируется ли Rise Staff с другими нашими системами (например, 1C или CRM)?",
    answer: [
      "Да, TeamRise легко интегрируется с 1С, CRM и другими системами.",
      "Уже есть готовая связь с HeadHunter, а для всего остального используем API, no-code сервисы или быструю кастомную доработку, без ограничений и барьеров.",
    ],
  },
  {
    title: "Где хранятся данные сотрудников и учебные материалы? Насколько это безопасно?",
    answer: [
      "Данные сотрудников и учебные материалы хранятся в защищённом облаке TeamRise.",
      "Мы обеспечиваем высокий уровень безопасности в соответствии с требованиями российского законодательства (152-ФЗ), включая шифрование, контроль доступа, аудит действий и защиту от несанкционированного проникновения, всё как в современных HR-платформах.",
    ],
  },
  {
    title: "Можно ли настроить программу обучения под специфику нашей компании?",
    answer: [
      "Да, программу обучения в TeamRise можно полностью настроить под специфику вашей компании.",
      "Глобальная библиотека позволяет копировать, редактировать, дополнять и комбинировать любые блоки (демо-должности, уровни, челленджи, тесты, материалы), создавая кастомные треки без ограничений, всё адаптируется под ваши процессы.",
    ],
  },
  {
    title: "Как на практике оценить эффективность платформы для нашего бизнеса?",
    answer: [
      "Чтобы оценить эффективность TeamRise, зафиксируйте 3-5 ключевых показателей бизнеса до и после внедрения (например, время онбординга, производительность, текучесть, вовлечённость).",
      "Через 1-3 месяца сравните динамику по встроенной аналитике платформы и вашим данным (1С/CRM).",
      "Если рост заметен, платформа работает.",
    ],
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      <Navbar />
      <section className="py-20">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-4xl font-semibold text-primary">
              Часто задаваемые вопросы
            </h1>
          </div>

          <div className="mt-10 space-y-3">
            {questions.map((item, index) => {
              const isOpen = openItems.includes(index);

              return (
              <article
                key={item.title}
                className="rounded-xl border border-border bg-[#F5F5F5] px-4 sm:px-6 py-4"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full text-left flex items-start justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <h2 className="text-xl sm:text-2xl font-medium text-primary leading-snug">
                    {item.title}
                  </h2>
                  <span className="text-3xl leading-none text-primary">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="space-y-2 max-w-5xl">
                      {item.answer.map((paragraph) => (
                        <p key={paragraph} className="text-muted text-lg leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
            })}
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}
