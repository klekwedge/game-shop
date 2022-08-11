/* eslint-disable react/no-unused-class-component-methods */
import { Component } from 'react';

class RAWG extends Component {
  apiKey = '9c6f34d35ac04b2bbe700fdadfb26801';

  async getGame() {
    const res = await fetch(`https://api.rawg.io/api/games?key=${this.apiKey}`);
    const data = await res.json();
    return data;
  }

  // render() {
  //   return <div>Example</div>;
  // }
}
export default RAWG;
