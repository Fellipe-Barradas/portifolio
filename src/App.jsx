import Main from "./components/Main"
import Project from "./components/Project"



function App() {
  const linguagens = ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"]
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-20">
      <Main/>
      <h1 className="font-bold text-xl">Projetos</h1>
      <div className="grid grid-cols-2 gap-20  ">
        <Project project="Website Smart Connect" linguagens={linguagens}>Olá</Project>
      
      </div>
    </div>
  )
}

export default App
