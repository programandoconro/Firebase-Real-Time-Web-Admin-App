import React from "react";

import TabTwoPage from "../pages/TabTwoPage";

const TabContainer = ({ history, changedTabs}) => {
  return (
    <tab
      ionTabsDidChange={e => {
        changedTabs(e);
      }}
    >
      <tab tab="tab1">
        
      </tab>
      <tab tab="tab2">
        <TabTwoPage 
        history={history} />
      </tab>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" onClick={changedTabs}>
          <ion-label> Admin Panel </ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" onClick={changedTabs}>
          <ion-label> Menu </ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </tab>
  );
};

export default TabContainer;

