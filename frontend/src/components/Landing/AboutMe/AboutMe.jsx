import "./AboutMe.css"


export default function AboutMe() {
    

    return (
        <>
            <div className="title-box">
                <hr />
                <span>About Me</span>
                <hr />
            </div>
            <div className="container-about-me">
                <div className="about-me-first">
                    <p>I am a full-stack web developer who merges a passion for technology with a fascination for video games and design.</p>
                    <p>I focus on creating engaging and functional digital experiences for users, channeling my creativity and problem-solving skills.</p>
                </div>
                <div className="arcade-image">
                    <div className="colors"></div>
                </div>
                <div className="about-me-last">
                    <p>Outside of web development, I dedicate my time to studying game design and creating 2D games with Godot.</p>
                    <p>My commitment to continuous learning drives my motivation and keeps me dedicated to my professional development, facing new challenges with enthusiasm.</p>
                </div>
            </div>


        </>
    )
}