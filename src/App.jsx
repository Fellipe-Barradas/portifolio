import Main from "./components/Main"
import Project from "./components/Project"
import smartConnect from "/projects/display_smart.png"
import pokedex from "/projects/pokedex_display.png"
import arrow from "/arrow_down.png"
import Languages from "./components/Languages"
import About from "./components/About"

function App() {
  const linguagens = ["bxl_tailwind-css.png","logos_react.png" ,"skill-icons_typescript.png"]

  const linguagens2 = ["bxl_tailwind-css.png", "devicon_nextjs.png", "skill-icons_typescript.png"]
  return (
    <div className="mt-48 flex flex-col items-center justify-center gap-10">
      <Main/>
      <h1 className="font-bold text-3xl mt-20">Projetos</h1>
      <img src={arrow} alt="Seta para baixo" className=" animate-bounce" />
      <div className="grid grid-cols-2 gap-20 mt-10  ">
        <Project project="Website Smart Connect" linguagens={linguagens} link="https://landing-page-smart-connect.vercel.app/"><img src={smartConnect} alt="imagem de projeto smart connect" /></Project>
        <Project project="Pokédex" linguagens={linguagens2} link="https://pokedex-next-green.vercel.app/"><img src={pokedex} alt="imagem de projeto pokédex" /></Project> 
      </div>
      <div className="mb-10">
        <h1 className="mt-36 mb-10 text-2xl text-center">Meus projetos <b>backend</b></h1>
        <ul >
          <li className=" list-disc">API que registra pesquisa e usuários, feita em java com com Spring boot e banco de dados H2: <a href="" className="text-blue-900">Ver código</a></li>
          <li className=" list-disc">Projeto Spring Boot e banco de dados MySQL, do curso Java completo do Nélio Alves: <a href="" className="text-blue-900">Ver código</a></li>
        </ul>
      </div>
      <hr />
      <h1 className="text-2xl mt-20 border border-zinc-900 rounded-md p-2 font-bold">Linguagens e tecnologias</h1>
      <Languages/>
      <About/>
    </div>
  )
}

export default App
