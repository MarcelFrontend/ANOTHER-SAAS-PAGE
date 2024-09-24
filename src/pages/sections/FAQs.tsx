import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import Plus from "@/assets/icons/plus.svg";
import Minus from "@/assets/icons/minus.svg";

const questions = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
];

function FAQItem({ answer, question }: { answer: string; question: string }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <li
      key={question}
      onClick={() => setShowAnswer(!showAnswer)}
      className="flex justify-between flex-col gap-5 border-b-2 border-gray-800 dark:border-gray-600 pb-5 pt-3 hover:bg-gray-800/5 dark:hover:bg-gray-200/5 cursor-pointer"
    >
      <div className="flex items justify-between gap-5">
        <span className="max-w-[20rem] md:max-w-none font-bold lg:text-2xl lg:py-2 px-2">
          {question}
        </span>
        {showAnswer ? (
          <Minus className="h-8 lg:h-11 w-auto" />
        ) : (
          <Plus className="h-8 lg:h-11 w-auto" />
        )}
      </div>
      {showAnswer && (
        <span className="px-[2%] text-xs md:text-xl lg:text-2xl">{answer}</span>
      )}
    </li>
  );
}

export default function FAQs() {
  return (
    <section id="faqs" className="w-screen bg-gradient-to-b from-[#5a2aa5] to-gray-100 dark:to-black py-20 transition-colors ">
      <div className="container flex items-center flex-col gap-5">
        <SectionHeader main="Frequently asked questions" mainClasses="pb-5" />
        <ul className="w-full md:w-[40rem] lg:min-w-[60rem] flex justify-center flex-col gap-1 text-black dark:text-white transition-colors">
          {questions.map((item) => (
            <FAQItem
              answer={item.answer}
              question={item.question}
              key={item.question}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
