import Todo from './Todo';

const field = document.querySelector(".input")
let select = document.querySelector("select");

/*
Функция добавления дела, котора вызвает функцию отрисовки
и добавляет дело в LocalStorage
И не забывает обнулять значения
 */
function addTask(){
    let content = field.value;
    if(content == ""){
        return;
    }
    let todo = new Todo(select.value, content, '20/10/20')
    // дальше у нас будет сохрание в LocalStorage
}

//назначение листенеров на нашу кнопку



// функция отрисовки нашего приложения, когда оно включается
//данные берутся из localStorage



/*
Универсальная функция отрисовки, которая у нас вставляет todo в DOM
 */
function GenerateDom(){

}

// обработчики удаления дела


// обработчики редактирования дела

