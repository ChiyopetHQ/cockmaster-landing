import Image from "next/image";
import Container from "../../common/Container";
import Head from "../Head";
import Para from "../Para";
import Introduce from "../Introduce";

const Aboutus = () => {
    return (
      <section className=" py-10" id="aboutus">
        <Container>
          <div className="flex flex-col-reverse md:flex-row items-center md:max-w-7xl m-auto ">
            <div className="w-full md:w-1/2 bg-white/50 p-6 rounded-xl md:mr-10">
              <Introduce title="Introducing" />
              <Head title="Cockmaster" />
              <div className="h-10"></div>
              <Para
                txt={`Are you ready to become a true Cockmaster? This NFT project is about to take the blockchain world by storm with its unique blend of gaming and collectibles. With its multichain lottery app and support for Crypto and NFT deposits.`}
                className={"p-2 text-md"}
              />
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src={`/cockabout.gif`}
                alt="Logo"
                width={512}
                height={512}
                className={"rounded-md"}
              />
            </div>
          </div>
        </Container>
      </section>
    );
}

export default Aboutus;