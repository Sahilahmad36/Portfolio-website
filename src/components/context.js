import React, {Component} from "react";
const Context=React.createContext();
export class Provider extends Component{
    state={
        Project:[
          {
         id: 1,
         title:"What is full stack developer.",
         imageUrl:"",
       
          },
          {
            id: 1,
            title:"What is full stack developer.",
            imageUrl:"",
          },
          {
            id: 1,
            title:"What is full stack developer.",
            imageUrl:"",
          },
        ],
    };



    render(){
        return(
            <Context.Provider Value={this.state}>
            {this.props.children}
            </Context.Provider>
        );
    }
}
export const Consumer=Context.Consumer;
