/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ComponentTwo {
    }
}
declare global {
    interface HTMLComponentTwoElement extends Components.ComponentTwo, HTMLStencilElement {
    }
    var HTMLComponentTwoElement: {
        prototype: HTMLComponentTwoElement;
        new (): HTMLComponentTwoElement;
    };
    interface HTMLElementTagNameMap {
        "component-two": HTMLComponentTwoElement;
    }
}
declare namespace LocalJSX {
    interface ComponentTwo {
    }
    interface IntrinsicElements {
        "component-two": ComponentTwo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "component-two": LocalJSX.ComponentTwo & JSXBase.HTMLAttributes<HTMLComponentTwoElement>;
        }
    }
}