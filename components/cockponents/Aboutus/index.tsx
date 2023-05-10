import Image from "next/image";
import Container from "../../common/Container";
import Head from "../Head";
import Para from "../Para";
import Introduce from "../Introduce";

const Aboutus = () => {
    return <section className=" py-10" id="aboutus">
        <Container>
            <div className="flex flex-col-reverse md:flex-row items-center md:max-w-7xl m-auto ">

                <div className="w-full md:w-1/2 bg-white/50 p-4 rounded-xl md:mr-10">
                    <Introduce title="Introducing" />
                    <Head title="Cockmaster" />
                    <div className="h-10"></div>
                    <Para txt={`Are you ready to become a true Cockmaster? This exciting NFT project is about to take the blockchain world by storm with its unique blend of gaming, collectibles, and cutting-edge technology. With its multichain gambling app and support for crypto and NFT deposits, Cockmaster is the perfect place to test your luck and skill against other players from around the world.`} />
                    {/* <Para txt={`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`} /> */}
                </div>
                <div className="w-full md:w-1/2">
                    <Image
                        src={`/cockabout.gif`}
                        alt="Logo"
                        width={512}
                        height={512}
                    />
                </div>
            </div>
        </Container>
    </section>
}

export default Aboutus;