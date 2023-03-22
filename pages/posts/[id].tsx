import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }: any) {
    return (
        <>
            {postData.id}
            <br/>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
