function displayLanguages(languages) {
    return languages.map(language => {
        let url = `/languages/${language}`
        return <img className=" p-2 rounded-lg w-12 h-12  border shadow-md border-black hover:bg-white hover:rotate-3 transition-colors " src={url}></img>
    })
}

export default function Languages() {
    const linguagens = [
        "bxl_tailwind-css.png","logos_react.png" ,"skill-icons_typescript.png","devicon_nextjs.png",
        "skill-icons_javascript.png","skill-icons_sass.png","logos_html-5.png","logos_css-3.png",
        "logos_java.png","devicon_spring.png","logos_mysql.png"
    ]

    return (
        <div className="mb-20 grid grid-cols-4 gap-5">
            {displayLanguages(linguagens)}
        </div>
    )
}