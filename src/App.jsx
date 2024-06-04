import "./App.css";
import { Alert } from "./components/Alert";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <div className="header">
          <h3>Buttons</h3>
        </div>
        <hr />
        <div className="body">
          <div className="sub-body">
            <Button type="Primary" />
            <Button type="Secondary" />
          </div>
          <div className="sub-body">
            <Button type="Error" />
            <Button type="Success" />
          </div>
        </div>
      </div>
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <div className="header">
          <h3>Alert Component</h3>
        </div>
        <hr />
        <div className="body">
          <div className="sub-body">
            <Alert type="error" />
            <Alert type="warning" />
            <Alert type="info" />
            <Alert type="success" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
