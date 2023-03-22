import { remark } from 'remark';
import html from 'remark-html';
import path from 'path';
import fs from 'fs';
import * as matter from 'matter-js';

export async function getPostData(id: string) {
    const fullPath = path.join("posts", `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const processedContent = await remark()
        .use(html)
        .process(fileContents);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
        id,
        contentHtml,
        fileContents,
    };
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync("posts");

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]

    let ids = fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });

    return ids;
}
