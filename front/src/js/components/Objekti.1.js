import React from 'react';
import Navbar from './Navbar.js';
import {NavItem, Nav, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Form, Col, Checkbox, Row, FieldGroup, Modal} from 'react-bootstrap';
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

    obrisiObjekat(id){

        axios.delete('http://localhost:3000/objekti' + '/' + id)
        .then(response => {
            if(response.data == "1")
            {
                this.vratiSveObjekte.call(this);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    urediteObjekat(id){
        this.setState({ showModal: true });
        axios.get('http://localhost:3000/objekti/'+id)
        .then(response => {
            document.getElementById("id").value = response.data[0].id;
            document.getElementById("nazivObjekta").value = response.data[0].nazivObjekta;
            document.getElementById("adresa").value = response.data[0].adresa;
            document.getElementById("odabranaKategorija").value = response.data[0].kategorija;
            document.getElementById("kratakOpis").value = response.data[0].kratakOpis;

        })
        .catch(error => {
            console.log(error);
        });

    }
    
    close() {
        this.setState({ showModal: false });
    }

    spasiPromjene(){
        axios.put('http://localhost:3000/objekti', qs.stringify(
            {
                id: document.getElementById("id").value,
                nazivObjekta: document.getElementById("nazivObjekta").value,
                adresa: document.getElementById("adresa").value,
                kategorija: document.getElementById("odabranaKategorija").value,
                kratakOpis: document.getElementById("kratakOpis").value
            }
        
        ))
        .then(response => {

        })
        .catch(error => {

        });
    }
    

    render(){
        return(
            <div>
                <Navbar />



                <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Uredite odabrani objekat</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Unesite nove vrijednosti</h4>
                        <Form horizontal>
                        <p diplay="none" id="id"></p>
             <FormGroup>
                <Col componentClass={ControlLabel} sm={4}>
                    Naziv objekta: 
                </Col>
                <Col sm={8}>
                    <FormControl type="text" id="nazivObjekta" placeholder="Unesite naziv objekta" />
                </Col>
                </FormGroup>
                <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
                Adresa objekta:
            </Col>
            <Col sm={8}>
                <FormControl type="text" id="adresa" placeholder="Unesite adresu objekta" />
            </Col>
            </FormGroup>
            
            <FormGroup controlId="formControlsSelect">
                <Col sm={4}>
            <ControlLabel>Odaberi kategoriju</ControlLabel>
            </Col>
            <Col sm={8}>
            <FormControl componentClass="select" placeholder="odaberiKategoriju" id="odabranaKategorija">
                <option value="kafic">Kafic</option>
                <option value="kafana">Kafana</option>
                <option value="nocni-klub">Nocni klub</option>
                <option value="restoran">Restoran</option>
                <option value="pub">Pub</option>
            </FormControl>
            </Col>
            </FormGroup>

            <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
                Kratak opis:
            </Col>
            <Col sm={8}>
                <FormControl componentClass="textarea" id="kratakOpis" placeholder="Unesite kratak opis lokala" />
            </Col>
            </FormGroup>

           
            <FormGroup>
            <Col smOffset={4} sm={8}>
                <Button onClick={this.spasiPromjene.bind(this)}>
                    spasite promjene
                </Button>
            </Col>
            </FormGroup>

            </Form>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>

                <Col sm={0} md = {1} lg = {2} />
                
                
                {
                    this.state.objekti.map((objekat, index) => {
                        
                        return(
                            <Col sm={6} md = {5} lg = {4} >
                            <Form horizontal>
                                <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Naziv objekta: 
                                </Col>
                                <Col sm={10}>
                                    {objekat.nazivObjekta}
                                </Col>
                                </FormGroup>
                                                                <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Adresa objekta: 
                                </Col>
                                <Col sm={10}>
                                    {objekat.adresa}
                                </Col>
                                </FormGroup>
      
                                <FormGroup>
                                <Col componentClass={ControlLabel} sm={2}>
                                    Kategorija objekta: 
                                </Col>
                                <Col sm={10}>
                                    {objekat.kategorija}
                                </Col>
                                </FormGroup>

                                <Button id = {objekat.id} onClick ={this.obrisiObjekat.bind(this, objekat.id)}>
                                Obrisite objekat
                                </Button>

                                <Button id = {objekat.id} onClick={this.urediteObjekat.bind(this, objekat.id)}>
                                 Uredite objekat
                                </Button>

                                </Form>
                                </Col>
                                
                        )
                    })
                }
                


                <Col sm={0} md = {1} lg = {2} /> 
            </div>
        );
    }
}