import React from 'react';
var ReactRouter = require('react-router-dom');
//import  ReactRouter  from 'react-router-dom';
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

import DodajObjekat from './DodajObjekat.js'
import Navbar from './Navbar.js';
import Prijava from './Prijava.js';
import Registracija from './Registracija.js';
import Objekti from './Objekti.js';
import Chat from './Chat.js';
import Pocetna from './Pocetna.js';
import DodajDogadjaj from './DodajDogadjaj.js';
import Odjava from './Odjava.js';
import MojeRezervacija from './MojeRezervacije';
import Rezervacije from './Rezervacije'
import Dogadjaji from './Dogadjaji';
import Dogadjaj from './Dogadjaj';




export default class Aplikacija extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Pocetna}/>
                    <Route path='/prijava' component={Prijava}/>
                    <Route path='/registracija' component={Registracija}/>
                    <Route path='/dodajObjekat' component={DodajObjekat}/>
                    <Route path='/objekti' component={Objekti}/>
                    <Route path='/chat' component={Chat}/>
                    <Route path='/dodajdogadjaj' component={DodajDogadjaj}/>
                    <Route path='/odjava' component={Odjava}/>
                    <Route path= "/mojeRezervacije" component = {MojeRezervacija}/>
                    <Route path="/rezervacije" component = {Rezervacije}/>
                    <Route exact path="/dogadjaji" component = {Dogadjaji} />
                </Switch>
            </Router>
        );
    }
}

