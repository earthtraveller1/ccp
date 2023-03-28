import { getAllPostIds, getPostData } from '../../lib/posts';
import { find } from '../../lib/util';
import Link from 'next/link';

export default function Post({ postData }: any) {
    let html: string = postData.contentHtml;
    console.log(postData.author);
    return (
        <>
            <header>
                <Link href="/">Home</Link>
            </header>
                <meta content={find("h1", html).join(" ")} property="og:title"/>
                <meta content={find("p", html).join("\n\n").substring(0, 500)} property="og:description"/>
                <meta content="https://carpetmaker3162.github.io/ccp/" property="og:url"/>
                <meta content="https://cdn.discordapp.com/emojis/1080851553080057997.webp?size=96&quality=lossless" property="og:image"/>
                <meta content="#ff0000" data-react-helmet="true" name="theme-color"/>
            <main className="posts">
            {postData.author && `By: ${postData.author}`}
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </main>
        </>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}
