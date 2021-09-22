import "./App.css";
import Reminder from "./Containers/Reminder";
import DisplayReminders from "./Containers/DisplayReminders";

function App() {
  return (
    <div className="container row m-auto">
      <Reminder />
      <DisplayReminders />
    </div>
  );
}

export default App;
