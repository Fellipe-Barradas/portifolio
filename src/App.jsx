import Main from "./components/Main"
import Project from "./components/Project"
import smartConnect from "/projects/display_smart.png"
import pokedex from "/projects/pokedex_display.png"
import arrow from "/arrow_down.png"

function App() {
  const linguagens = ["bxl_tailwind-css.png", "devicon_nextjs.png","skill-icons_typescript.png"]

  const linguagens2 = ["bxl_tailwind-css.png", "logos_react.png", "skill-icons_typescript.png"]
  return (
    <div className="mt-48 flex flex-col items-center justify-center gap-10">
      <Main/>
      <h1 className="font-bold text-3xl mt-20">Projetos</h1>
      <img src={arrow} alt="Seta para baixo" className=" animate-bounce" />
      <div className="grid grid-cols-2 gap-20 mt-10  ">
        <Project project="Website Smart Connect" linguagens={linguagens}><img src={smartConnect} alt="imagem de projeto smart connect" /></Project>
        <Project project="Pokédex" linguagens={linguagens2}><img src={pokedex} alt="imagem de projeto pokédex" /></Project> 
      </div>
    </div>
  )
}

export default App
