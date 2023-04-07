import Menu from "@components/Menu";

export default function Home() {
  return (
    <div className="container">
      <Menu></Menu>
      <div style={{ margin: "3em" }}>
        <ul>
          <li>Kl. 11.05 Innmarsj Solstua</li>
          <li>Kl. 11.10 Åpning</li>
          <li>Kl. 11.30 Konkurranser,leker</li> 
          <ul>
            <li>Forfriskninger</li>
            <li>Bålkos</li>
            <li>Grilling </li>
          </ul>
          <li>Kl. 19.00 Påskelekefest på Solstua</li>
        </ul>
      </div>
    </div>
  );
}
