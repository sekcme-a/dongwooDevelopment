import useData from "context/data";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Achievements = () => {
  const [list, setList] = useState([]);
  const { thumbnailsList, fetch_thumbnails_list } = useData();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    fetch_thumbnails_list("achievements");
  }, []);

  return (
    <div
      style={{
        padding: "30px 30px",
        margin: "100px 0 20px 0",
        backgroundColor: "#1F2428",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "white", fontSize: "24px" }}>사업실적</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <div
            ref={prevRef}
            style={{
              cursor: "pointer",
              color: "white",
              fontSize: "14px",
              padding: "5px 10px",
              backgroundColor: "#333",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ◀
          </div>
          <div
            ref={nextRef}
            style={{
              cursor: "pointer",
              color: "white",
              fontSize: "14px",
              padding: "5px 10px",
              backgroundColor: "#333",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ▶
          </div>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          568: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // 버튼이 마운트되기 전 참조가 null일 수 있어 설정 필요
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Navigation, Pagination]}
      >
        {thumbnailsList?.achievements?.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                borderRadius: "5px",
                overflow: "hidden",
                color: "white",
              }}
            >
              <img
                src={item.thumbnailImg}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
              <div style={{ marginTop: "10px", fontSize: "16px" }}>
                {item.title}
              </div>
              <p style={{ fontSize: "14px", color: "#999" }}>
                {item.household}세대
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Achievements;
