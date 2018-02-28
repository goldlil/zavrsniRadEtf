import React from 'react';
import Navbar from './Navbar.js';
import {NavItem, Nav, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Form, Col, Checkbox, Row} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

export default class Registracija extends React.Component{

    constructor(props){
        super(props);
        this.state = {korisnickoIme: 'staroKorisnickoIme'};
    }

    registracija(){
        var korisnickoIme = document.getElementById("korisnickoIme").value;
        var email = document.getElementById("email").value;
        var sifra = document.getElementById("sifra").value;
        var ime = document.getElementById("ime").value;
        var prezime = document.getElementById("prezime").value;
        var predstavnikObjekta = document.getElementById("predstavnikObjekta").checked;
        
        var porukaGreske = "";
        if(korisnickoIme.length < 6)
            porukaGreske += "\nKorisnicko ime mora imati 6 znakova";
        if(email.length < 6)
            porukaGreske += "\nEmail nije u ispravnom formatu";
        if(sifra.length < 6)
            porukaGreske += "\nSifra mora imati minimalno 6 znakova";
        if(ime.length < 1)
        porukaGreske += "\nPolje ime ne moze biti prazno";
        if(prezime.length < 1)
            porukaGreske += "\nPolje prezime ne moze biti prazno";

        if(porukaGreske.length == 0){
         
            axios.post('http://localhost:3000/korisnik/registracija', qs.stringify({
                korisnickoIme: korisnickoIme,
                email: email,
                sifra: sifra,
                ime: ime,
                prezime: prezime,
                predstavnikObjekta: predstavnikObjekta
            })).then(function(response){
                if(response.data == "1")
                {
                    alert("Uspjesno ste se registrovali!");
                    document.getElementById("email").value = "";
                    document.getElementById("sifra").value = "";
                    document.getElementById("ime").value = "";
                    document.getElementById("prezime").value = "";
                    document.getElementById("korisnickoIme").value = "";
                    document.getElementById("predstavnikObjekta").checked = false;
                    
                }
                else
                    alert("Desila se greska pri registraciji!");
                console.log(response);
            }).catch(function(error){
                alert("Desila se greska pri registraciji!");
                console.log(error);
            })
        }
        else{
            alert(porukaGreske);
        }  
    }
    

    render(){
        return(
            <div>
         <Row className="show-grid">

            <Navbar /> 

            <br/> <br/><br/> <br/><br/> <br/>

            <Col sm={1} md={2} lg={4}/>

            <Col sm={10} md={8} lg={4}>
            <Form horizontal>
            <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
                Username: 
            </Col>
            <Col sm={10}>
                <FormControl type="text" id="korisnickoIme" placeholder="Unesite vase korisnicko ime" />
            </Col>
            </FormGroup>
        
            <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
                Email:
            </Col>
            <Col sm={10}>
                <FormControl type="text" id="email" placeholder="Unesite vas email" />
            </Col>
            </FormGroup>

            <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
                Sifra:
            </Col>
            <Col sm={10}>
                <FormControl type="password" id="sifra" placeholder="Unesite vasu korisnicku sifru" />
            </Col>
            </FormGroup>

            <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
                Ime:
            </Col>
            <Col sm={10}>
                <FormControl type="text" id="ime" placeholder="Unesite vase ime" />
            </Col>
            </FormGroup>

            <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
                Prezime:
            </Col>
            <Col sm={10}>
                <FormControl type="text" id="prezime" placeholder="Unesite vase prezime" />
            </Col>
            </FormGroup>
        
            <FormGroup>
            <Col smOffset={2} sm={10}>
                <Checkbox id="predstavnikObjekta">Oznacite ako se registrujete kao predstavnik objekta</Checkbox>
            </Col>
            </FormGroup>
        
            <FormGroup>
            <Col smOffset={2} sm={10}>
                <Button onClick={this.registracija.bind(this)}>
                Registrujte se
                </Button>
            </Col>
            </FormGroup>
      </Form>
      </Col>
      <Col sm={1} md={2} lg={4}/>
      </Row>
        </div>)
    }
}