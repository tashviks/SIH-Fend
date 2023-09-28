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
          text: message ,
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
        } catch (error){
            console.error(error);
            
        }

        try {
            const response2 = await axios.request(options2);
            console.log(response2.data);
            const json = response2.data;
            const jsonstring = JSON.stringify(json);
            const obj = JSON.parse(jsonstring);
            document.getElementById('output-1').innerHTML = obj.percentPlagiarism;
            document.getElementById('output-2').innerHTML = JSON.stringify(obj.sources);
        } 
        catch (error) {
            console.error(error);
        }
        return;
    }
    return(
        <>
        <PlagContainer>
        <div className='plag-con'>
        <div className='result'>AI Percentage : </div><div id="output"></div>
        <div className='result'>Plag Percentage : </div><div id="output-1"></div><hr/>
        </div>
        <div className='result'>Plag Resources : </div><div id="output-2"></div>
        
         <textarea type="text"
                placeholder="Enter the text to be checked"
                id = "message"
                name="message"
                onChange={handleChange}
              />
        <button className='button' onClick={handleClick}>CLick Me</button>
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
margin-top : 50px;
gap : 2rem;

textarea{
align-items:top;
padding-left: 10px;
padding-right : 10px;
width : 1000px;
max-width : 1000px;
height : 500px;
position : relative;
word-break : break-all;
}

textarea:active{
    background-color : #fff;
}

.button{
    width : 150px;
    height : 50px;
    transition: all ease 2s;
}

.button::hover{
    background-color : #afb3ad
    scale : 1.5;
}

::placeholder{
    padding : 145px;
    font-size : 50px;
    font-weight : bold;
}

#output #output-1 #output-2{
    color : red;
    font-size : 35px;
}

.result{
    color : red;
    font-size : 25px;
    font-weight : 2px;
}

.plag-con{
    display : flex;
    gap : 2rem;
}

#output-2{
    overflow : scroll;
    max-width : 1200px;
    max-height : 200px;
    border : 1px solid black;
}

`;


export default Plag ;