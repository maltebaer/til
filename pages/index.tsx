import {GetStaticProps} from "next";
import Head from "next/head";
import Link from "next/link";

import {getSortedPostsData} from "../lib/posts";
import {Tag} from "../models";

import Layout from "../components/layout";

interface IHomeProps {
    allPostsData: {
        date: string;
        title: string;
        tag: Tag;
        id: string;
    }[];
}

export default function Home({allPostsData}: IHomeProps) {
    return (
        <Layout home>
            <Head>
                <title>Personal collection of my TIL's</title>
            </Head>
            <h1>Personal collection of my TIL's</h1>
            <section>
                <h2>TIL's</h2>
                <ul>
                    {allPostsData.map(({id, date, title}) => (
                        <li key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small>{date}</small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData,
        },
    };
};
