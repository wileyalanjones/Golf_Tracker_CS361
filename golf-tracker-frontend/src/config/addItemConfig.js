const ADD_ITEM_CONFIG = {
  
  round: {
    title: "Round",
    getEndpoint: id => `http://localhost:3000/rounds/${id}`,
    postEndpoint: "http://localhost:3000/rounds",
    putEndpoint: id => `http://localhost:3000/rounds/${id}`,
    fields: [
      { name: "date", type: "date", label: "Date" },
      { name: "course", type: "select", label: "Course" },
      { name: "strokes", type: "number", label: "Strokes" },
      { name: "score", type: "number", label: "Score" }
    ],
    help: [
      "Date: When was the round played",
      "Course: Where was it played",
      "Strokes: Total swings taken in round",
      "Score: Final stroke tally again par"
    ],
    backgroundColor: "#f7c6ff"
  },
  
   course: {
    title: "Course",
    getEndpoint: id => `http://localhost:3000/courses/${id}`,
    postEndpoint: "http://localhost:3000/courses",
    putEndpoint: id => `http://localhost:3000/courses/${id}`,
    fields: [
      { name: "name", type: "text", label: "Name" },
      { name: "city", type: "text", label: "City" },
      { name: "state", type: "select", label: "State (Abbr)"},
      { name: "par", type: "number", label: "Par" },
      { name: "distance", type: "number", label: "Distance" },
      { name: "slope", type: "number", label: "Slope" }
    ],
    help: [
      "Name: What is the course called",
      "Location: Where is the course",
      "Par: The combined total for all hole par scores",
      "Distance: The combined total for all hole distances",
      "Slope: Difficulty rating of course"
    ],
    backgroundColor: "#9fd38a"
  },
  
  club: {
    title: "Club",
    getEndpoint: id => `http://localhost:3000/clubs/${id}`,
    postEndpoint: "http://localhost:3000/clubs",
    putEndpoint: id => `http://localhost:3000/clubs/${id}`,
    fields: [
      { name: "type", type: "text", label: "Type" },
      { name: "brand", type: "text", label: "Brand" },
      { name: "model", type: "text", label: "Model", optional: true },
      { name: "year", type: "text", label: "Year", optional: true }
    ],
    help: [
      "Type: What club is it (i.e. Driver, Pitching Wedge)",
      "Brand: Who Makes the club (i.e. Ping, Taylor Made)",
      "Model: What style of club is it (i.e. Big Bertha, Oslo3)",
      "Year: When was it manufactured"
    ],
    backgroundColor: "#fff4c4"
  }
};

export default ADD_ITEM_CONFIG;