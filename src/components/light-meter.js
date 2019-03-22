/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css } from 'lit-element';

// These are the elements needed by this element.

// These are the shared styles needed by this element.

// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class LightMeter extends LitElement {
  static get properties() {
    return {
      /* The total number of clicks you've done. */
      // clicks: { type: Number },
      /* The current value of the counter. */
      // value: { type: Number }
    }
  }

  static get styles() {
    return [];
  }

  render() {
    return html`
      <div>
        this will be the actual meter
      </div>
    `;
  }

  constructor() {
    super();
    if ( 'AmbientLightSensor' in window ) {
      const sensor = new AmbientLightSensor();
      sensor.onreading = () => {
        console.log('Current light level:', sensor.illuminance);
      };
      sensor.onerror = (event) => {
        console.log(event.error.name, event.error.message);
      };
      sensor.start();
    } else {
      console.log('nope no light meter')
    }
  }
}

window.customElements.define('light-meter', LightMeter);
