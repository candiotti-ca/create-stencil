/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DisposeStoreTicket {
    }
    interface E2eEventsTicket {
    }
    interface FileUpload {
    }
}
export interface FileUploadCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLFileUploadElement;
}
declare global {
    interface HTMLDisposeStoreTicketElement extends Components.DisposeStoreTicket, HTMLStencilElement {
    }
    var HTMLDisposeStoreTicketElement: {
        prototype: HTMLDisposeStoreTicketElement;
        new (): HTMLDisposeStoreTicketElement;
    };
    interface HTMLE2eEventsTicketElement extends Components.E2eEventsTicket, HTMLStencilElement {
    }
    var HTMLE2eEventsTicketElement: {
        prototype: HTMLE2eEventsTicketElement;
        new (): HTMLE2eEventsTicketElement;
    };
    interface HTMLFileUploadElementEventMap {
        "fileUploaded": File;
    }
    interface HTMLFileUploadElement extends Components.FileUpload, HTMLStencilElement {
        addEventListener<K extends keyof HTMLFileUploadElementEventMap>(type: K, listener: (this: HTMLFileUploadElement, ev: FileUploadCustomEvent<HTMLFileUploadElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLFileUploadElementEventMap>(type: K, listener: (this: HTMLFileUploadElement, ev: FileUploadCustomEvent<HTMLFileUploadElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLFileUploadElement: {
        prototype: HTMLFileUploadElement;
        new (): HTMLFileUploadElement;
    };
    interface HTMLElementTagNameMap {
        "dispose-store-ticket": HTMLDisposeStoreTicketElement;
        "e2e-events-ticket": HTMLE2eEventsTicketElement;
        "file-upload": HTMLFileUploadElement;
    }
}
declare namespace LocalJSX {
    interface DisposeStoreTicket {
    }
    interface E2eEventsTicket {
    }
    interface FileUpload {
        "onFileUploaded"?: (event: FileUploadCustomEvent<File>) => void;
    }
    interface IntrinsicElements {
        "dispose-store-ticket": DisposeStoreTicket;
        "e2e-events-ticket": E2eEventsTicket;
        "file-upload": FileUpload;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dispose-store-ticket": LocalJSX.DisposeStoreTicket & JSXBase.HTMLAttributes<HTMLDisposeStoreTicketElement>;
            "e2e-events-ticket": LocalJSX.E2eEventsTicket & JSXBase.HTMLAttributes<HTMLE2eEventsTicketElement>;
            "file-upload": LocalJSX.FileUpload & JSXBase.HTMLAttributes<HTMLFileUploadElement>;
        }
    }
}
