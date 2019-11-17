import React, { Component } from "react";
import { IonItem, IonContent, IonButton, IonLabel } from "@ionic/react";
// MOBX
import { inject } from "mobx-react";

class TabTwoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _onLogoutClick = async e => {
    e.preventDefault();
    await this.props.store.doLogout();
    this.props.history.push("/login");
  };

  render() {
    let user = this.props.store.activeUser;
    return (
      <IonContent padding>


        <IonItem text-wrap lines="none" style={{ padding: 10 }}>
          {user.bio}
        </IonItem>

        <IonButton
          expand="full"
          onClick={e => {
            this._onLogoutClick(e);
          }}
        >
          LOGOUT
        </IonButton>
      </IonContent>
    );
  }
}

export default inject("store")(TabTwoPage);
