import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'e2e-events-ticket'
})
export class E2eEventsTicket {
  handleFileUploaded(event:CustomEvent<File>):void{
    console.log('[COMPONENT] is file array fn exists', !!event.detail.arrayBuffer);
  }

  render() {
    return (
      <Host>
        <file-upload onFileUploaded={event => this.handleFileUploaded(event)} />
      </Host>
    );
  }
}
