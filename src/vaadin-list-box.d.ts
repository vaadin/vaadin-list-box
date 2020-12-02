import {ThemableMixin} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

import {MultiSelectListMixin} from '@vaadin/vaadin-list-mixin/vaadin-multi-select-list-mixin.js';

import {ElementMixin} from '@vaadin/vaadin-element-mixin/vaadin-element-mixin.js';

/**
 * `<vaadin-list-box>` is a Web Component for creating menus.
 *
 * ```
 *   <vaadin-list-box selected="2">
 *     <vaadin-item>Item 1</vaadin-item>
 *     <vaadin-item>Item 2</vaadin-item>
 *     <vaadin-item>Item 3</vaadin-item>
 *     <vaadin-item>Item 4</vaadin-item>
 *   </vaadin-list-box>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name         | Description
 * ------------------|------------------------
 * `items`           | The items container
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 */
declare class ListBoxElement extends
  MultiSelectListMixin(
  ThemableMixin(
  ElementMixin(
  HTMLElement))) {
  focused: Element|null;
  readonly _scrollerElement: HTMLElement;
}

declare global {

  interface HTMLElementTagNameMap {
    "vaadin-list-box": ListBoxElement;
  }
}

export {ListBoxElement};
