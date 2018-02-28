import React from 'react';
import Navbar from './Navbar.js';
import {NavItem, Nav, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Form, Col, Checkbox, 
    Row, FieldGroup, Modal, Image, Clearfix, Jumbotron} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

export default class DodajObjekat extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            objekti: [],
            showModal: false
        };
    }

    vratiSveObjekte(){
        axios.get('http://localhost:3000/objekti')
        .then(response => {
            this.setState({objekti: response.data});
            console.log(response);
        })
        .catch(error => {
            alert("Desila se greska u povezivanju sa servisom");
            console.log(error);
        })
    }

    componentDidMount(){
       this.vratiSveObjekte.call(this);
    }
    

    render(){
        return(
            <div>
                <Navbar />

                <Col sm={0} md = {1} lg = {1} />
            <Col sm={12} md = {10} lg = {10} >

                <Row className="show-grid">                
                {
                    this.state.objekti.map((objekat, index) => {
                        var i = index+1;
                        var clearfix = null;
                        if(i % 3 == 0)
                        {
                            clearfix = <Clearfix visibleLgBlock/>;
                        }

                        if(i % 2 == 0)
                        {
                            clearfix = <Clearfix visibleMdBlock/>;
                        }

                        return(
                            <div>
                            <Col sm={6} md = {5} lg = {4} >

                                <Image height={100} src={"http://localhost:3000/slike/"+ objekat.slika} responsive rounded/>

                                <p> <br/>{objekat.nazivObjekta} je objekat koji spada u kategoriju {objekat.kategorija}. <br/>Nalazimo se na 
                                    adresi {objekat.adresa}. <br/> {objekat.kratakOpis}
                                    </p>

                            </Col>
                            {clearfix}
                            </div>
                                
                        )
                    
                    })
                }
                


                
                </Row>

                </Col>
                <Col sm={0} md = {1} lg = {1} />


            </div>
        );
    }
}