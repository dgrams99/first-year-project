import React, {Component} from "react";
class Intro extends Component {
 state = {
   OnLoadText: "first-text"
 }

 componentDidMount() {
 
 }
 

  render() {
  return (
 <div className="Contanier">
 <h1 className="onLoad-text">HAPPY 1 Year</h1>
 <h1 className="second-text">HERES YOUR GIFT</h1>
</div>
  );
}
}

export default Intro;