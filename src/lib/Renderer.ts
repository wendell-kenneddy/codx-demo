export class Renderer {
  constructor(private readonly element: HTMLElement) {}

  public renderText(text: string) {
    this.element.innerText = text;
  }
}
