import { CircularProgress } from "@mui/material";
import useData from "context/data";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import PageBanner from "components/Common/PageBanner";
import PostCompo from "components/post/Post";
import NavbarStyle2 from "components/Layout/Navbar";

const Post = () => {
  const router = useRouter();
  const { id, type } = router.query;
  const { postsList, fetch_post } = useData();
  const [isLoading, setIsLoading] = useState(true);
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (postsList[id]) {
        console.log(postsList[id]);
        setIsLoading(false);
        setHasData(true);
      } else {
        const result = await fetch_post(id);
        setHasData(result);
        setIsLoading(false);
      }
    };
    if ((type, id)) fetchData();
  }, [type, id]);

  return (
    <>
      <NavbarStyle2 />
      <PageBanner
        title={
          type === "advertisement"
            ? "채용공고"
            : type === "news"
            ? "동우뉴스"
            : type === "announcement"
            ? "공지사항"
            : type === "achievements" && "사업실적"
        }
        subtitle={
          type === "advertisement"
            ? "Job Advertisement"
            : type === "news"
            ? "News"
            : type === "announcement"
            ? "Announcement"
            : type === "achievements"
            ? "Achievements"
            : "Job Application"
        }
        homeText={type === "advertisement" ? "인재채용" : "홍보센터"}
        homeUrl="/job/advertisement"
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
        <PostCompo data={postsList[id]} type={type} id={id} />
      )}
    </>
  );
};

export default Post;
