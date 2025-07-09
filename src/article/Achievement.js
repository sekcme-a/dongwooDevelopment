import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Achievement = ({ type, data }) => {
  const router = useRouter();

  function formatDateToYYYYMMDD(date) {
    if (date instanceof Date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    } else return "-";
  }

  return (
    <>
      <div
        className="dwg-blogP"
        onClick={() => router.push(`/post/${type}/${data.id}`)}
        style={{ backgroundColor: "transparent" }}
      >
        <div
          className="post-image"
          style={{ height: "220px", display: "flex", justifyContent: "center" }}
        >
          <Link href={`/post/${type}/${data.id}`}>
            <a>
              <img
                src={data.thumbnailImg}
                alt={data.title}
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              />
            </a>
          </Link>
        </div>

        <div
          style={{
            backgroundColor: "transparent",
            cursor: "pointer",
            paddingBottom: "10px",
          }}
        >
          <h3
            style={{
              fontSize: "15px",
              textAlign: "center",
              fontWeight: "400",
              marginTop: "23px",
              marginBottom: 0,
            }}
          >
            {data.title}
          </h3>
          <p
            style={{
              fontSize: "15px",
              textAlign: "center",
              fontWeight: "400",
              marginTop: "0",
            }}
          >
            {data.household}세대
          </p>
        </div>
      </div>
    </>
  );
};

export default Achievement;
