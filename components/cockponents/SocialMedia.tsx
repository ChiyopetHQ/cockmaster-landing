import { FaDiscord, FaInstagram, FaMedium, FaTwitter } from "react-icons/fa"

type SocialMediaType = {
    icon: React.ReactElement
    href: string
    title: string
}
const SocialMedia = () => {
    const socialMedia: SocialMediaType[] = [
      {
        icon: <FaDiscord size={28} />,
        href: "https://discord.com/invite/hxT4cbNh",
        title: "Discord",
      },
      {
        icon: <FaTwitter size={28} />,
        href: "https://twitter.com/Cockmaster_NFT",
        title: "Twitter",
      },
    ];
    return <div className="flex">


        {
            socialMedia.map((i, index) => (<a key={index} rel="noreferrer" className="hover:opacity-80 mx-1 lg:mx-3" title={i.title} target="_blank" href={i.href}>{i.icon}</a>))
        }
    </div>
}

export default SocialMedia