import React, { Component } from "react";

// MOBX
import { inject, observer } from "mobx-react";


class TabOnePage extends Component {
  

  render() {
   

    return (
     null
       
    );
  }
}

export default inject("store")(observer(TabOnePage));
