import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import textX from '../Misc/textX';
const encodedParams = new URLSearchParams();
encodedParams.set('text', 'The counsel for the petitioner NGO informed the HC that notices had been issued to BBC (UK) and BBC (India) earlier but')


// const axios = require('axios');

function Plag() {
    const [message, setMessage] = useState("");
    const [message2, setMessage2] = useState("");

    const options = {
        method: 'POST',
        url: 'https://ai-content-detector-ai-gpt.p.rapidapi.com/api/detectText/',
        headers: {
            'content-type': 'application/json',
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': 'f320d4c375msh37891c92badc65dp1e0809jsn28485d290966',
            'X-RapidAPI-Host': 'ai-content-detector-ai-gpt.p.rapidapi.com'
        },
        data: {
            text: message
        }
    };
    // API 2 BBC
    const options2 = {
        method: 'POST',
        url: 'https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'f320d4c375msh37891c92badc65dp1e0809jsn28485d290966',
            'X-RapidAPI-Host': 'plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com'
        },
        data: {
            text: message,
            language: 'en',
            includeCitations: false,
            scrapeSources: false
        }
    };
    const handleChange = (event) => {
        setMessage(event.target.value);
    };
    const handleClick = async () => {
        try {
            const response1 = await axios.request(options);
            console.log(response1.data);
            const json = response1.data;
            const jsonstring = JSON.stringify(json);
            const obj = JSON.parse(jsonstring);
            document.getElementById('output').innerHTML = obj.fakePercentage;
        } catch (error) {
            console.error(error);

        }

        try {
            const response2 = await axios.request(options2);
            console.log(response2.data);
            const json = response2.data;
            const jsonstring = JSON.stringify(json);
            const obj = JSON.parse(jsonstring);
            document.getElementById('output-1').innerHTML = obj.percentPlagiarism;
            var i = 1;
            json.sources.forEach(function(source) {
                var urlElement = document.createElement("a");
                urlElement.href = source.url;
                urlElement.target = "_blank";
                urlElement.textContent = `Source ${i}`;
                i+=1;
                document.getElementById('output-2').appendChild(urlElement);
            });
        }
        catch (error) {
            console.error(error);
        }
        return;
    }
    return (
        <>
            <PlagContainer>
                <textarea type="text"
                    placeholder="Enter the text to be checked"
                    id="message"
                    name="message"
                    onChange={handleChange}
                />
                <button className='button' onClick={handleClick}>Find Plag</button>
                <div className="con">
                        <div className='card'>
                            <div className='result'>AI Percentage :</div><div id="output"></div>
                        </div>

                        <div className="card-1">
                            <div className='result'>Plag Percentage :</div><div id="output-1"></div>
                        </div>
                   

                    <div className="card-2">
                        <div className='result'>Plag Resources :</div><div id="output-2"></div>
                    </div>
                </div>
                <div></div>
            </PlagContainer>
        </>
    );

}


console.log(textX)
const PlagContainer = styled.div`
display:flex;
flex-direction:column;
justifiy-content:center;
align-items:center;
margin-top : 0px;
padding-top : 50px;
gap : 2rem;
background-color:#A084E8;


textarea
{
align-items:top;
padding-left: 10px;
padding-right : 10px;
width : 100%;
max-width : 1000px;
height : 500px;
position : relative;
word-break : break-all;
font-size : 35px;
border : 1px solid black;
border-radius : 25px;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);
}

textarea:active{
    background-color : black;
    color : white;
}

button{
    width : 200px;
    height : 75px;
    transition: all ease 0.5s;
    border-radius : 25px;
    font-weight : bold;
}

button:hover{
    cursor : pointer;
    scale : 1.2;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,1);
    color : red;
}

::placeholder{
    padding : 145px;
    font-size : 50px;
    font-weight : bold;
}

.result{
   font-size:30px;
   font-family:Sans-serif;
   font-weight : bold;
}
div#output{
    font-size : 70px;
    color : red;
    padding-left : 0%;
}
div#output-1{
    font-size : 70px;
    color : red;
    padding-left : 30%;
}
#output-2{
    overflow : scroll;
    max-width : 750px;
    max-height : auto;
    display : flex;
    flex-direction : column;
    gap : 2px;
}

.card{
    padding : 10px;
    box-shadow : 0 4px 8px 0 rgba(0 , 0 , 0 , 0.2);
    transition : 0.5s;
    width : 120%;
    max-width : 400px;
    height : 250px;
    display : flex;
    flex-direction : column;
}
.card:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,1);
    scale:1.1;
}
.card-1{
    background-color : #fff;
    padding : 10px;
    box-shadow : 0 4px 8px 0 rgba(0 , 0 , 0 , 0.2);
    transition : 0.5s;
    width : 120%;
    max-width : 400px;
    height : 250px;
    display : flex;
    flex-direction : column;
}
.card-1:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,1);
    scale:1.1;
}
.card-2{
    background-color : #fff;
    padding : 10px;
    box-shadow : 0 4px 8px 0 rgba(0 , 0 , 0 , 0.2);
    transition : 0.5s;
    width : 120%;
    max-width : 400px;
    height : 250px;
    display : flex;
    flex-direction : column;
}
.card-2:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,1);
    scale:1.1;
}



.con{
    display:flex;
    gap : 2rem;
    width : 100%;
    max-width : 2000px;
    padding-left : 20%;
}

a{
    border : 2px solid black;
    font-size : 25px;
}
a:hover{
    background-color : yellow;
}


`;


export default Plag;