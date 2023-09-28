import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import textX from '../Misc/textX';
const encodedParams = new URLSearchParams();
// const axios = require('axios');

function Plag() {
    const [message, setMessage] = useState("");
    // const [updated, setUpdated] = useState(message);

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
  
    const handleChange = (event) => {
      setMessage(event.target.value);
      textX.someProp = message;
      encodedParams.set('text' , message);
      console.log(encodedParams);
    };
    const handleClick = async () => {
        try {
            const response = await axios.request(options);
            console.log(response.data);
            const json = response.data;
            const jsonstring = JSON.stringify(json);
            const obj = JSON.parse(jsonstring);
            document.getElementById('output').innerHTML = obj.fakePercentage;
        } catch (error) {
            console.error(error);
        }
        return;
    }
    return(
        <>
        <PlagContainer>
        <div className='result'>Fake Percentage : </div><div id="output"></div>
         <textarea
                type="text"
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

#output{
    color : red;
    font-size : 35px;
}

.result{
    color : red;
    font-size : 35px;
}

`;


export default Plag ;