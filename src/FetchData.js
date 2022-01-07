import React, { Component } from "react";

import Product from "./assets/images/koscioł-DOM.jpeg"

export const Image = () => (
    <img
      src="https://images.unsplash.com/photo-1508138221679-760a23a2285b"
      height="175"
      width="200"   
    ></img>
  );

class FetchData extends React.Component {
  
    state = {
        text: "w tym roku osiągne wszystkie swoje cele",
        error: "coś poszło nie tak z z tymy celami"
    }

    handleDataChange = (e) => {
        const value = this.refs.number.value;
        console.log(value)
        fetch(`http://numbersapi.com/${value}/year?json`)
        .then(res => {
          if(res.ok) {
            return res
          } 
          throw Error("coś jest nie tak")
        })
        .then(res => res.json())
        .then(data => this.setState({
          text: data.text
        }))
        .catch(err => {
          this.setState({ text: "jest problem" + err })
        })
    }

    

    render() {
    return (
      <div>
        <input type="text" onChange={this.handleDataChange} ref="number" />
        <p>Odpowiedź: {this.state.text}</p>
      </div>

);
}
}

export default FetchData;

{/* <div className="productWrapper">
    <img
        src={Product ? Product : Image}
        height="175"
        width="auto"
    ></img>
</div> */}