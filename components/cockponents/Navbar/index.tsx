import Container from "../../common/Container";
import Link from 'next/link'
import { FaDice, FaDiscord, FaList, FaWallet } from "react-icons/fa";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import Logo from "../Logo";

export const links = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Roadmap",
    href: "#roadmap",
  },
  {
    label: "Docs",
    href: "https://cockmaster.gitbook.io/cockmaster-manual-book/",
  },
];

const Navbar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      console.log(windowHeight);
      setIsScrolling(windowHeight > 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const [opened, setOpened] = useState(false);
  return (
    <>
      <nav
        className={`fixed transition ${
          isScrolling ? "bg-black/50" : "bg-black/10"
        } z-50 top-0 left-0 w-full text-white`}
      >
        <Container>
          {/* Mobile */}
          <>
            <div className="flex md:hidden flex-col ">
              <div className="w-full p-2 flex justify-between items-center">
                <Logo />

                <div className="w-[54px] h-[54px]  flex justify-center items-center rounded-full">
                  <div
                    onClick={() => {
                      setOpened(!opened);
                    }}
                  >
                    {!opened ? (
                      <AiOutlineMenu size={36} />
                    ) : (
                      <AiOutlineClose size={36} />
                    )}
                  </div>
                </div>
              </div>

              <div
                className={`bg-white w-full transition-all transform ${
                  opened ? "block" : "hidden"
                }`}
              >
                <ul className={` flex flex-col items-center  `}>
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>
                        <a className="text-black hover:text-green-400 transition-all block py-5  text-xl font-bold">
                          {link.label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="h-[20px]"></div>
                <div className="flex justify-center">
                  <ConnectWalletBtn />
                </div>
                <div className="h-4"></div>
              </div>
            </div>

            {/* Desktop | Tablet */}
            <div
              className={`hidden md:flex flex-row justify-between items-center`}
            >
              <Image
                src={`/LogoCock.png`}
                alt="Picture of the author"
                width={75}
                height={75}
              />
              {/* <h1 className="font-bold">Logo</h1> */}
              <ul className={` flex flex-row h-[70px] items-center ml-10`}>
                {links.map((link, index) => (
                  <li key={index} className="ml-10">
                    <Link href={link.href}>
                      <a className="sm:px-5 lg:px-10 text-white hover:text-black transition-all mx-px py-2 text-md font-bold">
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              <ConnectWalletBtn />
            </div>
          </>
        </Container>
      </nav>
      <div className="h-[70px]" />
    </>
  );
};

const ConnectWalletBtn = () => {
  return (
    <button
      title="Connect Wallet"
      className=" px-8 py-[11px] md:px-2 xl:px-8 transition-all bg-purple-500 hover:bg-purple-600 text-black flex items-center justify-center rounded-md"
    >
      <FaDice size={26} />
      <span className="ml-2 font-bold">Duel</span>
    </button>
  );
};


export default Navbar;