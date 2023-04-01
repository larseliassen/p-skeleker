export default function Menu({ title }) {
  return (
   <div>
      <a href="/program" style={{ position: "absolute", top: "15px" }}>
        PROGRAM
      </a>
      <a
        href="/deltakere"
        style={{
          position: "absolute",
          right: "-15px",
          transform: "rotate(90deg)",
          top: "50%"
        }}
      >
        DELTAKERE
      </a>
      <a
        href="/kampsang"
        style={{
          position: "absolute",
          bottom: "15px",
          transform: "rotate(180deg)",
        }}
      >
        KAMPSANG
      </a>
      <a
        href="/"
        style={{
          position: "absolute",
          left: "15px",
          transform: "rotate(270deg)",
          top: "50%"
        }}
      >
        FORSIDE
      </a>
    </div>
  );
}
