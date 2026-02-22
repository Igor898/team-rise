import Navbar from "../app/layout/Navbar";
import Container from "../app/layout/Container";
import Footer from "../app/layout/Footer";

const plans = [
  {
    title: "1 месяц",
    price: "70 000 ₸",
    discount: "0%",
    setup: "500 000 ₸",
    featured: false,
    accentValues: false,
    offsetClass: "lg:mt-24",
  },
  {
    title: "3 месяца",
    price: "59 500 ₸",
    discount: "15%",
    setup: "250 000 ₸",
    featured: false,
    accentValues: false,
    offsetClass: "lg:mt-24",
  },
  {
    title: "6 месяцев",
    price: "56 000 ₸",
    discount: "20%",
    setup: "0 ₸ (в подарок)",
    featured: true,
    withPattern: true,
    accentValues: true,
  },
  {
    title: "12 месяцев",
    price: "49 000 ₸",
    discount: "30%",
    setup: "0 ₸ (в подарок)",
    featured: true,
    withPattern: false,
    accentValues: true,
  },
];

export default function Pricing() {
  return (
    <>
      <Navbar />
      <section className="py-16 lg:py-20">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <h1 className="text-4xl lg:text-4xl font-semibold leading-tight uppercase">
              Тарифные планы
              <br />
              для команды <span className="text-[#4A8DE8]">10+ человек</span>
            </h1>
          </div>

          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className={`relative overflow-hidden rounded-3xl border border-border/60 p-2 sm:p-3 shadow-sm ${plan.offsetClass} ${
                  plan.featured ? "bg-[#4C91E9] text-white" : "bg-[#F4F4F4]"
                }`}
              >
                <div className={`relative rounded-2xl flex flex-col justify-between ${plan.featured ? "min-h-[620px]" : "min-h-[520px]"}`}>
                  <h2 className="text-4xl font-medium">{plan.title}</h2>

                  <div className="flex flex-col gap-3">
                    <div className="rounded-2xl bg-[#C8D8EA] p-5">
                      <p className="text-[#3F5475] text-2xl">цена сотрудника в месяц :</p>
                      <p className="mt-3 text-xl leading-none font-semibold text-black">{plan.price}</p>
                    </div>

                    <div className="rounded-2xl bg-[#C8D8EA] p-5">
                      <p className="text-[#3F5475] text-2xl">размер скидки :</p>
                      <p className={`mt-3 text-xl leading-none font-semibold ${plan.accentValues ? "text-[#4A8DE8]" : "text-black"}`}>
                        {plan.discount}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-[#C8D8EA] p-5">
                      <p className="text-[#3F5475] text-2xl">стоимость внедрения :</p>
                      <p className={`mt-3 text-xl leading-none font-semibold ${plan.accentValues ? "text-[#4A8DE8]" : "text-black"}`}>
                        {plan.setup}
                      </p>
                    </div>
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
