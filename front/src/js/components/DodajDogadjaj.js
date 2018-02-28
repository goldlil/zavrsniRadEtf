import React from 'react';
import Navbar from './Navbar.js';
import {NavItem, Nav, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Form, Col, Checkbox, Row, FieldGroup} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

export default class DodajObjekat extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            objekti: []
        };
    }

    vratiSveObjekte(){
        axios.get('http://localhost:3000/objekti/korisnik/' + localStorage.getItem('id'))
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

    dodajteDogadjaj(){
        var nazivDogadjaja = document.getElementById("nazivDogadjaja").value;
        var datumivrijeme = document.getElementById("datumivrijeme").value;
        var kratakOpis = document.getElementById("kratakOpis").value;
        var mogucaRezervacija = document.getElementById("mogucaRezervacija").checked;
        var odabraniObjekat = document.getElementById("odabraniObjekat").value;

        var datumivrijemeNiz = datumivrijeme.split("T");
        console.log(datumivrijemeNiz);

        console.log(datumivrijeme);
       var porukaGreske = "";
        if(nazivDogadjaja.length < 3)
            porukaGreske += "\nNaziv događaja mora imati 3 znaka";
        if(kratakOpis.length < 10)
            porukaGreske += "\nOpis dogadjaja  mora imati barem 10 znakova";
        if(kratakOpis.length > 30)
            porukaGreske += "\nOpis dogadjaja  moze imati maksimalno 30 znakova";
        if(datumivrijeme.length == 0)
           porukaGreske += "\nNista odabrani datum i vrijeme događaja";


        if(porukaGreske.length == 0){
                        
            axios.post('http://localhost:3000/dogadjaji/dodaj', qs.stringify({
                nazivDogadjaja: nazivDogadjaja,
                datum: datumivrijemeNiz[0],
                vrijeme: datumivrijemeNiz[1],
                mogucaRezervacija: mogucaRezervacija,
                objekat: odabraniObjekat,
                kratakOpis: kratakOpis
            })).then(function(response){
                if(response.data == "1")
                {
                    alert("Uspjesno ste dodali događaj!");
                    document.getElementById("nazivDogadjaja").value = "";
                    document.getElementById("datumivrijeme").value = "";
                    document.getElementById("kratakOpis").value = "";
                    document.getElementById("mogucaRezervacija").value = false;
                    
                }
                else
                    alert("Desila se greska pri dodavanju događaja!");
                console.log(response);
            }).catch(function(error){
                alert("Desila se greska pri dodavanju događaja!");
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


            <br/> <br/><br/> 
            <Col sm={1} md={2} lg={4}/>

            <Col sm={10} md={8} lg={4}>

            <Form horizontal>

            <FormGroup controlId="formControlsSelect">
                <Col sm={4}>
                <ControlLabel>Odaberite objekat za koji dodajete događaj</ControlLabel>
                </Col>
                <Col sm={8}>
                <FormControl componentClass="select" placeholder="odaberite objekat" id="odabraniObjekat">

            {this.state.objekti.map((objekat, index) => {

                    return(
                    <option value={objekat.id}>{objekat.nazivObjekta}</option>
                    )
            }
            )}

            </FormControl>
                </Col>
                </FormGroup>      
             <FormGroup>
                <Col componentClass={ControlLabel} sm={4}>
                    Naziv događaja: 
                </Col>
                <Col sm={8}>
                    <FormControl type="text" id="nazivDogadjaja" placeholder="Unesite naziv dogadjaja" />
                </Col>
                </FormGroup>
                <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
                Odaberite datum i vrijeme
            </Col>
            <Col sm={8}>
                <input type="datetime-local" name="datumivrijeme" id="datumivrijeme" />

            </Col>
            </FormGroup>

            <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
                Kratak opis:
            </Col>
            <Col sm={8}>
                <FormControl componentClass="textarea" id="kratakOpis" placeholder="Unesite kratak dogadjaja" />
            </Col>
            </FormGroup>

            <FormGroup>
            <Col smOffset={2} sm={10}>
                <Checkbox id="mogucaRezervacija">Oznacite ako se mogu praviti rezervacije za ovaj dogadjaj</Checkbox>
            </Col>
            </FormGroup>

            <FormGroup>
            <Col smOffset={4} sm={8}>
                <Button onClick={this.dodajteDogadjaj.bind(this)}>
                Dodajte dogadjaj
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