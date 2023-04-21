interface Parameters {
    post: string
}

export async function load({ params }: { params: Parameters }) {
    const post = await import(`../${params.post}.md`)
    const { author }: { author: string } = post.metadata
    const content = post.default

    return { content, author }
}
