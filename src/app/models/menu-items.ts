export class MenuItem {
  private readonly itemId: number;
  private readonly text: string;
  private visible: boolean = false;
  private childItems: MenuItem[] = [];

  public getId() {
    return this.itemId;
  }

  public getVisible() {
    return this.visible;
  }

  public setVisible(vis: boolean) {
    return this.visible = vis;
  }

  public getText() {
    return this.text;
  }

  public getChildItems() {
    return this.childItems;
  }

  public getChildItem(id: number) {
    return this.childItems.find((cI) => cI.getId() === id );
  }

}

export class MenuItems {
  private mainItems = [
    {
      id: 1,
      text: 'Администраторы',
      visible: true,
      childItems: [
        {
          id: 19,
          text: 'Список',
          visible: false,
        },
        {
          id: 20,
          text: 'Запросы',
          visible: false,
        }
      ]
    },
    {
      id: 2,
      text: 'Группы пользователей',
      visible: true,
      childItems: [
        {
          id: 21,
          text: 'Список',
          visible: false,
        },
        {
          id: 22,
          text: 'Запросы',
          visible: false,
        }
      ]
    },
    {
      id: 3,
      text: 'Сценарии',
      visible: true,
      childItems: [
        {
          id: 23,
          text: 'Список',
          visible: false,
        },
        {
          id: 24,
          text: 'Запросы',
          visible: false,
        }
      ]
    },
    {
      id: 4,
      text: 'Кабинет',
      visible: true,
      childItems: [
        {
          id: 25,
          text: 'Администратор',
          visible: true,
        },
        {
          id: 26,
          text: 'Выйти',
          visible: true,
        }
      ]
    }
  ];

  private adminItems = [
    {
      id: 5,
      text: 'Администраторы',
      visible: true,
      childItems: [
        {
          id: 23,
          text: 'Список',
          visible: false,
        },
        {
          id: 24,
          text: 'Запросы',
          visible: false,
        }
      ]
    },
    {
      id: 6,
      text: 'Группы пользователей',
      visible: true,
      childItems: [
        {
          id: 25,
          text: 'Список',
          visible: false,
        },
        {
          id: 26,
          text: 'Запросы',
          visible: false,
        }
      ]
    },
    {
      id: 7,
      text: 'Интеграторы',
      visible: true,
      childItems: [
        {
          id: 27,
          text: 'Список',
          visible: false,
        },
        {
          id: 28,
          text: 'Запросы',
          visible: false,
        }
      ]
    },
    {
      id: 8,
      text: 'Сценарии',
      visible: true,
      childItems: [
        {
          id: 29,
          text: 'Список',
          visible: false,
        },
        {
          id: 30,
          text: 'Запросы',
          visible: false,
        }
      ]
    },
    {
      id: 9,
      text: 'Кабинет',
      visible: true,
      childItems: [
        {
          id: 31,
          text: 'Администратор',
          visible: true,
        },
        {
          id: 32,
          text: 'Выйти',
          visible: true,
        }
      ]
    }
  ];

  private integratorItems = [
    {
      id: 10,
      text: 'Интеграторы',
      visible: true,
      childItems: [
        {
          id: 33,
          text: 'Список',
          visible: false,
        },
        {
          id: 34,
          text: 'Запросы',
          visible: false,
        }
      ]
    },
    {
      id: 11,
      text: 'Группы пользователей',
      visible: true,
      childItems: [
        {
          id: 35,
          text: 'Список',
          visible: false,
        },
        {
          id: 36,
          text: 'Запросы',
          visible: false,
        }
      ]
    },
    {
      id: 12,
      text: 'Пользователи',
      visible: true,
      childItems: [
        {
          id: 37,
          text: 'Список',
          visible: false,
        },
        {
          id: 38,
          text: 'Запросы',
          visible: false,
        }
      ]
    },
    {
      id: 13,
      text: 'Сценарии',
      visible: true,
      childItems: [
        {
          id: 39,
          text: 'Список',
          visible: false,
        },
        {
          id: 40,
          text: 'Запросы',
          visible: false,
        }
      ]
    },
    {
      id: 14,
      text: 'Контроллеры',
      visible: true,
      childItems: [
        {
          id: 41,
          text: 'Список',
          visible: false,
        },
        {
          id: 42,
          text: 'Запросы',
          visible: false,
        }
      ]
    },
    {
      id: 15,
      text: 'Кабинет',
      visible: true,
      childItems: [
        {
          id: 43,
          text: 'Интегратор',
          visible: true,
        },
        {
          id: 44,
          text: 'Выйти',
          visible: true,
        }
      ]
    }
  ];

  private userItems = [
    {
      id: 16,
      text: 'Сценарии',
      visible: true,
      childItems: []
    },
    {
      id: 17,
      text: 'Менеджер сценариев',
      visible: true,
      childItems: [
        {
          id: 45,
          text: 'Руководство',
          visible: true,
        },
        {
          id: 46,
          text: 'О программе',
          visible: true,
        },
        {
          id: 47,
          text: 'Контакты',
          visible: true,
        }
      ]
    },
    {
      id: 18,
      text: 'Кабинет',
      visible: true,
      childItems: [
        {
          id: 48,
          text: 'Пользователь',
          visible: true,
        },
        {
          id: 49,
          text: 'Выйти',
          visible: true,
        }
      ]
    }
  ];
}
