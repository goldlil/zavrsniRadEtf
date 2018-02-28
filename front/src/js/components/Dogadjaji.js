import React from "react";
import Navbar from './Navbar.js';
import Karusel from './Karusel.js';
import {NavItem, Nav, Jumbotron, Clearfix, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Form, Col, Checkbox, Row, Image, Input} from 'react-bootstrap';
import axios from 'axios';
import qs from 'qs';


export default class Dogadjaji extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            dogadjaji : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/dogadjaji')
        .then(odgovor => {
            console.log(odgovor.data);
            this.setState({
                dogadjaji: odgovor.data
            });
        });
    }

    rezervisi(dogadjajId, objekatId){

        console.log(dogadjajId);
        console.log(objekatId);

        if(localStorage.getItem("username") == null){
            alert("Morate biti registrovani da bi izvršili rezervaciju");
            return;
        }

        if(localStorage.getItem('predstavnik') != null){
            alert("Predstavnik objekata ne moze vrsiti rezervaciju");
            return;
        }

        console.log(localStorage.getItem('id'));
        axios.post('http://localhost:3000/rezervacija/dodaj', qs.stringify({
            korisnikId: localStorage.getItem('id'),
            objekatId: objekatId,
            dogadjajId: dogadjajId,
            potvrdjena: false,
        })).then(function(response){
            if(response.data === 1)
                alert("Uspjesno ste poslali zahtjev za rezervaciju");
            else   
                alert("Desila se greska pri slanju zahtjeva za rezervaciju");
            
        }).catch(function(error){
            alert("Desila se greska pri slanju zahtjeva za rezervaciju");
            console.log(error);
        })
    }
    
    render(){
        return (
            <div>
            <Navbar />
            
            <Col sm={0} md = {1} lg = {1} />
            <Col sm={12} md = {10} lg = {10} >

            <Row className="show-grid">                

                            
                {
                    this.state.dogadjaji.map((dogadjaj, index) => {
                        var datum = dogadjaj.datum.split("-");
                        var vrijeme = dogadjaj.vrijeme.split(':');
                        var rezervacija = dogadjaj.moguca_rezervacija;
                        var elementRezervacije = null;
                        var i = index +1;
                        if(rezervacija){
                            elementRezervacije =  <Button onClick={this.rezervisi.bind(this, dogadjaj.id, dogadjaj.objekatId)}>Rezervisi</Button>;
                        }
                        else
                        {
                             elementRezervacije = <Button >Rezervacija nije moguća</Button>;
                        }

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
                                
                                    <Image height={100} src={"http://localhost:3000/slike/"+ dogadjaj.slika} responsive rounded/>
                                    <p> <br/>Objekat:  {dogadjaj.lokacija}<br/>Datum: {datum[2]}. {datum[1]}.
                                    <br/>Dogadjaj: 
                                      {dogadjaj.naziv} <br/>{dogadjaj.kratakOpis}. <br/><br/> {elementRezervacije}
                                        </p>


                                </Col>
                                {clearfix}
                                    </div>
                            )
                        }
                    )
                }

                </Row>                


                </Col>

                            <Col sm={0} md = {1} lg = {1} />

                

            
            </div>
        )
    }
}
/*
<Row className="show-grid">
            <Col lg = {2} md = {1} sm ={0} />
            <Col lg = {8} md = {10} sm ={12}>
            <Karusel />
            </Col>
            <Col lg = {2} md = {1} sm ={0} />
            </Row>
            */


            /*
                        <Col sm={0} md = {1} lg = {2} />
                
                
                {
                    this.state.dogadjaji.map((dogadjaj, index) => {
                        var datum = dogadjaj.datum.split("-");
                        var vrijeme = dogadjaj.vrijeme.split(':');
                        //rezervacija = (dogadjaj.mogucaRezervacija) ? "<p>moguca rezervacija</p>" : "<p>nije moguca</p>";
                        return(
                            <Col sm={6} md = {5} lg = {4} >

                                <Image height={100} src={"http://localhost:3000/slike/"+ objekat.slika} responsive rounded/>

                                <p> <br/>U objektu {dogadjaj.objekat}, datuma {datum[2]}. {datum[3]}. odrzati dogadjaj pod nazivom
                                {dogadjaj.naziv} <br/>{dogadjaj.kratakOpis}. <br/>
                                    </p>

                            </Col>
                                
                        )
                    })
                }
                


                <Col sm={0} md = {1} lg = {2} /> 

                */