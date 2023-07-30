import React from "react";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import { BrowserView, MobileView } from "react-device-detect";

// core components

function BasicElements() {
  
  
  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container>
          <h1 className="text-center" style={{marginTop:"10%"}}>About me</h1>
          <Row>
            <Col md="5">
            <BrowserView> 
            <img style={{borderRadius: "50%", maxHeight: "80%"}} alt="..." src={require("assets/img/Maturska kopija.jpg")}></img>
            </BrowserView>
            <MobileView>
            <img style={{borderRadius: "50%", maxHeight: "80%", alignItems:"center"}} alt="..." src={require("assets/img/Maturska kopija.jpg")}></img>
            </MobileView>
            </Col>
            <Col>
              <BrowserView>
                   <p md="5">
                    <b>My name is Omar Ahmetović. I am 23 years old. I live in Sarajevo, Bosnia and Herzegovina and 
                      I am a Bachelor of Software Engineering and currently, I am in the process of claiming my diploma. 
                      I am hard working, determined, and I enjoy programming. I have experience with modern frontend 
                      frameworks such as Angular and React, good problem solving skills, excellent skills in team work 
                      and collaboration, experience with HTML, CSS, JavaScript and TypeScript and excelent communication 
                      in English language. My objectives are increasing my knowledge in programming fields, especially web
                      application development. Always looking forward to the challenges of learning new technologies and 
                      be a part of a huge change in the world.</b></p>
                </BrowserView>
                <MobileView>
                   <p md="7" style={{marginTop:"5%"}}>
                    <b>My name is Omar Ahmetović. I am 22 years old. I live in Sarajevo, Bosnia and Herzegovina.
                    I am a 4'th year student at International University of Sarajevo. I am hard working, determined,
                    and I enjoy programming. My objectives are increasing my knowledge in programming fields, 
                    especially web application development.  Always looking forward to the challenges of learning 
                    new technologies and be a part of a huge change in the world.</b></p>
                </MobileView>
            </Col>
          </Row>

          <h1 className="text-center" style={{marginTop:"5%"}}>Education</h1>
          <Row>
          <Col md="5">
            <BrowserView>
            <img style={{borderRadius: "25%", maxHeight: "80%"}} alt="..." src={require("assets/img/Edukacija.jpg")}></img>
            </BrowserView>
            <MobileView>
            <img style={{borderRadius: "25%", maxHeight: "80%", alignItems:"center"}} alt="..." src={require("assets/img/Edukacija.jpg")}></img>
            </MobileView>
          </Col>
          <Col md="6">
            <BrowserView>
            <ul class="mt-3" style={{lineHeight:"4em,", listStyle:"none"}}>
                <li><b>Primary School:</b>  Osnovna škola "El-Manar"</li>
                <li><b>High School:</b> Četvrta Gimnazija Ilidža</li>
                <li><b>Bachelor of Science in Software Engineering:</b>  International University of Sarajevo (4 year Education)</li>
             </ul>
             </BrowserView>
             <MobileView>
             <ul class="mt-3" style={{lineHeight:"4em,", listStyle:"none", marginTop:"5%"}}>
                <li><b>Primary School:</b>  Osnovna škola "El-Manar"</li>
                <li><b>High School:</b> Četvrta Gimnazija Ilidža</li>
                <li><b>Bachelor of Software Engineering:</b> International University of Sarajevo</li>
             </ul>
             </MobileView>
          </Col>
          </Row>
          <h1 className="text-center" style={{marginTop:"5%"}}>Skills</h1>
          <Row>
          <Col md="5">
            <BrowserView>
             <img style={{borderRadius: "25%", maxHeight: "80%"}} alt="..." src={require("assets/img/Skills.jpg")}></img>
            </BrowserView>
            <MobileView>
              
             <img style={{borderRadius: "25%", maxHeight: "80%", alignItems:"center"}} alt="..." src={require("assets/img/Skills.jpg")}></img>
            </MobileView>
          </Col>
          <Col md="6">
            
             <ul class="mt-3" style={{lineHeight:"4em,", listStyle:"none"}}>
                    <li><h4><b>Programming skills:</b></h4></li>
                    <li> C++</li>
                    <li> Java</li>
                    <li> Python</li>
                    <li> PHP</li>
                    <li> React</li>
                    <li> Angular</li>
                    <li><h4><b>Other skills:</b></h4></li>
                    <li> English</li>
                    <li> Turkish</li>
                    <li> German</li>
                    <li> Arabic</li>
                </ul>
          </Col>
          </Row>
          <h1 className="text-center" style={{marginTop:"5%"}}>Projects</h1>
          <Row>
          <Col className="text-center">
            <div style={{alignItems:"center"}}>
            <table class="table table-bordered align-center table-responsive-sm">
                 <tr>
                    <th>Name of project</th>
                    <th>Heroku link</th>
                    <th>Github link</th>
                    <th>Technologies</th>
                </tr>
                <tr>
                        <td>Karate Klub Respect Website</td>
                        <td><a style={{color:"#2ca8ff"}} href="https://karateklubrespect.ba/index" target="_blank"> 
                        https://karateklubrespect.ba/index</a></td>
                        <td><a style={{color:"#2ca8ff"}} href="https://github.com/srepuh/kkrespect" target="_blank">
                        https://github.com/srepuh/kkrespect</a></td>
                        <td>Angular <br /> Node js <br />  PostgreSQL</td>
                    </tr>
                    <tr>
                        <td>Hairdresser Appointment Booking Application</td>
                        <td></td>
                        <td><a style={{color:"#2ca8ff"}} href="https://github.com/OmarAhmetovic21/barberShop-fullProject" target="_blank">
                        https://github.com/OmarAhmetovic21/barberShop-fullProject</a></td>
                        <td>React <br /> Node js <br />MongoDB</td>
                    </tr>

                    <tr>
                        <td>Lufthansa Project</td>
                        <td><a style={{color:"#2ca8ff"}} href="https://lufthansa-application.herokuapp.com/" target="_blank">
                            https://lufthansa-application.herokuapp.com/</a></td>
                        <td><a style={{color:"#2ca8ff"}} href="https://github.com/OmarAhmetovic21/Lufthansa" target="_blank">
                            https://github.com/OmarAhmetovic21/Lufthansa</a></td>
                        <td>Angular</td>
                    </tr>
            </table>
            </div>
          </Col>
          </Row>
          
        </Container>
      </div>
    </>
  );
}

export default BasicElements;
