import React from 'react';
import Navbarr from './Navbar.js';
import {NavItem, Nav, Label, Navbar, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Form, Col, 
    Checkbox, Row, FieldGroup, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

var chat = require('socket.io-client');

                

 

export default class DodajObjekat extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            poruke: []
        };
    }

    componentWillMount(){

        this.socket = chat('http://localhost:3000');
        
        this.socket.on('poslana poruka', function(msg){
            this.setState({
                poruke: [...this.state.poruke, msg]
            });
        
            console.log(this.state.poruke);
        
        }.bind(this));
    }

    
     
    posaljiPoruku(){
        var poruka = document.getElementById('poruka').value;
        if(poruka.length == 0)
            return;
        var objekat = {
            korisnickoIme: localStorage.getItem("username"),
            poruka: poruka
        }
        this.socket.emit('poslana poruka', objekat);
        document.getElementById('poruka').value = "";
    }

    render(){
        return(
            <div>
            <Row className="show-grid">
                <Navbarr /> 
            </Row>                

            <Row className="show-grid">
                <Col lg = {3} md = {2} sm = {1}/>
                <Col lg = {6} md = {8} sm = {10}>
                <ul>
                {this.state.poruke.map(poruka => {
                    var korisnickoIme = localStorage.getItem("username");
                    var stil = (poruka.korisnickoIme == korisnickoIme) ? "info" : "success";
                    return(<div><li style={{ fontSize  : 14 }}><ControlLabel>{poruka.korisnickoIme}:</ControlLabel> </li>
                        <li style={{ fontSize  : 20 }}><Label bsStyle={stil}> {poruka.poruka} </Label></li><br/></div>)
                    })}
                </ul>
                <Navbar fixedBottom = {true}>
                <Form>
                <FormGroup >
                    <FormControl type="text" placeholder="Unesite vašu poruku" id="poruka" autoComplete="off"  onKeyPress={event => {
                        if(event.charCode==13){
                            event.preventDefault();
                            this.posaljiPoruku.call(this);   
                    }}} />
                </FormGroup>
                <Button onClick = {this.posaljiPoruku.bind(this)} >
                     Posalji poruku
                </Button>
                 </Form>
                </Navbar>
                </Col>   
                <Col lg = {3} md = {2} sm = {1}/>
            </Row>
            </div>)
    }
}