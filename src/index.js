import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      user: null
    };
  }

  componentDidMount() {
    fetch("http://192.168.1.46:8080/user/1")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            user: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, user } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <ul>
          <li key={user.is}>
            {user.name} {user.email}
          </li>
        </ul>
      )
    }

  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);