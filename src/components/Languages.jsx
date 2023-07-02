function displayLanguages(languages) {
    return languages.map(language => {
        let url = `/languages/${language}`
        return <img className=" p-2 m-2 rounded-lg border shadow-md border-black hover:bg-white hover:rotate-3 transition-colors " src={url}></img>
    })
}

export default function Languages() {
    const linguagens = [
        "bxl_tailwind-css.png","logos_react.png" ,"skill-icons_typescript.png","devicon_nextjs.png"
    ]

    return (
        <div className="mb-20 grid grid-cols-4">
            {displayLanguages(linguagens)}
        </div>
    )
}