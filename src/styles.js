import styled from "styled-components";

export const Border = styled.div`
border: 2px solid; 
border-radius: 20px;
list-style: none;
display: flex;
justify-content: center;
margin: 10px; 
padding: 10px;  
background-color: ${({ isSelected }) => isSelected ? "red" : ""};
opacity: ${({ isSelected }) => isSelected ? "1" : "1"};
`;

export const BackgroundMain = styled.div`
background-image: url("${ ({back}) => back }");
height: 100vh;
width: 100%;
background-repeat: no-repeat;
background-size: 100% 100%;
padding: 10px
`;

export const Button = styled.button`
width: 50%;
height: 50px;
`;

export const ButtonHover = styled.button`
margin-top: 20px;
width: 150px;
height: 50px;
border-radius: 40px;
background-color: lightblue;
&: hover{
    background-color: red;
}
`;