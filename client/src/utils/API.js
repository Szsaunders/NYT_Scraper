import axios from "axios";



export default {
  getArticles: function(topic, startYear, endYear) {
    console.log(topic, startYear, endYear)
    const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    if (parseInt(startYear)) {
      console.log("says there's a startYear")
      var begin_date = "?begin_date="+ startYear + "0101";
    }
    else {
      // eslint-disable-next-line
      var begin_date = ""
    }
    if (parseInt(endYear)) {
      console.log("says there's an endYear")
      var end_date = "?end_date="+ endYear + "0101";
    } 
    else {
      // eslint-disable-next-line
      var end_date = ""
    }   
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey + "&q=" + topic + begin_date + end_date;
    console.log(queryURL)
    return axios.get(queryURL);
  },
  



// Gets the book with the given id
getSavedArticles: function() {
  return axios.get("/api/articles/");
},
// Deletes the book with the given id
deleteArticle: function(id) {
  return axios.delete("/api/articles/" + id);
},
// Saves a book to the database
saveArticle: function(bookData) {
  return axios.post("/api/articles", bookData);
}
};
