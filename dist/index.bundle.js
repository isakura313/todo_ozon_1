/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Todo.js":
/*!********************!*\
  !*** ./js/Todo.js ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Todo
/* harmony export */ });
class Todo{
    /*
        priority - важность дела
        text - контент, содержимое
        dt -  дата создания дела
        dl - deadline
     */
    constructor(priority, text, dl) {
        this.priority = priority;
        this.text = text;
        this.dt = Date.now();
        this.dl = dl;
    }
}



/***/ }),

/***/ "./js/code.js":
/*!********************!*\
  !*** ./js/code.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./js/Todo.js");
 // чтобы было больше выдачи ошибок и проверки кода и работали всякие новые фишки
 // импортируем класс нашего дела
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
]; // массив prioritet - насколько дела могут быть важными / неважными

const field = document.querySelector(".input")
const select = document.querySelector("select");
const date_picker = document.getElementById("date_picker");
const button_plus = document.querySelector(".button_plus");
const deals = document.querySelector(("#deals"))

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
    let todo = new _Todo__WEBPACK_IMPORTED_MODULE_0__.default(select.value, content, date_picker.value);
    const todo_to_JSON  = JSON.stringify(todo);
    localStorage.setItem(String(+todo.dt), todo_to_JSON);
    GenerateDom(todo);
    field.value = "";
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
    // эта функция сразу вызовется
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
            <p> ${new Date(obj.dt).getDate()}/${new Date(obj.dt).getMonth()} / ${obj.dl}</p>
                <i class="material-icons md-delete"></i>
            </div>
    `)
}

// обработчики удаления дела
// todo удаление дела


// обработчики редактирования дела




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/code.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL2pzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL2pzL2NvZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG97XG4gICAgLypcbiAgICAgICAgcHJpb3JpdHkgLSDQstCw0LbQvdC+0YHRgtGMINC00LXQu9CwXG4gICAgICAgIHRleHQgLSDQutC+0L3RgtC10L3Rgiwg0YHQvtC00LXRgNC20LjQvNC+0LVcbiAgICAgICAgZHQgLSAg0LTQsNGC0LAg0YHQvtC30LTQsNC90LjRjyDQtNC10LvQsFxuICAgICAgICBkbCAtIGRlYWRsaW5lXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJpb3JpdHksIHRleHQsIGRsKSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5kdCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuZGwgPSBkbDtcbiAgICB9XG59XG5cbiIsIid1c2Ugc3RyaWN0JyAvLyDRh9GC0L7QsdGLINCx0YvQu9C+INCx0L7Qu9GM0YjQtSDQstGL0LTQsNGH0Lgg0L7RiNC40LHQvtC6INC4INC/0YDQvtCy0LXRgNC60Lgg0LrQvtC00LAg0Lgg0YDQsNCx0L7RgtCw0LvQuCDQstGB0Y/QutC40LUg0L3QvtCy0YvQtSDRhNC40YjQutC4XG5pbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8nOyAvLyDQuNC80L/QvtGA0YLQuNGA0YPQtdC8INC60LvQsNGB0YEg0L3QsNGI0LXQs9C+INC00LXQu9CwXG4vLyBjbGFzcyBDYXJkX1RyZWxsbyBleHRlbmRzIFRvZG97XG4vLyAgICAgY29uc3RydWN0b3IocHJpb3JpdHksIHRleHQsIGRsLCBwZXJzb24pIHtcbi8vICAgICAgICAgc3VwZXIoKTtcbi8vICAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuLy8gICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuLy8gICAgICAgICB0aGlzLmRsID0gZGw7XG4vLyAgICAgICAgIHRoaXMucGVyc29uID0gcGVyc29uO1xuLy8gICAgIH1cbi8vIH1cbi8vIGNvbnN0IGNhcmRfdHJlbGxvID0gbmV3IENhcmRfVHJlbGxvKDEsIFwidGV4dFwiLCBcIjEwXzE0XCIsIFwiVmFzeWFcIilcbi8vIGNvbnNvbGUubG9nKGNhcmRfdHJlbGxvKTtcblxuY29uc3QgaW1wb3J0YW50X2NvbG9yID0gW1xuICAgIFwiaGFzLWJhY2tncm91bmQtZGFuZ2VyIGhhcy10ZXh0LXdoaXRlIGlzLXNpemUtM1wiLFxuICAgIFwiaGFzLWJhY2tncm91bmQtd2FybmluZyBoYXMtdGV4dC1ibGFjayBpcy1zaXplLTNcIixcbiAgICBcImhhcy1iYWNrZ3JvdW5kLWxpbmsgaGFzLXRleHQtd2hpdGUgaXMtc2l6ZS0zXCIsXG5dOyAvLyDQvNCw0YHRgdC40LIgcHJpb3JpdGV0IC0g0L3QsNGB0LrQvtC70YzQutC+INC00LXQu9CwINC80L7Qs9GD0YIg0LHRi9GC0Ywg0LLQsNC20L3Ri9C80LggLyDQvdC10LLQsNC20L3Ri9C80LhcblxuY29uc3QgZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0XCIpXG5jb25zdCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpO1xuY29uc3QgZGF0ZV9waWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVfcGlja2VyXCIpO1xuY29uc3QgYnV0dG9uX3BsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbl9wbHVzXCIpO1xuY29uc3QgZGVhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKChcIiNkZWFsc1wiKSlcblxuLypcbtCk0YPQvdC60YbQuNGPINC00L7QsdCw0LLQu9C10L3QuNGPINC00LXQu9CwLCDQutC+0YLQvtGA0LAg0LLRi9C30LLQsNC10YIg0YTRg9C90LrRhtC40Y4g0L7RgtGA0LjRgdC+0LLQutC4XG7QuCDQtNC+0LHQsNCy0LvRj9C10YIg0LTQtdC70L4g0LIgTG9jYWxTdG9yYWdlXG7QmCDQvdC1INC30LDQsdGL0LLQsNC10YIg0L7QsdC90YPQu9GP0YLRjCDQt9C90LDRh9C10L3QuNGPXG4gKi9cbmZ1bmN0aW9uIGFkZFRhc2soKXtcbiAgICBsZXQgY29udGVudCA9IGZpZWxkLnZhbHVlO1xuICAgIGlmKGNvbnRlbnQgPT09IFwiXCIgIHx8IGRhdGVfcGlja2VyLnZhbHVlID09PSBcIlwiKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKHNlbGVjdC52YWx1ZSwgY29udGVudCwgZGF0ZV9waWNrZXIudmFsdWUpO1xuICAgIGNvbnN0IHRvZG9fdG9fSlNPTiAgPSBKU09OLnN0cmluZ2lmeSh0b2RvKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdHJpbmcoK3RvZG8uZHQpLCB0b2RvX3RvX0pTT04pO1xuICAgIEdlbmVyYXRlRG9tKHRvZG8pO1xuICAgIGZpZWxkLnZhbHVlID0gXCJcIjtcbn1cblxuLy8g0L3QsNC30L3QsNGH0LXQvdC40LUg0LvQuNGB0YLQtdC90LXRgNC+0LIg0L3QsCDQvdCw0YjRgyDQutC90L7Qv9C60YNcbmJ1dHRvbl9wbHVzLm9uY2xpY2sgPSBhZGRUYXNrO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PntcbiAgICBpZihlLmNvZGUgPT09IFwiRW50ZXJcIil7XG4gICAgICAgIGFkZFRhc2soKTtcbiAgICB9XG59KVxuXG5cbi8vINGE0YPQvdC60YbQuNGPINC+0YLRgNC40YHQvtCy0LrQuCDQvdCw0YjQtdCz0L4g0L/RgNC40LvQvtC20LXQvdC40Y8sINC60L7Qs9C00LAg0L7QvdC+INCy0LrQu9GO0YfQsNC10YLRgdGPXG4vL9C00LDQvdC90YvQtSDQsdC10YDRg9GC0YHRjyDQuNC3IGxvY2FsU3RvcmFnZVxuZnVuY3Rpb24gZHJhd19vbl9sb2FkKCl7XG4gICAgLy8g0Y3RgtCwINGE0YPQvdC60YbQuNGPINGB0YDQsNC30YMg0LLRi9C30L7QstC10YLRgdGPXG4gICAgLy8g0L/QvtGC0L7QvCDQtdC1INC/0LXRgNC10LzQtdC90L3Ri9C1INCy0YvQstC10LfQtdGCIEdDXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgbGtfa2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTsgLy8ga2V5INC/0L4g0LjQvdC00LXQutGB0YMg0L/QvtC70YPRh9C40YLRjCDQt9C90LDRh9C10L3QuNC1XG4gICAgICAgIGxldCBjb250ZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obGtfa2V5KSAvLyDQv9C+INC60LvRjtGH0YMg0L/QvtC70YPRh9Cw0LXQvCDQt9C90LDRh9C10L3QuNC1XG4gICAgICAgIGxldCB0b2RvID0gSlNPTi5wYXJzZShjb250ZW50KTsgLy8gcGFyc2UgLSDQvNC10YLQvtC0INGA0LDRgdC60L7QvdGB0LXRgNCy0LDRhtC40LhcbiAgICAgICAgR2VuZXJhdGVEb20odG9kbyk7XG4gICAgfVxufVxuZHJhd19vbl9sb2FkKCk7XG5cbi8qXG7Qo9C90LjQstC10YDRgdCw0LvRjNC90LDRjyDRhNGD0L3QutGG0LjRjyDQvtGC0YDQuNGB0L7QstC60LgsINC60L7RgtC+0YDQsNGPINGDINC90LDRgSDQstGB0YLQsNCy0LvRj9C10YIgdG9kbyDQsiBET01cbiAqL1xuZnVuY3Rpb24gR2VuZXJhdGVEb20ob2JqKXtcbmRlYWxzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsXG4gICAgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcF90YXNrICR7aW1wb3J0YW50X2NvbG9yW29iai5jb2xvcl19IGlkPSR7K29iai5kdH1cIj5cbiAgICAgICAgICAgPHAgY2xhc3M9XCJ0b2RvX3RleHRcIj4gJHtvYmoudGV4dH0gPC9wPlxuICAgICAgICAgICAgPHA+ICR7bmV3IERhdGUob2JqLmR0KS5nZXREYXRlKCl9LyR7bmV3IERhdGUob2JqLmR0KS5nZXRNb250aCgpfSAvICR7b2JqLmRsfTwvcD5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1kLWRlbGV0ZVwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIGApXG59XG5cbi8vINC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0YPQtNCw0LvQtdC90LjRjyDQtNC10LvQsFxuLy8gdG9kbyDRg9C00LDQu9C10L3QuNC1INC00LXQu9CwXG5cblxuLy8g0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC00LXQu9CwXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9qcy9jb2RlLmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBIiwic291cmNlUm9vdCI6IiJ9