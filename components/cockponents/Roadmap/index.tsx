import Container from "../../common/Container";
import Head from "../Head";
import Para from "../Para";
import RoadmapName from "../RoadmapName";



type StepType = {
    title: string
    body: string
}

type StepWithoutId = Omit<StepType,'id'>;

const Roadmap = () => {

    /**
     * 
     * @NOTE you can change this values to meet you needs
     */
    const steps: StepType[] = [
        {
            title: "Phase 1 ",
            body: "We will be launching the Cockmaster NFT collection on * Blockchain and releasing an off-chain gambling app that supports both crypto and NFT deposits. To attract early adopters and grow the Cockmaster community, we will launch a marketing campaign and create Twitter and Discord accounts. Additionally, we will share the revenue generated from gambling fees with NFT holders."
        },
        {
            
            title: "",
            body: "/roadmap-1.png"
        },
        {

            title: "",
            body: "/roadmap-2.png"
        },
        {

            title: "Phase 2",
            body: "We plan to introduce new games like Roulette, Coinflip, and Plinko to the Cockmaster platform, and partner with other NFT projects for cross-platform promotions and giveaways. To expand the Cockmaster community, we'll conduct targeted outreach and social media campaigns."
        },
        {

            title: "Phase 3",
            body: "We'll launch Cockmaster merchandise such as t-shirts, hats, and collectibles, and introduce a rewards program for frequent players and collectors. Additionally, we'll host special events and tournaments to showcase the best Cockmaster players and NFT collectors."
        },
        {

            title: "",
            body: "/roadmap-3.png"
        },
        {

            title: "",
            body: "/roadmap-4.png"
        },
        {

            title: "Phase 4",
            body: "Introducing a staking system for Cockmaster NFT, allowing players to earn rewards for holding and using the NFT. We'll also expand the Cockmaster platform to support other blockchains like Ethereum and Solana. Additionally, we'll develop new NFT collections and games that build on the Cockmaster brand and its unique linguistic features."
        },
    ];
    return <section className="py-5 lg:py-10 gradient_roadmap_tem1 " id="roadmap">
        <Container>
            <div className=" flex flex-col items-center bg-[url('../public/dot.png')] bg-cover">

                <div className="flex flex-col items-center mb-4 " >
                    <RoadmapName title="Roadmap" />
                </div>
                <div className="h-10"></div>
                {/* Mobile */}
                <div className=" mt-20  lg:hidden">
                    {
                        steps.map((step, index) => {
                            return <div key={index} className="relative">
                                <Step step={step} />
                                <div className="h-2" />
                            </div>
                        })
                    }
                </div>
                {/* Desktop */}
                <div className="hidden mt-20  lg:flex">
                    <div className="flex flex-col">
                        {
                            steps.map((step, index) => {
                                if (index % 2 == 0) {
                                    return <div key={index} className="relative">
                                        <div className="h-px w-16  bg-[#FFFFF] absolute -right-16 top-1/3 -translate-y-1/3"></div>
                                        <Step step={step} />
                                        <div className="h-[100px]" />
                                    </div>
                                }
                            })
                        }
                    </div>
                    <div className="w-px bg-[#FFFFF] mx-16 rounded-full"></div>
                    <div className="flex flex-col">

                        {
                            steps.map((step, index) => {
                                if (index % 2 != 0) {
                                    return <div key={index} className="relative">
                                        <div className="h-[100px]" />
                                        <div className="h-px w-16  bg-[#FFFFF] absolute -left-16 top-2/3 -translate-y-2/3"></div>
                                        <Step step={step} />
                                    </div>
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </Container>
        <div className="h-20"></div>
    </section>

}


const Step = ({ step }: { step: StepType }) => (<div className="w-auto lg:w-[430px] xl:w-[550px] bg-white/60 rounded-2xl border-l-4 border-sky-500/75 p-3 " >
    {/* <div className="text-4xl mb-4 font-bold text-black" >{step.value}</div> */}
    <h2 className="mb-2 text-sky-500 font-bold text-4xl capitalize" >{step.title}</h2>
    <Para txt={step.body} />
</div>)

export default Roadmap;