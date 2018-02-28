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
        localStorage.removeItem('username');
        localStorage.removeItem('predstavnik');
        localStorage.removeItem('id');
    }

    render(){
        return(
            <Redirect to="/" />
            )
    }
}