import GlobalStyle from "../src/theme/GlobalStyle";
import Head from "next/head";

function MyApp({ Component, ...props }) {
    return (
        <>
            <Head>
                {/*<!-- google search -->*/}
                <meta name="google-site-verification" content="COR6tNpKmUw-EQhvWImjYDwLM9fl2UTTkQLas7kmZRw" />
                {/* <!-- Google tag (gtag.js) --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-9RHYMM4753"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-9RHYMM4753');
            `}} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true.toString()} />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
            </Head>
            <GlobalStyle />
            <Component {...props} />
        </>
    );
}

export default MyApp
