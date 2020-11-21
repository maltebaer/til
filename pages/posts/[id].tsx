import {GetStaticPaths, GetStaticProps} from "next";
import Head from "next/head";
import React from "react";

import {getAllPostIds, getPostData} from "../../lib/posts";
import {IPostData} from "../../models";

import Layout from "../../components/layout";

interface IPostProps {
    postData: IPostData;
}

export default function Post({postData}: IPostProps) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <article>
                <h1>{postData.title}</h1>
                <small>
                    {postData.date} | {postData.tag}
                </small>
                <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
            </article>
        </Layout>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = params ? await getPostData(params.id as string) : {};

    return {
        props: {
            postData,
        },
    };
};
