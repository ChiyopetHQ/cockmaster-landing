import Image from "next/image";
import Container from "../../common/Container";

const Header = () => {
    return <main className="bg-[url('../public/grass.png')] " >
        <Container>
            <div className="flex flex-col items-center">
                <div className="text-center py-10 flex flex-col items-center ">

                    <Image
                    src="/CockLogoName.png"
                    alt="LogoName img"
                    width={720}
                    height={300}
                />
                </div>
                <div className="h-5"></div>
                <Image
                    src="/CockHeader.png"
                    alt="header img"
                    width={1200}
                    height={720}
                />

            </div>

        </Container>
    </main>
}

export default Header;