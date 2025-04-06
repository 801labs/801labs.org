import React from "react";
import Link from "next/link";
import Layout from "../layouts/Layout";
import MeetupEvents from "../components/MeetupEvents";
import Meta from "../components/Meta";
import PostPreview from "../components/PostPreview";
import SocialLinks from "../components/SocialLinks";
import {research} from "../lib/blogs";
import Image from "../components/Image";

const Index = (props) => (
    <Layout>
        <Meta
            title="Home"
            description="801 Labs is a Salt Lake City based hackerspace created by local information technology, electronics, and information security enthusiasts."
        />
        <div className="bg-graphite-900 bg-image-grid bg-top text-white">
            <div className="container-1400 mx-auto px-5 py-20 lg:flex items-center lg:space-x-5">
                <div className="lg:w-3/5 xl:w-2/3">
                    <h1 className="h1 mb-8 text-shadow-glow">
                        A Community HACKERSPACE
                    </h1>
                    <Link href="/get-involved/events">
                        <a className="button button--white">
                            Check out our upcoming events&nbsp;&gt;
                        </a>
                    </Link>
                </div>
                <div className="hidden lg:block lg:w-2/5 xl:w-1/3 font-display fluid-text-2xl">
                    <pre>
                        <code>
                            {`{\r\n`}
                            {`  `}<span className="text-mint">"for"</span>:{`[\r\n`}
                            {`    `}<span className="text-mint">"information_technology"</span>,{`\r\n`}
                            {`    `}<span className="text-mint">"electronics"</span>,{`\r\n`}
                            {`    `}<span className="text-mint">"information_security"</span>{`\r\n`}
                            {`  ],\r\n`}
                            {`  `}<span className="text-mint">"enthusiasts"</span>: <span
                            className="text-lavender-400">true</span>{`\r\n`}
                            {`}`}
                        </code>
                    </pre>
                </div>
            </div>
        </div>
        <div className="container mx-auto lg:flex">
            <div className="lg:w-1/2 py-16 px-5 lg:px-20 space-y-6">
                <h2 className="h4">
                    What will I learn at 801 Labs?
                </h2>
                <p>
                    801 Labs runs a wide variety of classes that cover topics ranging from designing and building
                    electronics, to information security, to programming, to 3D printing and 3D modeling, and more.
                    Since we are a community run organization, our class offerings are based on what members of the
                    local community are proficient in and willing to teach. The best way to find out exactly what you
                    can learn is to check out our upcoming events. If you’ve got something you want to teach or would
                    like to learn about, you can check out the get involved section and let us know you’d like to teach
                    a class, or to let us know there is interest in a topic so that we can try to organize a class to
                    cover that topic.
                </p>
            </div>
            <div className="lg:w-1/2 bg-black relative grid">
                <Image
                    className="absolute object-cover inset-0 h-full w-full opacity-40"
                    src="801labs_map_location.png"
                    sizes="(min-width: 1920px) 960px, (min-width: 1280px) 50vw, 100vw"
                    alt="801 Labs - A community Hackerspace location"
                />
                <div
                    className="relative py-16 px-5 lg:px-20 flex flex-col items-center justify-center text-center text-white">
                    <h2 className="h3 mb-12">
                        How do I get to 801 Labs?
                    </h2>
                    <a className="button button--white"
                       href="https://www.google.com/maps/dir//353+E+200+S+Suite+%23B,+Salt+Lake+City,+UT+84111/@40.765524,-111.880617,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8752f572ad542573:0xdd96640329b3d2cb!2m2!1d-111.8806598!2d40.7653521!3e0?hl=en"
                       rel="noopener"
                       target="_blank">
                        Get Directions&nbsp;&gt;
                    </a>
                </div>
            </div>
        </div>
        <div className="container mx-auto lg:flex">
            <div className="hidden lg:block w-1/2 bg-gray-400 relative">
                <Image
                    className="absolute object-cover inset-0 h-full w-full"
                    src="learn-information-technology-information-security.jpg"
                    sizes="(min-width: 1920px) 960px, (min-width: 1280px) 50vw, 100vw"
                    alt="Learn information technology, information security, programming, and more"
                />
            </div>
            <div className="lg:w-1/2 py-16 px-5 lg:px-20 space-y-6">
                <h2 className="h4">
                    What is 801 Labs?
                </h2>
                <p>
                    801 Labs is a Salt Lake City based hackerspace created by local information technology, electronics,
                    and information security enthusiasts. 801 Labs is a physical space designed to be a center for peer
                    learning and knowledge sharing in the form of workshops, presentations, and lectures. We also offer
                    regular activities to the community, where people can gather to work on their own projects, exchange
                    ideas, and learn from each other. Since 801 Labs is intended to be a shared community resource,
                    almost all of our events are free and open to the public.
                </p>
            </div>
        </div>
        <div className="bg-navy-800 text-white">
            <div className="bg-index-events bg-repeat-x">
                <div className="container mx-auto px-5 pt-20 md:pt-40 pb-20">
                    <h2 className="h2 text-center mb-20">Upcoming Events</h2>
                    <div className="mb-20">
                        <MeetupEvents/>
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
            <div className="bg-index-volunteer bg-no-repeat relative">
                <div className="container mx-auto px-5 py-20 relative">
                    <h2 className="h2 text-center mb-20">
                        Get Involved
                    </h2>
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 text-center">
                        <div
                            className="flex flex-col px-5 pt-16 pb-8 bg-graphite-700 shadow-2xl">
                            <div className="flex-1 mb-10 flex flex-col items-center justify-center">
                                <h3 className="leading-snug">
                                    <span className="fluid-text-4xl font-bold">
                                        Start Following
                                    </span>
                                    <br/>
                                    <span className="fluid-text-3xl">
                                        Our Social Media
                                    </span>
                                </h3>
                                <SocialLinks
                                    ulClassNames="justify-center"
                                    liClassNames="m-2"
                                    aClassNames="text-white hover:text-gray-400"
                                    size="2x"/>
                            </div>
                            <div>
                                <Link href="/get-involved#be-social">
                                    <a className="button button--sm">
                                        Follow Us&nbsp;&gt;
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col px-5 pt-16 pb-8 bg-lavender-700 shadow-2xl">
                            <div className="flex-1 mb-10 flex flex-col items-center justify-center">
                                <h3 className="leading-snug">
                                    <span className="fluid-text-4xl font-bold">
                                        Join Our
                                    </span>
                                    <br/>
                                    <span className="fluid-text-3xl">
                                        Discord Server
                                    </span>
                                </h3>
                            </div>
                            <div>
                                <a
                                    href="https://discord.gg/uRSthurdPY"
                                    rel="noopener"
                                    target="_blank"
                                    className="button button--sm">
                                    Join&nbsp;&gt;
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col px-5 pt-16 pb-8 bg-rust shadow-2xl">
                            <div className="flex-1 mb-10 flex flex-col items-center justify-center">
                                <h3 className="leading-snug">
                                    <span className="fluid-text-4xl font-bold">
                                        Visit us @
                                    </span>
                                    <br/>
                                    <span className="fluid-text-3xl">
                                        Our Meetup Events
                                    </span>
                                </h3>
                            </div>
                            <div>
                                <Link href="/get-involved/events">
                                    <a className="button button--sm">
                                        See Upcoming Events&nbsp;&gt;
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col px-5 pt-16 pb-8 bg-navy-700 shadow-2xl">
                            <div className="flex-1 mb-10 flex flex-col items-center justify-center">
                                <h3 className="leading-snug">
                                    <span className="fluid-text-4xl font-bold">
                                        Volunteer
                                    </span>
                                </h3>
                            </div>
                            <div>
                                <Link href="/get-involved#volunteer">
                                    <a className="button button--sm">
                                        Lend a Hand&nbsp;&gt;
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-index-posts bg-repeat-x">
                <div className="container mx-auto px-5 pt-20 pb-40">
                    <h2 className="h2 text-center mb-20">
                        Featured Posts
                    </h2>
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                        {props.posts.map((post, i) => (
                            <PostPreview
                                {...post}
                                key={post.slug}
                                path="/research-portal"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export async function getStaticProps() {
    const {posts} = research.getPosts(1, 4)

    return {
        props: {
            posts,
        }
    }
}

export default Index;
