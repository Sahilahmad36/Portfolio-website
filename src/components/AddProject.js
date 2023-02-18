import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";
class AddProject extends Component {
    state={
        imageUrl:"",
        title:"",
        body:"",
        submitMessage:"",
        submitMessageTextColor:"",

    };
    onChange=(event)=>{
   this.setState({
    [event.target.name]:event.target.value,
   });
    };
    onBodyChange = (value)=>{
        this.setState({
            body: value,
        });
    };
    onSubmit=(event)=>{
        event.preventDefault();
         let isSuccessful=true;
       

         if(isSuccessful){
          
          this.setState({
       submitMessage: `Project Published Successfully`,
       submitMessageTextColor:"text-info",
          });
         }else{
          this.setState({
            submitMessage:"Project Failed :(",
            submitMessageTextColor: "text-danger",
          });
         }
       };
  render() {
    const { imageUrl, title, body, submitMessageTextColor, submitMessage}=this.state;
    return(
         <div className="container-fluid my-5 py-5">
        <h1 className="text-center text-info  my-5">
           Projects
        </h1>
        <div className="row px-3">
        <div className="col-12 col-lg-6">
            
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="imageUrl" className="text-danger">ImageUrl*</label>
                         <input type="text" name="imageUrl" id="imageUrl" className="form-control" 
                         onChange={this.onChange}
                         required
                         />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title"className="text-danger" >Title*</label>
                        <input type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        onChange={this.onChange}
                        required
                        />
                    </div>
                    
                    <SimpleMDE
                   onChange={this.onBodyChange} 
                    options={{
                        hideIcons:["preview", "side-by-side", "fullscreen"],
                    }}
                    />
                    <button
       type="submit"
       className="btn btn-dark btn-block my-5"
       style={{backgroundColor:"black"}}>
         Submit
        </button>

                    
                </form>
                <div className="py-5 mx-2 text-center ">
   <h5 className={submitMessageTextColor}>{submitMessage}</h5>
            </div>

        </div>
        <div className="col-12 col-lg-6 markdown">
         <div className="justify-content-center">
          <img src={imageUrl}
          alt={title}
          className="img-fluid"
          />
          
         </div>
         <h1 className="font-weight-light text-center py-5">{title}</h1>
         <ReactMarkdown children={body} />
        </div>
    
       </div>

    </div>
    );
  }
}
export default AddProject;