import React from 'react';
import { Header, Introduce1, Introduce2, Contact, Footer } from "./자기소개컴포넌트/introduce"
import myImage from './자기소개컴포넌트/내사진.png';
import './App.css';

function App() {

  const name = "박상민";
  const school = "경성대학교";
  const major = "소프트웨어학과";

  return (
    <div>
      <Header />  
      <img src={myImage} alt="내 이미지" className="image" />      
      <Introduce1 school={school} major={major} name={name} />  
      <Introduce2 />        
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
