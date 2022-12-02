import { Codx } from './Codx';
import { ENCODING } from './config';
import { Renderer } from './Renderer';

export class App {
  private readonly codx = new Codx(ENCODING, 'lower');
  private readonly renderer = new Renderer(
    document.querySelector('#result p') as HTMLParagraphElement
  );
  private readonly form = document.getElementById(
    'encoding-form'
  ) as HTMLFormElement;

  public init() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      try {
        const input = document.getElementById('message') as HTMLInputElement;
        const encodedMsg = this.codx.encode(input.value);
        this.renderer.renderText(encodedMsg.join('-'));
      } catch (error) {
        if (error instanceof Error) {
          return alert(error.message);
        }

        console.log(error);
      }
    });
  }
}
