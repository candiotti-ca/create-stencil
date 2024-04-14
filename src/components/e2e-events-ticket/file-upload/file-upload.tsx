import { Component, EventEmitter, Host, h,Event } from '@stencil/core';

@Component({
  tag: 'file-upload'
})
export class FileUpload {
  @Event({eventName:'fileUploaded'}) fileUploadEvent:EventEmitter<File>;

  handleInput(event:any):void{
    const files = event.target?.files || [];
    const uploadedFile = files[0];

    if (uploadedFile) {
      this.fileUploadEvent.emit(uploadedFile);
    }
  }

  render() {
    return (
      <Host>
        <input type="file" onInput={event => this.handleInput(event)}/>
      </Host>
    );
  }

}
