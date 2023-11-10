import { Component } from "react";

class MyClassComponent extends Component{
   
    constructor(){    // Inside Constructor we can initialize the state and bind the methods
        super()
        this.state={
            id: 1,
            name: ''
        }
       
        this.update = this.update.bind(this)
        this.handleChange = this.handleChange.bind(this)
       
    }

    // static getDerivedStateFromProps(props){
    //     return {id: props.id}
    // }

    componentDidMount(){
        setTimeout(() => {
            this.setState({id:'111'})
        }, 2000);
    }

    shouldComponentUpdate(){
        if(this.state.id != '111'){
            return true
        }
        else{
            return false
        }
        
    }

    update(){
        //alert("Function called..")
        this.setState({id:this.state.id+1})
    }  
    
    handleChange(event){
        //console.log(event.target.value)
        this.setState({name:event.target.value})
    }
  
    render(){
       
        return(
            <>
                <h2>This is my class component. My City: {this.props.myCity}</h2>
                <h3>My Id is: {this.state.id}</h3>
                <h3>Name: {this.state.name}</h3>
                 <input type="text" placeholder="Enter name" onChange={this.handleChange}/> <br></br>
                 <button onClick={this.update}>Click to update</button>
            </>
        )
    }
}
export default MyClassComponent

/*
Default Export: Only one element can be exported as default

Named Export: Multiple elements can be exported as named export
*/