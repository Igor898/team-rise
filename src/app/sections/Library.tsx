import Container from "../layout/Container";

export default function Library() {
  const points = [
    {
      title: "Конфиденциальность гарантирована",
      text: "Все данные сотрудников и компании защищены и доступны только авторизованным пользователям.",
    },
    {
      title: "Соответствие законодательству",
      text: "Работа платформы организована в соответствии с требованиями 152-ФЗ о персональных данных.",
    },
    {
      title: "Техническая защита обеспечена",
      text: "Безопасность данных обеспечена современными методами шифрования и регулярными аудитами.",
    },
    {
      title: "Прозрачность процессов соблюдена",
      text: "Все действия в системе фиксируются для полной отчётности и контроля.",
    },
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-4xl font-semibold text-primary">
            Использование сервиса на 100% безопасно
          </h2>
          <button className="self-start sm:self-auto bg-white text-[#3499FF] border border-[#9EC9FF] rounded-full px-6 py-2.5 shadow-[0_6px_18px_rgba(52,153,255,0.22)]">
            #Возможности
          </button>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(16,24,40,0.06)]">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-border">
            {points.map((point) => (
              <article
                key={point.title}
                className="text-center px-2 lg:px-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-medium text-primary leading-snug">
                    {point.title}
                  </h3>
                  <p className="mt-4 text-muted leading-relaxed">
                    {point.text}
                  </p></div>
                <div className="flex justify-center">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border-2 border-border text-muted text-lg font-semibold">
                    ✓
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
