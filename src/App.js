import "./App.css";

import Textarea from "./Components/Textarea";

export default function App({corrections}) {
  return (
    <div className="App">
      <h1>AUTOCORRECTOR</h1>
      <Textarea corrections={corrections}/>
    </div>
  );
}

