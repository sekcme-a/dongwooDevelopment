import Head from "next/head";

const HeadMeta = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title || "동우개발"}</title>
      <meta
        name="description"
        content={
          description ||
          "공동주택관리 전문기업 동우개발입니다."
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "동우개발"} />
      <meta property="og:description"
        content={
        description ||
        "공동주택관리 전문기업 동우개발입니다."
      }/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://xn--h49at0mlnhpml.kr/"} />
      <meta property="og:image" content={"https://xn--h49at0mlnhpml.kr/images/logo.png" } />
      <meta name="keywords" content="동우개발"/>
      <meta property="og:article:author" content="동우개발" />
    </Head>
  );
};

export default HeadMeta;