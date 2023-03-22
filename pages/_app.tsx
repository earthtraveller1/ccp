import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
        <meta content="Communist Party of China" property="og:title" />
	<meta content="(un)Official Website of the CCP" property="og:description" />
	<meta content="https://carpetmaker3162.github.io/ccp/" property="og:url" />
	<meta content="https://cdn.discordapp.com/emojis/1080851553080057997.webp?size=96&quality=lossless" property="og:image" />
        <meta content="#ff0000" data-react-helmet="true" name="theme-color" />
        <Component {...pageProps} />
        </>
    )
}
