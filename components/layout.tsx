import Head from "next/head";
import Link from "next/link";
import React from "react";

import Nav from "./nav";

interface ILayoutProps {
    children: React.ReactNode;

    home?: boolean;
}

export default function Layout({children, home}: ILayoutProps) {
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

            <main className="prose mx-auto">{children}</main>

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
