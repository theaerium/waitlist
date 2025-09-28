'use client';

import FAQItem from './faq/FAQItem';

const faqData = [
  {
    id: 1,
    question: "Is Aerium a bank account? Do I need to link my bank account?",
    answer: "Aerium is not a traditional bank account. You don't need to link your existing bank account. Instead, you deposit items from your closet and cashout to a prepaid visa card that you can use anywhere visa is accepted."
  },
  {
    id: 2,
    question: "Do I get real money or credit to use somewhere?",
    answer: "You get real money. When you cashout, you get a prepaid visa card that you can use anywhere visa is accepted."
  },
  {
    id: 3,
    question: "How do I give you my items?",
    answer: "Once we find a buyer, you will be notified and get a prepaid shipping label. You can then directly drop off the package at your nearest post office or we can pick it up from you if you are in the GTA."
  },
  {
    id: 4,
    question: "Is there a limit to how much I can use the platform?",
    answer: "Currently, there is a limit of $200 per week to ensure we are able to sustainably scale and sell the items in a timely manner. Eventually we will remove the limit."
  }
];

export default function FAQSection() {
  return (
    <section className="py-16 ">
      <div className="w-full">
        <div className="px-4 sm:px-6 lg:px-8 mb-6 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black text-left">
            Common questions
          </h2>
        </div>
        
        <div className="w-full">
          {faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
