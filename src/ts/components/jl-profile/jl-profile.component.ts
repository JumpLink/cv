import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom.js";
import { JLNavbarComponent } from '../jl-navbar/jl-navbar.component.js'

import avatar from "../../../assets/avatar.jpg?url"

export class JLProfileComponent extends Component {
  public static tagName = "jl-profile";

  protected autobind = true;

  static get observedAttributes(): string[] {
    return [];
  }

  protected navbar: JLNavbarComponent | null = null;

  public scope = {
    avatar,
  };

  protected connectedCallback() {
    super.connectedCallback();
    this.init(JLProfileComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async template() {
    // Only set the component template if there no childs already
    if (hasChildNodesTrim(this)) {
      return null;
    } else {
      const { default: template } = await import(
        "./jl-profile.component.pug"
      )
      return template(this.scope);
    }
  }
}
