export default function DiscordEmbed({ title, description } : { title: string, description: string }) {
    return (
        <>
        <meta content={title} property="og:title"/>
        <meta content={description} property="og:description"/>
        <meta content="https://carpetmaker3162.github.io/ccp/" property="og:url"/>
        <meta content="https://cdn.discordapp.com/emojis/1080851553080057997.webp?size=96&quality=lossless" property="og:image"/>
        <meta content="#ff0000" data-react-helmet="true" name="theme-color"/>
        </>
    )
}
