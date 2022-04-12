import React,{Component} from "react";

class Counter extends Component{
   constructor(props){
       super(props)
       //For initilise the constructor
       this.state={     //for maintaining state
                        //for classes there is only one object for state 
           count:0,
           totatlclicks:0
       }
       
   }
  handleCounter=(value)=>{
      
     this.setState({     ///this.setState will take the updated object //works like patch
                         ///setState is like an asynchronous function...
         count:this.state.count+value,
         totatlclicks:this.state.totatlclicks+1
     },()=>(console.log(this.state)))    //it takes another argument as callback function
     
  }
 
   render(){
    
       const {title}=this.props
       const {count}=this.state
       return(
           <>
            <h1>{title}{count}</h1>
            <button onClick={()=>this.handleCounter(1)}>Increment</button>
            <button onClick={()=>this.handleCounter(-1)}>Decrement</button>
            <h3>Totatlclicks:{this.state.totatlclicks}</h3>
           </>
       )
   }
}
export default Counter