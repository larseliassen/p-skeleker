import Menu from "@components/Menu";

export default function Home() {
  return (
    <div className="container">
      <Menu></Menu>
      <p style={{"text-align":"center", "margin":"10vw", "lineHeight":"1"}}>
        Kom la oss samle oss, unge og gamle og ta en sang <br/><br/>
        For nu er planen at alle i klanen skal gå igang <br/><br/>
        Her er glede og smil, her er tjue i stil, Kom og bli med! <br/><br/> 
        Her er humor og sjarm, bare vi kan gå varm Kom og bli med! <br/><br/> 
        De daglige plager vi jager på dør Og tar av vårt lager det gode humør. <br/><br/> 
        Ja det ordner seg nok, når vi løfter i flokk Kom og bli med!
      </p>
    </div>
  );
}
