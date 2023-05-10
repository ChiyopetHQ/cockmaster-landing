import Container from "../../common/Container"
import Logo from "../Logo";
import SocialMedia from "../SocialMedia";

const Footer = () => {
    return <footer className="bg-gray-100 " >
        <Container>
            <div className="text-white pt-10 pb-5 flex flex-col items-center">
                <div className="flex flex-col items-center ">
                    <Logo width={170} height={70} />
                    <div className="text-black mt-8">
                        <SocialMedia />
                    </div>
                </div>
                <hr className="bg-gray-300 border-0 h-px w-full my-5" />
                <p className="text-gray-500" >&copy; 2023 Cockright reserved to Cockmaster by Cocklabs</p>
            </div>
        </Container>
    </footer>
}

export default Footer;