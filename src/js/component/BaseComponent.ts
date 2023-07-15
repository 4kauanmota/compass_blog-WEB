export abstract class BaseComponent<T extends HTMLElement, U extends HTMLElement> {
  protected TemplateElement: HTMLTemplateElement;
  protected HostElement: T;
  protected Element: U;

  constructor(templateId: string, hostElementId: string, newElementId: string) {
    this.TemplateElement = document.getElementById(templateId)! as HTMLTemplateElement;
    this.HostElement = document.getElementById(hostElementId)! as T;
    this.Element = document.importNode(this.TemplateElement.content, true)!.firstElementChild as U;

    this.Element.id = newElementId;

    this.Attach();
  }

  protected Attach() {
    this.HostElement.insertAdjacentElement('beforeend', this.Element);
  }
}