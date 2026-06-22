import { useState } from "react";

export default function StudyHero() {
  const [angle, setAngle] = useState(12);
  const [status, setStatus] = useState("NORMAL");

  const getColor = () => {
    if (status === "NORMAL") return "#22c55e";
    if (status === "CAUTION") return "#f59e0b";
    if (status === "WARNING") return "#ef4444";
    return "#dc2626";
  };

  const getMessage = () => {
    switch (status) {
      case "NORMAL":
        return "좋은 자세입니다 👍";
      case "CAUTION":
        return "어깨를 가볍게 뒤로 돌려보세요.";
      case "WARNING":
        return "목이 앞으로 나왔어요!";
      case "DANGER":
        return "거북목 위험! 스트레칭이 필요합니다.";
      default:
        return "";
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef5ff",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>📚 Study Hero</h1>

      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2>현재 목 각도</h2>

        <div
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            color: getColor(),
          }}
        >
          {angle}°
        </div>

        <h3 style={{ color: getColor() }}>{status}</h3>

        <p>{getMessage()}</p>
      </div>

      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h3>테스트 버튼</h3>

        <button onClick={() => {setAngle(10); setStatus("NORMAL");}}>
          정상
        </button>

        <button
          onClick={() => {setAngle(20); setStatus("CAUTION");}}
          style={{ marginLeft: "10px" }}
        >
          주의
        </button>

        <button
          onClick={() => {setAngle(35); setStatus("WARNING");}}
          style={{ marginLeft: "10px" }}
        >
          경고
        </button>

        <button
          onClick={() => {setAngle(55); setStatus("DANGER");}}
          style={{ marginLeft: "10px" }}
        >
          위험
        </button>
      </div>
    </div>
  );
}