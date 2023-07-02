import github from "/github.png"
import linkedin from "/linkedin.png"
import documento from "/documento.png"

export default function Main() {
    return (
        <div className="border font-primary flex flex-col justify-center gap-10 flex-1 text-sm md:text-md p-3">
            <div className="flex gap-6 items-center">
                <h1 className="text-zinc-900 font-light lg:text-2xl">Olá, meu nome é <b className="font-bold">Luis fellipe</b></h1>
                <div className="flex gap-2">
                    <a href="https://docs.google.com/document/d/1o6IYpxRQ5M9eoQ1OLb9ISZrVfhsdUadbZchF0gIBaeQ/edit?usp=sharing" target="_blank" className=" cursor-pointer"><img src={documento} alt="curriculo onlinne" className="w-8 h-8" /></a>
                    <a href="https://www.linkedin.com/in/luis-fellipe-100759204/" target="_blank" className=" cursor-pointer"><img src={linkedin} alt="curriculo onlinne" className="w-8 h-8"/></a>
                    <a href="https://github.com/Fellipe-Barradas" target="_blank" className=" cursor-pointer"><img src={github} alt="curriculo onlinne" className="w-8 h-8"/></a>
                </div>
            </div>
            <h1 className="lg:text-[4.5rem]  font-bold text-4xl ">FullStack developer</h1>
            <p className=" max-w-3xl  text-zinc-800 text-sm lg:text-lg">Tenho 18 anos, sou desenvolvedor FrontEnd há cerca de 1 ano, com experiência em diversos projetos independentes e da faculdade. Utilizando de tecnologias como <b>HTMl</b>, <b>CSS</b>, <b>Javascript</b>, <b>React</b>, <b>Typescript</b> e muitos outros! </p>
        </div>
    )
}