import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "kahric.tarik@gmail.com",
        phone: "0123456789",
      },
      {
        id: 2,
        name: "Amna Kahric",
        email: "kahric.amna@gmail.com",
        phone: "987654321",
      },
      {
        id: 3,
        name: "Bilal Hodzic",
        email: "hodzic.bilal@gmail.com",
        phone: "225883",
      },
      {
        id: 4,
        name: "Emir Kurtovic",
        email: "kurtovic.emir@gmail.com",
        phone: "0644002619",
      },
    ],
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
