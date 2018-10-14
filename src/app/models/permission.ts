export enum Permission {  // Уровень доступа для элемента компонента
  READ = 0, // чтение, недоступен для редактирования
  WRITE = 1,  // доступен для редактирования
  TOUCH = 2, // доступен для нажатия, использованияб
  DELETE = 3, // доступен для удаления
}
