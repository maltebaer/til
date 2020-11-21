export interface IMatterResultData {
    date: string;
    title: string;
    tag: Tag;
}

export interface IPostData extends IMatterResultData {
    id: string;
    contentHtml: string;
}

export type Tag = "js" | "ts" | "css" | "html" | "react";
