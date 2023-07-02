

function displayLanguages(languages) {
    return languages.map(language => {
        let url = `/languages/${language}`
        return <img className=" p-2 m-2 rounded-lg" src={url}></img>
    })
}

export default function Project(props) {
    return(
        <div className="p-3 flex flex-col items-center">
            <div className="flex">{displayLanguages(props.linguagens)}</div>
            {props.children}
            <h1 className="text-center">{props.project}</h1>
        </div>
    )
}