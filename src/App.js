import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    Person: {
      fullName: "ALA EDDINE",
      bio: <a href="mailto:ala.benna@gmail.com">Mail</a>,
      imgSrc: "/images/myprofilephoto.jpg",
      profession: "Full Stack Developer",
    },
    isPerson: true,
    date: new Date(),
  };
  componentDidMount() {
    console.log("component did mount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div className="container">
        <h1>Check Person</h1>
        {this.state.isPerson && (
          <div>
            <img
              src={this.state.Person.imgSrc}
              alt="person"
              style={{ width: "250px" }}
            />
            <h1>{this.state.Person.fullName}</h1>
            <h3>{this.state.Person.bio}</h3>
            <h2>{this.state.Person.profession}</h2>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        )}

        <button
          onClick={() =>
            this.setState({
              ...this.state.Person,
              isPerson: !this.state.isPerson,
            })
          }
        >
          ClickMe
        </button>
      </div>
    );
  }
}

export default App;
