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
        <div>
      <a
        href="/program"
        style={{
          position: "absolute",          
          right: "0",
          transformOrigin: "top right",
          transform: "rotate(90deg)",
          top: "30%"
        }}
      >
        PROGRAM
      </a>
      </div>
      <div>
      <a
        href="/deltakere"
        style={{
          position: "absolute",          
          right: "0",
          transformOrigin: "top right",
          transform: "rotate(90deg)",
          bottom: "0"
        }}
      >
        DELTAKERE
      </a>
      </div>
      <div>
      <a
        href="/kampsang"
        style={{
          position: "absolute",          
          left: "0",
          transformOrigin: "top left",
          transform: "rotate(-90deg)",
          top: "30%",          
        }}
      >
        KAMPSANG
      </a>
      </div>
      <div>
      <a
        href="/historie"
        style={{
          position: "absolute",
          left: "0",
          transformOrigin: "top left",
          transform: "rotate(-90deg)",
          bottom: "0",
        }}
      >
        HISTORIEN
      </a>
      </div>
    </div>
  );
}
