import React from 'react';
import Navbar from './Navbar.js';
import {NavItem, Nav, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Form, Col, Checkbox, Row, FieldGroup} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

export default class DodajObjekat extends React.Component{

    dodajObjekat(){
        var nazivObjekta = document.getElementById("nazivObjekta").value;
        var adresa = document.getElementById("adresa").value;
        var odabranaKategorija = document.getElementById("odabranaKategorija").value;
        var kratakOpis = document.getElementById("kratakOpis").value;
        var slikaLokala = document.getElementById("slikaLokala").files[0];

        console.log(slikaLokala);
        
       var porukaGreske = "";
        if(nazivObjekta.length < 3)
            porukaGreske += "\nNaziv objekta mora imati 3 znaka";
        if(adresa.length < 3)
            porukaGreske += "\Adresa objekta mora imati 3 znaka";
        if(kratakOpis.length < 30)
            porukaGreske += "\nOpis objekta mora imati barem 30 znakova";

        if(porukaGreske.length == 0){
            
                var formData  = new FormData();
                formData.append("nazivObjekta", nazivObjekta);
                formData.append("adresa", adresa);
                formData.append("odabranaKategorija", odabranaKategorija);
                formData.append("kratakOpis", kratakOpis);
                formData.append("slikaLokala", slikaLokala);
                fromData.append("idPredstavnika", localStorage.getItem('id'));
            
                axios.post('http://localhost:3000/objekti', formData)
                .then(function(response){
                    if(response.data == "1")
                    {
                        alert("Uspjesno ste se dodali objekat!");
                    }
                    else
                        alert("Desila se greska pri dodavanju objekta");
                    }).catch(function(error){
                    alert("Desila se greska pri dodavanju objekta!");
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
                <option value="nocni klub">Nocni klub</option>
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

            <FormGroup controlId="formControlsFile">
            <Col componentClass={ControlLabel} sm={4}>
                Dodajte sliku objekta:
            </Col>
            <Col sm={8}>
            <FormControl type="file" id="slikaLokala"/>
            </Col>
            </FormGroup>
            <FormGroup>
            <Col smOffset={4} sm={8}>
                <Button onClick={this.dodajObjekat.bind(this)}>
                Dodajte objekat
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