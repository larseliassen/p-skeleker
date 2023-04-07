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
          right: "-40px",
          transform: "rotate(90deg)",
          top: "20%"
        }}
      >
        PROGRAM
      </a>
      <a
        href="/deltakere"
        style={{
          position: "absolute",          
          right: "-40px",
          transform: "rotate(90deg)",
          bottom: "20%"
        }}
      >
        DELTAKERE
      </a>
      <a
        href="/kampsang"
        style={{
          position: "absolute",          
          left: "-40px",
          transform: "rotate(-90deg)",
          bottom: "20%",          
        }}
      >
        KAMPSANG
      </a>
      <a
        href="/historie"
        style={{
          position: "absolute",
          left: "-40px",
          transform: "rotate(-90deg)",
          top: "20%",
        }}
      >
        HISTORIEN
      </a>
    </div>
  );
}
