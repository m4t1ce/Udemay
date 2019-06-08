import React, { Component } from "react";
import SOCIAL_PROFILES from './data/socialProfiles'

class SocialProfile extends Component{
    render(){

        const {link,image}=this.props.profile

        return(
            
            <span>
               <a href={link}><img src={image} style={{width:35,height:34,margin:10 }}/></a> 
            </span>

        )
    }
    }

class SocialProfiles extends Component{
    render(){
        return(
            SOCIAL_PROFILES.map(PROFILE=>{
                return(<SocialProfile key={PROFILE.id} profile={PROFILE}/>)
            })
            
        )
    }
}

export default SocialProfiles