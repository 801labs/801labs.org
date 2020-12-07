import React from "react";
import Link from "next/link";
import Layout from "../../layouts/Layout";
import Hero from "../../components/Hero";
import Meta from "../../components/Meta";
import ProgressCircular from "../../components/ProgressCircular";

const FinancialInformation = () => (
    <Layout>
        <Meta
            title="Financial Information"
            description="We are a 100% volunteer run organization. Your donations and time help us meet the growing needs of our community."
        />
        <Hero title="Financial Information"/>
        <div className="bg-financial bg-no-repeat">
            <div className="container-1200 mx-auto px-5 py-20 space-y-5">
                <h2 className="h2">What happens to donations?</h2>
                <p>
                    Because 801labs is a 100% volunteer run organization, there is very little administrative overhead.
                    Not including our projects, current fixed costs and donations are below. Your donations of money and
                    time help us to meet the growing needs of our community.
                </p>
            </div>
        </div>
        <div className="bg-financial-expenses bg-no-repeat relative">
            <div className="financial-expenses-progress absolute top-0 lg:top-auto lg:bottom-0 px-5">
                <ProgressCircular value={90} />
            </div>
            <div className="container-1200 mx-auto px-5 py-20 lg:flex space-y-6 lg:space-y-0 lg:space-x-20 text-white">
                <div className="lg:w-1/3 lg:ml-auto">
                    <ul className="lg:text-right space-y-2">
                        <li><strong>Annual fixed expenses total: $28,060</strong></li>
                        <li>$2,050 monthly rent and utilities</li>
                        <li>$230 monthly internet</li>
                        <li>$350 yearly accounting fees</li>
                        <li>$350 yearly insurance</li>
                    </ul>
                </div>
                <div className="lg:w-1/2">
                    <ul className="space-y-2">
                        <li><strong>(Avg) Annual donation income: $27,400</strong></li>
                        <li>$10,000 yearly DC801 donation</li>
                        <li>$1,450 monthly recurring donations</li>
                        <li>As a [pending] public 501(c)(3) all yearly IRS 990 forms are public record.</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container-1200 mx-auto px-5 py-20 space-y-5">
            <h2 className="h2">Help us reach our goals!</h2>
            <p>
                We accept one-time or recurring financial donations, or donations of equipment and/or software. Please
                contact <a href="mailto:board@801labs.org" target="_blank" rel="noopener">board@801labs.org</a>
            </p>
            <p>
                Ask your employer if they have or would be interested in "corporate matching gifts". This is a type of
                philanthropy in which companies financially match donations that their employees make to nonprofit
                organizations.
            </p>
            <Link href="/donate">
                <a className="button button--navy button--solid">
                    Donate&nbsp;&gt;
                </a>
            </Link>
        </div>
    </Layout>
)

export default FinancialInformation;
