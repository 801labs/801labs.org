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
					<h2 className="h2 mb-10">Square Up Thots!</h2>
					<div className="lg:flex mb-4">
						<div className="lg:w-full">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.848712761406!2d-111.88284848453371!3d40.76535207932616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f572b2a9a799%3A0x383ba8b422af2b1d!2s801Labs!5e0!3m2!1sen!2sus!4v1636043405319!5m2!1sen!2sus" width="100%" height="450" allowFullScreen="" loading="lazy" className="map"></iframe>
						</div>
					</div>
					<div className="lg:flex lg:w-full mb-4">
						<div className="lg:w-1/2">
							<address className="not-italic font-bold">
								353 East 200 South Suite #201<br/>
								Salt Lake City, UT 84111
							</address>
						</div>
						<div className="lg:w-1/2">
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
				<div className="lg:w-1/3 space-y-5">
					<h2 className="h2 mb-10">Let&apos;s Talk!</h2>
					<iframe src="https://discord.com/widget?id=690230523615772736&theme=dark" width="100%" height="600px" allowTransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
				</div>
			</div>
		</div>
	</Layout>
)

export default Contact;
