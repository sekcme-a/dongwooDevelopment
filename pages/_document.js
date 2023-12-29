import Document, { 
  Html, 
  Head, 
  Main, 
  NextScript 
} from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="kr">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="naver-site-verification" content="167417d35ff2be1de3767bc42046988d1e7c52a7" />
          <meta name="google-site-verification" content="n354119AK7RYoyy59Xyvx8hOXBTtuYtF95kw69sVZbU" />
            <link
                href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap"
                rel="stylesheet"
            />
          <link rel="icon" href="/images/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          <Script
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=da751fb23c7f8cc96a72163af91ed742&libraries=services,clusterer&autoload=false`}
            strategy="beforeInteractive"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
