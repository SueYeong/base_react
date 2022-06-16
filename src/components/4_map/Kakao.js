export const Kakao = ({ KakaoDate }) => {
  return (
    <div
      style={{
        margin: "100px auto",
        width: "1920px",
      }}
    >
      <h1>카카오</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {KakaoDate.map((con) => (
          <div
            key={con.id}
            style={{
              width: "500px",
              height: "100%",
            }}
          >
            {/* <img
              src={con.img}
              style={{
                width: "100%",
                height: "50%",
              }}
            /> */}
            <div
              style={{
                width: "100%",
                height: "300px",
                backgroundImage: `url(${con.img})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3>{con.head}</h3>
            <p>{con.foot.slice(0, 50) + "..."}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
