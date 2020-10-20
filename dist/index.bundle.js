/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Todo.ts":
/*!********************!*\
  !*** ./js/Todo.ts ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var Todo = /** @class */ (function () {
    /*
        priority - важность дела
        text - контент, содержимое
        dt -  дата создания дела
        dl - deadline
     */
    function Todo(priority, text, dl) {
        this.priority = priority;
        this.text = text;
        this.dt = Date.now();
        this.dl = dl;
    }
    return Todo;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./js/code.ts":
/*!********************!*\
  !*** ./js/code.ts ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./js/Todo.ts");
 // чтобы было больше выдачи ошибок и проверки кода и работали всякие новые фишки
 // импортируем класс нашего дела
var important_color = [
    "has-background-danger has-text-white is-size-3",
    "has-background-warning has-text-black is-size-3",
    "has-background-link has-text-white is-size-3",
]; // массив prioritet - насколько дела могут быть важными / неважными
var field = (document.querySelector(".input"));
var select = (document.querySelector("#prioritet"));
var date_picker = (document.getElementById("date_picker"));
var button_plus = (document.querySelector(".button_plus"));
var deals = document.querySelector("#deals");
/*
Функция добавления дела, котора вызвает функцию отрисовки
и добавляет дело в LocalStorage
И не забывает обнулять значения
 */
function addTask() {
    var content = field.value;
    if (content === "" || date_picker.value === "") {
        return;
    }
    var todo = new _Todo__WEBPACK_IMPORTED_MODULE_0__.default(parseInt(select.value), content, date_picker.value);
    var todo_to_JSON = JSON.stringify(todo);
    console.table(todo);
    localStorage.setItem(String(+todo.dt), todo_to_JSON);
    GenerateDom(todo);
    field.value = "";
}
// назначение листенеров на нашу кнопку
button_plus.onclick = addTask;
document.addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
        addTask();
    }
});
// функция отрисовки нашего приложения, когда оно включается
//данные берутся из localStorage
function draw_on_load() {
    // эта функция сразу вызовется
    // потом ее переменные вывезет GC
    for (var i = 0; i < localStorage.length; i++) {
        var lk_key = localStorage.key(i); // key по индексу получить значение
        var content = localStorage.getItem(lk_key); // по ключу получаем значение
        var todo = JSON.parse(content); // parse - метод расконсервации
        GenerateDom(todo);
    }
}
draw_on_load();
/*
Универсальная функция отрисовки, которая у нас вставляет todo в DOM
 */
function GenerateDom(obj) {
    var priority = obj.priority, text = obj.text, dt = obj.dt, dl = obj.dl;
    deals.insertAdjacentHTML("afterbegin", "\n        <div class=\"wrap_task " + important_color[priority - 1] + "\" id=\"" + dt + "\">\n           <p class=\"todo_text\"> " + text + " </p>\n            <p> " + new Date(dt).getDate() + "/" + new Date(obj.dt).getMonth() + " / " + dl + "</p>\n             <i class=\"material-icons md-delete\"></i>\n            </div>\n    ");
    deleteItem();
}
// обработчики удаления дела
// todo удаление дела
deleteItem();
function deleteItem() {
    var delete_icons = document.getElementsByClassName("md-delete");
    var delete_map = Array.from(delete_icons);
    delete_map.map(function (el) {
        el.onclick = function () {
            var wrap_task = el.parentNode;
            wrap_task.style.display = "none";
            localStorage.removeItem(wrap_task.id);
        };
    });
}


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
/******/ 	__webpack_require__("./js/code.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL2pzL1RvZG8udHMiLCJ3ZWJwYWNrOi8vdG9kby8uL2pzL2NvZGUudHMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBUb2RvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICAgIHByaW9yaXR5IC0g0LLQsNC20L3QvtGB0YLRjCDQtNC10LvQsFxuICAgICAgICB0ZXh0IC0g0LrQvtC90YLQtdC90YIsINGB0L7QtNC10YDQttC40LzQvtC1XG4gICAgICAgIGR0IC0gINC00LDRgtCwINGB0L7Qt9C00LDQvdC40Y8g0LTQtdC70LBcbiAgICAgICAgZGwgLSBkZWFkbGluZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFRvZG8ocHJpb3JpdHksIHRleHQsIGRsKSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5kdCA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuZGwgPSBkbDtcbiAgICB9XG4gICAgcmV0dXJuIFRvZG87XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsIlwidXNlIHN0cmljdFwiOyAvLyDRh9GC0L7QsdGLINCx0YvQu9C+INCx0L7Qu9GM0YjQtSDQstGL0LTQsNGH0Lgg0L7RiNC40LHQvtC6INC4INC/0YDQvtCy0LXRgNC60Lgg0LrQvtC00LAg0Lgg0YDQsNCx0L7RgtCw0LvQuCDQstGB0Y/QutC40LUg0L3QvtCy0YvQtSDRhNC40YjQutC4XG5pbXBvcnQgVG9kbyBmcm9tIFwiLi9Ub2RvXCI7IC8vINC40LzQv9C+0YDRgtC40YDRg9C10Lwg0LrQu9Cw0YHRgSDQvdCw0YjQtdCz0L4g0LTQtdC70LBcbnZhciBpbXBvcnRhbnRfY29sb3IgPSBbXG4gICAgXCJoYXMtYmFja2dyb3VuZC1kYW5nZXIgaGFzLXRleHQtd2hpdGUgaXMtc2l6ZS0zXCIsXG4gICAgXCJoYXMtYmFja2dyb3VuZC13YXJuaW5nIGhhcy10ZXh0LWJsYWNrIGlzLXNpemUtM1wiLFxuICAgIFwiaGFzLWJhY2tncm91bmQtbGluayBoYXMtdGV4dC13aGl0ZSBpcy1zaXplLTNcIixcbl07IC8vINC80LDRgdGB0LjQsiBwcmlvcml0ZXQgLSDQvdCw0YHQutC+0LvRjNC60L4g0LTQtdC70LAg0LzQvtCz0YPRgiDQsdGL0YLRjCDQstCw0LbQvdGL0LzQuCAvINC90LXQstCw0LbQvdGL0LzQuFxudmFyIGZpZWxkID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRcIikpO1xudmFyIHNlbGVjdCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXRldFwiKSk7XG52YXIgZGF0ZV9waWNrZXIgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlX3BpY2tlclwiKSk7XG52YXIgYnV0dG9uX3BsdXMgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25fcGx1c1wiKSk7XG52YXIgZGVhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlYWxzXCIpO1xuLypcbtCk0YPQvdC60YbQuNGPINC00L7QsdCw0LLQu9C10L3QuNGPINC00LXQu9CwLCDQutC+0YLQvtGA0LAg0LLRi9C30LLQsNC10YIg0YTRg9C90LrRhtC40Y4g0L7RgtGA0LjRgdC+0LLQutC4XG7QuCDQtNC+0LHQsNCy0LvRj9C10YIg0LTQtdC70L4g0LIgTG9jYWxTdG9yYWdlXG7QmCDQvdC1INC30LDQsdGL0LLQsNC10YIg0L7QsdC90YPQu9GP0YLRjCDQt9C90LDRh9C10L3QuNGPXG4gKi9cbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBmaWVsZC52YWx1ZTtcbiAgICBpZiAoY29udGVudCA9PT0gXCJcIiB8fCBkYXRlX3BpY2tlci52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0b2RvID0gbmV3IFRvZG8ocGFyc2VJbnQoc2VsZWN0LnZhbHVlKSwgY29udGVudCwgZGF0ZV9waWNrZXIudmFsdWUpO1xuICAgIHZhciB0b2RvX3RvX0pTT04gPSBKU09OLnN0cmluZ2lmeSh0b2RvKTtcbiAgICBjb25zb2xlLnRhYmxlKHRvZG8pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFN0cmluZygrdG9kby5kdCksIHRvZG9fdG9fSlNPTik7XG4gICAgR2VuZXJhdGVEb20odG9kbyk7XG4gICAgZmllbGQudmFsdWUgPSBcIlwiO1xufVxuLy8g0L3QsNC30L3QsNGH0LXQvdC40LUg0LvQuNGB0YLQtdC90LXRgNC+0LIg0L3QsCDQvdCw0YjRgyDQutC90L7Qv9C60YNcbmJ1dHRvbl9wbHVzLm9uY2xpY2sgPSBhZGRUYXNrO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGFkZFRhc2soKTtcbiAgICB9XG59KTtcbi8vINGE0YPQvdC60YbQuNGPINC+0YLRgNC40YHQvtCy0LrQuCDQvdCw0YjQtdCz0L4g0L/RgNC40LvQvtC20LXQvdC40Y8sINC60L7Qs9C00LAg0L7QvdC+INCy0LrQu9GO0YfQsNC10YLRgdGPXG4vL9C00LDQvdC90YvQtSDQsdC10YDRg9GC0YHRjyDQuNC3IGxvY2FsU3RvcmFnZVxuZnVuY3Rpb24gZHJhd19vbl9sb2FkKCkge1xuICAgIC8vINGN0YLQsCDRhNGD0L3QutGG0LjRjyDRgdGA0LDQt9GDINCy0YvQt9C+0LLQtdGC0YHRj1xuICAgIC8vINC/0L7RgtC+0Lwg0LXQtSDQv9C10YDQtdC80LXQvdC90YvQtSDQstGL0LLQtdC30LXRgiBHQ1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBsa19rZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpOyAvLyBrZXkg0L/QviDQuNC90LTQtdC60YHRgyDQv9C+0LvRg9GH0LjRgtGMINC30L3QsNGH0LXQvdC40LVcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsa19rZXkpOyAvLyDQv9C+INC60LvRjtGH0YMg0L/QvtC70YPRh9Cw0LXQvCDQt9C90LDRh9C10L3QuNC1XG4gICAgICAgIHZhciB0b2RvID0gSlNPTi5wYXJzZShjb250ZW50KTsgLy8gcGFyc2UgLSDQvNC10YLQvtC0INGA0LDRgdC60L7QvdGB0LXRgNCy0LDRhtC40LhcbiAgICAgICAgR2VuZXJhdGVEb20odG9kbyk7XG4gICAgfVxufVxuZHJhd19vbl9sb2FkKCk7XG4vKlxu0KPQvdC40LLQtdGA0YHQsNC70YzQvdCw0Y8g0YTRg9C90LrRhtC40Y8g0L7RgtGA0LjRgdC+0LLQutC4LCDQutC+0YLQvtGA0LDRjyDRgyDQvdCw0YEg0LLRgdGC0LDQstC70Y/QtdGCIHRvZG8g0LIgRE9NXG4gKi9cbmZ1bmN0aW9uIEdlbmVyYXRlRG9tKG9iaikge1xuICAgIHZhciBwcmlvcml0eSA9IG9iai5wcmlvcml0eSwgdGV4dCA9IG9iai50ZXh0LCBkdCA9IG9iai5kdCwgZGwgPSBvYmouZGw7XG4gICAgZGVhbHMuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBcIlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid3JhcF90YXNrIFwiICsgaW1wb3J0YW50X2NvbG9yW3ByaW9yaXR5IC0gMV0gKyBcIlxcXCIgaWQ9XFxcIlwiICsgZHQgKyBcIlxcXCI+XFxuICAgICAgICAgICA8cCBjbGFzcz1cXFwidG9kb190ZXh0XFxcIj4gXCIgKyB0ZXh0ICsgXCIgPC9wPlxcbiAgICAgICAgICAgIDxwPiBcIiArIG5ldyBEYXRlKGR0KS5nZXREYXRlKCkgKyBcIi9cIiArIG5ldyBEYXRlKG9iai5kdCkuZ2V0TW9udGgoKSArIFwiIC8gXCIgKyBkbCArIFwiPC9wPlxcbiAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnMgbWQtZGVsZXRlXFxcIj48L2k+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgIFwiKTtcbiAgICBkZWxldGVJdGVtKCk7XG59XG4vLyDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INGD0LTQsNC70LXQvdC40Y8g0LTQtdC70LBcbi8vIHRvZG8g0YPQtNCw0LvQtdC90LjQtSDQtNC10LvQsFxuZGVsZXRlSXRlbSgpO1xuZnVuY3Rpb24gZGVsZXRlSXRlbSgpIHtcbiAgICB2YXIgZGVsZXRlX2ljb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1kLWRlbGV0ZVwiKTtcbiAgICB2YXIgZGVsZXRlX21hcCA9IEFycmF5LmZyb20oZGVsZXRlX2ljb25zKTtcbiAgICBkZWxldGVfbWFwLm1hcChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgZWwub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB3cmFwX3Rhc2sgPSBlbC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgd3JhcF90YXNrLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHdyYXBfdGFzay5pZCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL2NvZGUudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0EiLCJzb3VyY2VSb290IjoiIn0=