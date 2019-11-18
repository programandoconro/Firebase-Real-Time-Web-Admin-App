import { observable, computed, action, decorate, runInAction } from "mobx";
import { entries } from "mobx";
import * as firebaseService from "./firebaseService";

export class Store {
  constructor() {
    this.activeUser = null;
    this.loading = false;
    this.authCheckComplete = false;
    this.initializationError = null;

    this.initializeStore().then(u => {
      this.activeUser = u;
      this.authCheckComplete = true;
    });
  }

  handleAuthedUser = async _authUser => {
    if (_authUser) {
      let userAcctInfo = await firebaseService.getUserProfile();
      console.log("setting active user");
      this.activeUser = { ..._authUser, ...userAcctInfo };
    } else {
      this.activeUser = _authUser;
    }
    return this.activeUser;
  };

  /**
   * check to see if we have a user before starting up
   */
  async initializeStore() {
    return firebaseService
      .authCheck(this.handleAuthedUser)
      .then(_user => {
        return _user;
      })
      .catch(e => {
        return runInAction(() => {
          this.initializationError = e;
        });
      });
  }

  get doCheckAuth() {
    if (firebaseService.getCurrentUser()) {
      return this.activeUser;
    } else {
      return null;
    }
  }

  get authenticatedUser() {
    return this.activeUser || null;
  }

  doLogin(_username, _password) {
    debugger;
    if (_username.length) {
      return firebaseService
        .loginWithEmail(_username, _password)
        .then(
          _result => {
            return true;
          },
          err => {
            console.log(err);
            return err;
          }
        )
        .catch(e => {
          console.log(e);
          return e;
        });
    }
  }

  doLogout() {
    this.activeUser = null;
    return firebaseService.logOut();
  }
  
}

decorate(Store, {
  // OBSERVABLES
  activeUser: observable,
  loading: observable,
  authCheckComplete: observable,
  initializationError: observable,

  // COMPUTED
  authenticatedUser: computed,
  doCheckAuth: computed,

  // ACTIONS
  doLogin: action,
  doLogout: action,
  
});
