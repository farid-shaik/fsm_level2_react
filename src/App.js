import React,{Component, useEffect, useState} from 'react';
import './App.css';
import Recipe from './recipe';

import ReactPlayer from "react-player";

import {Nav, NavDropdown, Navbar, Container, Button, ProgressBar, Row, Col, Image, Card, Spinner } from 'react-bootstrap';





const App = () => {


  

  const APP_ID = '508f03fe';
  const APP_KEY = '0968adac9a08bc8080b264abdd3a2b10';
  

  const [recipies, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');
 


  useEffect( () => {
    getRecipes(query);
    
  }, [query]);


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
    

  };


  const updateSearch = e => {
    setSearch(e.target.value);
    
  };


  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }




  return (
    <>

      {/* Navigation Bar  and Header */}

      <Navbar className="nav" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Delivery</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            
          </Nav>
          </Container>
      </Navbar>
      

      
      
      { /* search bar to search and get recipe cards  */}

      <div className="App">

        <form onSubmit = {getSearch} className="search-form">
          <input className="search-bar"
          type="text" 
          value = {search} 
          onChange= {updateSearch} 
          />
          <button className="search-button" type="submit">
            search
          </button>
          <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
        </form>
        <div className="recipes">
        {recipies.map(recipe => (
          <Recipe
          key = {recipe.recipe.label}
          title= {recipe.recipe.label}
          calories = {recipe.recipe.calories}
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
        
          />
        ))}
        </div>
      </div>

      

      { /* Video and Image */}


      

      <div className="video">
      <Container>
        <h1 className="bruschetta">Bruschetta Recipee Preparation </h1>
        <Row>
          <a href="https://www.cluemediator.com"></a>
              <ReactPlayer
                url="https://youtu.be/Q3xg35pcLyo"
              />

              <Col >
              <Image className="image" src="https://image.shutterstock.com/image-vector/home-cooking-recipe-bruschetta-step-600w-390871786.jpg" />
            </Col>
     
        </Row>
      </Container>
      </div>

      {/* Progress Bar */}

      <div className="video">
        <ProgressBar striped variant="success" now={40} />
        <ProgressBar striped variant="info" now={20} />
        <ProgressBar striped variant="warning" now={60} />
        <ProgressBar striped variant="danger" now={80} />
      </div>  

        
        
        
      {/* footer */}
          
      <Card className="text-center footer">
        <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title> For Special Orders</Card.Title>
            <Card.Text>
              Contact us cell : 9390532606  |  Email : farid1710564@gmail.com 
            </Card.Text>
            <Button variant="primary">Exit</Button>
          </Card.Body>
        <Card.Footer className="text-muted">1 day ago</Card.Footer>
      </Card>

 
    

    </>
  );

};

export default App;
