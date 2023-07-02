import foto from '/foto.jpg'
export default function About() {
    return (
        <div className="mb-20 w-full mt-10 ">
            <h1 className="text-3xl border-2 rounded-lg pt-10 font-bold  text-center">Mais sobre mim!</h1>
            <div className="text-sm lg:ml-12  mt-14 flex justify-around lg:flex-row  flex-col-reverse p-8  items-center  gap-10">
                <p className="lg:w-[750px] font-thin ">Eu sou de Teresina-PI, e sou um entusiasta em tecnológia, na qual marcou boa parte da minha vida, e hoje em dia, tenho orgulho de dizer que estou vivendo um sonho de criança. Sempre busco aprimorar minhas abilidades, independente da área, sou fascinado pelo poder da internet e o bem que ela pode trazer pra humanidade. Minha jornada como desenvolvedor web começou em méados de 2020, em plena pandemia e no ensino médio, me aprofundei na então desconhecida tecnologia, fiz cursos grátias, desafios e assisti diversos conteudos gringos, a internet deixou de ser uma mágica, e se tornou algo que agora eu poderia modificar.Contudo, eu ainda teria que garantir meu lugar para me destacar, em 2022, entrei de cabeça em desenvolvimento web e hoje em dia faço engenharia de software, mais a vida não pode parar, vou continuar estudando e aprimorando meus conhecimentos, até o fim.</p>
                <img src={foto} alt="" srcset="" className=' rounded-full w-[260px] h-[260px] shadow-lg border border-zinc-700' />
            </div>
        </div>
    )
}