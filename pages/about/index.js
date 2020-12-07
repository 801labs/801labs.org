import React from "react";
import Link from "next/link";
import Layout from "../../layouts/Layout";
import Accordion from "../../components/Accordion";
import Hero from "../../components/Hero";
import Meta from "../../components/Meta";
import Image from "../../components/Image";

const Index = () => (
    <Layout>
        <Meta
            title="About Us"
            description="Our mission is to provide a space and community for peer learning through workshops, presentations, and social activities around IT, electronics, and IS."
        />
        <Hero title="About Our Community"/>
        <div className="container-1200 mx-auto px-5 py-20 relative z-10">
            <div className="mb-10 space-y-6">
                <h2 className="h2">Mission</h2>
                <p>
                    Our mission is to provide a space and a community for peer learning through workshops,
                    presentations, and regular social activities focused around information technology, electronics, and
                    Information security. 801 Labs is intended to be a shared community resource, and therefore most of
                    our events are free and open to the public.
                </p>
            </div>
            <div className="lg:flex lg:space-x-20">
                <div className="hidden lg:block w-1/3">
                    <Image
                        src="non-profit-organization-for-peer-learning.jpg"
                        sizes="292px"
                        alt="Non-profit organization for peer learning"
                    />
                </div>
                <div className="lg:w-2/3 space-y-6">
                    <h2 className="h2">Organization</h2>
                    <p>
                        801 labs is a non-profit organization run by its volunteers and overseen by a board of
                        directors. Our bylaws and meeting minutes are available on our GitHub page.
                    </p>
                    <p>
                        While the board has the authority to make decisions for the organization, our volunteers run the
                        day-to-day activities through committees. A list of committees along with their descriptions can
                        be found on the getting involved page.
                    </p>
                    <p>
                        801 Labs is funded entirely by donations, which help us to pay for our rent and keep the space
                        open and available to the community. Much of our equipment is donated by members of the
                        community and other companies. These donations are essential for our continued existence, and
                        any donations are welcome. Please visit our donation page to learn more.
                    </p>
                    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 md:items-start">
                        <Link href="/donate">
                            <a className="button button--navy button--solid mr-auto md:mr-0">
                                Donate&nbsp;&gt;
                            </a>
                        </Link>
                        <Link href="/get-involved">
                            <a className="button button--navy mr-auto md:mr-0">
                                Get Involved&nbsp;&gt;
                            </a>
                        </Link>
                        <a href="https://github.com/801labs/"
                           rel="noopener"
                           target="_blank"
                           className="button button--navy mr-auto md:mr-0">
                            Github&nbsp;&gt;
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-navy-400 bg-about-faq bg-no-repeat relative">
            <div className="absolute right-0 transform -translate-y-1/2 z-0" style={{width:'min(25.15%, 483px)'}}>
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg" x="0" y="0"
                    viewBox="0 0 488.7 626.7"
                    xmlSpace="preserve">
                    <g fill="#417dc0">
                        <path d="M166 182.4c-74.7 0-136 57.6-141.8 130.9h4c2.6-32.6 16.6-63 40-86.4 26.1-26.1 60.8-40.5 97.7-40.5 36.9 0 71.6 14.4 97.7 40.5 23.4 23.4 37.4 53.8 40 86.4h4C302 240 240.8 182.4 166 182.4z"/>
                        <path d="M166 205.5c-62 0-112.9 47.3-118.6 107.8h4c2.6-26.5 14.1-51.1 33.2-70.1 21.8-21.8 50.7-33.7 81.4-33.7s59.7 12 81.4 33.7c19 19 30.6 43.6 33.2 70.1h4C278.9 252.8 228 205.5 166 205.5z"/>
                        <path d="M166 228.7c-49.2 0-89.6 36.9-95.2 84.6h4c5.6-45.4 44.3-80.6 91.2-80.6s85.6 35.2 91.2 80.6h4c-5.6-47.6-46-84.6-95.2-84.6z"/>
                        <circle cx="403.6" cy="4.9" r="4.9"/>
                        <circle cx="403.6" cy="78.1" r="4.9"/>
                        <circle cx="403.6" cy="178.5" r="4.9"/>
                        <circle cx="403.6" cy="252.7" r="4.9"/>
                        <circle cx="478.8" cy="78.1" r="4.9"/>
                        <circle cx="478.8" cy="178.5" r="4.9"/>
                        <circle cx="478.8" cy="252.7" r="4.9"/>
                    </g>
                    <g fill="#fff" opacity=".2">
                        <circle cx="403.6" cy="323.6" r="4.9"/>
                        <circle cx="403.6" cy="398.1" r="4.9"/>
                        <circle cx="403.6" cy="472.7" r="4.9"/>
                        <circle cx="403.6" cy="547.2" r="4.9"/>
                        <circle cx="403.6" cy="621.8" r="4.9"/>
                        <circle cx="478.8" cy="323.6" r="4.9"/>
                        <circle cx="478.8" cy="398.1" r="4.9"/>
                        <circle cx="478.8" cy="472.7" r="4.9"/>
                        <circle cx="478.8" cy="547.2" r="4.9"/>
                        <circle cx="478.8" cy="621.8" r="4.9"/>
                        <path d="M321.6 382.7c6.8-18.1 10.4-37.6 10.4-58.1 0-3.8-.1-7.6-.4-11.3h-4.1c.3 3.7.4 7.5.4 11.3 0 20-3.6 39.4-10.5 57.5-1.7-.2-3.3-.2-5-.2-6.1 0-12.1 1-17.6 2.9 8.6-18.3 13.4-38.7 13.4-60.2 0-3.8-.2-7.6-.4-11.3h-4c.3 3.7.5 7.5.5 11.3 0 22-5.1 43.3-14.9 62.4-15.8 7.4-27.5 22.2-30.5 39.9-25.5 23.2-58.2 35.8-92.8 35.8-36.9 0-71.6-14.4-97.7-40.5-26.1-26.1-40.5-60.8-40.5-97.7 0-3.8.2-7.6.5-11.3h-4c-.3 3.7-.4 7.5-.4 11.3 0 78.5 63.7 142.2 142.2 142.2 35.1 0 67.3-12.8 92.1-33.9-.1 1.1-.1 2.3-.1 3.4 0 6.7 1.2 13.2 3.5 19.1-27.6 20.2-60.7 31.1-95.5 31.1-43.2 0-84-16.8-114.6-47.3C20.8 408.6 4 367.9 4 324.6c0-3.8.1-7.6.4-11.3h-4c-.3 3.7-.4 7.5-.4 11.3 0 91.7 74.3 166 166 166 36.3 0 69.8-11.6 97.1-31.3 8.7 18.6 27.5 31.4 49.3 31.4 30 0 54.4-24.4 54.4-54.4 0-26.9-19.6-49.2-45.2-53.6z"/>
                        <path d="M281.1 324.6c0 30.7-12 59.7-33.7 81.4-21.7 21.7-50.6 33.7-81.4 33.7-30.7 0-59.7-12-81.4-33.7-21.7-21.7-33.7-50.6-33.7-81.4 0-3.8.2-7.6.5-11.3h-4c-.3 3.7-.5 7.5-.5 11.3 0 65.8 53.3 119.1 119.1 119.1s119.1-53.3 119.1-119.1c0-3.8-.2-7.6-.5-11.3h-4c.3 3.8.5 7.5.5 11.3z"/>
                        <path d="M257.9 324.6c0 50.7-41.2 91.9-91.9 91.9s-91.9-41.2-91.9-91.9c0-3.8.2-7.6.7-11.3h-4c-.4 3.7-.7 7.5-.7 11.3 0 53 42.9 95.9 95.9 95.9s95.9-42.9 95.9-95.9c0-3.8-.2-7.6-.7-11.3h-4c.5 3.7.7 7.5.7 11.3z"/>
                    </g>
                    <circle cx="166" cy="324.6" r="91.9" fill="#fff"/>
                </svg>
            </div>
            <div className="container-1200 mx-auto px-5 py-40 text-white">
                <h2 className="h2 mb-10 text-center">Frequently Asked Questions</h2>
                <Accordion
                    title="Hacking is a broad topic, are there specific interests of 801labs?"
                    initialOpen={true}>
                    <p>
                        The list keeps growing but to date people have shared the following at 801labs:
                    </p>
                    <ul className="list-disc ml-10 space-y-1">
                        <li>
                            Information Security (InfoSec): Routers, Switches, Firewalls, Servers, Password Cracking
                        </li>
                        <li>
                            Physical Security: Lock picking
                        </li>
                        <li>
                            Software: Metasploit, Wireshark, Nessus, NMap, Netcat
                        </li>
                        <li>
                            Languages: Ruby, Javascript, C++, PHP, Python, Go
                        </li>
                        <li>
                            OS: Linux, BSD, Unix, Windows
                        </li>
                        <li>
                            Embedded: Arduino, ESP, Arm, Propeller, Automotive
                        </li>
                    </ul>
                </Accordion>
                <Accordion title="What is the difference between 801 Labs and DC801?">
                    <p>
                        While both are integral parts of the Utah hacker community, 801 Labs and DC801 are separate
                        entities. 801 Labs is the non-profit physical place while DC801 is the people. Neither have
                        formal membership. Will I see those people IRL at the place? Yes, the 801 Labs hackerspace is a
                        [pending] public 501(c)(3) that is open to the public, we welcome everyone.
                    </p>
                    <p>
                        DC801 is the local DEFCON user group. Presentations from DC801 focus on information and general
                        security. For more information on DC801 visit www.dc801.org
                    </p>
                </Accordion>
                <Accordion title="What is the history of 801 Labs?">
                    <ul className="list-disc ml-10 space-y-1">
                        <li>
                            2012: DC801 worked with the Utah County hackerspace, The Transistor, to create a sub-branch
                            called TransistorSLC.
                        </li>
                        <li>
                            2014: The Transistor closed.
                        </li>
                        <li>
                            2014: TransistorSLC rebranded as 801 Labs.
                        </li>
                        <li>
                            2014: 801 Labs moved to 353 East 200 South in Salt Lake City, where they have been hacking
                            ever since.
                        </li>
                        <li>
                            2019: 801 labs applied for 501(c)(3) to meet the growing demands of the hacker community.
                        </li>
                    </ul>
                </Accordion>
                <Accordion title="Is hacking illegal?">
                    <p>
                        Ok, this is click bait because everyone defines hacking differently. Bluntly put, 801 labs does
                        not condone illegal activities. Leave your black hat at home. There are too many things that
                        need legal hacking, help us with those instead.
                    </p>
                </Accordion>
            </div>
        </div>
        <div className="bg-gray-800 text-white bg-image-hackerspace bg-cover bg-top">
            <div className="container-1200 mx-auto py-40">
                <div className="px-5 pb-10 space-y-6">
                    <h2 className="h2 text-center">Resources</h2>
                    <h3 className="h4 text-center">
                        To be clear, 801 Labs is a Hackerspace, <strong>NOT</strong> a Maker-space.
                    </h3>
                    <p>
                        We have tools for people learning to hack things. Some of those tools are for fabrication and
                        prototyping, however this is NOT our primary focus. If fabrication, prototyping, and/or
                        production
                        is your primary motivation, you should also check out Make SLC.
                    </p>
                </div>
                <div className="px-5 pt-10">
                    <h2 className="h2 text-center mb-10">Equipment &amp; Tools</h2>
                    <div className="grid md:grid-cols-3 col-gap-20 row-gap-10">
                        <div>
                            <h3 className="fluid-text-lg font-bold bg-black px-5 py-1 mb-3">Equipment</h3>
                            <ul className="px-5 py-1 space-y-2">
                                <li>
                                    Laser cutter
                                </li>
                                <li>
                                    Resin 3D printer
                                </li>
                                <li>
                                    Filament 3D printers
                                </li>
                                <li>
                                    CNC Mill
                                </li>
                                <li>
                                    Obscenely large vinyl cutter
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="fluid-text-lg font-bold bg-black px-5 py-1 mb-3">Tools</h3>
                            <ul className="px-5 py-1 space-y-2">
                                <li>
                                    Power tools: Drill &amp; Dremel
                                </li>
                                <li>
                                    Logic analyzer
                                </li>
                                <li>
                                    Soldering irons
                                </li>
                                <li>
                                    Hot air rework gun
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="fluid-text-lg font-bold bg-black px-5 py-1 mb-3">More</h3>
                            <ul className="px-5 py-1 space-y-2">
                                <li>
                                    Benchtop power supply
                                </li>
                                <li>
                                    Video microscope
                                </li>
                                <li>
                                    Stereo microscope
                                </li>
                                <li>
                                    TV's &amp; projectors
                                </li>
                                <li>
                                    Touch screens
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Index