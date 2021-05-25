import React from "react";
import NavBar from "./components/navbar";
import Cover from "./components/cover";
import "./App.css";
import Store from "./components/store/store";
import Works from "./components/works";
import About from "./components/about";

// to start the server
// ./node_modules/.bin/json-server-auth ./backend/db.json --port 3001

const state = {
  images: [
    {
      id: 1,
      src: "https://picsum.photos/550/450",
      width: 550,
      height: 450,
      print: true,
    },
    {
      id: 2,
      src: "https://picsum.photos/600/500",
      width: 600,
      height: 500,
      print: true,
    },
    {
      id: 3,
      src: "https://picsum.photos/400",
      width: 400,
      height: 400,
      print: true,
    },
    {
      id: 4,
      src: "https://picsum.photos/500/400",
      width: 500,
      height: 400,
      print: false,
    },
    {
      id: 5,
      src: "https://picsum.photos/540/450",
      width: 540,
      height: 450,
      print: true,
    },
    {
      id: 6,
      src: "https://picsum.photos/460/500",
      width: 460,
      height: 500,
      print: true,
    },
    {
      id: 7,
      src: "https://picsum.photos/475",
      width: 475,
      height: 475,
      print: true,
    },
  ],
};

const Header = () => {
  return <NavBar />;
};

const Coverpage = () => {
  return <Cover />;
};

const Aboutpage = () => {
  return <About />;
};

const Workspage = () => {
  return <Works images={state.images} />;
};

const Storepage = () => {
  return <Store />;
};

export { Header, Coverpage, Aboutpage, Workspage, Storepage };

// class App extends Component {
//   state = {};
//   render() {
//     return (
//       <React.Fragment>
//         <NavBar />
//         <main className="container">
//           <Cover />
//         </main>
//       </React.Fragment>
//     );
//   }
// }

// export default App;
