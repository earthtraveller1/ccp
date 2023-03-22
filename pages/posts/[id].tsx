import getPost from '../../lib/posts';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
    return (
        <>
            d{postData.title}
            <br/>
            e{postData.id}
            <br/>
            f{postData.date}
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

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}
