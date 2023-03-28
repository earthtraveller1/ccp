import { getAllPostIds, getPostData } from '../../lib/posts';
import { find } from '../../lib/util';
import Link from 'next/link';
import DiscordEmbed from '../../components/embed.tsx'

export default function Post({ postData }: any) {
    let html: string = postData.contentHtml;
    return (
        <>
            <header>
                <Link href="/">Home</Link>
            </header>
            <DiscordEmbed title={find("h1", html).join()} description={find("p", html).join("\n\n").substring(0, 500)} />
            <main className="posts">
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
