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
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },
        {
            question: "Why do i need Cockmaster?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
        },
        {
            question: 'How many cock?',
            answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
        },
        {
            question: 'Where to find cock?',
            answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        },
        {
            question: 'Where is my cock?',
            answer: 'from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'
        }
    ];

    return <section className="py-10   " id="faq">
        <Container>
            <div className=" max-w-4xl m-auto">
                <div className="flex justify-center">

                    <Head title="FAQ" />
                </div>
                <div className="h-12"></div>
                <div className=" ">
                    {
                        FQAs.map((fqa, index) => <div key={index}><QA qa={fqa} /><div className="h-2" ></div></div>)
                    }
                </div>
            </div>
        </Container>
    </section >
}

const QA = ({ qa }: { qa: QAType }) => {
    const [closed, setClosed] = useState(true);
    return <div className=" border-2 border-black rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-3 py-2">
            <h2 className="font-bold text-[17px] lg:text-xl" >{qa.question}</h2>
            <div
                onClick={() => setClosed(!closed)}
                className="w-14 h-14 rounded-full flex items-center justify-center trnasition hover:bg-white/20 cursor-pointer ">
                {closed ? <FaChevronDown size={22} /> : <FaChevronUp size={22} />}
            </div>
        </div>
        <div className={`bg-white/5 transition-all ${closed ? "h-0" : "h-auto"} `}>
            <div className="p-2">
                <Para txt={qa.answer} />
            </div>
        </div>
    </div>
}
export default FQA;