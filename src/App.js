import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Title from "./components/Title";

import SkillBar from "./components/SkillBar";
import About from "./components/About";
import Recommen from "./components/Recommen";

import ProjectSection from "./components/ProjectSection";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AddProject from "./components/AddProject";
import ProjectPage from "./components/ProjectPage";
import NotFound from "./components/NotFound";

import AddFile from "./components/AddFile";
// import Picture from "./components/Picture";



function App() {
  
    return( 
        
        <BrowserRouter>
    <Navbar/>
     <Switch>
        <Route exact path="/">
    <Title 
    name="SRHsahil36code"
    leadText="I'm a full stack developer"
    />
    <h1 className=" container text-success text-center my-5" style={{backgroundColor:"black"}}>Skill-Bar</h1>
    <SkillBar />
    <About />
    <Recommen />
    
    <ProjectSection/>
    

    </Route>
    
    <Route exact path="/addfile" component={AddFile} />
  <Route exact path="/contact" component={Contact}/>
  <Route  exact path="/projects" component={AddProject}/>
  <Route exact path="/project/:id" component={ProjectPage}/>
    <Route component={NotFound} />
    
    </Switch>
   
    <Footer />
    {/* <h1>Image-Gallery</h1>
    <Picture /> */}
    </BrowserRouter>
   
    );
}

export default App; 
