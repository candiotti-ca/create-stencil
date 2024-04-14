import { Component, Host, h } from '@stencil/core';
import state from '../../store/state';

@Component({
  tag: 'dispose-store-ticket'
})
export class DisposeStoreTicket {

  render() {
    return (
      <Host>
        <h1>{state.squaredClicks}</h1>
        <button onClick={() => {state.clicks = state.clicks+1}}>click me</button>
      </Host>
    );
  }

}
