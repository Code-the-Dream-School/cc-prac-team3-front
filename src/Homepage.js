import React, { useEffect } from "react";
import { getAllData } from "./util/index";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";

const URL = "http://localhost:8000/api/v1/";

function App(props) {
  //const [message, setMessage] = useState("");
  

  useEffect(() => {
    (async () => {
      const myData = await getAllData(URL);
      // setMessage(myData.data);
    })();
  
    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <>
      <Navbar count={props.count} />
      {/*<h1>{message}</h1>*/}
      <Home />
      <Footer />
    </>
  );
}

export default App;
