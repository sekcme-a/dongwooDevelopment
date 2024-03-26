import Head from "next/head";

const HeadMeta = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title || "동우개발"}</title>
      <meta
        name="description"
        content={
          description ||
          "(주)동우개발은 공동주택을 전문으로 하는 관리회사입니다. 고객 여러분의 안전하고 편안한 주거환경을 지원하기 위해 최선을 다하고 있습니다. "
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "동우개발"} />
      <meta property="og:description"
        content={
        description ||
        "(주)동우개발은 공동주택을 전문으로 하는 관리회사입니다. 고객 여러분의 안전하고 편안한 주거환경을 지원하기 위해 최선을 다하고 있습니다. "
      }/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://xn--h49at0mlnhpml.kr"} />
      <meta property="og:image" content={"https://xn--h49at0mlnhpml.kr/images/logo_text.png" } />
      <meta name="keywords" content="동우개발"/>
      <meta property="og:article:author" content="동우개발" />
    </Head>
  );
};

export default HeadMeta;