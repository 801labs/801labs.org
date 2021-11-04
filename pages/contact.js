import React from "react";
import Layout from "../layouts/Layout";
import Hero from "../components/Hero";
import Meta from "../components/Meta";

const Contact = () => (
    <Layout>
        <Meta
            title="Contact Us"
            description="Contact us at Board@801labs.org or visit us at 353 East 200 South Suite #201 Salt Lake City, UT 84111"
        />
        <Hero title="Contact Us"/>
        <div className="bg-contact bg-no-repeat bg-navy-800 text-white">
            <div className="container-1400 mx-auto px-5 py-32 space-y-20 lg:space-y-0 lg:flex">
                <div className="lg:order-last lg:w-2/3">
                    <h2 className="h2 mb-10">Let&apos;s Talk!</h2>
                    <iframe src="https://discord.com/widget?id=690230523615772736&theme=dark" width="100%" height="600px" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
                <div className="lg:w-1/3 space-y-5">
                    <address className="not-italic font-bold">
                        353 East 200 South Suite #201<br/>
                        Salt Lake City, UT 84111
                    </address>
                    <p>
                        Tuesdays and Thursdays from:<br/>
                        5:00 PM to 10:00 PM
                    </p>
                    <p>
                        <a
                            className="text-white hover:text-gray-400 focus:text-gray-400"
                            href="mailto:board@801labs.org"
                            target="_blank"
                            rel="noopener">
                            board@801labs.org
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </Layout>
)

export default Contact;
