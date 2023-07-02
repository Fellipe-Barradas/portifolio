export default function Project(props) {
    return(
        <div className="p-20 bg-red-900">
            <div>{props.linguagens.map(linguagem=>{
                return <span className="bg-red-500 p-2 m-2 rounded-lg">{linguagem}</span>
            })}</div>
            {props.children}
            <h1 className="text-center">{props.project}</h1>
        </div>
    )
}