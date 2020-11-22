import Head from "next/head";
import Link from "next/link";
import Prism from "prismjs";
import React, {useEffect} from "react";

import Nav from "./nav";

interface ILayoutProps {
    children: React.ReactNode;

    home?: boolean;
}

export default function Layout({children, home}: ILayoutProps) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <Head>
                <link
                    rel="shortcut icon"
                    href="/favicon.ico"
                    type="image/x-icon"
                />
                <meta
                    name="description"
                    content="Personal collection of my TIL's"
                />
            </Head>

            <Nav />

            <main className="prose mx-auto language-markup">{children}</main>

            {!home && (
                <footer>
                    <Link href="/">
                        <a>← Back home</a>
                    </Link>
                </footer>
            )}
        </div>
    );
}
