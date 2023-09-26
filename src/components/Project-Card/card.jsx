import '../../css/card.css';

const Card = ({img})=> {
    let slideIndex = 1;

    let showSlides = function (n) {
        let slides = document.querySelectorAll(".slideshow-img");
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    let plusSlides = function (n) {
        showSlides(slideIndex += n);
    }

    return (
        <>
        <div class="project-card">
            <div class="slideshow-container">
            
                <img class="slideshow-img" src={img[0]} alt="Lago di Braies"></img>
                <img class="slideshow-img" src={img[1]} alt="Another Image" style={{display:"none"}}></img>
                <img class="slideshow-img" src={img[2]} alt="Yet Another Image" style={{display:"none"}}></img>
        
        
                <a class="prev" onClick={() => plusSlides(-1)}></a>
                <a class="next" onClick={() => plusSlides(1)}></a>
            </div>
        
            <div class="card__details">
    
    
                <span class="tag">HTML</span>
        
                <span class="tag">CSS</span>
                <span class="tag">Java</span>
    
    
                <div class="name">Slideshow Project</div>
    
                <p>TEAM MEMBERS: </p>
                <ul id="team-members">
                    <li>Name 1</li>
                    <li>Name 2</li>
                </ul>
                <p> MENTORS: </p>
                <ul id="faculty-members">
                    <li>Faculty Name</li>
                </ul>
                <button onClick="">Read more</button>
            </div>
        </div>
        </>
    )
}

export default Card;