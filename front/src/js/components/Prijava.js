import React from 'react';
import Navbar from './Navbar.js';
import {NavItem, Nav, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Form, Col, Checkbox, Row, FieldGroup} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';
import {Redirect} from 'react-router';

export default class Prijava extends React.Component
{

    constructor(props){
        super(props);
        this.state = {
            prijavljen: false
        }
    }

    prijavaFunckija(){
        var korisnickoIme = document.getElementById('korisnickoIme').value;
        var sifra = document.getElementById('sifra').value;
        axios.get('http://localhost:3000/korisnik/dalipostoji?korisnickoIme=' + korisnickoIme + 
        "&sifra=" + sifra)
        .then(response => {
            if(response.data.length != 0)
            {
                if(response.data[0].predstavnikObjekta == true)
                {
                    alert("uspjesno ste se prijavili kao predstavnik objekta");
                    localStorage.setItem("username", korisnickoIme);
                    localStorage.setItem("predstavnik", "jeste");
                    localStorage.setItem('id', response.data[0].id);
                    this.setState({
                        prijavljen: true
                    })
                }
                else{
                    alert("uspjesno ste se prijavili");
                    localStorage.setItem("username", korisnickoIme);
                    localStorage.setItem('id', response.data[0].id);
                    this.setState({
                        prijavljen : true
                    })
                }

                
            }
            else 
                alert("Unijeli ste pogresne podatke za prijavu");
        })
        .catch(error => {
            console.log(error);
            alert("Desila se greska pri prijavi");
        });
    }

    render(){
        console.log(this.state.prijavljen);
        return(
            <Row className="show-grid">

            <Navbar /> 
            {this.state.prijavljen && (
                <Redirect to="/"/>
              )}

            <br/> <br/><br/> 
            <Col sm={1} md={2} lg={4}/>

            <Col sm={10} md={8} lg={4}>

            <Form horizontal>
             <FormGroup>
                <Col componentClass={ControlLabel} sm={4}>
                    Koriničko ime: 
                </Col>
                <Col sm={8}>
                    <FormControl type="text" id="korisnickoIme" placeholder="Unesite korisničko ime" />
                </Col>
                </FormGroup>
                <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
                Šifra:
            </Col>
            <Col sm={8}>
                <FormControl type="password" id="sifra" placeholder="Unesite šifru" />
            </Col>
            </FormGroup>
            <Button onClick={this.prijavaFunckija.bind(this)}>
                Prijavite se
                </Button>
         
            </Form>

            
            
      </Col>
      <Col sm={1} md={2} lg={4}/>
      </Row>)
    }
}