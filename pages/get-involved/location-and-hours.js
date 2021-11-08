import React from "react";
import Link from "next/link";
import Layout from "../../layouts/Layout";
import Hero from "../../components/Hero";
import LocationMap from "../../components/LocationMap";
import Meta from "../../components/Meta";
import YoutubeEmbed from "../../components/YoutubeEmbed";
import Image from "../../components/Image";

const LocationAndHours = () => (
    <Layout>
        <Meta
            title="Location and Hours"
            description="Open Tuesday and Thursdays from 5:00 PM to 10:00 PM. Address: 353 East 200 South Suite #201, Salt Lake City, UT 84111"
        />
        <Hero title="Location &amp; Hours"/>
        <div className="container-1400 mx-auto px-5 pt-20 lg:pt-40 pb-20 lg:flex lg:space-x-32">
            <div className="mb-10 lg:mb-0 lg:w-2/5">
                <Image
                    className="mx-auto"
                    src="location-salt-lake-city.jpg"
                    sizes="(min-width: 1400px) 486px, (min-width: 1024px) 40vw, 100vw"
                    alt="A hackerspace community 353 East 200 South Suite #201, Salt Lake City"
                />
            </div>
            <div className="lg:w-3/5">
                <div className="mb-5">
                    <p className="font-bold" >
                    COVID-19 Restrictions
                    </p>
                    <p style={{color: 'red'}} >
                        A vaccination or negative COVID-19 test (within the last 7 days) is required to enter the hackerspace.
                    </p>
                </div>    
                <div className="mb-5">
                    <p className="font-bold">353 East 200 South Suite #201, Salt Lake City, UT 84111</p>
                    <p>
                        Thursdays from 5:00 PM to 10:00 PM and other days by announcement.
                    </p>
                </div>
                <div className="mb-5">
                    <p className="font-bold">Holiday Hours</p>
                    <p>
                        Ask on our Discord Server or check our social media for changes.
                    </p>
                </div>
                <div className="mb-5">
                    <p className="font-bold">Other</p>
                    <p>
                        We are open to the public whenever our key list volunteers are available to run the space. Ask
                        our Discord Server.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
                    <a className="button button--sm button--navy button--solid mr-auto md:mr-0"
                       href="https://discord.gg/7pBUdwv9Gr"
                       rel="noopener"
                       target="_blank">
                        Join Discord&nbsp;&gt;
                    </a>
                    <Link href="/get-involved/events">
                        <a className="button button--sm button--navy mr-auto md:mr-0">
                            Meetup With Us&nbsp;&gt;
                        </a>
                    </Link>
                </div>
            </div>
        </div>
        <div className="container-1400 mx-auto px-5 pt-20 pb-20 grid-location grid lg:grid-flow-col lg:grid-cols-2 row-gap-5 lg:col-gap-32">
            <div className="bg-gray-100 px-16 pb-8 h-full">
                <h2 className="h2 transform -translate-y-1/2">Entrance</h2>
                <p>
                    The entrance is on the north / back side of the building. To get there, walk through the tunnel off
                    200 South or use the gate in the Crown Burger parking lot.
                </p>
            </div>
            <div className="mb-20 lg:mb-0 lg:px-16">
                <Image
                    className="mx-auto"
                    sizes="(min-width: 1400px) 488px, (min-width: 1024px) 30vw, (min-width: 644px) 644px, 100vw"
                    src="801-labs-location-entrance.jpg"
                    alt="801 Labs location entrance"
                />
            </div>
            <div className="bg-gray-100 px-16 pb-8 h-full">
                <h2 className="h2 transform -translate-y-1/2">Parking</h2>
                <p>
                    Street parking is plentiful in the area, however, lot parking is limited. Please use the back
                    entrance as found on the diagram below.
                </p>
            </div>
            <div className="lg:px-16">
                <LocationMap />
            </div>
        </div>
        <div className="container-1200 mx-auto px-5 pt-20 pb-40 text-center">
            <h2 className="h2 mb-10">Virtual Tour</h2>
            <div className="">
                <YoutubeEmbed
                    poster="virtual-tour-a-community-hackerspace-utah.jpg"
                    width={1180}
                    height={410}
                    alt="Virtual tour of the community hackerspace in Utah"
                    videoId="dQw4w9WgXcQ" />
            </div>
        </div>
    </Layout>
)

export default LocationAndHours;
