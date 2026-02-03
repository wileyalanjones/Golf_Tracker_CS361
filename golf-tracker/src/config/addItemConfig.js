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
    ]
  },
  
   course: {
    title: "Course",
    getEndpoint: id => `http://localhost:3000/courses/${id}`,
    postEndpoint: "http://localhost:3000/courses",
    putEndpoint: id => `http://localhost:3000/courses/${id}`,
    fields: [
      { name: "name", type: "text", label: "Name" },
      { name: "location", type: "text", label: "Location" },
      { name: "par", type: "number", label: "Par" },
      { name: "distance", type: "number", label: "Distance" },
      { name: "slope", type: "number", label: "Slope" }
    ]
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
    ]
  }
};

export default ADD_ITEM_CONFIG;