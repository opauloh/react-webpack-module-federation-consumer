import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Modal from "host/Modal";

const App = () => (
  <div>
    Hi there, I'm the consumer application and I'm consuming {`Modal`} from the
    host dynamically.
    <div>
      <Modal>Hmmm</Modal>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
