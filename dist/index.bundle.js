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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL2pzL1RvZG8udHMiLCJ3ZWJwYWNrOi8vdG9kby8uL2pzL2NvZGUudHMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBUb2RvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLypcclxuICAgICAgICBwcmlvcml0eSAtINCy0LDQttC90L7RgdGC0Ywg0LTQtdC70LBcclxuICAgICAgICB0ZXh0IC0g0LrQvtC90YLQtdC90YIsINGB0L7QtNC10YDQttC40LzQvtC1XHJcbiAgICAgICAgZHQgLSAg0LTQsNGC0LAg0YHQvtC30LTQsNC90LjRjyDQtNC10LvQsFxyXG4gICAgICAgIGRsIC0gZGVhZGxpbmVcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gVG9kbyhwcmlvcml0eSwgdGV4dCwgZGwpIHtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmR0ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB0aGlzLmRsID0gZGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gVG9kbztcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgVG9kbztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7IC8vINGH0YLQvtCx0Ysg0LHRi9C70L4g0LHQvtC70YzRiNC1INCy0YvQtNCw0YfQuCDQvtGI0LjQsdC+0Log0Lgg0L/RgNC+0LLQtdGA0LrQuCDQutC+0LTQsCDQuCDRgNCw0LHQvtGC0LDQu9C4INCy0YHRj9C60LjQtSDQvdC+0LLRi9C1INGE0LjRiNC60LhcclxuaW1wb3J0IFRvZG8gZnJvbSBcIi4vVG9kb1wiOyAvLyDQuNC80L/QvtGA0YLQuNGA0YPQtdC8INC60LvQsNGB0YEg0L3QsNGI0LXQs9C+INC00LXQu9CwXHJcbnZhciBpbXBvcnRhbnRfY29sb3IgPSBbXHJcbiAgICBcImhhcy1iYWNrZ3JvdW5kLWRhbmdlciBoYXMtdGV4dC13aGl0ZSBpcy1zaXplLTNcIixcclxuICAgIFwiaGFzLWJhY2tncm91bmQtd2FybmluZyBoYXMtdGV4dC1ibGFjayBpcy1zaXplLTNcIixcclxuICAgIFwiaGFzLWJhY2tncm91bmQtbGluayBoYXMtdGV4dC13aGl0ZSBpcy1zaXplLTNcIixcclxuXTsgLy8g0LzQsNGB0YHQuNCyIHByaW9yaXRldCAtINC90LDRgdC60L7Qu9GM0LrQviDQtNC10LvQsCDQvNC+0LPRg9GCINCx0YvRgtGMINCy0LDQttC90YvQvNC4IC8g0L3QtdCy0LDQttC90YvQvNC4XHJcbnZhciBmaWVsZCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0XCIpKTtcclxudmFyIHNlbGVjdCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXRldFwiKSk7XHJcbnZhciBkYXRlX3BpY2tlciA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVfcGlja2VyXCIpKTtcclxudmFyIGJ1dHRvbl9wbHVzID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uX3BsdXNcIikpO1xyXG52YXIgZGVhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RlYWxzXCIpO1xyXG4vKlxyXG7QpNGD0L3QutGG0LjRjyDQtNC+0LHQsNCy0LvQtdC90LjRjyDQtNC10LvQsCwg0LrQvtGC0L7RgNCwINCy0YvQt9Cy0LDQtdGCINGE0YPQvdC60YbQuNGOINC+0YLRgNC40YHQvtCy0LrQuFxyXG7QuCDQtNC+0LHQsNCy0LvRj9C10YIg0LTQtdC70L4g0LIgTG9jYWxTdG9yYWdlXHJcbtCYINC90LUg0LfQsNCx0YvQstCw0LXRgiDQvtCx0L3Rg9C70Y/RgtGMINC30L3QsNGH0LXQvdC40Y9cclxuICovXHJcbmZ1bmN0aW9uIGFkZFRhc2soKSB7XHJcbiAgICB2YXIgY29udGVudCA9IGZpZWxkLnZhbHVlO1xyXG4gICAgaWYgKGNvbnRlbnQgPT09IFwiXCIgfHwgZGF0ZV9waWNrZXIudmFsdWUgPT09IFwiXCIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgdG9kbyA9IG5ldyBUb2RvKHBhcnNlSW50KHNlbGVjdC52YWx1ZSksIGNvbnRlbnQsIGRhdGVfcGlja2VyLnZhbHVlKTtcclxuICAgIHZhciB0b2RvX3RvX0pTT04gPSBKU09OLnN0cmluZ2lmeSh0b2RvKTtcclxuICAgIGNvbnNvbGUudGFibGUodG9kbyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdHJpbmcoK3RvZG8uZHQpLCB0b2RvX3RvX0pTT04pO1xyXG4gICAgR2VuZXJhdGVEb20odG9kbyk7XHJcbiAgICBmaWVsZC52YWx1ZSA9IFwiXCI7XHJcbn1cclxuLy8g0L3QsNC30L3QsNGH0LXQvdC40LUg0LvQuNGB0YLQtdC90LXRgNC+0LIg0L3QsCDQvdCw0YjRgyDQutC90L7Qv9C60YNcclxuYnV0dG9uX3BsdXMub25jbGljayA9IGFkZFRhc2s7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgYWRkVGFzaygpO1xyXG4gICAgfVxyXG59KTtcclxuLy8g0YTRg9C90LrRhtC40Y8g0L7RgtGA0LjRgdC+0LLQutC4INC90LDRiNC10LPQviDQv9GA0LjQu9C+0LbQtdC90LjRjywg0LrQvtCz0LTQsCDQvtC90L4g0LLQutC70Y7Rh9Cw0LXRgtGB0Y9cclxuLy/QtNCw0L3QvdGL0LUg0LHQtdGA0YPRgtGB0Y8g0LjQtyBsb2NhbFN0b3JhZ2VcclxuZnVuY3Rpb24gZHJhd19vbl9sb2FkKCkge1xyXG4gICAgLy8g0Y3RgtCwINGE0YPQvdC60YbQuNGPINGB0YDQsNC30YMg0LLRi9C30L7QstC10YLRgdGPXHJcbiAgICAvLyDQv9C+0YLQvtC8INC10LUg0L/QtdGA0LXQvNC10L3QvdGL0LUg0LLRi9Cy0LXQt9C10YIgR0NcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGxrX2tleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7IC8vIGtleSDQv9C+INC40L3QtNC10LrRgdGDINC/0L7Qu9GD0YfQuNGC0Ywg0LfQvdCw0YfQtdC90LjQtVxyXG4gICAgICAgIHZhciBjb250ZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obGtfa2V5KTsgLy8g0L/QviDQutC70Y7Rh9GDINC/0L7Qu9GD0YfQsNC10Lwg0LfQvdCw0YfQtdC90LjQtVxyXG4gICAgICAgIHZhciB0b2RvID0gSlNPTi5wYXJzZShjb250ZW50KTsgLy8gcGFyc2UgLSDQvNC10YLQvtC0INGA0LDRgdC60L7QvdGB0LXRgNCy0LDRhtC40LhcclxuICAgICAgICBHZW5lcmF0ZURvbSh0b2RvKTtcclxuICAgIH1cclxufVxyXG5kcmF3X29uX2xvYWQoKTtcclxuLypcclxu0KPQvdC40LLQtdGA0YHQsNC70YzQvdCw0Y8g0YTRg9C90LrRhtC40Y8g0L7RgtGA0LjRgdC+0LLQutC4LCDQutC+0YLQvtGA0LDRjyDRgyDQvdCw0YEg0LLRgdGC0LDQstC70Y/QtdGCIHRvZG8g0LIgRE9NXHJcbiAqL1xyXG5mdW5jdGlvbiBHZW5lcmF0ZURvbShvYmopIHtcclxuICAgIHZhciBwcmlvcml0eSA9IG9iai5wcmlvcml0eSwgdGV4dCA9IG9iai50ZXh0LCBkdCA9IG9iai5kdCwgZGwgPSBvYmouZGw7XHJcbiAgICBkZWFscy5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIFwiXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3cmFwX3Rhc2sgXCIgKyBpbXBvcnRhbnRfY29sb3JbcHJpb3JpdHkgLSAxXSArIFwiXFxcIiBpZD1cXFwiXCIgKyBkdCArIFwiXFxcIj5cXG4gICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0b2RvX3RleHRcXFwiPiBcIiArIHRleHQgKyBcIiA8L3A+XFxuICAgICAgICAgICAgPHA+IFwiICsgbmV3IERhdGUoZHQpLmdldERhdGUoKSArIFwiL1wiICsgbmV3IERhdGUob2JqLmR0KS5nZXRNb250aCgpICsgXCIgLyBcIiArIGRsICsgXCI8L3A+XFxuICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29ucyBtZC1kZWxldGVcXFwiPjwvaT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgXCIpO1xyXG4gICAgZGVsZXRlSXRlbSgpO1xyXG59XHJcbi8vINC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0YPQtNCw0LvQtdC90LjRjyDQtNC10LvQsFxyXG4vLyB0b2RvINGD0LTQsNC70LXQvdC40LUg0LTQtdC70LBcclxuZGVsZXRlSXRlbSgpO1xyXG5mdW5jdGlvbiBkZWxldGVJdGVtKCkge1xyXG4gICAgdmFyIGRlbGV0ZV9pY29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtZC1kZWxldGVcIik7XHJcbiAgICB2YXIgZGVsZXRlX21hcCA9IEFycmF5LmZyb20oZGVsZXRlX2ljb25zKTtcclxuICAgIGRlbGV0ZV9tYXAubWFwKGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgIGVsLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB3cmFwX3Rhc2sgPSBlbC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICB3cmFwX3Rhc2suc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh3cmFwX3Rhc2suaWQpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL2pzL2NvZGUudHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0EiLCJzb3VyY2VSb290IjoiIn0=