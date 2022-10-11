import React from "react";
import Homelayout from "../components/homeLayout";
import image from "../assets/images/image.jpg";
import shecancode from "../assets/images/shecancode.jpg";
import "./blogs.css";

const Blogs = () => {
    return(
        <>
        <Homelayout>
<div className="blogs-container">
    <div className="blog-tittle">
<h1>OUR BLOGS</h1>
    </div>
    <div className="description-container">
 
    <div className="blogs-overview">
        <h3 style={{marginLeft:"10rem",marginTop:"2rem",textDecoration:"underline"}}>overview</h3>
        <div className="image">
<img src={image}></img>

    </div>
  
<ul>
    <li>ShecanProgram</li>
    <li>AweProgram</li>
    <li>AweGraduation</li>
    <li>ShecancodeGraduation</li>
</ul>

    </div>
    </div>
   <h3 style={{marginLeft:"7rem", textDecoration:"underline"}}>New Blogs</h3>
  
   <div className="image-blog">
       
   
    
   <iframe width="200" height="150" src="https://www.youtube.com/embed/aoiI6p1XxW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <h5 >ShecancodeGraduation</h5>
      <p >march2 ,2022</p>
   </div>

   <div className="image-blog">
   <iframe width="200" height="150" src="https://www.youtube.com/embed/aoiI6p1XxW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<h5 >ShecancodeGraduation</h5>
<span >march2 ,2022</span>
   </div>
   <div className="image-blog">
   <iframe width="200" height="150" src="https://www.youtube.com/embed/aoiI6p1XxW0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<h5 >ShecancodeGraduation</h5>
<span >march2 ,2022</span>
   </div>
<h1>Israel Paterneship</h1>
<p></p>
</div>






        </Homelayout>
        </>
    )
}
export default Blogs;