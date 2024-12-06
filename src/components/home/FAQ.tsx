import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { faqQuestions } from "./FaqQuestions";
import Reveal from "../animation/Reveal";
function FAQ() {
  const [openIndex, setIsOpenIndex] = useState(null as number | null);

  return (
    <div className="relative">
      <div className="  absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  bg-mainColor-600 w-96 h-96 rounded-full z-10 blur-[14rem]"></div>

      <div className="mt-20 max-w-4xl mx-auto text-center pb-14 px-4 relative z-20">
        <Reveal>
          <span className="text-mainColor-100 bg-mainColor-800 rounded-[4px] py-1 px-4 text-sm border border-mainColor-200/10">
            FAQS
          </span>
        </Reveal>
        <div className="mt-6 max-w-4xl mx-auto">
          <Reveal delay={0.35}>
            <h2 className="text-[42px] mb-6 text-mainColor-100 tracking-tight leading-normal font-medium">
              Frequently asked questions
            </h2>
          </Reveal>
          <Reveal delay={0.45}>
            <p className="text-mainColor-200/50 text-lg text-center max-w-4xl px-5 mx-auto">
              Everything you need to know about the product and billing.
            </p>
          </Reveal>
        </div>
        <div className="mt-2 grid grid-cols-1 h-[max-content] gap-4 pt-24">
          {faqQuestions.map((faq, index) => (
            <Reveal delay={0.45 + faq.id * 0.1} key={index}>
              <motion.div
                className="bg-mainColor-800/60 text-mainColor-100 cursor-pointer rounded-lg border-b flex flex-col border-borderMainColor p-5"
                onClick={() =>
                  setIsOpenIndex(faq.id === openIndex ? null : faq.id)
                }
              >
                <div className="flex justify-between items-center text-lg">
                  <motion.span
                    className="transition-all duration-200"
                    animate={{
                      marginBottom: openIndex === faq.id ? "6px" : "",
                    }}
                  >
                    {faq.question}
                  </motion.span>
                  <span
                    className={`${
                      openIndex === faq.id ? "rotate-180" : ""
                    } transition-all duration-200`}
                  >
                    <FaChevronDown />
                  </span>
                </div>
                <motion.p
                  className="text-sm text-mainColor-100/80 inline-block overflow-hidden text-left"
                  animate={{ height: openIndex === faq.id ? "auto" : "0px" }}
                >
                  {faq.answer}
                </motion.p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;
