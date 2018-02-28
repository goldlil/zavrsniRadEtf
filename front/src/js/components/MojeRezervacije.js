import React from 'react';
import Navbar from './Navbar.js';
import {NavItem, Nav, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Form, Col, Checkbox, Row, FieldGroup, Table} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

export default class MojeRezervacije extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            rezervacije: []
        }
        console.log("mojerez");
    }

    componentDidMount(){
        axios.get("http://localhost:3000/rezervacija/"+ localStorage.getItem('id'))
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

    prikaziDogadjaj(){
        alert("Biće implementirano");
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
                <th>Potvrđena</th>
                </tr>
            </thead>
            <tbody>

                {this.state.rezervacije.map((rezervacija, index) => {

                    return ( 
                        <tr id = {rezervacija.dogadjajId} onClick={this.prikaziDogadjaj.bind(this)}>
                    <td>{rezervacija.lokacija}</td>
                    <td>{rezervacija.dogadjaj}</td>
                    <td>{rezervacija.potvrdjena}</td>
                </tr>)
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