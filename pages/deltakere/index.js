import Menu from "@components/Menu";

export default function Home() {
  return (
    <div className="container">
      <Menu></Menu>
      <div style={{ display: "grid", "gridRow": "auto auto" }}>
        <div>
          <b>Jakobsly</b> Malin Andrei Martine Emil Hermine Tina Benthe Arne Kjell
        </div>
        <div>
          <b>Hoffstad</b> Sven Nora Stian Endre Jørgen Colleen Freya Julia Petter
          Kristine Daniel Sander Rita Alv Tom
        </div>

        <div>
          <b>Solhaug</b> Truls Andrea Adrian Tobias Katharina Stein Turid</div>

        <div>
          <b>Solstua</b> Mari Markus Rikke Lars Marie Ferdinand Wilhelmine Ingeborg
          Vibeke Jarle Mathilde Alvin Sol Ann Karin Jan-Petter
        </div>
      </div>
    </div>
  );
}
