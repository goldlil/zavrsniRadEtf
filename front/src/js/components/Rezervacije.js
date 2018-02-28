import React from 'react';
import Navbar from './Navbar.js';
import {NavItem, Nav, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Form, Col, Checkbox, Row, FieldGroup, Table} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

export default class Rezervacije extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            rezervacije: [],
            potvrdjena: false
        }
    }

    updateRezervacije(){
        axios.get("http://localhost:3000/rezervacija/predstavnik/"+ localStorage.getItem('id'))
        .then(odgovor => {
            console.log(odgovor);
            this.setState({
                rezervacije: odgovor.data
            })
        })
        .catch(error => {
            alert("Desila se greska pri povezivanju sa servisom")
        })
    }

    componentDidMount(){
       this.updateRezervacije.call(this);
    }

    potvrdiRezervaciju(id){
        console.log("tuuuuuuu");
        axios.get("http://localhost:3000/rezervacija/update/" + id)
        .then(odgovor => {
            console.log(odgovor.data);
            if(odgovor.data === 1)
            {
                alert("Uspjesno potvrdjena rezervacija");
                this.updateRezervacije.call(this);                
            }
            else 
                alert("Desila se greska pri potvrdi rezervacije");
        })
        .catch(error => {
            console.log(error);
            alert("desila se greska");
        })
    }

    render() {
        return (
            <div>

            <Navbar />

            <Col sm={1} md = {2} lg = {3} />
            <Col sm={10} md = {8} lg = {6} >

            <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Objekat</th>
                <th>Događaj</th>
                <th>Potvrdi</th>
                </tr>
            </thead>
            <tbody>

                {this.state.rezervacije.map((rezervacija, index) => {
                    
                    if(rezervacija.potvrdjena == true)
                    {
                        return ( 
                        <tr id = {rezervacija.id}>
                    <td>{rezervacija.lokacija}</td>
                    <td>{rezervacija.dogadjaj}</td>
                    <td>Potvrđena  </td>
                </tr>)
                    }
                    else
                    {
                    return ( 
                        <tr id = {rezervacija.id}>
                    <td>{rezervacija.lokacija}</td>
                    <td>{rezervacija.dogadjaj}</td>
                    <td><Button onClick={this.potvrdiRezervaciju.bind(this, rezervacija.id)}> Potvrdi </Button> </td>
                </tr>)
                    }
                }
                )}
            </tbody>
          </Table>
                </Col>
          <Col sm={1} md = {2} lg = {3} />

          </div>
        )
    }
}