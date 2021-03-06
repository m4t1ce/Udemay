import React, { Component } from "react";
import PROJECTS from './data/projects'

class Project extends Component{
    render(){

        const {title, image, description, link}= this.props.project

        return(
            <div >
                <h3>{title}</h3>
                <img src={image} alt='profile'style={{width:500,height:300}}/>
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class Projects extends Component {
    render(){
        return(
           <div>
               <h2>Highlighed Projects</h2>
               <div>
                   {
                       PROJECTS.map(PROJECT=>{
                           return(
                            <Project key={PROJECT.id} project={PROJECT}/>
                           )
                       })
                   }
               </div>
           </div>
        )
    }
}
export default Projects