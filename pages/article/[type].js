import { CircularProgress, Grid } from "@mui/material";
import Type from "src/article/Type";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useData from "context/data";
import HeadMeta from "components/HeadMeta";
import Head from "next/head";
import PageBanner from "components/Common/PageBanner";
import Navbar from "components/Layout/Navbar";
const Article = () => {
  const router = useRouter();
  const { type } = router.query;
  const [typeText, setTypeText] = useState("");
  const { thumbnailsList, fetch_thumbnails_list } = useData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (type && thumbnailsList[type]) setIsLoading(false);
      else if (type) {
        await fetch_thumbnails_list(type);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [type]);

  useEffect(() => {
    if (type === "announcement") setTypeText("공지사항");
    else if (type === "news") setTypeText("동우뉴스");
    else if (type === "achievements") setTypeText("사업실적");
    // else if(type==="gallery")
    //   setTypeText("동우사보")
  }, [type]);

  return (
    <>
      <HeadMeta
        title={`${
          type === "announcement"
            ? "공지사항"
            : type === "news"
            ? "동우뉴스"
            : type === "achievements" && "사업실적"
        } - 동우개발`}
        description="동우그룹의 동행소식을 확인하세요."
        url={`https://xn--2i0bm5iryeh7q.kr/info/article/${type}`}
      />
      <Navbar />
      {/* <PageHeader main="동행소식" sub={typeText} link={`/article/${type}`} /> */}
      <PageBanner
        title={
          type === "announcement"
            ? "공지사항"
            : type === "news"
            ? "동우뉴스"
            : type === "achievements" && "사업실적"
        }
        subtitle={
          type === "announcement"
            ? "Announcements"
            : type === "news"
            ? "News"
            : type === "achievements" && "Achievements"
        }
        homeText="홍보센터"
        homeUrl={`/article/announcement`}
      />

      {isLoading ? (
        <div
          style={{
            width: "100vw",
            marginTop: "100px",
            marginBottom: "100px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        // type==="announcement" ?
        //   <AnnouncementCompo list={thumbnailsList[type]}/>
        //   :
        <Type list={thumbnailsList[type]} {...{ type, typeText }} />
      )}
      <div style={{ marginBottom: "100px" }}></div>
    </>
  );
};

export default Article;
