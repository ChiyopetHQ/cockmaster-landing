import Image from "next/image";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

export type PersonType = {
    name: string
    avatar: string
    job: string
    socialMedia: {
        twitter: string | null
        instagram: string | null
        discord: string | null
    }
}

const Person = ({ person }: { person: PersonType }) => {
    return <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-center ">
        <div className="w-[270px] h-[270px] bg-white/20 rounded-3xl relative overflow-hidden">
            <Image
                src={`/${person.avatar}`}
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className="h-2"></div>
        <h2 className="font-bold capitalize text-xl" >{person.name}</h2>
        <h3 className=" text-violet-600 drop-shadow-lg capitalize text-lg" >{person.job}</h3>
        <div className="h-5"></div>
        <div className="flex mb-2">
            {
                person.socialMedia.twitter && <a target="_blank" rel="noreferrer" title="twitter" href={person.socialMedia.twitter} className="text-white bg-sky-500 w-12 h-12 flex items-center justify-center rounded-3xl">
                    <AiOutlineTwitter size={30} />
                </a>
            }
            <div className="w-4"></div>
            {
                person.socialMedia.instagram &&
                <>

                    <a target="_blank" rel="noreferrer" title="instagram" href={person.socialMedia.instagram} className=" cursor-pointer bg-gradient-to-l from-pink-500 to-orange-500 w-12 h-12 flex items-center text-white justify-center rounded-3xl">
                        <AiOutlineInstagram size={30} />
                    </a></>
            }
            <div className="w-4"></div>
            {
                person.socialMedia.discord &&
                <>

                    <a target="_blank" rel="noreferrer" title="discord" href={person.socialMedia.discord} className="text-white cursor-pointer bg-violet-600 w-12 h-12 flex items-center justify-center rounded-3xl">
                        <FaDiscord size={30} />
                    </a>
                </>
            }
        </div>
    </div >
}
export default Person;