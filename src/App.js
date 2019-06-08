import React,{Component} from "react"
import Projects from './Projects'
import SocialProfiles from './SocialProfiles'
// class RegularClass{}
// class ComponentClass extends Component{}
// const RegularClassInstance=new RegularClass()
// const ComponentClassInstance=new ComponentClass()
// console.log('RegularClassInstance',RegularClassInstance)
// console.log('ComponentClassInstance',ComponentClassInstance)

class App extends Component {
    state={displayBio:false};

    toggleDisplayBio=()=>{
        this.setState({displayBio: !this.state.displayBio})
    }

    render(){

        return(
            <div>
                <h1>Hello!</h1>
                <p>I am Mateu</p>
                <p>I will take any job as junior developer</p>

                {
                    this.state.displayBio ? (
            <div>
                <p>I live in Poland</p>
                <p>Like to code in java, my first language was C</p>
                <p>I am learning mainstream languages</p>
                <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
        ) : (
            <div>
                <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
        )
        }
           
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
        </div>
        )
    }
    
}

export default App