
import React from "react"



class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state={hasError:false}
    }

     componentDidCatch(error){
            this.setState({hasError:true})
        }
     componentDidMount(){
        console.log("hello i am component")
     }   
    componentDidUpdate(){
        console.log("hello i am update")
    }

   render(){
        if(this.state.hasError){
            return <h1>Something went wrong</h1>
        }else{
            return this.props.children;
        }
   }
}

export default ErrorBoundary;