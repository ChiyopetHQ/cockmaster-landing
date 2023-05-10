import { FaDiscord, FaTwitter } from "react-icons/fa";
import Container from "../../common/Container"
import Head from "../Head";

const Community = () => {
    return <section className="py-16">
        <Container>
            <div>
                <div className="flex justify-center mb-10">
                    <Head title="Join Our Community" />
                </div>
                <div className="flex flex-col md:flex-row">
                    <a href="https://www.discord.com" rel="noreferrer" target="_blank" className="w-full hover:opacity-90 md:w-1/2 md:mx-px md:mb-0  h-60 mb-2 flex justify-center items-center bg-violet-500 p-4 rounded-2xl">
                        <div className="flex flex-col justify-center items-center">
                            <div>
                                <FaDiscord size={100} />
                            </div>
                            <h1 className="text-4xl font-bold">Join On Discord</h1>
                        </div>
                    </a>
                    <a href="https://www.Twitter.com" rel="noreferrer" target="_blank" className="w-full hover:opacity-90 md:w-1/2 md:mx-px md:mb-0 h-60 mb-2 flex justify-center items-center bg-blue-400 p-4 rounded-2xl">
                        <div className="flex flex-col justify-center items-center text-white">
                            <div>
                                <FaTwitter size={100} />
                            </div>
                            <h1 className="text-4xl font-bold">Join On Twitter</h1>
                        </div>
                    </a>
                </div>
            </div>
        </Container>
    </section>
}

export default Community;