import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }: any) {
    let html = postData.contentHtml;
    return (
        <>
            <header><br/></header>
                <meta content="Communist Party of China" property="og:title"/>
                <meta content={postData.id} property="og:description"/>
                <meta content="https://carpetmaker3162.github.io/ccp/" property="og:url"/>
                <meta content="https://cdn.discordapp.com/emojis/1080851553080057997.webp?size=96&quality=lossless" property="og:image"/>
                <meta content="#ff0000" data-react-helmet="true" name="theme-color"/>
            <main>
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
