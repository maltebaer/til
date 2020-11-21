import fs from "fs";
import path from "path";
import matter from "gray-matter";
import unified from "unified";
import markdown from "remark-parse";
import gfm from "remark-gfm";
import html from "remark-html";

import {IMatterResultData} from "../models";

const POSTS_DIRECTORY = path.join(process.cwd(), "posts");

function getMarkdownAndMetadata(fileName: string) {
    // Read markdown file as string
    const fullPath = path.join(POSTS_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post's metadata section
    const matterResult = matter(fileContents);

    return matterResult;
}

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(POSTS_DIRECTORY);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");

        const matterResult = getMarkdownAndMetadata(fileName);

        // Combine the data with the id
        return {
            id,
            ...(matterResult.data as IMatterResultData),
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(POSTS_DIRECTORY);

    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

export async function getPostData(id: string) {
    const matterResult = getMarkdownAndMetadata(`${id}.md`);

    // Use remark to convert markdown into HTML string
    const processedContent = await unified()
        .use(markdown)
        .use(gfm)
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...(matterResult.data as IMatterResultData),
    };
}
