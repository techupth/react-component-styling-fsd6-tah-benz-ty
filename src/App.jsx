import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";

import errorIcon from "./components/img/frown.svg";
import warningIcon from "./components/img/alert-triangle.svg";
import infoIcon from "./components/img/alert-circle.svg";
import successIcon from "./components/img/check-circle.svg";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button color="#074ee8" />
        <Button color="#07A4E8" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert img={errorIcon} type="error" />
        <Alert img={warningIcon} type="warning" />
        <Alert img={infoIcon} type="info" />
        <Alert img={successIcon} type="success" />
      </div>
    </div>
  );
}

export default App;
