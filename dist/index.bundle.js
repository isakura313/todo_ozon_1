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
    let todo = new _Todo__WEBPACK_IMPORTED_MODULE_0__.default(select.value, content, date_picker.value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL2pzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL2pzL2NvZGUuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG97XG4gICAgLypcbiAgICAgICAgcHJpb3JpdHkgLSDQstCw0LbQvdC+0YHRgtGMINC00LXQu9CwXG4gICAgICAgIHRleHQgLSDQutC+0L3RgtC10L3Rgiwg0YHQvtC00LXRgNC20LjQvNC+0LVcbiAgICAgICAgZHQgLSAg0LTQsNGC0LAg0YHQvtC30LTQsNC90LjRjyDQtNC10LvQsFxuICAgICAgICBkbCAtIGRlYWRsaW5lXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJpb3JpdHksIHRleHQsIGRsKSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5kdCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuZGwgPSBkbDtcbiAgICB9XG59XG5cbiIsIid1c2Ugc3RyaWN0J1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJztcbi8vIGNsYXNzIENhcmRfVHJlbGxvIGV4dGVuZHMgVG9kb3tcbi8vICAgICBjb25zdHJ1Y3Rvcihwcmlvcml0eSwgdGV4dCwgZGwsIHBlcnNvbikge1xuLy8gICAgICAgICBzdXBlcigpO1xuLy8gICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4vLyAgICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4vLyAgICAgICAgIHRoaXMuZGwgPSBkbDtcbi8vICAgICAgICAgdGhpcy5wZXJzb24gPSBwZXJzb247XG4vLyAgICAgfVxuLy8gfVxuLy8gY29uc3QgY2FyZF90cmVsbG8gPSBuZXcgQ2FyZF9UcmVsbG8oMSwgXCJ0ZXh0XCIsIFwiMTBfMTRcIiwgXCJWYXN5YVwiKVxuLy8gY29uc29sZS5sb2coY2FyZF90cmVsbG8pO1xuXG5jb25zdCBpbXBvcnRhbnRfY29sb3IgPSBbXG4gICAgXCJoYXMtYmFja2dyb3VuZC1kYW5nZXIgaGFzLXRleHQtd2hpdGUgaXMtc2l6ZS0zXCIsXG4gICAgXCJoYXMtYmFja2dyb3VuZC13YXJuaW5nIGhhcy10ZXh0LWJsYWNrIGlzLXNpemUtM1wiLFxuICAgIFwiaGFzLWJhY2tncm91bmQtbGluayBoYXMtdGV4dC13aGl0ZSBpcy1zaXplLTNcIixcbl1cblxuY29uc3QgZmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0XCIpXG5sZXQgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlbGVjdFwiKTtcbmxldCBkYXRlX3BpY2tlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZV9waWNrZXJcIik7XG5jb25zdCBidXR0b25fcGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uX3BsdXNcIik7XG5cblxuLypcbtCk0YPQvdC60YbQuNGPINC00L7QsdCw0LLQu9C10L3QuNGPINC00LXQu9CwLCDQutC+0YLQvtGA0LAg0LLRi9C30LLQsNC10YIg0YTRg9C90LrRhtC40Y4g0L7RgtGA0LjRgdC+0LLQutC4XG7QuCDQtNC+0LHQsNCy0LvRj9C10YIg0LTQtdC70L4g0LIgTG9jYWxTdG9yYWdlXG7QmCDQvdC1INC30LDQsdGL0LLQsNC10YIg0L7QsdC90YPQu9GP0YLRjCDQt9C90LDRh9C10L3QuNGPXG4gKi9cbmZ1bmN0aW9uIGFkZFRhc2soKXtcbiAgICBsZXQgY29udGVudCA9IGZpZWxkLnZhbHVlO1xuICAgIGlmKGNvbnRlbnQgPT09IFwiXCIgIHx8IGRhdGVfcGlja2VyLnZhbHVlID09PSBcIlwiKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKHNlbGVjdC52YWx1ZSwgY29udGVudCwgZGF0ZV9waWNrZXIudmFsdWUpO1xuICAgIGNvbnN0IHRvZG9fdG9fSlNPTiAgPSBKU09OLnN0cmluZ2lmeSh0b2RvKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdHJpbmcoK3RvZG8uZHQpLCB0b2RvX3RvX0pTT04pO1xuICAgIGZpZWxkLnZhbHVlID0gXCJcIjtcbiAgICAvLyDQtNCw0LvRjNGI0LUg0YMg0L3QsNGBINCx0YPQtNC10YIg0YHQvtGF0YDQsNC90LjQtSDQsiBMb2NhbFN0b3JhZ2VcblxufVxuXG4vLyDQvdCw0LfQvdCw0YfQtdC90LjQtSDQu9C40YHRgtC10L3QtdGA0L7QsiDQvdCwINC90LDRiNGDINC60L3QvtC/0LrRg1xuYnV0dG9uX3BsdXMub25jbGljayA9IGFkZFRhc2s7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+e1xuICAgIGlmKGUuY29kZSA9PT0gXCJFbnRlclwiKXtcbiAgICAgICAgYWRkVGFzaygpO1xuICAgIH1cbn0pXG5cblxuLy8g0YTRg9C90LrRhtC40Y8g0L7RgtGA0LjRgdC+0LLQutC4INC90LDRiNC10LPQviDQv9GA0LjQu9C+0LbQtdC90LjRjywg0LrQvtCz0LTQsCDQvtC90L4g0LLQutC70Y7Rh9Cw0LXRgtGB0Y9cbi8v0LTQsNC90L3Ri9C1INCx0LXRgNGD0YLRgdGPINC40LcgbG9jYWxTdG9yYWdlXG5mdW5jdGlvbiBkcmF3X29uX2xvYWQoKXtcbiAgICAvLyDRjdGC0LAg0YTRg9C90LrRhtC40Y8g0YHRgNCw0LfRgyDRgdGA0LDQsdC+0YLQsNC10YJcbiAgICAvLyDQv9C+0YLQvtC8INC10LUg0L/QtdGA0LXQvNC10L3QvdGL0LUg0LLRi9Cy0LXQt9C10YIgR0NcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBsa19rZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpOyAvLyBrZXkg0L/QviDQuNC90LTQtdC60YHRgyDQv9C+0LvRg9GH0LjRgtGMINC30L3QsNGH0LXQvdC40LVcbiAgICAgICAgbGV0IGNvbnRlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsa19rZXkpIC8vINC/0L4g0LrQu9GO0YfRgyDQv9C+0LvRg9GH0LDQtdC8INC30L3QsNGH0LXQvdC40LVcbiAgICAgICAgbGV0IHRvZG8gPSBKU09OLnBhcnNlKGNvbnRlbnQpOyAvLyBwYXJzZSAtINC80LXRgtC+0LQg0YDQsNGB0LrQvtC90YHQtdGA0LLQsNGG0LjQuFxuICAgICAgICBHZW5lcmF0ZURvbSh0b2RvKTtcbiAgICB9XG59XG5kcmF3X29uX2xvYWQoKTtcblxuLypcbtCj0L3QuNCy0LXRgNGB0LDQu9GM0L3QsNGPINGE0YPQvdC60YbQuNGPINC+0YLRgNC40YHQvtCy0LrQuCwg0LrQvtGC0L7RgNCw0Y8g0YMg0L3QsNGBINCy0YHRgtCw0LLQu9GP0LXRgiB0b2RvINCyIERPTVxuICovXG5mdW5jdGlvbiBHZW5lcmF0ZURvbShvYmope1xuZGVhbHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJyxcbiAgICBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwX3Rhc2sgJHtpbXBvcnRhbnRfY29sb3Jbb2JqLmNvbG9yXX0gaWQ9JHsrb2JqLmR0fVwiPlxuICAgICAgICAgICA8cCBjbGFzcz1cInRvZG9fdGV4dFwiPiAke29iai50ZXh0fSA8L3A+XG4gICAgICAgICAgICA8cD4gJHtuZXcgRGF0ZShvYmouZHQpLmdldERhdGUoKX0vICR7bmV3IERhdGUob2JqLmR0KS5nZXRNb250aCgpfSAvICR7b2JqLmRsfTwvcD5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zIG1kLWRlbGV0ZVwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIGApXG59XG5cbi8vINC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0YPQtNCw0LvQtdC90LjRjyDQtNC10LvQsFxuXG5cbi8vINC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQtNC10LvQsFxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL2NvZGUuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBIiwic291cmNlUm9vdCI6IiJ9