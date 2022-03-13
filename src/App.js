import "./App.css";
import "./scss/app.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <div className=" me-0 ms-0 ">
        <div className="col-md-6 form mx-auto">
          <Form />
        </div>
        <div className="col-6 filter h-100 mx-auto ps-0 pe-0">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
