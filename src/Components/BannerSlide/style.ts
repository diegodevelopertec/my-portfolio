/* SlideCardCarousel.css */

import styled from "styled-components";



export const ContainerSlide=styled.div`
    width: 800px;
  height: auto;
  padding: 0;
    margin: 0;
  
   .slide-card {
      
    height: 550px;
    text-align: center;
    padding: 0;
    margin: 0;

    
  }
  
  .slide-card img {
    width:100%;
   height:100%;

   
   
   
  }
  


  





  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-radius: 0;
    margin: 0px  auto;
    border-radius: 9px;
    .slide-card {
      margin: 0;
      border-radius: 9px;
      width: 100%;
      height: 480px;
      min-height: 350px;
     
  }

  .slide-card img {
    width:100%;
    height: 100%;
    border-radius: 9px;
   
  }
  }

`