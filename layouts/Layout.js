import React, {useState} from "react";
import Link from "next/link";
import SocialLinks from "../components/SocialLinks";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import menu from "../lib/menu";

const Layout = ({children}) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white font-sans fluid-text-base">
            <div
                className={`fixed inset-0 z-40 bg-graphite-800 ${isOpen ? 'block' : 'hidden'}`}
                onClick={() => setIsOpen(false)}
                style={{'--bg-opacity': .4}}>

            </div>
            <div
                className={`fixed right-0 top-0 h-screen overflow-y-auto z-50 w-full sm:w-64 font-display bg-graphite-800 text-white ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-5 pt-5 text-right">
                    <button className="px-4 py-2" title="Close Menu" onClick={() => setIsOpen(false)}>
                        <span className="sr-only">Close Menu</span>
                        <FontAwesomeIcon icon={faTimes} size="lg"/>
                    </button>
                </div>
                <ul className="pt-2 pb-5 fluid-text-lg">
                    {menu.map(({label, props, children}, i) => (
                        <li key={`off-canvas-${i}`}>
                            <Link {...props}>
                                <a className={`py-1 px-5 ${props.href?.includes('/donate') ? 'link--tangerine font-bold' : (router.pathname === props.href ? 'link--tangerine' : 'link--white')}`}>
                                    {label}
                                </a>
                            </Link>
                            {children && <ul className="fluid-text-base">
                                {children.map(({label, props}, j) => (
                                    <li key={`off-canvas-${i}-${j}`}>
                                        <Link {...props}>
                                            <a className={`py-1 pl-10 pr-5 ${router.pathname === props.href ? 'link--tangerine' : 'link--white'}`}>
                                                {label}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="page">
                <header className="page-header font-display bg-graphite-800 text-white">
                    <div className="container mx-auto px-5 lg:px-10 xl:px-16 py-3 lg:py-5 flex">
                        <div className="flex-initial">
                            <Link href="/">
                                <a className="text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-current"
                                         viewBox="0 0 1566.7 420.9" width="217">
                                        <title>801 Labs - a Community Hackerspace</title>
                                        <path
                                            d="M131.5 261.8h24.1c1.8 0 3.2 1.5 3.2 3.2 0 1.8-1.5 3.2-3.2 3.2h-24.1c-1.8 0-3.2-1.5-3.2-3.2-.1-1.8 1.4-3.2 3.2-3.2z"/>
                                        <path
                                            d="M194.9 148.8V60.9c13-4.1 21.9-16.1 21.9-29.8 0-17.2-14-31.2-31.2-31.2h-85.3c-13.6.1-25.7 9-29.7 22-5.1 16.4 4.1 33.9 20.5 39v87.8c-7.5 2.9-14.8 6.5-21.7 10.6-67.6 40.6-89.6 128.2-49.1 195.8 12.9 21.3 31 39.1 52.6 51.6 18.4 10.7 29.7 12.9 32.7 13.4 12.1 1.7 22.7-1.3 30.5-8.8 9.3-8.8 14.9-23.7 16.6-44.2.6-8.6.7-17.3.3-25.9 3.6-2.4 6.3-6.1 7.3-10.7l.3-1.2c0-.6.1-1.5.1-2.4h16c6.3 0 11.5-5.1 11.5-11.4v-.9h-.2c.1-.6.2-1.2.2-1.7l.2-34.4c0-1.5-1.2-2.6-2.6-2.6h-1.2c-1.5 0-2.6-1.2-2.6-2.7l.1-39.6c0-1.4-1.2-2.6-2.6-2.6l-71.7-.2c-1.4 0-2.6 1.2-2.6 2.6l-.1 39.6c0 1.4-1.2 2.6-2.6 2.6h-1.2c-1.4 0-2.6 1.2-2.6 2.6l-.1 34.6c0 .6.1 1.3.2 1.9h-.2v.7c0 6.3 5.1 11.5 11.4 11.5h16.3c.1.8.4 1.6.6 2.4 0 0 3.3 8.8 9.1 12.8 1 22.2-.7 46.7-11.5 56.8-4.1 3.9-9.4 5.3-16.5 4.3-.4-.1-9.7-1.5-26.5-11.2-19.1-11-35.1-26.7-46.5-45.6-3.5-5.8-6.5-11.9-9-18.2-25.6-64.5 6-137.5 70.4-163.1 2-.8 11.7-5.7 11.7-11.3V54.2v-.6c0-4.6-3.7-8.2-8.2-8.2-7.8-.1-14-6.6-13.9-14.4.1-7.8 6.6-14 14.4-13.9h85.3c7.8-.1 14.2 6.1 14.4 13.9.1 7.8-6.1 14.2-13.9 14.4h-.6c-4.5.3-7.9 4.3-7.6 8.9v99.5c0 5.9 9.8 10.6 11.7 11.3 47.9 19.1 79.3 65.5 79.3 117 0 57.5-38.5 107.7-93.5 122.1-3.7 1-6.3 4.4-6.3 8.2 0 4.7 3.8 8.5 8.5 8.5.7 0 1.5-.1 2.2-.2 62.5-16.4 106.2-73.4 106.2-138.6-.1-59-36.3-111.9-91.2-133.3zm-62.8 155.4l-1.6 7.7c-.4 1.5-1.7 2.5-3.2 2.5l-13.4-.3c-1.5 0-2.6-1.2-2.6-2.7V291c0-1.4 1.2-2.6 2.6-2.6h1.2c1.4 0 2.6-1.2 2.6-2.6l.1-39.6c0-1.4 1.2-2.6 2.6-2.6h5.4c1.4 0 2.6 1.2 2.6 2.6v7.6c0 1.5 1.2 2.6 2.6 2.6h1.2c1.4 0 2.6-1.2 2.6-2.6v-7.3c0-1.4 1.2-2.6 2.6-2.7l11.9-.1c1.4.1 2.5 1.2 2.5 2.6v7.5c0 1.4 1.2 2.6 2.6 2.6h1.3c1.4 0 2.6-1.2 2.6-2.6v-7.6c0-1.4 1.2-2.6 2.6-2.6h5.3c1.5 0 2.7 1.1 2.7 2.6v.1l-.1 39.6c0 1.5 1.2 2.6 2.6 2.6h1.2c1.5 0 2.6 1.2 2.6 2.6v20.4c0 1.4-1.2 2.6-2.6 2.6h-13.4c-1.5-.1-2.8-1.1-3.1-2.6l-1.6-7.7c-.4-1.5-1.6-2.5-3.1-2.5l-16.4.2c-1.2.2-2.5 1.2-2.9 2.7z"/>
                                        <path
                                            d="M453.1 366.9c-40 0-64.9-24.1-64.9-59.7v-30c-.9-17 8.3-32.9 23.3-40.8-14.1-6.3-23-21.5-23-40.8v-26.9c0-35.6 24.5-59.7 64.5-59.7s64.9 24.1 64.9 59.7v26.9c0 19.3-8.9 34.5-23 40.8 15.2 7.8 24.4 23.7 23.7 40.8v30c.1 35.7-25.1 59.7-65.5 59.7zm23.7-196.5c-.6-13-11.7-23-24.7-22.4-12.1.6-21.8 10.3-22.4 22.4V203c1.1 13 12.5 22.7 25.5 21.6 11.5-1 20.6-10.1 21.6-21.6v-32.6zm.4 100.4c0-11.5-8.2-21.9-24.1-21.9-11.8-1-22.3 7.8-23.3 19.6-.1.8-.1 1.5-.1 2.3v34.5c-.7 12.2 8.7 22.7 20.9 23.3h2.4c12.4.8 23.2-8.6 24.1-21 .1-.8.1-1.5 0-2.3v-34.5zM630.3 366.9c-40 0-65.6-25.9-65.6-64.1V173.7c0-38.6 25.5-64.1 65.6-64.1 40.1 0 66 25.5 66 64.1v129.1c-.1 38.2-25.6 64.1-66 64.1zM654 170.1c0-11.9-8.9-21.5-23.7-21.5-11.8-1-22.3 7.8-23.3 19.6-.1.6-.1 1.3-.1 1.9v135.7c0 11.9 9.6 21.6 21.4 21.6.6 0 1.3 0 1.9-.1 14.8 0 23.7-9.6 23.7-21.5V170.1zM753.7 361.4V134.2c14.1 0 19.3-9.3 19.3-19.6h23.3v246.8h-42.6zM930.6 361.4V114.5h45.9v206.1h69v40.8H930.6zM1174.8 361.4l-8.2-48.4h-43.7l-8.9 48.4h-43l49.6-246.8h51.5l49.5 246.8h-46.8zm-28.9-180.2l-16.7 95.3h31.5l-14.8-95.3zM1335.3 361.4h-77.8V114.5h77.2c33.7 0 54.5 18.2 54.5 52.3v26.9c0 21.1-8.2 37.1-29.3 41.5 22.2 5.9 30.4 21.1 30.4 41.9v32.3c-.2 34.2-21.3 52-55 52zm9.6-191.3c0-11.1-4.8-17.8-16.1-17.8h-24.9v67.8h23c11.9 0 18.2-6.3 18.2-19.3l-.2-30.7zm.7 103.5c0-13-6.3-19.6-18.2-19.6h-23.7v69.9h25.9c11.5 0 16.1-6.3 16.1-17.8l-.1-32.5zM1498.4 366.9c-42.3 0-68.6-25.2-68.6-63.7v-17.1h42.3v14.5c0 18.2 8.5 28.2 25.2 28.2s24.5-9.6 24.5-24.9c0-19.6-12.6-33-37.1-51.2-24.5-18.2-52.6-42.6-52.6-77.1 0-35.6 23-66.3 67.5-66.3 38.9 0 64.9 26.9 64.9 63.4v16.1h-41.9V174c0-15.2-7.8-26.3-23.3-26.3-11.5-.8-21.4 7.8-22.2 19.3-.1 1-.1 1.9 0 2.9 0 20.8 12.2 31.5 39.6 51.5 29.3 21.9 50 44.1 50 77.5-.2 39.5-27.7 68-68.3 68z"/>
                                    </svg>
                                </a>
                            </Link>
                        </div>
                        <div className="lg:hidden flex-1 text-right">
                            <button className="px-4 py-2" title="Toggle Menu" onClick={() => setIsOpen(true)}>
                                <span className="sr-only">Toggle Menu</span>
                                <FontAwesomeIcon icon={faBars} size="lg"/>
                            </button>
                        </div>
                        <ul className="flex-1 hidden lg:flex justify-end fluid-text-lg">
                            {menu.map(({label, props, children}, i) => (
                                <li className="group relative" key={`header-${i}`}>
                                    <Link {...props}>
                                        <a className={`p-3 ${props.href.includes('/donate') ? 'link--tangerine font-bold' : (router.pathname === props.href ? 'link--tangerine' : 'link--white')}`}>
                                            {label}
                                        </a>
                                    </Link>
                                    {children &&
                                    <ul className="hidden group-focus-within:block group-hover:block py-2 absolute left-0 w-64 bg-graphite-800 fluid-text-base">
                                        {children.map(({label, props}, j) => (
                                            <li key={`header-${i}-${j}`}>
                                                <Link {...props}>
                                                    <a className={`block py-1 px-5 ${router.pathname === props.href ? 'link--tangerine' : 'link--white'}`}>
                                                        {label}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>}
                                </li>
                            ))}
                        </ul>
                    </div>
                </header>
                <main className="page-content">
                    {children}
                </main>
                <footer className="page-footer bg-lime-900 text-white pt-10 pb-16">
                    <div className="container-1200 mx-auto px-5">
                        <SocialLinks
                            ulClassNames="justify-center mb-10"
                            liClassNames="m-3"
                            aClassNames="link--white"
                            size="3x"/>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                            {menu.map(({label, props, children}, i) => {
                                if (props.href?.includes('/donate')) return null;

                                return <div key={`footer-${i}`}>
                                    <h2 className="mb-4 fluid-text-lg uppercase">
                                        <Link {...props}>
                                            <a className="link--white">
                                                {label}
                                            </a>
                                        </Link>
                                    </h2>
                                    {children && <ul className="space-y-2">
                                        {children.map(({label, props}, j) => (
                                            <li key={`footer-${i}-${j}`}>
                                                <Link {...props}>
                                                    <a className="link--white">
                                                        {label}
                                                    </a>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>}
                                </div>
                            })}
                        </div>
                        <div className="border-t border-white fluid-text-sm text-center pt-10 space-y-5">
                            <p>
                                &copy; {(new Date()).getFullYear()} 801Labs.com. All rights reserved.
                            </p>
                            <p>
                                <Link href="/donate">
                                    <a className="link--tangerine uppercase">
                                        Donate&nbsp;&gt;
                                    </a>
                                </Link>
                            </p>
                            <p>
                                801 Labs hackerspace is a 501(c)(3) that is open to the public!
                                <br/>
                                353 East 200 South Suite #201, Salt Lake City, UT 84111
                            </p>
                            <p>
                                <Link href="/code-of-conduct">
                                    <a className="link--tangerine">
                                        Code of Conduct
                                    </a>
                                </Link>
                                <span className="mx-3">|</span>
                                <Link href="/terms">
                                    <a className="link--tangerine">
                                        Terms
                                    </a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Layout