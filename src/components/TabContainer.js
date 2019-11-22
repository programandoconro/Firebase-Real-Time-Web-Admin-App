import React from "react";

import TabTwoPage from "../pages/TabTwoPage";

const TabContainer = ({ history, changedTabs, addItem , showAddItemModal}) => {
  return (
    <ion-tabs
      ionTabsDidChange={e => {
        changedTabs(e);
      }}
    >
      <ion-tab tab="tab1">
        
      </ion-tab>
      <ion-tab tab="tab2">
        <TabTwoPage 
        history={history} />
      </ion-tab>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" onClick={changedTabs}>
          <ion-label>Admin Panel</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" onClick={changedTabs}>
          <ion-label>Menu</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  );
};

export default TabContainer;
