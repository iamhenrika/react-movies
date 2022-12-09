import { useState, useEffect } from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
export default function Form(props) {
  //The component must return some JSX
  const [formData, setFormData] = useState({
    searchterm: "",
    year: "",
    genre: ""
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //prevent page from refreshing on form submission
    props.getMovie(formData.searchterm);
    //pass the search term to movieSearch prop, which is apps getMovie function
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchterm" onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
