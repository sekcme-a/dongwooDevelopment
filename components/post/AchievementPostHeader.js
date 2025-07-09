const AchievementPostHeader = ({ data }) => {
  return (
    <div
      style={{
        borderTop: "2px solid #ff5d22",
        marginTop: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #e9e9e9",
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(245, 245, 245)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p
            style={{
              padding: "5px 0",
              width: "100px",
              textAlign: "center",
              fontWeight: "600",
              color: "black",
              marginBottom: "0",
              fontSize: "14px",
            }}
          >
            제목
          </p>
        </div>
        <h2
          style={{
            flex: 1,
            fontWeight: 400,
            paddingLeft: "20px",
            fontSize: "14px",
          }}
        >
          {data?.title}
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid #e9e9e9",
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(245, 245, 245)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p
            style={{
              padding: "5px 0",
              fontWeight: "400",
              marginBottom: "0",
              width: "100px",
              textAlign: "center",
              fontWeight: "600",
              color: "black",
              fontSize: "14px",
            }}
          >
            세대수
          </p>
        </div>
        <h2
          style={{
            flex: 1,
            fontSize: "14px",
            fontWeight: 400,
            paddingLeft: "20px",
          }}
        >
          {data?.household}
        </h2>
      </div>
    </div>
  );
};
export default AchievementPostHeader;
