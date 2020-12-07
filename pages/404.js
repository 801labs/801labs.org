import React from "react";
import Layout from "../layouts/Layout";
import Hero from "../components/Hero";
import Meta from "../components/Meta";

const Error404 = () => (
    <Layout>
        <Meta
            title="404: Page not found"
            description="This is not the page you are looking for."
        />
        <Hero title="404: Page Not Found"/>
        <div className="container-1200 mx-auto px-5 py-20">
            <div className="mb-10 space-y-6">
                <h2 className="h2">
                    This is not the page you are looking for
                </h2>
                <p>
                    Please check the URL, or use the navigation above to find the right page.
                </p>
            </div>
        </div>
    </Layout>
)

export default Error404