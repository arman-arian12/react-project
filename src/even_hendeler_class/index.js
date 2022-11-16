import React,{Component} from "react";
class even_hendeler_class extends Component{
    constructor(props){
        super(props)
        this.state = {
            changedValue:""
        }
    }
    handelOnCheang =(e)=>{

        this.setState({
            changedValue : e.target.value
        })
         console.log(e.target.value)
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.handelOnCheang}/>
                <p>{this.state.changedValue}</p>  
            </div>
        )
    }
}
export default even_hendeler_class