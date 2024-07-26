import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>My Next.js Page</title>
                <meta name="description" content="This is a description of my Next.js page" />
                <meta name="keywords" content="nextjs, react, seo" />
                <meta name="author" content="Your Name" />
                <meta property="og:title" content="My Next.js Page" />
                <meta property="og:description" content="This is a description of my Next.js page" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.example.com/" />
                <meta property="og:image" content="https://www.example.com/image.jpg" />
            </Head>
            <h1>Welcome to My Next.js Page</h1>
        </div>
    );
}
