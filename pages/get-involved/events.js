import React from "react";
import Layout from "../../layouts/Layout";
import Accordion from "../../components/Accordion";
import Hero from "../../components/Hero";
import MeetupEvents from "../../components/MeetupEvents";
import Meta from "../../components/Meta";

const Events = () => (
    <Layout>
        <Meta
            title="Events"
            description="Get involved and attend our events. Learn more about information technology, ethical hacking, information security and more."
        />
        <Hero title="Events" />
        <div className="bg-lavender-900 text-white bg-events bg-no-repeat">
            <div className="container mx-auto px-5 pt-20 md:pt-40 pb-20">
                <h2 className="h2 text-center mb-12 sr-only">Upcoming Events</h2>
                <MeetupEvents limit={8}/>
            </div>
            <div className="container-1200 mx-auto px-5 pt-20 pb-40">
                <h2 className="h2 text-center mb-12">
                    Event FAQs
                </h2>
                <Accordion title="Are events open to the public?" initialOpen={true}>
                    <p>
                        Yes! 801 Labs is a community based hackerspace that was setup to provide a place for the
                        community of Salt Lake City to meet about technology and host events. All of our events are open
                        to the public.
                    </p>
                </Accordion>
                <Accordion title="Are events free?">
                    <p>
                        All of our events are open to the public, most are free, some are paid. We always accept and
                        encourage donations. Some classes may charge a fee to cover material costs, if stated on the
                        event’s meetup page. There will often be an option to attend the class and bring your own
                        materials or just observing the class without building something. Contact the presenter on our
                        Slack channel if you have questions.
                    </p>
                </Accordion>
                <Accordion title="I can’t make or I missed an event, are they recorded?">
                    <p>
                        Yes! Most of our classes are archived on our youtube channel. Upon request a live stream may be
                        possible, contact the presenter on our Slack channel for details.
                    </p>
                </Accordion>
                <Accordion title="Do I need a membership?">
                    <p>
                        No, there is no membership. However we do accept and encourage donations! 801 Labs is a
                        community based hackerspace that was setup to provide a place for the community of Salt Lake
                        City to meet about technology and host events.
                    </p>
                </Accordion>
                <Accordion title="Do I need to donate or have a membership to participate?">
                    <p>
                        No! The space is open to the public and run entirely by volunteers. Our operating costs are
                        covered entirely by voluntary donations and recurring patronage, but no activities or
                        responsibilities at the space are contingent upon receipt of donations. If you’d like to attend
                        events or get involved around the space, you are encouraged to do so.
                    </p>
                </Accordion>
                <Accordion title="I would like to request a topic be covered in a class, what should I do?">
                    <p>
                        We’ve got a form on our get involved page for just this occasion. If you let us know what you’re
                        looking for, we can ask among the community if there is anyone who would like to teach a class
                        on a specific topic. If there is interest in a topic, we will do our best to find someone
                        qualified to teach about it, but we may not be able to make every request into a class.
                    </p>
                </Accordion>
            </div>
        </div>
    </Layout>
)

export default Events;