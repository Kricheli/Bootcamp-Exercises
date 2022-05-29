import React from "react";
import Accordion from "./widgets_app/components/Accordion";
// import SearchBar from "./youtube/components/SearchBar";
// import unsplash from "../api/unsplash";
// import SearchBar from "./SearchBar";
// import ImageList from "./ImageList";

const items=[  

  {
    title: 'What is React?',
    content: 'React is a front end javascript framework '
  },
  {
    title: 'Why use React',
    content: 'React is a favorite JS libreray among engineers '
  },
  {
    title: 'How do you use React?',
    content: 'You use react by creating components '
  },
]
const App=()=> {
  return (
    <div>
        <Accordion items={items}/>
      </div>
    );
    {/* <div className="ui container"> */}
      {/* <SearchBar /> */}
      {/* <SearchBar onSubmit={this.onSearchSubmit} />
      <ImageList images={this.state.images} /> */}
    // state = { images: [] };
    // onSearchSubmit = async (term) => {
    //   const response = await unsplash.get("/search/photos", {
    //     params: { query: term },
    //   });
    //   this.setState({ images: response.data.results });
    // };
  }
  export default App;

