import Container from "../layout/Container";

export default function Solution() {
  const items = [
    {
      title: "Онбординг",
      text: "Новый агент получает готовый план адаптации, а HR и наставники освобождаются от ручных инструктажей",
    },
    {
      title: "Обучение и развитие",
      text: "Все учебные материалы и задания организованы в едином пространстве, доступ к ним упрощён.",
    },
    {
      title: "Вовлечённость через геймификацию",
      text: "Вовлечённость и удержание персонала усилены за счёт игровых механик и наглядного прогресса.",
    },
    {
      title: "Контроль без рутины",
      text: "Прогресс команды и выполнение задач отслеживаются без запросов отчётности и выгрузок данных.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-4xl font-semibold text-primary">
            Rise Staff тезисно
          </h2>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1.05fr_1fr] gap-6 items-stretch">
          <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-[#D6E9FF] min-h-[300px] lg:min-h-[520px]">
            <img
              src="/work.png"
              alt="Интерфейс Rise Staff"
              className="absolute left-1/2 top-1/2 w-[110%] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 lg:grid-rows-4 lg:h-[520px]">
            {items.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border-2 border-soft p-5 h-full"
              >
                <h3 className="text-[30px] leading-tight font-normal text-primary">
                  <span className="text-2xl font-medium">{item.title}</span>
                </h3>
                <p className="mt-2 text-muted leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
