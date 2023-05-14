import { useState } from "react";
import { AiFillCaretDown, AiOutlineArrowDown } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Container from "../../common/Container";
import Head from "../Head";
import Para from "../Para";


type QAType = {
    question: string
    answer: string
}

const FQA = () => {
  const FQAs: QAType[] = [
    {
      question: "What is Cockmaster?",
      answer:
        "Cockmaster is the first lottery platform that support Multichain Wallet Connection that allows people to play using their desired Wallet in any Blockchain supported.",
    },
    {
      question: "Why do I need Cockmaster?",
      answer:
        "We provide a platform for people that crave challenge and reach victory across chains.",
    },
    {
      question: "Why should I mint Cockmaster?",
      answer:
        "Our NFT holders will get evenly distributed revenue sharing that is generated from the lottery fees.",
    },
    {
      question: "Where to find Cockmaster?",
      answer:
        "We will launch the Cockmaster NFT Collection on Souffl3 Launchpad consists of 3333 Cocks ready to be owned.",
    },
  ];

  return (
    <section className="py-10" id="faq">
      <Container>
        <div className=" max-w-4xl m-auto">
          <div className="flex justify-center">
            <Head title="FAQ" />
          </div>
          <div className="h-12"></div>
          <div className=" ">
            {FQAs.map((fqa, index) => (
              <div key={index}>
                <QA qa={fqa} />
                <div className="h-2"></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

const QA = ({ qa }: { qa: QAType }) => {
  const [closed, setClosed] = useState(true);
  return (
    <div className="transition-all border-2 border-black rounded-2xl overflow-hidden">
      <div
        className="flex items-center justify-between cursor-pointer px-3 py-2"
        onClick={() => setClosed(!closed)}
      >
        <h2 className="font-bold text-[17px] lg:text-xl">{qa.question}</h2>
        <div className="w-14 h-14 rounded-full flex items-center justify-center transition hover:bg-white/20">
          {closed ? <FaChevronDown size={22} /> : <FaChevronUp size={22} />}
        </div>
      </div>
      <div
        className={`bg-white/5 transition-all ${closed ? "h-0" : "h-full"} `}
      >
        <div className="p-2">
          <Para txt={qa.answer} className="p-2" />
        </div>
      </div>
    </div>
  );
};
export default FQA;