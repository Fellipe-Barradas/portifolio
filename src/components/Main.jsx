import github from "/github.png"
import linkedin from "/linkedin.png"
import documento from "/documento.png"

export default function Main() {
    return (
        <div className="border   font-primary flex flex-col justify-center gap-4 flex-1">
            <div className="flex gap-6 items-center">
                <h1 className="text-zinc-900 font-light">Olá, meu nome é <b className="font-bold">Luis fellipe</b></h1>
                <div className="flex gap-2">
                    <img src={documento} alt="curriculo onlinne" className="w-8 h-8" />
                    <img src={linkedin} alt="curriculo onlinne" className="w-8 h-8"/>
                    <img src={github} alt="curriculo onlinne" className="w-8 h-8"/>
                </div>
            </div>
            <h1 className="text-5xl  font-bold ">Frontend developer</h1>
            <p className=" max-w-lg  text-zinc-800 text-sm">Tenho 18 anos, sou desenvolvedor FrontEnd há cerca de 1 ano, com experiência em diversos projetos independentes e da faculdade. Utilizando de tecnologias como <b>HTMl</b>, <b>CSS</b>, <b>Javascript</b>, <b>React</b>, <b>Typescript</b> e muitos outros! </p>
        </div>
    )
}