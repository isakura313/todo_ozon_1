'use strict'
import Todo from './Todo';
// class Card_Trello extends Todo{
//     constructor(priority, text, dl, person) {
//         super();
//         this.priority = priority;
//         this.text = text;
//         this.dl = dl;
//         this.person = person;
//     }
// }
// const card_trello = new Card_Trello(1, "text", "10_14", "Vasya")
// console.log(card_trello);

const important_color = [
    "has-background-danger has-text-white is-size-3",
    "has-background-warning has-text-black is-size-3",
    "has-background-link has-text-white is-size-3",
]

const field = document.querySelector(".input")
let select = document.querySelector("select");
let date_picker = document.getElementById("date_picker");
const button_plus = document.querySelector(".button_plus");


/*
Функция добавления дела, котора вызвает функцию отрисовки
и добавляет дело в LocalStorage
И не забывает обнулять значения
 */
function addTask(){
    let content = field.value;
    if(content === ""  || date_picker.value === ""){
        return;
    }
    let todo = new Todo(select.value, content, date_picker.value);
    const todo_to_JSON  = JSON.stringify(todo);
    localStorage.setItem(String(+todo.dt), todo_to_JSON);
    field.value = "";
    // дальше у нас будет сохрание в LocalStorage

}

// назначение листенеров на нашу кнопку
button_plus.onclick = addTask;
document.addEventListener("keypress", (e) =>{
    if(e.code === "Enter"){
        addTask();
    }
})


// функция отрисовки нашего приложения, когда оно включается
//данные берутся из localStorage
function draw_on_load(){
    // эта функция сразу сработает
    // потом ее переменные вывезет GC
    for (let i = 0; i < localStorage.length; i++){
        let lk_key = localStorage.key(i); // key по индексу получить значение
        let content = localStorage.getItem(lk_key) // по ключу получаем значение
        let todo = JSON.parse(content); // parse - метод расконсервации
        GenerateDom(todo);
    }
}
draw_on_load();

/*
Универсальная функция отрисовки, которая у нас вставляет todo в DOM
 */
function GenerateDom(obj){
deals.insertAdjacentHTML('afterbegin',
    `
        <div class="wrap_task ${important_color[obj.color]} id=${+obj.dt}">
           <p class="todo_text"> ${obj.text} </p>
            <p> ${new Date(obj.dt).getDate()}/ ${new Date(obj.dt).getMonth()} / ${obj.dl}</p>
                <i class="material-icons md-delete"></i>
            </div>
    `)
}

// обработчики удаления дела


// обработчики редактирования дела

