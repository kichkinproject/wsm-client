export enum Roles {
  MAIN_ADMIN = 0, // Основной администратор системы, способный удалять любые записи
  ADMIN = 1,  // Локальный администратор, ведущий учет интеграторов
  INTEGRATOR = 2, // Интегратор, создающий пользователей, группы пользователей и сценарии
  SIMPLE = 3  // Пользователь системы, вкл/выкл сценариев, работа в смежной системе
}

export class Role {
  public user_name: string; // Имя пользователя
  public user_role: number; // Пользовательская роль

  constructor(model: any) {
    this.user_name = model.Name;
    this.user_role = model.Role;
  }
}
