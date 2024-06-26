
import axios from "axios";
import "./App.css";

function App(props) {
  function displayWeather(response) {
    alert(
      `The weather in ${props.city} is ${response.data.temperature.current}`
    );
  }

  let apiKey = "f55d396ae54o7a80b1e5dfc1t9302b80";
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city}&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayWeather);
  return (
    <div className="App">
      <h1>Hello world!!</h1>
    </div>
  );
}

export default App;
