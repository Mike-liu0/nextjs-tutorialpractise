import Head from "next/dist/shared/lib/head"

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'news',
    keywords: 'web dev',
    description: 'get lastest news',
}

export default Meta
