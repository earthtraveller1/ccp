import { remark } from 'remark';
import html from 'remark-html';
import path from 'path';
import fs from 'fs';

export function getPostData(id) {
    const fullPath = path.join("posts", `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
        id,
        ...matterResult.data,
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
