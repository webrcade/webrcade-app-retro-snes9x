import React from "react";

import {
  WebrcadeRetroApp
} from '@webrcade/app-common';

import { Emulator } from './emulator';
import { EmulatorPauseScreen } from './pause';

import './App.scss';

class App extends WebrcadeRetroApp {
  createEmulator(app, isDebug) {
    return new Emulator(app, isDebug);
  }

  isDiscBased() {
    return false;
  }

  getBiosMap() {
    return {};
  }

  getAlternateBiosMap() {
    return {
      'ca30b50f880eb660a320674ed365ef7a': 'disksys.rom', // FDS Bios
    };
  }

  getBiosUrls(appProps) {
    return appProps.fds_bios ? appProps.fds_bios : [];
  }

  renderPauseScreen() {
    const { appProps, emulator } = this;

    return (
      <EmulatorPauseScreen
        emulator={emulator}
        appProps={appProps}
        closeCallback={() => this.resume()}
        exitCallback={() => {
          this.exitFromPause();
        }}
        isEditor={this.isEditor}
        isStandalone={this.isStandalone}
      />
    );
  }
}

export default App;
