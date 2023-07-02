export default function Project(props) {
    return(
        <div>
            <div>Linguagens</div>
            {props.children}
            <h1>Nome projeto</h1>
        </div>
    )
}