import React from "react";
import Layout from "../layouts/Layout";
import Hero from "../components/Hero";
import Meta from "../components/Meta";

const Donate = () => (
    <Layout>
        <Meta
            title="Donate"
            description="801 labs is dedicated to providing a safe and friendly environment for learning. Donations form generous patrons like you allow us to keep the doors open."
        />
        <Hero title="Donate"/>
        <div className="bg-donate bg-no-repeat">
            <div className="container-1200 mx-auto px-5 pt-20 pb-10 space-y-6">
                <p>
                    801 labs is dedicated to providing a safe and friendly environment for the public to gather and learn
                    together. It’s donations from generous patrons like you that allow us to keep the doors open. Below are
                    suggested giving amounts, and details on how your donation can help our community. You can find the
                    details of our finances here.
                </p>
                <div className="text-center">
                    <h2 className="fluid-text-lg font-bold">
                        We thank you for your generosity and commitment to help our community thrive.
                    </h2>
                    <p>
                        Even a small donation can help in great ways.
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-5 pt-10 pb-20 grid md:grid-cols-2 xl:grid-cols-4 gap-5 text-center">
                <div className="bg-gray-200 px-12 py-10 flex flex-col">
                    <h2 className="h2 font-bold mb-2">$25</h2>
                    <p className="mb-10">
                        Helps maintain our physical equipment for a month.
                    </p>
                    <a
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BWV8WFGYAEECN&source=website"
                        target="_blank"
                        rel="noopener"
                        className="button button--navy button--solid button--sm block mt-auto">
                        Donate $25&nbsp;&gt;
                    </a>
                </div>
                <div className="bg-gray-200 px-12 py-10 flex flex-col">
                    <h2 className="h2 font-bold mb-2">$50</h2>
                    <p className="mb-10">
                        Ensures that our online community can stay connected for a month.
                    </p>
                    <a
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BWV8WFGYAEECN&source=website"
                        target="_blank"
                        rel="noopener"
                        className="button button--navy button--solid button--sm block mt-auto">
                        Donate $50&nbsp;&gt;
                    </a>
                </div>
                <div className="bg-gray-200 px-12 py-10 flex flex-col">
                    <h2 className="h2 font-bold mb-2">$75</h2>
                    <p className="mb-10">
                        Allows us to teach a single class or hold a public event.
                    </p>
                    <a
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BWV8WFGYAEECN&source=website"
                        target="_blank"
                        rel="noopener"
                        className="button button--navy button--solid button--sm block mt-auto">
                        Donate $75&nbsp;&gt;
                    </a>
                </div>
                <div className="bg-gray-200 px-12 py-10 flex flex-col">
                    <h2 className="h2 font-bold mb-2">Custom</h2>
                    <p className="mb-10">
                        Any amount you are willing to donate will help us reach our goals.
                    </p>
                    <a
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BWV8WFGYAEECN&source=website"
                        target="_blank"
                        rel="noopener"
                        className="button button--navy button--solid button--sm block mt-auto">
                        Donate&nbsp;&gt;
                    </a>
                </div>
            </div>
        </div>
    </Layout>
)

export default Donate;