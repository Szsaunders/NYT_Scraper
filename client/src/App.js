 import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron';
import { Col, Row, Container } from './components/Grid';
import { FormBtn, Input } from './components/Form';
import { List, ListItem } from './components/List';
import API from "./utils/API";
import './App.css';


class App extends Component {
  state = {
    articles: [],
    savedArticles: [],
    searchTerm: "Search here",
    startYear: "",
    endYear: ""
  };

  
  
  componentDidMount() {
    this.loadSavedArticles()
  }
  
  handleSearchSubmit= event => {
    event.preventDefault();
    this.scrapeArticles()
  }

  handleArticleSave = event => {
    event.preventDefault();
    console.log(event.target)
    console.log(event.target.value)
    var article = this.state.articles[event.target.value]
    API.saveArticle({
      title: article.snippet,
      date: article.pub_date,
      url: article.web_url
    }).then(
      this.loadSavedArticles()
    )
  }

  handleArticlesClear = event => {
    event.preventDefault();
    this.setState({ articles: [] })
  }

  handleArticleDelete = event => {
    this.loadSavedArticles()
    event.preventDefault();
    API.deleteArticle(event.target.value).then(
      this.loadSavedArticles()
    )

  }

  scrapeArticles= () => {
    
    API.getArticles(this.state.searchTerm, this.state.startYear, this.state.endYear)
    .then(res =>
      // console.log(res.data.response.docs)
      this.setState({ articles: res.data.response.docs, searchTerm: "", startYear: "", endYear: "" })
    )
    .catch(err => console.log(err));
  }
  

  loadSavedArticles = () => {
    API.getSavedArticles().then(function(response) {
      this.setState({ savedArticles: response.data });
    }.bind(this));
  }

  handleInputChange = event => {
    
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  render() {
    return (
      <div className="App">
      <Container fluid>
      <Jumbotron>New York Times Search</Jumbotron>
      <Row>
      <Col size="sm-12">
      <div className="card">
      <div className="card-header">
      <strong>
      <i className="fa fa-list-alt"></i>Search Parameters</strong>
      </div>
      <div className="card-body">
      <div>Search Term:</div>
      <Input 
      value={this.state.searchTerm}
      onChange={this.handleInputChange}
      name="searchTerm">
      </Input>
      <Input
      value={this.state.startYear}
      onChange={this.handleInputChange}
      name="startYear"
      type="date"
      placeholder="Start Year (Optional):"></Input>
      <Input
      value={this.state.endYear}
      type="date"
      onChange={this.handleInputChange}
      name="endYear"
      placeholder="End Year (Optional):"></Input>
      <FormBtn onClick={this.handleSearchSubmit} name="searchButton" className="btn-success">Search</FormBtn>
      <FormBtn onClick={this.handlaArticlesClear} name="clearButton" className="btn-danger">Clear Results</FormBtn>
      </div>
      </div>
      </Col>
      </Row>
      <Row>
      <Col size="sm-12">
      <div className="card">
      <div className="card-header">
      <strong>
      <i className="fa fa-table"></i> Top Articles</strong>
      </div>
      <div className="card-body" id="article-section">
      <List>
      {this.state.articles.map((article, index) => (
      <ListItem key={article._id}>
        <a href={article.web_url}><h2>{article.snippet}</h2></a>
        <FormBtn value={index} onClick={this.handleArticleSave} name="saveButton" className="btn-success">Save</FormBtn>
        <p>{article.pub_date}</p>
      </ListItem>))}
      </List>
      </div>
      </div>
      </Col>
      </Row>
      <Row>
      <Col size="sm-12">
      <div className="card">
      <div className="card-header">
      <strong>
      <i className="fa fa-table"></i> Saved Articles</strong>
      </div>
      <div className="card-body" id="article-section2">
      <List>
      {this.state.savedArticles.map(article => (
      <ListItem key={article._id}>
        <a href={article.url}><h3>{article.title}</h3></a>
        <p>{article.date}</p>
        <FormBtn value={article._id} onClick={this.handleArticleDelete} name="deleteButton" className="btn-danger">Delete</FormBtn>
      </ListItem>))}
      </List>
      </div>
      </div>
      </Col>
      </Row>
      </Container>
      </div>
      );
    }
  }
  
  export default App;
  