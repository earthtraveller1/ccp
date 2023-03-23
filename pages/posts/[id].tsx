import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }: any) {
    return (
        <>
            <header><br/></header>
            <main>
            <h1>{postData.id}</h1>
            <br/>
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
