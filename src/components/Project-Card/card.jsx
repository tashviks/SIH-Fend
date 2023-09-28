import '../../css/card.css';
import Readmore from '../ReadMore/ReadMore';
import Table from '../ReadMore/table';
import { useState , useEffect } from 'react';

const Card = ({cardId , teamLeader = "Team Lead" , teamMembers = ["M1" , "M2" , "M3"] , mentor = "Mentor", projectTitle = "Project Title" , projectDisc , selectedTags = ["HTML" , "React" , "CSS" , "JS"] , img})=> {
    let slideIndex = 0;

    let plusSlides = function (n , id) {
        slideIndex += n
        let slides = document.querySelector(`#${id}`);
        if(slideIndex >= img.length){slideIndex = 0;}
        if(slideIndex < 0){slideIndex = img.length-1;}
        slides.src = img[slideIndex];
    }
    const random = Math.floor(Math.random() * img.length);

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => setUsers(json))
            .finally(() => {
                setLoading(false)
            })
    }, [])
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <>
        <div class="project-card">
            <div class="slideshow-container">
            
                <img class="slideshow-img" id={cardId} src={img[random]} alt="this is a image"></img>
        
                <button class="prev" onClick={() => {plusSlides(-1 , cardId)}}>&#10094;</button>
                <button class="next" onClick={() => {plusSlides(1 , cardId)}}>&#10095;</button>
            </div>
        
            <div class="card__details">
                
                <div id="cardtags">
                {selectedTags.slice(0,4).map((val) => {
                    return <span class="tag">{val}</span>
                })}
                </div>
    
                <div class="name">{projectTitle}</div>
                <div id="names">
                    <div id="teamdiv">
                        <p className='bold'>{teamLeader}</p>
                        <ul id="team-members">
                            {teamMembers.slice(0,3).map((val)=>{
                                return <li>{val}</li>
                            })}
                        </ul>
                    </div>
                    <div id="mentordiv">   
                        <p className='bold'> MENTOR: </p>
                        <ul id="faculty-members">
                            <li>{mentor}</li>
                        </ul>
                    </div>
                </div>
                <button onClick={() => setButtonPopup(true)}>Read More</button>
                <Readmore trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <Table/>
                </Readmore>
            </div>
        </div>
        </>
    )
}

export default Card;