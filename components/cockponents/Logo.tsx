import Image from "next/image";

const Logo = ({ width = 120, height = 30 }: { width?: number, height?: number }) => {
    return <Image
        src={`/Cock-Logo2.png`}
        alt="Logo 2"
        width={75}
        height={75}
    />
}

export default Logo;