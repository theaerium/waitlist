'use client';

import FAQItem from './faq/FAQItem';

const faqData = [
  {
    id: 1,
    question: "Is Aerium a bank account? Do I need to link my bank account?",
    answer: "Aerium is not a traditional bank account. You don't need to link your existing bank account. Instead, you can deposit items from your closet to get spending credit that you can use anywhere."
  },
  {
    id: 2,
    question: "Do I get real money or credit to use somewhere?",
    answer: "You get real spending credit that works like cash. You can use your Aerium card anywhere Visa is accepted, both online and in stores."
  },
  {
    id: 3,
    question: "How do I give you my items?",
    answer: "Simply upload photos of items you want to deposit through our app. We'll provide you with a prepaid shipping label, and you can send them to us. Once we receive and verify your items, you'll get spending credit."
  },
  {
    id: 4,
    question: "Is there a limit to how much I can use the platform?",
    answer: "There are no strict limits on how much you can deposit or spend. The amount depends on the value of items you deposit and our verification process."
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
