import React from "react";
import {NavItem, Navbar, Nav, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Form, Col, Checkbox, Row} from 'react-bootstrap';
import {Link } from 'react-router-dom';


class Test extends React.Component {

render() {

    console.log(localStorage.getItem('predstavnik'));
    console.log(localStorage.getItem('username'));
    

    if(localStorage.getItem('predstavnik')== null && localStorage.getItem("username") == null)
    {
        return(
        <Navbar>
        <Nav bsStyle="pills">
        <NavItem ><Link to ='/'>Pocetna</Link></NavItem>
        <NavItem ><Link to ='/objekti'>Objekti</Link></NavItem>
        <NavItem ><Link to ='/dogadjaji'>Događaji</Link></NavItem>
        <NavItem ><Link to = '/prijava'>Prijava</Link></NavItem>
        <NavItem ><Link to = '/registracija'>Registracija</Link></NavItem>
        </Nav>
    </Navbar>);
    }
    else if(localStorage.getItem('predstavnik') == null && localStorage.getItem('username') != null)
    {
        return(
            <Navbar>
            <Nav bsStyle="pills">
            <NavItem ><Link to ='/'>Pocetna</Link></NavItem>
            <NavItem ><Link to ='/objekti'>Objekti</Link></NavItem>
            <NavItem ><Link to ='/dogadjaji'>Događaji</Link></NavItem>
            <NavItem ><Link to = '/mojeRezervacije'>Moje rezervacije</Link></NavItem>
            <NavItem ><Link to = '/odjava'>Odjava</Link></NavItem>
            <NavItem ><Link to = '/chat'>Chat</Link></NavItem>


            </Nav>
        </Navbar>
        )
    }
    else if(localStorage.getItem('predstavnik') != null && localStorage.getItem("username") != null)
    {
        return (
            <Navbar>
            <Nav bsStyle="pills">
            <NavItem ><Link to ='/'>Pocetna</Link></NavItem>
            <NavItem ><Link to ='/objekti'>Objekti</Link></NavItem>
            <NavItem ><Link to ='/dogadjaji'>Događaji</Link></NavItem>
            <NavItem ><Link to = '/dodajobjekat'>Dodaj objekat</Link></NavItem>
            <NavItem ><Link to = '/dodajdogadjaj'>Dodajte događaj</Link></NavItem>
            <NavItem ><Link to = '/odjava'>Odjava</Link></NavItem>
            <NavItem ><Link to = '/rezervacije'>Rezervacije</Link></NavItem>
            <NavItem ><Link to = '/chat'>Chat</Link></NavItem>

            </Nav>
        </Navbar>
        )
    }
}


}

export default Test;
