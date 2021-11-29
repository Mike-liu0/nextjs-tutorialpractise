import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"



export default function FristPost() {
    return (
        <Layout>
            <Head>
                <title>First post 123</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}