import Container from "../../common/Container";
import Head from "../Head";
import Person, { PersonType } from "./Person";

const Team = () => {
    const team: PersonType[] = [
        {
            name: "Sam Smith",
            job: "Developer",
            avatar: 'team-1.png',
            socialMedia: {
                twitter: "https://www.twitter.com",
                instagram: null,
                discord: "https://www.discord.com",
            }
        },
        {
            name: "Sam Smith",
            avatar: 'team-2.png',
            job: "Designer",
            socialMedia: {
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                discord: "https://www.discord.com",
            }
        },
        {
            name: "Sam Smith",
            avatar: 'team-3.png',
            job: "Developer",
            socialMedia: {
                twitter: "https://www.twitter.com",
                instagram: "https://www.instagram.com",
                discord: null,
            }
        },
        {
            name: "Sam Smith",
            avatar: 'team-4.png',
            job: "Designer",
            socialMedia: {
                twitter: null,
                instagram: "https://www.instagram.com",
                discord: "https://www.discord.com",
            }
        },


    ];
    return <section className="py-24" id="team">
        <Container>
            <div className="md:max-w-6xl m-auto">
                <div className="flex justify-center">
                    <Head title="Creative Team" />
                </div>
                <div className="h-14"></div>
                <div className="flex flex-wrap ">

                    {
                        team.map((person, index) => <Person key={index} person={person} />)
                    }
                </div>
            </div>
        </Container>
    </section>
}
export default Team;