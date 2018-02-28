import React from 'react';
import Navbar from './Navbar.js';
import {NavItem, Nav, Button, FormGroup, ControlLabel, FormControl, HelpBlock, Form, Col, 
    Checkbox, Row, FieldGroup, Carousel} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

export default class Karusel extends React.Component
{
    render(){
        return (
            <Carousel>
            <Carousel.Item>
              <img width={900} height={300} alt="900x500" src="http://localhost:3000/slike/party1.jpg"/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={300} alt="900x500" src="http://localhost:3000/slike/party2.jpg"/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={300} alt="900x500" src="http://localhost:3000/slike/party3.jpg"/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        )
    }
}