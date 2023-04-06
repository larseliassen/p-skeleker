export default function Menu({ title }) {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      <a
        href="/program"
        style={{
          position: "absolute",
          top: "15px",
          width: "100%",
          left: "0px",
        }}
      >
        PROGRAM
      </a>
      <a
        href="/deltakere"
        style={{
          position: "absolute",
          right: "-30px",
          transform: "rotate(90deg)",
          top: "50%",
        }}
      >
        DELTAKERE
      </a>
      <a
        href="/kampsang"
        style={{
          position: "absolute",
          bottom: "25px",
          transform: "rotate(180deg)",
          width: "100%",
          left: "0"
        }}
      >
        KAMPSANG
      </a>
      <a
        href="/"
        style={{
          position: "absolute",
          left: "-20px",
          transform: "rotate(270deg)",
          top: "50%",
        }}
      >
        FORSIDE
      </a>
    </div>
  );
}
