export class ToLink {
  public title: string;
  public link: string;
  public params: any;

  // Переходы между страницами

  constructor(title: string, link: string, params: any = null) {
    this.title = title; // заголовок страницы
    this.link = link; // ссылка на страницу
    this.params = params; // передаваемые параметры
  }
}
