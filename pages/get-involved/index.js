import React from "react";
import Link from "next/link";
import Layout from "../../layouts/Layout";
import Accordion from "../../components/Accordion";
import Hero from "../../components/Hero";
import LocationMap from "../../components/LocationMap";
import MeetupEvents from "../../components/MeetupEvents";
import Meta from "../../components/Meta";
import SocialLinks from "../../components/SocialLinks";

const Index = () => (
    <Layout>
        <Meta
            title="Volunteer"
            description="What you know and do is interesting to us, come and share it with others. We are always looking for presenters."
        />
        <Hero title="Get Involved"/>
        <div className="bg-navy-300" id="be-social">
            <div className="container mx-auto px-5 py-24 text-white text-center">
                <div className="mb-10">
                    <h2 className="h2 mb-10">Be Social</h2>
                    <p>
                        Interact with us on social media.
                    </p>
                </div>
                <SocialLinks
                    ulClassNames="justify-center"
                    liClassNames="m-3"
                    aClassNames="text-black hover:text-white hover:filter-shadow-xl"
                    size="3x"/>
            </div>
        </div>
        <div className="bg-sapphire bg-volunteer bg-no-repeat text-white" id="volunteer">
            <div className="container mx-auto px-5 pt-20 md:pt-40 pb-10">
                <div className="text-center">
                    <h2 className="h2 mb-10">Volunteer</h2>
                    <p>
                        What you know and do is interesting to us. Come and share it with others. We are always looking
                        for presenters.
                    </p>
                </div>
            </div>
            <div className="container-1200 mx-auto px-5 pt-10 pb-20">
                <Accordion title="What can I do to help at the space?" initialOpen={true}>
                    <p>
                        We have a list of ongoing projects to improve the space on our get involved page. If there’s a
                        project you would like to participate in to make the hackerspace better, please contact the
                        committee volunteers listed under that project to see what you can do.
                    </p>
                </Accordion>
                <Accordion title="I would like to teach a class, what should I do?">
                    <p>
                        You can reach out to us on slack and let us know, or you can use the forms on the get involved
                        page
                        to submit your class idea so we can make it happen. We’re always looking for more people who
                        would
                        like to teach classes or run events.
                    </p>
                </Accordion>
                <Accordion title="Your website looks like a pile of garbage. Can I update it to make it better?">
                    <p>
                        Our website source code is freely available on GitHub for anyone to fork, edit, and submit a
                        pull
                        request. If you’d like to see something new or different on the website, feel free to submit
                        changes
                        for review by the volunteers who maintain it.
                    </p>
                </Accordion>
                <Accordion title="What are the responsibilities of key holding volunteers?">
                    <p>
                        Key holding volunteers will be responsible for opening the space to the public. Greet people as
                        they come into the space or delegate that to another volunteer. Ensure that the space is being
                        used responsibly. Know how to use any equipment in the space that is being used. Keep equipment
                        locked otherwise. Politely enforce the 801 Labs code of conduct.
                    </p>
                </Accordion>
                <Accordion title="I am an active volunteer, how can I get a key to the space?">
                    <p>
                        As an active volunteer if you would like to take on the added responsibility of being a key
                        holding volunteer, contact board@801labs.org.
                    </p>
                </Accordion>
            </div>
        </div>
        <div className="bg-black text-white">
            <div className="container-1400 mx-auto px-5 py-20">
                <h2 className="h2 text-center mb-20">Visit Us</h2>
                <div className="lg:flex lg:space-x-32 items-center">
                    <div className="lg:w-3/5">
                        <p className="mb-5">
                            The entrance is on the north / back side of the building. To get there, walk through the
                            tunnel off 200 South or use the gate in the Crown Burger parking lot.
                        </p>
                        <p>
                            Street parking is plentiful in the area, however, lot parking is limited. Please use the
                            back entrance as found on the diagram below.
                        </p>
                    </div>
                    <div className="lg:w-2/5 pt-10 lg:pt-0">
                        <LocationMap />
                    </div>
                </div>
            </div>
            <div className="bg-volunteer-events bg-no-repeat">
                <div className="container mx-auto px-5 py-20">
                    <h2 className="h2 text-center mb-20">Events</h2>
                    <div className="mb-20">
                        <MeetupEvents />
                    </div>
                    <div className="text-center">
                        <Link href="/get-involved/events">
                            <a className="button">
                                See All Events&nbsp;&gt;
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-black bg-volunteer-donate bg-no-repeat gradient-v-black-navy-800 text-white">
            <div className="container mx-auto px-5 pt-20 pb-40 text-center">
                <h2 className="h2 mb-10">Donate</h2>
                <p className="mb-10">Please visit our Donate page to learn more.</p>
                <Link href="/donate">
                    <a className="button button--navy button--solid">
                        Make a Donation&nbsp;&gt;
                    </a>
                </Link>
            </div>
        </div>
    </Layout>
)

export default Index;