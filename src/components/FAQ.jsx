import React, { useState } from 'react';
import { DEPOSIT_POLICY } from '../data/pricing';

const faqs = [
  {
    question: "How does mobile detailing work?",
    answer: "We come directly to your home or office with everything we need — water, power, and professional-grade equipment. Just tell us where to meet and we handle the rest. No need to drop off your car anywhere."
  },
  {
    question: "What areas do you serve?",
    answer: "We serve all of Fairfield County, CT including Stamford, Greenwich, Westport, Norwalk, Fairfield, Southport, Stratford, Milford, and Trumbull. If you're nearby but not listed, reach out — we likely cover your area too."
  },
  {
    question: "How long does a detail take?",
    answer: "It depends on the package and your vehicle's condition. A Stage 1 detail typically takes 1–2 hours, Stage 2 takes 2–4 hours, and Stage 3 (full interior + exterior restoration) can take 4–6 hours. We'll give you a time estimate when you book."
  },

  {
    question: "Do I need to be home during the detail?",
    answer: "Not necessarily. Many of our clients leave their keys and let us work while they're at home or in the office. We just need access to the vehicle and, ideally, a parking spot where we can set up."
  },
  {
    question: "How often should I get my car detailed?",
    answer: "We recommend a maintenance detail (Stage 1) every 2–4 weeks and a deeper detail (Stage 2 or 3) every 3–6 months. If you have ceramic coating, regular maintenance washes help keep the coating performing at its best."
  },
  {
    question: "What is ceramic coating and is it worth it?",
    answer: "Ceramic coating is a liquid polymer that bonds to your paint, creating a durable layer of protection against UV rays, bird droppings, tree sap, and minor scratches. It also makes your car much easier to wash. For anyone who wants long-lasting paint protection and that showroom shine, it's absolutely worth it."
  },
  {
    question: "Do you require a deposit?",
    answer: DEPOSIT_POLICY,
  },
  {
    question: "How do I book an appointment?",
    answer: "You can fill out the contact form on our website, call or text us at (929) 307-6986, or send us a message on Instagram. We'll get back to you quickly with availability and pricing."
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div
    className="border border-zinc-800 rounded-xl overflow-hidden transition-colors duration-200 hover:border-zinc-700"
  >
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
    >
      <span className="text-sm sm:text-base font-medium text-white">{question}</span>
      <svg
        className={`w-5 h-5 text-[#facc16] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4 px-5' : 'max-h-0'}`}
    >
      <p className="text-sm text-zinc-400 leading-relaxed">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 sm:py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold italic text-center text-white mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-sm text-zinc-400 text-center mb-10">
          Everything you need to know about our mobile detailing services.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggle(index)}
            />
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      })}} />
    </section>
  );
};

export default FAQ;
