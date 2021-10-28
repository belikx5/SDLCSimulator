﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using SDLCSimulator_BusinessLogic.Models.Input;
using SDLCSimulator_Data.Enums;
using SDLCSimulator_Data.JsonTaskModels;

namespace SDLCSimulator_BackEnd_Tests.Fixtures
{
    public static class UpdateTaskInputModelFixture
    {
        public static UpdateTaskInputModel CreateValidEntity()
        {
            return new()
            {
                TaskId = 1,
                Type = TaskTypeEnum.DragAndDrop,
                Difficulty = DifficultyEnum.Medium,
                Topic = "Вимоги",
                Description = new()
                {
                    Columns = new List<string> {"Функціональні","Нефункціональні"},
                    Blocks = new List<string>
                    {
                        "Пошук товарів за назвою",
                        "Користувацький інтерфейс має відповідати 10 евристикам графічного інтерфейсу",
                        "Перегляд вмісту кошику","Вибір способу доставки",
                        "Програмний продукт буде пов’язаний з поштовим клієнтом MS Outlook для отримання розсилки електронних повідомлень",
                        "З’єднання з сайтом відбувається на основі протоколу HTTPS",
                        "Програмний продукт має витримувати мінімум 100 запитів до серверу на секунду",
                        "Наявність вбудованого графічного редактору","Наявність сторінки оформлення замовлення реклами",
                        "Блокування облікового запису у разі підозрілої поведінки"
                    }
                },
                Standard = new()
                {
                    StandardOrResult = new()
                    {
                        {
                            "Функціональні",
                            new List<string>
                            {
                                "Перегляд вмісту кошику","Вибір способу доставки","Пошук товарів за назвою",
                                "Наявність сторінки оформлення замовлення реклами",
                                "Наявність вбудованого графічного редактору"
                            }
                        },

                        {
                            "Нефункціональні",
                            new List<string>
                            {
                                "З’єднання з сайтом відбувається на основі протоколу HTTPS",
                                "Користувацький інтерфейс має відповідати 10 евристикам графічного інтерфейсу",
                                "Програмний продукт має витримувати мінімум 100 запитів до серверу на секунду",
                                "Блокування облікового запису у разі підозрілої поведінки",
                                "Програмний продукт буде пов’язаний з поштовим клієнтом MS Outlook для отримання розсилки електронних повідомлень"
                            }
                        }
                    }
                },
                GroupNames = new List<string> {"ПЗ-41"}
            };
        }
    }
}
