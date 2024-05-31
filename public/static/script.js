// Так как виджетов может быть несколько на странице, предопределим объект будущих виджетов.
if (!WdgMoyklass) {
    var WdgMoyklass = {};
    var loader = '<div class="moyklassLoader"><img src="https://app.moyklass.com/mk-logo.jpg" style="opacity: 0;"></div>';
    var miniLoader = '<div class="loader" style="margin: 0 auto 20px;"></div>';
    var LANG_RUS = {
        "days": ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        "daysShort": ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        "daysMin": ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        "months": ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        "monthsShort": ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
        "today": "Сегодня",
        "clear": "Очистить"
    };
    var LANG_ENG = {
        "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "daysShort": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        "daysMin": ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        "monthsShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        "today": "Today",
        "clear": "Clear"
    };

    const roistatWidgetCode = ``;

    if (roistatWidgetCode.length) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.textContent = roistatWidgetCode;

        const el = document.body.appendChild(script);
        el.insertAdjacentHTML('beforebegin', '<!-- Roistat Counter Start -->');
        el.insertAdjacentHTML('afterend', '<!-- Roistat Counter End -->');
    }

    // MaskedInput from here http://angelwatt.com/coding/masked_input.php
    (function (a) { a.MaskedInput = function (f) { if (!f || !f.elm || !f.format) { return null } if (!(this instanceof a.MaskedInput)) { return new a.MaskedInput(f) } var o = this, d = f.elm, s = f.format, i = f.allowed || "0123456789", h = f.allowedfx || function () { return true }, p = f.separator || "/:-", n = f.typeon || "_YMDhms", c = f.onbadkey || function () { }, q = f.onfilled || function () { }, w = f.badkeywait || 0, A = f.hasOwnProperty("preserve") ? !!f.preserve : true, l = true, y = false, t = s, j = (function () { if (window.addEventListener) { return function (E, C, D, B) { E.addEventListener(C, D, (B === undefined) ? false : B) } } if (window.attachEvent) { return function (D, B, C) { D.attachEvent("on" + B, C) } } return function (D, B, C) { D["on" + B] = C } }()), u = function () { for (var B = d.value.length - 1; B >= 0; B--) { for (var D = 0, C = n.length; D < C; D++) { if (d.value[B] === n[D]) { return false } } } return true }, x = function (C) { try { C.focus(); if (C.selectionStart >= 0) { return C.selectionStart } if (document.selection) { var B = document.selection.createRange(); return -B.moveStart("character", -C.value.length) } return -1 } catch (D) { return -1 } }, b = function (C, E) { try { if (C.selectionStart) { C.focus(); C.setSelectionRange(E, E) } else { if (C.createTextRange) { var B = C.createTextRange(); B.move("character", E); B.select() } } } catch (D) { return false } return true }, m = function (D) { D = D || window.event; var C = "", E = D.which, B = D.type; if (E === undefined || E === null) { E = D.keyCode } if (E === undefined || E === null) { return "" } switch (E) { case 8: C = "bksp"; break; case 46: C = (B === "keydown") ? "del" : "."; break; case 16: C = "shift"; break; case 0: case 9: case 13: C = "etc"; break; case 37: case 38: case 39: case 40: C = (!D.shiftKey && (D.charCode !== 39 && D.charCode !== undefined)) ? "etc" : String.fromCharCode(E); break; default: C = String.fromCharCode(E); break }return C }, v = function (B, C) { if (B.preventDefault) { B.preventDefault() } B.returnValue = C || false }, k = function (B) { var D = x(d), F = d.value, E = "", C = true; switch (C) { case (i.indexOf(B) !== -1): D = D + 1; if (D > s.length) { return false } while (p.indexOf(F.charAt(D - 1)) !== -1 && D <= s.length) { D = D + 1 } if (!h(o, B, D)) { c(B); return false } E = F.substr(0, D - 1) + B + F.substr(D); if (i.indexOf(F.charAt(D)) === -1 && n.indexOf(F.charAt(D)) === -1) { D = D + 1 } break; case (B === "bksp"): D = D - 1; if (D < 0) { return false } while (i.indexOf(F.charAt(D)) === -1 && n.indexOf(F.charAt(D)) === -1 && D > 1) { D = D - 1 } E = F.substr(0, D) + s.substr(D, 1) + F.substr(D + 1); break; case (B === "del"): if (D >= F.length) { return false } while (p.indexOf(F.charAt(D)) !== -1 && F.charAt(D) !== "") { D = D + 1 } E = F.substr(0, D) + s.substr(D, 1) + F.substr(D + 1); D = D + 1; break; case (B === "etc"): return true; default: return false }d.value = ""; d.value = E; b(d, D); return false }, g = function (B) { if (i.indexOf(B) === -1 && B !== "bksp" && B !== "del" && B !== "etc") { var C = x(d); y = true; c(B); setTimeout(function () { y = false; b(d, C) }, w); return false } return true }, z = function (C) { if (!l) { return true } C = C || event; if (y) { v(C); return false } var B = m(C); if ((C.metaKey || C.ctrlKey) && (B === "X" || B === "V")) { v(C); return false } if (C.metaKey || C.ctrlKey) { return true } if (d.value === "") { d.value = s; b(d, 0) } if (B === "bksp" || B === "del") { k(B); v(C); return false } return true }, e = function (C) { if (!l) { return true } C = C || event; if (y) { v(C); return false } var B = m(C); if (B === "etc" || C.metaKey || C.ctrlKey || C.altKey) { return true } if (B !== "bksp" && B !== "del" && B !== "shift") { if (!g(B)) { v(C); return false } if (k(B)) { if (u()) { q(o, x(d)) } v(C, true); return true } if (u()) { q(o, x(d)) } v(C); return false } return false }, r = function () { if (!d.tagName || (d.tagName.toUpperCase() !== "INPUT" && d.tagName.toUpperCase() !== "TEXTAREA")) { return null } o.elm = d; if (!A || d.value === "") { d.value = s } j(d, "keydown", function (B) { z(B) }); j(d, "keypress", function (B) { e(B) }); j(d, "focus", function () { t = d.value }); j(d, "blur", function () { if (d.value !== t && d.onchange) { d.onchange() } }); return o }; o.resetField = function () { d.value = s }; o.setAllowed = function (B) { i = B; o.resetField() }; o.setCursorPos = function (B) { b(d, B) }; o.setFormat = function (B) { s = B; o.resetField() }; o.setSeparator = function (B) { p = B; o.resetField() }; o.setTypeon = function (B) { n = B; o.resetField() }; o.setEnabled = function (B) { l = B }; return r() } }(window));

    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

    // Функция отсюда https://stackoverflow.com/questions/4928586/get-caret-position-in-html-input
    function getCaretPos(input) {
        // Internet Explorer Caret Position (TextArea)
        if (document.selection && document.selection.createRange) {
            var range = document.selection.createRange();
            var bookmark = range.getBookmark();
            var caret_pos = bookmark.charCodeAt(2) - 2;
        } else {
            // Firefox Caret Position (TextArea)
            if (input.setSelectionRange)
                var caret_pos = input.selectionStart;
        }

        return caret_pos;
    }

    function isValidDate(year, month, day) {
        var d = new Date(year, month, day);
        if (d.getFullYear() == year && d.getMonth() == month && d.getDate() == day) {
            return true;
        }
        return false;
    }

    function vkAutoSizeStart() {
        if (typeof vkBridge != 'undefined' && vkBridge.supports("VKWebAppResizeWindow") && typeof vkAppAutosize != 'undefined' && !isMobile) {
            vkAppAutosize('WdgMoyklassVkAppWrapper');
        }
    }

    // Функция для onkeypress в input типа number
    // Оставляет возможность вводить только один "-" и [0-9]
    function simpleNumbersOnly(e) {
        if (e?.key === 'e' || e?.key === '+' || e?.key === '.') {
            e.preventDefault();
        }
        if (e.target.value.length == 0 && e?.key === '-') {
            e.target.value = '';
        }
        if (e.target.value.length > 0 && e?.key === '-') {
            e.preventDefault();
        }
    }

    if (typeof lastClickPositionY === 'undefined') {
        var lastClickPositionY = 0;
    }

    document.onclick = function (event) {
        lastClickPositionY = event.pageY;
    };

    // добавляет стили виджета в <head> сайта
    function addStyles(styleUrl) {
        //добавляем общие стили виджета
        style = document.createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = styleUrl;

        document.head.appendChild(style);

        return style;
    }

    function addScript(scriptUrl) {
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.type = 'text/javascript';

        document.body.appendChild(script);

        return script;
    }

    function getDeviceWidth() {
        return (window.innerWidth > 0) ? window.innerWidth : screen.width;
    }

    // для кросс-доменного запроса создаем один из ниже указанных объектов
    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

    XHR.prototype.init = function (options, callbackSuccess, callbackError) {
        // запрос на настройки виджета
        if (getDeviceWidth() < 590) {
            options.queryString += '&is-mobile=1';
        }

        this.open(options.method, options.queryString, true);

        if (options.headers && Array.isArray(options.headers)) {
            for (var i = 0; i < options.headers.length; i++) {
                this.setRequestHeader(options.headers[i][0], options.headers[i][1]);
            }
        }

        // onprogress необходим для IE9
        this.onprogress = function () { };

        // событие отслеживает, что запрос был успешно завершён
        this.onload = function () {
            callbackSuccess(this);
        }

        this.onerror = function () {
            callbackError(this);
            return false;
        }

        // отсылаем запрос
        var data = options.formData ? options.formData : null;
        this.send(data);
    }

    var scrollToTarget = function (target, containerEl) {
        // Moved up here for readability:
        var isElement = target && target.nodeType === 1,
            isNumber = Object.prototype.toString.call(target) === '[object Number]';

        if (isElement) {
            containerEl.scrollTop = target.offsetTop - 10;
        } else if (isNumber) {
            containerEl.scrollTop = target;
        } else if (target === 'bottom') {
            containerEl.scrollTop = containerEl.scrollHeight - containerEl.offsetHeight;
        } else if (target === 'top') {
            containerEl.scrollTop = 0;
        }
    };

    var openPopup = null;

    function openPopupById(id) {
        if (openPopup && openPopup != document.getElementById(id)) {
            openPopup.classList.remove("show");
            openPopup = null;
        }
        openPopup = document.getElementById(id);
        openPopup.classList.toggle("show");
    }

    document.addEventListener('click', function (e) {
        var parent = e.target.parentElement;
        var its = e.target;
        var children = null;
        Array.prototype.forEach.call(e.target.children, function (el) {
            if (el == openPopup) children = el;
        });

        if (!!openPopup && parent != openPopup && its != openPopup && children != openPopup) {
            openPopup.classList.remove("show");
            openPopup = null;
        }
    });
}
// Определим новый виджет менеджер в переменную widgetkey
// временно добавил key, чтобы не конфликтовать со старыми
WdgMoyklass["01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx"] = {
    isInit: false,

    init(oldName) {
        this.id = '90671';
        this.apiUrl = 'https://app.moyklass.com/api/site/widget';
        this.type = 'combo_schedule_calendar';
        this.orig_type = 'combo_schedule_calendar';
        this.success_url = '';
        this.font = 'Open Sans';
        this.scroll = 'true';
        this.daysCountIndivid = '21';
        this.daysCount = '90';
        this.key = '01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx';
        this.lang = 'ru';
        this.metrics = {
            yandex: ''
        };
        var stringFields = "[{\"id\":\"name\",\"name\":\"Имя\",\"checked\":true,\"weight\":10,\"required\":true,\"type\":\"string\"},{\"id\":\"phone\",\"name\":\"Телефон\",\"checked\":true,\"weight\":9,\"required\":true,\"type\":\"phone\"},{\"id\":\"email\",\"name\":\"Почта\",\"checked\":true,\"weight\":8,\"required\":true,\"type\":\"email\"}]";

        this.fields = JSON.parse(stringFields);
        this.oldName = oldName || null;

        this.styleColor = '      #SiteWidgetMoyklass90671.WdgMoyklassContent,      .oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx.WdgMoyklassContent {        border-radius: 0px;        background-color: transparent;        padding: 10px;      }      #SiteWidgetMoyklass90671Modal .WdgMoyklassModalItem-content {        border-radius: 0px;      }      #SiteWidgetMoyklass90671Modal .WdgMoyklassModalItem-content .WdgMoyklassclose {        width: 30px;        top: 4px;        right: 7px;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent,      WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx {        background-color: transparent;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-group,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-group {        background-color: rgba(245, 245, 245, 1);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx {        font-family: Open Sans, Arial, sans-serif;        font-size: 14px;      }      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal {        font-family: Open Sans, Arial, sans-serif;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-color,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-color,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .wdgMoyklass-color {        color: rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-BGcolor,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-BGcolor,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .wdgMoyklass-BGcolor {        background-color: rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-h1,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-h1 {        font-size: 28px;        line-height: 30px;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-headColor,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-headColor,      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-h1,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-h1 {        color: #000000;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-h2,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-h2 {        font-size: 20px;        line-height: 22px;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-h3,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-h3,      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklassForm-item,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklassForm-item {        font-size: 16px;        line-height: 18px;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-price,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-price {        font-size: 18px;        line-height: 20px;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-price_comment,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-price_comment {        font-size: 12px;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-btn,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-btn,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .wdgMoyklass-btn {        background-color: rgb(76, 175, 80);        border-radius: 0px;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .btnBorderRadius,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .btnBorderRadius {        border-radius: 0px;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .btnColor,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .btnColor,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .btnColor {        color: rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-btn:hover,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .wdgMoyklass-btn:hover,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-btn:hover,      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-btn:focus,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .wdgMoyklass-btn:focus,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-btn:focus {        background-color: rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .radio:not(checked) + label:after,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .radio:not(checked) + label:after,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .radio:not(checked) + label:after {        background-color: rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-course .wdgMoyklass-course-title,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-course .wdgMoyklass-course-title {        color: #000000;        border-bottom-color: rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .combo-schedule_calendar-filter,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .combo-schedule_calendar-filter {        border-bottom-color: rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklassForm-lessons-item .colorTextSchema,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklassForm-lessons-item .colorTextSchema,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .wdgMoyklassForm-lessons-item .colorTextSchema {        color: rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklassForm-lessons-item.active,      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklassForm-lessons-item.active .colorTextSchema,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklassForm-lessons-item.active,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklassForm-lessons-item.active .colorTextSchema,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .wdgMoyklassForm-lessons-item.active,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .wdgMoyklassForm-lessons-item.active .colorTextSchema {        background-color: rgb(76, 175, 80);        color: #ffffff;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .FormLessonsContent-count span,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .FormLessonsContent-count span,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .FormLessonsContent-count span {        color: rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklassForm-teachers-item .colorTextSchema,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklassForm-teachers-item .colorTextSchema,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .wdgMoyklassForm-teachers-item .colorTextSchema {        color: rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklassForm-teachers-item.active,      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklassForm-teachers-time-item.active,      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklassForm-duration-time-item.active,      #SiteWidgetMoyklass90671.WdgMoyklassContent .hello-week__day.is-active.active_date,      #SiteWidgetMoyklass90671.WdgMoyklassContent .hello-week__day.is-selected,      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklassForm-teachers-item.active .colorTextSchema,      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklassForm-duration-time-item.active .colorTextSchema,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklassForm-teachers-item.active,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklassForm-teachers-time-item.active,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklassForm-teachers-item.active .colorTextSchema,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .wdgMoyklassForm-teachers-item.active,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .wdgMoyklassForm-duration-time-item.active,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .wdgMoyklassForm-duration-item.active .colorTextSchema,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .wdgMoyklassForm-teachers-time-item.active,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .hello-week__day.is-active.active_date,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .hello-week__day.is-selected,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .wdgMoyklassForm-teachers-time-item.active .colorTextSchema,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .wdgMoyklassForm-teachers-item.active .colorTextSchema {        background-color: rgb(76, 175, 80);        color: #ffffff;      }      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .hello-week__day.is-active.is-today,      #SiteWidgetMoyklass90671.WdgMoyklassContent .hello-week__day.is-active.is-today {        border: 1px solid rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent      .wdgMoyklassForm-teachers-selector {        background-color: transparent;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-scheduleLessonsMini span,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-scheduleLessonsMini span {        color:rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-scheduleLessonsMini-item,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-scheduleLessonsMini-item {        min-width: 104px;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-scheduleLessonsMini-item,      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-scheduleLessonsMini-item-empty,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-scheduleLessonsMini-item,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-scheduleLessonsMini-item-empty{        background-color: rgb(76, 175, 80);        font-size: 12px;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .wdgMoyklass-scheduleLessonsMini-item-empty,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .wdgMoyklass-scheduleLessonsMini-item-empty {        color:rgb(76, 175, 80);        font-size: 12px;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .FormLessonsContent-count i,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .FormLessonsContent-count i,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .FormLessonsContent-count i {        color:rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671 hello-week .hello-week__week__day,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx hello-week .hello-week__week__day {        color:rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671 hello-week .is-selected,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx hello-week .is-selected {        background-color: rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671 hello-week .is-today,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx hello-week .is-today {        border: 1px solid rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .loader,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .loader,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .loader {        color:rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .popup .popuptext,      #SiteWidgetMoyklass90671.WdgMoyklassContent .popup .popuptext-right,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .popup .popuptext,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .popup .popuptext-right {        border: 1px solid rgb(76, 175, 80);        color:rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .popup .popuptext::after,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .popup .popuptext::after {        border-color: rgb(76, 175, 80) transparent transparent transparent;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .popup .popuptext-right::after,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .popup .popuptext-right::after {        border-color: transparent rgb(76, 175, 80) transparent transparent;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .WdgMoyklassSchedule-submenu,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .WdgMoyklassSchedule-submenu {        border-color: rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .WdgMoyklassSchedule-submenu div.active,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .WdgMoyklassSchedule-submenu div.active {        background-color: rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .WdgMoyklassSchedule-TypeItem.success,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .WdgMoyklassSchedule-TypeItem.success {        color:rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .lesson-register-link,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .lesson-register-link {        background-color: rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .schemaActiveColor.active,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .schemaActiveColor.active,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .schemaActiveColor.active {        color: rgb(76, 175, 80);      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .schemaBorderColor,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .schemaBorderColor,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .schemaBorderColor {        border-color: rgb(76, 175, 80) !important;      }      #SiteWidgetMoyklass90671.WdgMoyklassContent .schemaBGColor,      #SiteWidgetMoyklass90671Modal.WdgMoyklassModal .schemaBGColor,      .WdgMoyklassContent.oldInit01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx .schemaBGColor {        background-color: rgb(76, 175, 80) !important;      }';
        this.initCSSColor();

        this.values = {}; // складываем значени формы
        this.reserve = {};
        this.params = {};
        this.bindPlace = 'base';
        this.isVK = ['vk_schedule', 'vk_calendar', 'vk_combo_schedule_calendar'].indexOf(this.orig_type) > -1;
        this.vkData = {
            user_id: '',
            group_id: ''
        };
        this.dynamicFormEl = true;

        if (!this.isInit) { // для совестимость отдали ссылку на данный объект, убираем повторную инициализацию
            this.setBaseElement();

            addStyles("https://app.moyklass.com/css/widgets/siteWidgets/style.css");
            // добавляем font awesome
            addStyles("https://use.fontawesome.com/releases/v5.0.10/css/all.css");
            addStyles('https://app.moyklass.com/css/widgets/icons/css/fontello.css');
            if (this.font) {
                addStyles('https://fonts.googleapis.com/css?family=Open Sans:300,400,600&subset=cyrillic');
            }

            if (this.baseElement) {
                this.load();

                if (isMobile && typeof VK != 'undefined' && document.querySelector("#WdgMoyklassVkAppWrapper")) {
                    document.querySelector("#WdgMoyklassVkAppWrapper").classList.add("mobile-view");
                }
            }
        }

        const pswp = document.getElementById('mc-pswp-root');
        if (pswp) {
            pswp.style.display = 'none'
        }
        console.log('Init ended')
    },

    showMoreF(id) {
        const desc = document.getElementById(`01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx-Teacher-info-desc-${id}`)
        const showMore = document.getElementById(`teacher-info-readmore-${id}`);

        if (desc && desc.classList.contains('teacher-desc-limited')) {
            desc.classList.remove('teacher-desc-limited');
            showMore.innerHTML = this.lang === 'ru' ? 'Свернуть...' : 'Collapse...';
        } else if (desc && !desc.classList.contains('teacher-desc-limited')) {
            desc.classList.add('teacher-desc-limited');
            showMore.innerHTML = this.lang === 'ru' ? 'Раскрыть...' : 'Expand...';
        }
    },

    selectTeacher(id) {
        const teacher = document.getElementById(`01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCxTeacher-item-${id}`);
        const info = document.getElementById(`01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx-Teacher-info-desc-${id}`);
        const avatar = document.getElementById(`01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx-Teacher-info-avatar-${id}`);
        const showMore = document.getElementById(`teacher-info-readmore-${id}`);
        const skipButton = document.getElementById('01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCxTeachers-skip-btn');

        if (showMore) {
            showMore.onclick = (event) => {
                event.stopPropagation();
                this.showMoreF(id)
            }
        }

        if (teacher.classList.contains('active')) {
            teacher.classList.remove('active');

            if (info) {
                info.classList.add('teacher-desc');
                info.classList.remove('teacher-desc-limited')
            }

            if (skipButton) {
                skipButton.classList.remove('hide');
            }

            if (showMore) {
                showMore.style.display = 'none'
                showMore.innerHTML = this.lang === 'ru' ? 'Раскрыть...' : 'Expand...';
            }

            if (avatar) {
                avatar.classList.remove('select-img')
            }

            this.values.selectedTeacherId = null;
        } else {
            teacher.classList.add('active')

            if (avatar) {
                avatar.classList.add('select-img')
            }

            if (skipButton) {
                skipButton.classList.add('hide')
            }

            if (info) {
                info.classList.remove('teacher-desc');
                info.classList.remove('teacher-desc-limited');

                if (showMore && (info.offsetHeight > 110)) {
                    showMore.style.display = 'block'
                    showMore.innerHTML = this.lang === 'ru' ? 'Раскрыть...' : 'Expand...';

                    info.classList.add('teacher-desc-limited')
                }
            }
            this.values.selectedTeacherId = +id;
        }

        const teachersIds = this.teachers.map((e) => e.id).filter((e) => e !== +id);

        for (const teacherId of teachersIds) {
            const e = document.getElementById(`01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCxTeacher-item-${teacherId}`);

            if (e.classList.contains('active')) {
                const teacherDesc = document.getElementById(`01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx-Teacher-info-desc-${teacherId}`);
                const teacherAvatar = document.getElementById(`01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx-Teacher-info-avatar-${teacherId}`);
                const teacherShowMore = document.getElementById(`teacher-info-readmore-${teacherId}`);

                if (teacherDesc) {
                    teacherDesc.classList.add('teacher-desc');

                    if (showMore) {
                        if (showMore && (teacherDesc.offsetHeight > 110)) {
                            showMore.style.display = 'block'
                            showMore.innerHTML = this.lang === 'ru' ? 'Раскрыть...' : 'Expand...';

                            info.classList.add('teacher-desc-limited')
                        }
                    }
                }

                if (teacherAvatar) {
                    teacherAvatar.classList.remove('select-img');
                }

                if (teacherShowMore) {
                    teacherShowMore.innerHTML = 'Раскрыть...';
                    teacherShowMore.style.display = 'none';
                }

                e.classList.remove('active');
            }
        }

        if (!this.values.selectedTeacherId) {
            this.disableNextButton();
        } else {
            this.enableNextButton();
        }
    },

    selectDuration(interval) {
        const durationElem = document.getElementById(`01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCxTeacher-duration-item-${interval}`);

        if (!durationElem.classList.contains('active')) {
            durationElem.classList.add('active');
            this.values.intervalDuration = interval;
            delete this.values.selectedTeacherId;

            Array.from(document.getElementsByClassName(`01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCxTeacher-duration-item active`)).forEach((el) => {
                if (el.id !== this.key + `Teacher-duration-item-${interval}`) {
                    el.classList.remove('active');
                }
            })
            this.loadTeacherFields();
        }
    },

    selectTeacherTime(teacherId, time, interval) {
        const timeElem = document.getElementById(`01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCxTeacher-time-item-${teacherId}-${time}`);

        if (timeElem.classList.contains('active')) {
            timeElem.classList.remove('active')
            this.values.selectedTime = null;
            if (this.values.selectedTeacherId === -1) {
                this.values.newSelectedTeacherId = null;
            }
        } else {
            timeElem.classList.add('active');
            this.values.selectedTime = time;
            this.values.intervalDuration = interval;
            if (this.values.selectedTeacherId === -1) {
                this.values.newSelectedTeacherId = +teacherId
            };
        }

        if (this.values.selectedTeacherId && this.values.selectedTeacherId !== -1) {
            const teacher = this.teachers.find((e) => e.id === this.values.selectedTeacherId);
            const timeArr = teacher.freeTime.filter((e) => e.time !== time);

            for (const t of timeArr) {
                const elem = document.getElementById(`01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCxTeacher-time-item-${teacher.id}-${t.time}`);
                if (elem && elem.classList.contains('active')) {
                    elem.classList.remove('active')
                }
            }
        } else {
            Array.from(document.getElementsByClassName('01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCxTeachers-time active')).forEach((e) => {
                if (e.id !== this.key + `Teacher-time-item-${teacherId}-${time}`) {
                    e.classList.remove('active')
                }
            })
        }

        (!this.values.selectedTime) ? this.disableNextButton() : this.enableNextButton();
    },

    goBack(type) {
        if (!this.values.individualCalendar) {
            switch (type) {
                case 'teacher':
                    delete this.values.selectedTeacherId;
                    delete this.values.selectedTime;
                    delete this.values.selectedDate;
                    delete this.skip_teachers;
                    break;
                case 'date':
                    delete this.values.selectedTime;
                    delete this.values.selectedDate;
                    if (this.skip_teachers) {
                        this.values.selectedTeacherId = -1
                    }
                    break;
            }
        } else {
            delete this.values.selectedTeacherId
        }

        this.loadTeacherFields();
    },

    skipTeachers() {
        this.values.selectedTeacherId = -1;
        this.loadTeacherFields();
    },

    changeInterval(interval) {
        this.values.intervalDuration = interval;
        this.loadTeacherFields();
    },

    initCSSColor() {
        var style = document.createElement('style');

        style.innerHTML = this.styleColor;

        document.querySelector("head").appendChild(style);
    },

    initCalendar() {
        const self = this;
        const containter = document.getElementById(`${self.key}hello-week-teachers`);
        if (containter) {
            const parent = document.getElementById(`${self.key}HelloWeekParent`)
            parent.style.opacity = '1';
            parent.style.height = 'auto';

            const today = new Date().setHours(0, 0, 0, 0);
            const todayCopy = new Date(today);
            const endDate = new Date(today).setDate(todayCopy.getDate() + +this.daysCountIndivid);

            if (containter) {
                const prev = document.querySelector('.moyklassWidget-navCalendar-prev');
                const next = document.querySelector('.moyklassWidget-navCalendar-next');

                self.calendar = new HelloWeek({
                    selector: `${self.key}hello-week-teachers`,
                    langSettings: this.lang === 'ru' ? LANG_RUS : LANG_ENG,
                    highligthDates: [],
                    activeDates: [],
                    format: "YYYY-MM-DD",
                    monthShort: true,
                    disableDatesFrom: endDate,
                    weekStart: 1,
                    onSelect: () => self.selectTeachersDate(self.calendar.lastSelectedDay, self.calendar.selectDate),
                    defaultDate: (this.values.selectedDate) ? this.values.selectedDate : false,
                    parentEl: parent,
                });

                prev.addEventListener('click', function () { return self.calendar.prev() });
                next.addEventListener('click', function () { return self.calendar.next() });

                const today = document.getElementsByClassName('hello-week__day is-active is-today');

                this.values.selectedDate = this.values.selectedDate ? this.values.selectedDate : self.calendar.currentDay;

                if (!this.selectedTeacher) {
                    this.loadTeachersFreeTime();
                }

                if (today.length && !this.values.selectedDate) {
                    today[0].classList.add('is-selected');
                }
            }
        }
    },

    selectTeachersDate(date, elem) {
        const currentDate = document.getElementsByClassName('is-selected');
        const newDate = elem;
        const today = new Date().setHours(0, 0, 0, 0);
        const todayCopy = new Date(today);

        const endDate = new Date(today).setDate(todayCopy.getDate() + +this.daysCountIndivid)
        const selectedMoment = new Date(date).setHours(0, 0, 0, 0);

        if (selectedMoment < today) {
            return
        }

        if (selectedMoment > endDate) {
            return;
        }

        this.calendar.selectedDays = [date]
        if (currentDate.length) {
            currentDate[0].classList.remove('is-selected');
        }

        newDate.classList.add('is-selected');
        this.values.selectedDate = date;
        this.loadTeachersFreeTime();
    },

    setQueryParams(params) {
        this.params = params;
    },

    setBaseElement() {
        let main = document.getElementById("SiteWidgetMoyklass90671") || document.getElementById(this.oldName);
        this.baseElement = main;
        //mark
        if (this.baseElement) {
            this.baseElement.classList.add('WdgMoyklassContent');
            this.baseElement.classList.add('oldInit' + this.key);
            
            this.baseElement.innerHTML = loader;
            this.isInit = true;
        }
    },

    setModalElement() {
        this.modalElement = this.modalElement || new ModalManager(this);
    },

    setNextButton() {
        this.nextButton = this.getPlace().querySelector("[type=button]");
    },


    disableNextButton() {
        if (this.nextButton) {
            this.nextButton.disabled = true;
            this.nextButton.classList.add("wdgMoyklass-btn-disable");
        }
    },

    enableNextButton() {
        if (this.nextButton) {
            this.nextButton.disabled = false;
            this.nextButton.classList.remove("wdgMoyklass-btn-disable");
        }
    },

    setSubmitButton() {
        this.submitButtonElement = this.getPlace().querySelector("[type=submit]");
    },

    enableSubmitButton() {
        if (this.submitButtonElement) {
            this.submitButtonElement.disabled = false;
            this.submitButtonElement.classList.remove("wdgMoyklass-btn-disable");
        }
    },

    disableGoBackButton() {
        const elem = document.getElementById('FormTeachersContent-hat-go-back');
        if (elem) {
            elem.classList.add('hide')
        }

        delete this.values.selectedTeacherId;
        delete this.values.selectedTime;
        delete this.values.selectedDate;
    },

    disableSubmitButton() {
        if (this.submitButtonElement) {
            this.submitButtonElement.disabled = true;
            this.submitButtonElement.classList.add("wdgMoyklass-btn-disable");
        }
    },

    setLessonsSelector() {
        this.lessonsSelector = new LessonsSelector(this);
    },

    setFormSender() {
        this.sender = new RequestSender(this); // инициализация отправки формы
    },

    load() {
        var self = this;
        console.log('base load');
        try {
            var queryString = this.apiUrl + '/content/default?id=01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx';

            xhrObj = new XHR();

            xhrObj.init(
                { method: "GET", queryString: queryString },
                function (response) {
                    console.log('base loaded');
                    const result = JSON.parse(response.response)
                    self.baseElement.innerHTML = result.content;
                    console.log('result.classesData', result.classesData)
                    self.classesData = result.classesData;
                    self.company = result.company;
                    console.log('self.classesData', self.classesData)
                    self.postLoadActions(self.type);
                },
                function (response) {
                    throw response;
                });

        } catch (e) {
            console.log('stop by catch from base load');
        }
    },

    loadNotFormByModal() {
        var self = this;

        try {
            var queryString = this.apiUrl + '/content/not-form?id=01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx';

            if (this.params) {
                for (var key in self.params) {
                    queryString += '&' + key + '=' + self.params[key];
                }
            }

            xhrObj = new XHR();

            xhrObj.init(
                { method: "GET", queryString: queryString },
                function (response) {
                    self.modalElement.content.innerHTML = '<div class="row">' + JSON.parse(response.response).content + '</div>';
                    self.modalElement.open();

                    self.bindPlace = 'modal';
                    self.bindEventsDescriptionForm();
                    self.checkClassDescription();
                    self.otherFieldsForIndividual(true);
                },
                function (response) {
                    throw response;
                });

        } catch (e) {
            console.log('stop by catch from base load');
        }
    },

    loadFormByModal() {
        var self = this;
        console.log('loadFormByModal start');
        try {
            var queryString = this.apiUrl + '/content/form?id=01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx';

            if (this.params) {
                for (var key in self.params) {
                    queryString += '&' + key + '=' + self.params[key];
                }
            }

            xhrObj = new XHR();
            this.checkAndDeleteTeachersFields();
            xhrObj.init(
                { method: "GET", queryString: queryString },
                function (response) {
                    const result = JSON.parse(response.response);
                    console.log('loadFormByModal fetched');
                    console.log('result.classesData', result.classesData);
                    self.modalElement.content.innerHTML = result.content;
                    self.modalElement.open();
                    self.bindPlace = 'modal';
                    self.classesData = result.classesData;
                    self.company = result.company;
                    console.log('self.classesData', self.classesData);
                    self.postLoadActions('form');
                },
                function (response) {
                    throw response;
                });

        } catch (e) {
            console.log('stop by catch from base load');
        }
    },

    loadLeadFormByModal() {
        var self = this;
        console.log('loadFormByModal start');
        try {
            let queryString = this.apiUrl + '/content/lead-form?id=01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx';

            if (this.params) {
                for (var key in self.params) {
                    queryString += '&' + key + '=' + self.params[key];
                }
            }

            xhrObj = new XHR();

            xhrObj.init(
                { method: "GET", queryString: queryString },
                function (response) {
                    const result = JSON.parse(response.response);
                    console.log('loadLeadFormByModal fetched');
                    self.modalElement.content.innerHTML = result.content;
                    self.modalElement.open();
                    self.bindPlace = 'modal';
                    self.company = result.company;
                    self.postLoadActions('lead_form');
                },
                function (response) {
                    throw response;
                });

        } catch (e) {
            console.log('stop by catch from base load');
        }
    },


    openWidgetModal() { // для старых виджетов - совместимость
        this.loadFormByModal();
    },

    loadClasses() {
        var self = this;
        console.log('loadClasses start');
        var changeElementClasses = this.getPlace().querySelector(".wdgMoyklassChangeElement-classes");

        try {
            var queryString = this.apiUrl + '/content/classes-by-filial?id=01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx';
            if (this.values.filial) {
                queryString += '&filial=' + this.values.filial;
            }

            if (this.values.individualCalendar) {
                queryString += '&individual_calendar=' + this.values.individualCalendar
            }

            xhrObj = new XHR();

            xhrObj.init(
                { method: "GET", queryString: queryString },
                function (response) {
                    var result = JSON.parse(response.response);
                    console.log('loadClasses fetched');
                    console.log(' result.classesData');
                    changeElementClasses.innerHTML = result.content;
                    self.classesData = result.classesData;
                    self.company = result.company;
                    console.log('self.classesData');
                    if (changeElementClasses && changeElementClasses.classList.contains("hide")) {
                        changeElementClasses.classList.remove('hide');
                    }

                    self.bindEvents();

                    self.checkSelectedClasses();
                },
                function (response) {
                    throw response;
                });

        } catch (e) {
            console.log('stop by catch from load classes by filial');
        }
    },

    loadSchedule() {
        const self = this;
        const changeElementSchedule = self.baseElement.querySelector(".wdgMoyklassChangeElement-schedule");

        try {
            let queryString = this.apiUrl + '/content/schedule?id=01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx';
            if (this.values.filial || this.reserve.filial) {
                queryString += '&filial=' + (this.values.filial || this.reserve.filial);
            }

            if (this.values.course && parseInt(this.values.course) > 0) {
                queryString += '&course=' + this.values.course;
            }

            if (this.values.room && parseInt(this.values.room) > 0) {
                queryString += '&room=' + this.values.room;
            }

            if (this.values.show_type) {
                queryString += '&show_type=' + this.values.show_type;
            }

            if ((!this.values.course || this.values.course == '-1') && this.values.course_type && parseInt(this.values.course_type) > -1) {
                queryString += '&course_type=' + this.values.course_type;
            }

            if (this.values.action_type && this.values.start_date && this.values.calendar_view_type) {
                queryString += '&action_type=' + this.values.action_type;
                queryString += '&start_date=' + this.values.start_date;
                queryString += '&calendar_view_type=' + this.values.calendar_view_type;
            } else {
                if (this.values.day) queryString += '&day=' + this.values.day;
                if (this.values.calendar_view_type) queryString += '&calendar_view_type=' + this.values.calendar_view_type;
                if (this.values.dayscroll) queryString += '&dayscroll=' + this.values.dayscroll;
                if (this.values.start_date) queryString += '&start_date=' + this.values.start_date;
            }

            xhrObj = new XHR();

            xhrObj.init(
                { method: "GET", queryString: queryString },
                function (response) {
                    changeElementSchedule.innerHTML = JSON.parse(response.response).content;
                    self.postLoadActions('schedule');
                },
                function (response) {
                    throw response;
                });

        } catch (e) {
            console.log('stop by catch from load classes by filial');
        }
    },

    loadScheduleFilters() {
        var self = this;

        try {
            var queryString = this.apiUrl + '/content/init-schcalc?id=01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx';
            if (this.values.filial) {
                queryString += '&filial=' + this.values.filial;
            }

            if (this.values.show_type) {
                queryString += '&show_type=' + this.values.show_type;
            }

            xhrObj = new XHR();

            xhrObj.init(
                { method: "GET", queryString: queryString },
                function (response) {
                    self.baseElement.innerHTML = JSON.parse(response.response).content;
                    self.postLoadActions('schedule');
                },
                function (response) {
                    throw response;
                });

        } catch (e) {
            console.log('stop by catch from load classes by filial');
        }
    },

    checkSelectedClasses() {
        this.values.class_id = null;
        var place = this.getPlace();

        var selector = place.querySelector(".wdgMoyklassChangeElement-classes"); // если показали селектор
        var selectItem = selector ? selector.querySelector('select') : null;
        var title = place.querySelector(".oneClassItem"); // если один филиал
        var selectedItem = null;

        if (selector) {
            selectedItem = selector.querySelector('[selected]');
        } else if (title) {
            selectedItem = title;
        }

        if (selector && selectItem) { // если класс не выбран, выделем как ошибку селектор
            if (selectedItem == null) {
                selectItem.classList.add("error");
            } else {
                selectItem.classList.remove("error");
            }
        }

        if (selectedItem) {
            this.values.class_id = selectedItem.getAttribute('value') || null;
        } else {
            this.lessonsSelector.clear();
        }

        if (this.values.class_id) {
            this.otherFieldsForIndividual(false);
            const cl = this.classesData.find((e) => e.id === +this.values.class_id && e.course_id === 0);
            if (cl) {
                this.loadDurationFields();
                this.loadTeacherFields();
            }
        }

        this.checkPriceComment();
        this.checkClassDescription();
        this.loadPaymentFields();
    },

    durationFieldsVisibility(hide = true) {
        const durationFields = document.getElementById('wdgMoyklass' + this.id + 'FormDurationFields');

        if (hide) {
            (durationFields) ? durationFields.style.display = 'none' : '';
        } else {
            (durationFields) ? durationFields.style.display = 'block' : '';
        }
    },

    otherFieldsForIndividual(hide = true) {
        const formFields = document.getElementById('wdgMoyklass01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCxFormMainFields');

        if (hide) {
            (formFields) ? formFields.style.display = 'none' : '';
        } else {
            (formFields) ? formFields.style.display = 'block' : '';
        }
    },

    checkSelectedFilials() {
        this.values.filial = null;
        console.log('check selected');
        var place = this.getPlace();

        var filialField = place.querySelector("[name=filial]"); // если показали селектор
        // var title = place.querySelector(".oneFilialItem"); // если один филиал
        // var selectedItem = null;

        // if(selector) {
        //   selectedItem = selector.querySelector('[selected]');
        // } else if(title) {
        //   selectedItem = title;
        // }

        if (filialField && parseInt(filialField.value) > 0) {
            this.values.filial = filialField.value || null;

            var classesSelectorEl = place.querySelector(".wdgMoyklassChangeElement-classes");
            if (this.values.filial && classesSelectorEl) this.loadClasses();
        } else if (filialField && parseInt(filialField.value) === 0) {
            this.disableSubmitButton();
        }
    },

    checkPriceComment() {
        if (this.dynamicFormEl) {
            var commentEl = document.getElementById(this.key + 'PriceComment');
            var found = this.values.class_id && this.classesData ? this.classesData.find(el => el.id == this.values.class_id) : null;

            this.setDynamicEl(commentEl, found ? found.price_comment : null);
        }
    },

    checkClassDescription() {
        var shortDescriptionEl = document.getElementById(this.key + 'shortDescriptionContainer');
        var shortDescriptionElCls = shortDescriptionEl.querySelector('.shortDescriptionContainerCls');
        var isSmallView = shortDescriptionElCls.classList.contains('smallDescCont');
        var tabDescriptionEl = this.getPlace().querySelector('.tabDescription');
        var descriptionEl = this.getPlace().querySelector('.descriptionBox');
        var imagesEl = this.getPlace().querySelector('.imagesBox');
        var imagesCountEl = this.getPlace().querySelector('.tabDescription-item-count');
        var groupCommentEl = this.getPlace().querySelector('.groupComment');

        var joinTabEl = this.getPlace().querySelector('.tabDescription-item[tab-attr="join"]');
        var descriptionTabEl = this.getPlace().querySelector('.tabDescription-item[tab-attr="description"]');
        var photosTabEl = this.getPlace().querySelector('.tabDescription-item[tab-attr="photos"]');

        if (this.values.class_id && this.classesData) {
            var found = this.classesData.find(el => el.id == this.values.class_id);
        }

        this.dynamicFormEl = this.dynamicFormEl ? ((this.values.class_id && found) || (this.values.filial && !this.values.class_id) || (!this.values.filial && !this.values.class_id)) : false;

        if (this.dynamicFormEl) {
            if (tabDescriptionEl) {
                if ((found === undefined || found == null) && this.values.class_id == null) {
                    tabDescriptionEl.classList.add('hide');
                } else {
                    tabDescriptionEl.classList.remove('hide');
                    if (shortDescriptionEl) shortDescriptionEl.classList.remove('hide');
                    joinTabEl.click();
                }
            }

            if (shortDescriptionEl) {
                this.setDynamicEl(shortDescriptionEl.querySelector('.shortDescription'), found ? found.short_description : null);
                this.setDynamicEl(shortDescriptionEl.querySelector('.coverImage'),
                    found && found.class_images.length
                        ? '<div class="img-container"><img src="' + found.class_images[0].publicPath + '"></div>'
                        : ((found && found.images.length) ? '<div class="img-container"><img src="' + found.images[0].publicPath + '"></div>' : null));
            }

            if (descriptionEl) {
                this.setDynamicEl(descriptionEl, (found && found.classDescription)
                    ? found.classDescription
                    : ((found && found.description) ? found.description : null), false);

                if (descriptionEl.innerHTML) {
                    if (descriptionTabEl) descriptionTabEl.classList.remove('hide');
                } else {
                    if (descriptionTabEl) descriptionTabEl.classList.add('hide');
                }
            }

            if (imagesEl) {
                let contentImages = (found && found.class_images.length)
                    ? found.class_images
                    : ((found && found.images && found.images.length) ? found.images : []);

                contentImages = contentImages.map((image, index) =>
                    `<div class="imagesBox__imageContainer">
                <img src="${image.publicPath}" onclick='mcOpenPhotoSwipe(${JSON.stringify(found.images)}, ${index})'>
              </div>`
                ).join("");

                contentImages = (contentImages.length) ? contentImages : null;
                this.setDynamicEl(imagesEl, contentImages, false);

                if (contentImages) {
                    if (imagesCountEl) {
                        imagesCountEl.innerHTML = "(" + (found.class_images.length ? found.class_images.length : found.images.length) + ")";
                    }
                    if (photosTabEl) photosTabEl.classList.remove('hide');

                } else {
                    if (!this.values.class_id || (found && found.images && found.images.length === 0 && found.class_images && found.class_images.length === 0)) {
                        if (imagesCountEl) {
                            imagesCountEl.innerHTML = "(0)";
                        }
                        imagesEl.innerHTML = "";
                        if (photosTabEl) photosTabEl.classList.add('hide');
                    }
                }
            }

            if (groupCommentEl) {
                this.setDynamicEl(groupCommentEl, found ? found.comment : null);
            }
        }

        var coverImgEl = shortDescriptionEl ? shortDescriptionEl.querySelector('.coverImage') : null;
        var shortDescEl = shortDescriptionEl ? shortDescriptionEl.querySelector('.shortDescription') : null;
        if (shortDescriptionEl &&
            ((coverImgEl && coverImgEl.innerHTML.trim() == "") || !coverImgEl) &&
            ((shortDescEl && shortDescEl.innerHTML.trim() == "") || !shortDescEl) &&
            ((groupCommentEl && groupCommentEl.innerHTML.trim() == "") || !groupCommentEl)
        ) {
            shortDescriptionEl.classList.add('hide');
        } else {
            shortDescriptionEl.classList.remove('hide');
        }

        if (shortDescriptionEl &&
            coverImgEl && coverImgEl.innerHTML.trim() == "") {
            coverImgEl.classList.add('hide');
        }

        if (shortDescriptionEl &&
            shortDescEl && shortDescEl.innerHTML.trim() == "") {
            shortDescEl.classList.add('hide');
            if (groupCommentEl && !isSmallView) groupCommentEl.classList.add('m-0');
        }

        if (shortDescriptionEl && !shortDescEl && groupCommentEl && !isSmallView) {
            groupCommentEl.classList.add('m-0');
        }

        if (shortDescriptionEl && shortDescEl && shortDescEl.innerHTML.trim() != "" && groupCommentEl && !isSmallView) {
            groupCommentEl.classList.remove('m-0');
        }

        if (shortDescriptionEl &&
            groupCommentEl && groupCommentEl.innerHTML.trim() == "") {
            groupCommentEl.classList.add('hide');
        }

    },

    setDynamicEl(htmlEl, data, removeHide = true) {
        if (htmlEl && !htmlEl.innerHTML) {
            htmlEl.classList.add('hide');
        }

        if (htmlEl && data) {
            htmlEl.innerHTML = data;
            if (removeHide) htmlEl.classList.remove('hide');
        }

        if (htmlEl && !data) {
            htmlEl.innerHTML = "";
            htmlEl.classList.add('hide');
        }
    },

    postLoadActions(type) {
        switch (type) {
            case 'form':
                this.checkSelectedFilials();
                this.bindEvents();
                this.bindEventsDescriptionForm();
                this.setLessonsSelector();
                this.checkSelectedClasses();
                this.checkClassDescription();
                this.setFormSender();
                this.setSubmitButton();
                this.initPhoneField();
                break;
            case 'lead_form':
                this.setSubmitButton();
                this.checkSelectedFilials();
                this.initPhoneField();
                this.bindEventsForLeadForm();
                this.setFormSender();
                break;
            case 'lead_button':
            case 'lead_self_button':
                this.setModalElement();
                this.bindEventsForLeadButton();
                break;
            case 'button':
            case 'self_button':
                this.setModalElement();
                this.bindEventsForButton();
                this.initPhoneField();
                break;
            case 'schedule':
            case 'combo_schedule_calendar':
            case 'calendar':
                this.initScheduleAndCalendar();
                break;
        }
    },

    initScheduleAndCalendar() {
        const initialbox = this.baseElement.querySelector(".initialfilter");
        const self = this;

        if (initialbox) {
            initialbox.classList.remove("initialfilter");
            this.bindEventsForScheduleFilter();
            this.setModalElement();
        } else {
            if (!this.values.show_type) {
                this.values.show_type = this.type;
            }

            if (this.scroll === 'true') {
                const elem = document.getElementById('01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCxWdgMoyklassScrollContainer');
                if (elem) {
                    elem.classList.add('scroll')
                    const fake = document.getElementById('01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCxWdgMoyklassFakeSpacer');
                    if (fake) {
                        fake.classList.remove('hide')
                    }

                    if (this.values.show_type === 'schedule' || (this.values.show_type === 'calendar' && isMobile)) {
                        elem.classList.add('box-scroll-container');

                        if (this.values.show_type === 'schedule') {
                            elem.classList.add('box-scroll-padding');
                        } else {
                            elem.classList.remove('box-scroll-padding');
                        }

                    } else if (elem.classList.contains('box-scroll-container')) {
                        elem.classList.remove('box-scroll-container')
                        elem.classList.remove('box-scroll-padding');
                    }
                }
            }

            if (this.values.show_type == 'schedule') {
                this.setLessonsSelector();
                this.bindEventsForSchedule();

                this.lessonsSelector.loadLessonsMini((response) => {
                    self.setMiniLessons(JSON.parse(response.response));
                    self.bindEventsForMiniLessons();
                    vkAutoSizeStart();
                });
            }

            if (this.values.show_type == 'calendar') {
                this.bindEventsForCalendar();
                vkAutoSizeStart();
            }
        }
    },

    bindEventsForLeadButton() {
        const self = this;
        const buttonEl = this.baseElement.querySelector('button');

        if (buttonEl) {
            buttonEl.onclick = () => {
                self.loadLeadFormByModal();
            }
        }
    },

    bindEventsForButton() {
        var self = this;
        var buttonEl = this.baseElement.querySelector('button');

        if (buttonEl) {
            buttonEl.onclick = function () {
                self.loadFormByModal();
            }
        }
    },

    bindEventsForSchedule() {
        var self = this;
        var buttonEls = this.baseElement.getElementsByClassName("openModalAction");

        delete this.values.individualTime
        delete this.values.individualDate;
        delete this.values.individualCalendar;

        Array.prototype.some.call(buttonEls, function (el, index) {
            el.onclick = function (event) {
                self.setQueryParams({ class_id: this.value, current_view: 'schedule' });
                self.dynamicFormEl = false;
                self.loadFormByModal();
            }
        });

        Array.prototype.some.call(this.baseElement.getElementsByClassName('tabDescriptionSchedule'), function (tabDescription, index) {
            if (tabDescription) {
                let courseAttr = tabDescription.getAttribute('attr-tab-course');
                Array.prototype.some.call(tabDescription.getElementsByClassName('tabDescription-item'), function (elItem, index) {
                    elItem.onclick = function (event) {
                        if (!elItem.classList.contains('disable')) {
                            Array.prototype.some.call(tabDescription.getElementsByClassName('tabDescription-item'), function (elItem, index) {
                                elItem.classList.remove('active');
                            });

                            elItem.classList.add('active');

                            switch (this.getAttribute('tab-attr')) {
                                case 'join':
                                    self.baseElement.querySelector('.joinBox[attr-tab-course=\'' + courseAttr + '\']').classList.remove('hide');
                                    self.baseElement.querySelector('.descriptionBox[attr-tab-course=\'' + courseAttr + '\']').classList.add('hide');
                                    self.baseElement.querySelector('.imagesBox[attr-tab-course=\'' + courseAttr + '\']').classList.add('hide');
                                    break;
                                case 'description':
                                    self.baseElement.querySelector('.descriptionBox[attr-tab-course=\'' + courseAttr + '\']').classList.remove('hide');
                                    self.baseElement.querySelector('.joinBox[attr-tab-course=\'' + courseAttr + '\']').classList.add('hide');
                                    self.baseElement.querySelector('.imagesBox[attr-tab-course=\'' + courseAttr + '\']').classList.add('hide');
                                    break;
                                case 'photos':
                                    self.baseElement.querySelector('.imagesBox[attr-tab-course=\'' + courseAttr + '\']').classList.remove('hide');
                                    self.baseElement.querySelector('.joinBox[attr-tab-course=\'' + courseAttr + '\']').classList.add('hide');
                                    self.baseElement.querySelector('.descriptionBox[attr-tab-course=\'' + courseAttr + '\']').classList.add('hide');
                                    break;
                            }
                            vkAutoSizeStart();
                        }
                    }
                });
            }
        });
    },

    bindEventsForMiniLessons() {
        var self = this;
        var buttonEls = this.baseElement.getElementsByClassName("wdgMoyklass-scheduleLessonsMini-item");

        Array.prototype.some.call(buttonEls, function (el, index) {
            el.onclick = function (event) {
                const class_id = this.getAttribute('attr-class-id');
                const lesson_id = this.getAttribute('attr-lesson-id');
                const elem = self.baseElement.querySelector(`[class*="wdgMoyklass-scheduleLessonsMini"][attr-class-id="${class_id}"]`);

                if (elem) {
                    const cnt = elem.getAttribute('attr-cnt-places');
                    if (cnt === 'true') {
                        self.setQueryParams({ class_id, lesson_id });
                        self.loadNotFormByModal();
                    } else {
                        self.setQueryParams({ class_id });
                        self.loadFormByModal();
                    }
                }
            }
        });
    },

    bindEventsForCalendar() {
        var self = this;
        var nextButton = self.baseElement.querySelector(".link-to-right");
        var prevButton = self.baseElement.querySelector(".link-to-left");
        var weekTypeButton = self.baseElement.querySelector(".link-to-week");
        var monthTypeButton = self.baseElement.querySelector(".link-to-month");
        var lessonItemEls = self.baseElement.getElementsByClassName("lesson-item");
        var dayFilter = self.baseElement.querySelector(".filter-byday");

        self.values.start_date = self.baseElement.querySelector("[attr-current-date]").getAttribute("attr-current-date");
        self.values.action_type = null;

        Array.prototype.some.call(lessonItemEls, function (el, index) {
            el.onclick = function (event) {
                const filialId = el.getAttribute('attr-filial-id');
                const courseType = el.getAttribute('attr-course-type');
                const teachersCount = el.getAttribute('attr-cnt-teachers');
                const firstTeacherId = el.getAttribute('attr-f-teacher');
                const dateTime = el.getAttribute('attr-id');
                const classId = el.getAttribute('attr-class-id');
                const [date, time, intervals] = (dateTime) ? dateTime.split('_') : [null, null, null];
                const intervalArray = intervals ? intervals.split(',') : null
                const interval = intervalArray ? intervalArray[0] : null;

                self.setQueryParams({
                    lesson_id: el.getAttribute("attr-lesson-id"),
                    current_view: 'calendar',
                    individual_filial_id: filialId || '',
                    individual_calendar: (courseType) ? true : '',
                    selectedDate: date || '',
                    selectedTime: time || '',
                    class_id: classId || '',
                    intervalDuration: interval,
                    availableIntervals: intervals,
                });

                if (+teachersCount === 1 && (!intervalArray || intervalArray.length === 1)) {
                    self.values.individualTeacherId = +firstTeacherId;
                }

                self.values.individualCalendar = (courseType) ? true : false;
                self.values.individualTime = time;
                self.values.individualDate = date;
                self.values.intervalDuration = interval;
                self.values.availableIntervals = intervals;

                self.dynamicFormEl = false;
                if (el.querySelector(".lesson-register-link")) {
                    self.loadFormByModal();
                } else {
                    self.loadNotFormByModal();
                }
            }
        });

        if (dayFilter) {
            var scrollByDay = dayFilter.getAttribute("attr-scroll");

            if (scrollByDay) {
                dayFilter.scrollBy(scrollByDay, 0);
            }

            Array.prototype.some.call(self.baseElement.getElementsByClassName("filter-byday-item"), function (el, index) {
                el.onclick = function (event) {
                    if (el.getAttribute("attr-date") == 'all') {
                        delete self.values['day'];
                        delete self.values['dayscroll'];
                    } else {
                        self.values['day'] = el.getAttribute("attr-date");
                        self.values['dayscroll'] = dayFilter.scrollLeft;
                    }

                    self.loadSchedule();
                }
            });
        }

        if (nextButton) {
            nextButton.onclick = function (event) {
                self.values.action_type = 'date_next';

                self.loadSchedule();
            }
        }

        if (prevButton) {
            prevButton.onclick = function (event) {
                self.values.action_type = 'date_prev';

                self.loadSchedule();
            }
        }

        if (weekTypeButton) {
            if (weekTypeButton.classList.contains('view-link-current')) {
                self.values.calendar_view_type = 'week';
            }

            weekTypeButton.onclick = function (event) {
                self.values.action_type = 'to_week';

                self.loadSchedule();
            }
        }

        if (monthTypeButton) {
            if (monthTypeButton.classList.contains('view-link-current')) {
                self.values.calendar_view_type = 'month';
            }

            monthTypeButton.onclick = function (event) {
                self.values.action_type = 'to_month';

                self.loadSchedule();
            }
        }
    },

    selectSubmenu(el) {
        var courseSelector = this.baseElement.querySelector("select[name=course]");
        var submenu = this.baseElement.querySelector(".WdgMoyklassSchedule-submenu");
        var scheduleTypesFilters = submenu.getElementsByTagName("div");

        Array.prototype.some.call(scheduleTypesFilters, function (item, index) {
            item.classList.remove("active");
        });

        el.classList.add("active");
        this.values.course_type = el.getAttribute("attr-id");
        if (courseSelector && courseSelector.value !== "-1") {
            this.values.course_type = courseSelector.querySelector("[value='" + courseSelector.value + "']").getAttribute("attr-type");
        }
    },

    bindEventsForScheduleFilter() {
        var self = this;
        var selectFilial = this.baseElement.querySelector("select[name=filial]");
        var selectCourse = this.baseElement.querySelector("select[name=course]");
        var selectRoom = this.baseElement.querySelector("select[name=room]");
        let selectRoomParent = this.baseElement.querySelector(".WdgMoyklassSchedule-FilterItem-room");
        var typeSchedule = this.baseElement.querySelector("[attr-type=schedule]");
        var typeCalendar = this.baseElement.querySelector("[attr-type=calendar]");
        var submenu = this.baseElement.querySelector(".WdgMoyklassSchedule-submenu");

        if (submenu) {
            var scheduleTypesFilters = submenu.getElementsByTagName("div");

            Array.prototype.some.call(scheduleTypesFilters, function (el, index) {
                el.onclick = function (event) {
                    if (!this.getAttribute('disabled')) {
                        var old = self.values.course_type;
                        self.selectSubmenu(this);

                        if (this.getAttribute('attr-id') == -1) {
                            if (selectCourse) {
                                selectCourse.value = -1;
                            }
                            self.values.course = null;
                            self.values.course_type = null;

                            Array.prototype.some.call(scheduleTypesFilters, function (el, index) {
                                el.removeAttribute('disabled');
                            });
                        }

                        if (old !== self.values.course_type) {
                            self.loadSchedule();
                        }
                    }
                }
            });
        }

        if (typeSchedule) {
            typeSchedule.onclick = function (event) {
                self.values.show_type = 'schedule';
                self.loadSchedule();
                typeSchedule.classList.add('success');
                typeCalendar.classList.remove('success');

                if (selectRoom) {
                    selectRoomParent.classList.add('hidden');
                }

                if (submenu) {
                    submenu.querySelector("[attr-id=\"2\"]").classList.remove('hide');
                }
            }

            if (typeSchedule.classList.contains('success')) {
                self.values.show_type = 'schedule';
            }
        }

        if (typeCalendar) {
            typeCalendar.onclick = function (event) {
                self.values.show_type = 'calendar';

                if (submenu) {
                    let course_type = submenu.querySelector("[attr-id=\"2\"]");
                    let course_typeAll = submenu.querySelector("[attr-id=\"-1\"]");

                    if (course_type.classList.contains('active')) {
                        self.selectSubmenu(course_typeAll);
                    }
                }

                self.loadSchedule();
                typeCalendar.classList.add('success');
                typeSchedule.classList.remove('success');

                if (selectRoom) {
                    selectRoomParent.classList.remove('hidden');
                }

                if (submenu) {
                    // submenu.querySelector("[attr-id=\"2\"]").classList.add('hide');
                }
            }

            if (typeCalendar.classList.contains('success')) {
                self.values.show_type = 'calendar';
            }
        }

        if (selectFilial) {
            self.values.filial = selectFilial.value;
            delete self.values.course_type;
            self.reserve.filial = selectFilial.value;

            console.log('set filial: ', self.values);
            selectFilial.onchange = function (event) {
                self.values.filial = selectFilial.value;
                self.loadScheduleFilters();
                //self.loadSchedule();
            }
        }

        if (selectCourse) {
            self.values.course = selectCourse.value;

            selectCourse.onchange = function (event) {
                self.values.course = selectCourse.value;

                if (self.values.course < -1) {
                    self.values.course_type = selectCourse.querySelector("[value='" + selectCourse.value + "']").getAttribute("attr-type");
                    self.values.course = null;
                }

                if (parseInt(selectCourse.value) != -1) {
                    var course_type = selectCourse.querySelector("[value='" + selectCourse.value + "']").getAttribute("attr-type");

                    if (submenu) {
                        Array.prototype.some.call(scheduleTypesFilters, function (el, index) {
                            var currentId = el.getAttribute("attr-id");

                            if (currentId == course_type) {
                                self.selectSubmenu(el);
                                el.removeAttribute('disabled');
                            }

                            if (currentId && currentId != course_type && currentId != -1) {
                                el.setAttribute('disabled', 'disabled');
                            }
                        });
                    }
                } else {
                    self.values.course_type = null;
                    self.values.course = null;

                    if (submenu) {
                        Array.prototype.some.call(scheduleTypesFilters, function (el, index) {
                            el.removeAttribute('disabled');
                        });

                        self.selectSubmenu(scheduleTypesFilters[0]);
                    }
                }

                self.loadSchedule();
            }
        }

        if (selectRoom) {
            selectRoom.onchange = function (event) {
                self.values.room = selectRoom.value;
                self.loadSchedule();
            }
        }

        console.log('preload: ', self.values);
        self.loadSchedule();
    },

    bindEventsDescriptionForm() {
        var self = this;
        var place = this.getPlace();

        var tabDescription = place.querySelector(".tabDescription");

        if (tabDescription) {
            Array.prototype.some.call(tabDescription.getElementsByClassName('tabDescription-item'), function (elItem, index) {
                elItem.onclick = function (event) {
                    if (!elItem.classList.contains('disable')) {
                        Array.prototype.some.call(tabDescription.getElementsByClassName('tabDescription-item'), function (elItem, index) {
                            elItem.classList.remove('active');
                        });

                        elItem.classList.add('active');

                        switch (this.getAttribute('tab-attr')) {
                            case 'join':
                                place.querySelector('.joinBox').classList.remove('hide');
                                place.querySelector('.descriptionBox').classList.add('hide');
                                place.querySelector('.imagesBox').classList.add('hide');
                                break;
                            case 'description':
                                place.querySelector('.descriptionBox').classList.remove('hide');
                                place.querySelector('.joinBox').classList.add('hide');
                                place.querySelector('.imagesBox').classList.add('hide');
                                break;
                            case 'photos':
                                place.querySelector('.imagesBox').classList.remove('hide');
                                place.querySelector('.joinBox').classList.add('hide');
                                place.querySelector('.descriptionBox').classList.add('hide');
                                break;
                        }
                    }
                }
            });
        }
    },

    getPriceToPayLimits() {
        const result = {
            min: 0,
            max: 0,
        };

        if (!this.classesData) {
            return result;
        }

        const selectedClass = this.classesData ? this.classesData.find(cl => +cl.id === +this.values.class_id) : null;
        if (!selectedClass) {
            return result;
        }

        if (selectedClass.payType === 0) {
            result.max = +selectedClass.onlinePayment.price;
            result.min = +selectedClass.onlinePayment.paymentSumMin;
        } else {
            if (!this.values.subscriptionId) {
                return result;
            }

            const sub = selectedClass.onlinePayment.subscriptions
                .find(({ id }) => +id === this.values.subscriptionId)
            if (!sub) {
                return result
            }

            result.max = +sub.price;
            result.min = +sub.paymentSumMin;
        }

        return result;
    },

    validatePaymentSum() {
        const form = this.getPlace().querySelector("form");
        const paymentSumInputBlock = form.querySelector(`#PaymentSumInputBlock${this.key}`);
        const totalPaymentSum = form.querySelector(`#TotalPaymentSum${this.key}`);
        const paymentSumInput = form.querySelector(`#PaymentSumInput${this.key}`);

        const { min, max } = this.getPriceToPayLimits();

        if (this.values.summa === 0) {
            totalPaymentSum.innerHTML = 0;
        } else if (!min || !max || !this.values.summa || this.values.summa < min || this.values.summa > max) {
            totalPaymentSum.innerHTML = 0;
            paymentSumInputBlock.classList.add('error');
            return false;
        }

        paymentSumInputBlock.classList.remove('error');
        paymentSumInput.classList.remove('error');
        if (this.company.currency_code) {
            totalPaymentSum.innerHTML = this.values.summa.toLocaleString('ru', {
                currency: this.company.currency_code,
                style: 'currency',
                useGrouping: false,
                minimumFractionDigits: 0,
            });
        } else {
            totalPaymentSum.innerHTML = `${this.values.summa} ${this.company.currency_format}`
        }

        // totalPaymentSum.innerHTML = this.values.summa;

        return true;
    },

    validateFormFields() {
        const self = this;
        const place = this.getPlace();
        const form = place.querySelector("form");

        const selectFilial = form.querySelector("select[name=filial]");
        const selectClass = form.querySelector("select[name=class_id]");
        const paymentSumInput = form.querySelector(`#PaymentSumInput${this.key}`);
        const integrationSelect = form.querySelector(`#IntegrationSelector${this.key}`);
        const subscriptionSelect = form.querySelector(`#SubscriptionSelector${this.key}`);
        const privacyConsent = form.querySelector(`#PrivacyConsentCheckbox${this.id}`);
        const userConsent = form.querySelector(`#UserConsentCheckbox${this.id}`);

        let isValid = true;

        if (this.lessonsSelector && this.lessonsSelector.selectorElement && this.lessonsSelector.selectorElement.innerHTML.trim() !== ''
            && this.lessonsSelector.selectedLessons.length === 0) {
            isValid = false;
        }

        if (subscriptionSelect && !this.values.subscriptionId && !this.values.notPayNow) {
            isValid = false;
        }

        if (integrationSelect && !this.values.integrationId && !this.values.notPayNow) {
            isValid = false;
        }

        if (paymentSumInput && !this.validatePaymentSum() && !this.values.notPayNow) {
            isValid = false;
        }

        if (selectFilial && this.values.filial == null) {
            isValid = false;
        }

        if (selectClass && this.values.class_id == null
            && !['lead_form', 'lead_button', 'lead_self_button'].includes(this.type)) {
            isValid = false;
        }

        if (privacyConsent && !privacyConsent.checked) {
            isValid = false;
        }

        if (userConsent && !userConsent.checked) {
            isValid = false;
        }

        var classData = this.values && this.classesData ? this.classesData.find(el => el.id == this.values.class_id) : null;
        if (classData && classData.cannotJoin) {
            isValid = false;
        }

        if (!isValid) {
            self.disableSubmitButton();
        } else {
            self.enableSubmitButton();
        }
    },

    bindEventsForLeadForm() {
        const self = this;
        const place = this.getPlace();

        const form = place.querySelector("form");
        const selectFilial = form.querySelector("select[name=filial]");
        const submit = form.querySelector("input[type=submit]");

        const privacyConsent = form.querySelector(`#PrivacyConsentCheckbox${this.id}`);
        const userConsent = form.querySelector(`#UserConsentCheckbox${this.id}`);

        if (selectFilial) {
            selectFilial.onchange = function (event) {
                self.values.filial = selectFilial.value == 0 ? null : selectFilial.value;

                if (self.values.filial == null) {
                    selectFilial.classList.add('error');
                } else {
                    selectFilial.classList.remove('error');
                    self.clearFilterFormClasses();
                }

                self.validateFormFields();
            }
        }

        if (privacyConsent) {
            privacyConsent.onclick = function (event) {
                self.sender.clearFormDataErrors();
                self.validateFormFields();
            }
        }

        if (userConsent) {
            userConsent.onclick = function (event) {
                self.sender.clearFormDataErrors();
                self.validateFormFields();
            }
        }

        if (submit) {
            submit.onclick = function (event) {
                self.sender.clearFormDataErrors();
                self.sender.send();
            }
        }

        self.validateFormFields();
    },

    bindEvents() {
        var self = this;
        var place = this.getPlace();

        var form = place.querySelector("form");
        var selectFilial = form.querySelector("select[name=filial]");
        var selectClass = form.querySelector("select[name=class_id]");
        var submit = form.querySelector("input[type=submit]");
        var next = form.querySelector("input[type=button]");

        const paymentSumInput = form.querySelector(`#PaymentSumInput${this.key}`);
        const totalPaymentSum = form.querySelector(`#TotalPaymentSum${this.key}`);
        const paymentFields = form.querySelector(`#FormPaymentFields${this.key}`);
        const paymentSumMin = form.querySelector(`#PaymentSumInputMin${this.key}`);
        const paymentSumMax = form.querySelector(`#PaymentSumInputMax${this.key}`);
        const notPayNowCheckbox = form.querySelector(`#NotPayNowCheckbox${this.key}`);
        const integrationSelect = form.querySelector(`#IntegrationSelector${this.key}`);
        const subscriptionSelect = form.querySelector(`#SubscriptionSelector${this.key}`);
        const paymentSumInputBlock = form.querySelector(`#PaymentSumInputBlock${this.key}`);
        const subscriptionStartDateSelectBlock = form.querySelector(`#SubscriptionStartDateCheckboxBlock${this.key}`);
        const subscriptionStartDateFromNowCheckbox = form.querySelector(`#SubscriptionStartDateFromNowCheckbox${this.key}`);
        const subscriptionStartDateFromThisMonthCheckbox = form.querySelector(`#SubscriptionStartDateFromThisMonthCheckbox${this.key}`);
        const subscriptionStartDateFromNextMonthCheckbox = form.querySelector(`#SubscriptionStartDateFromNextMonthCheckbox${this.key}`);

        const privacyConsent = form.querySelector(`#PrivacyConsentCheckbox${this.id}`);
        const userConsent = form.querySelector(`#UserConsentCheckbox${this.id}`);

        if (selectFilial) {
            selectFilial.onchange = function (event) {
                self.values.filial = selectFilial.value == 0 ? null : selectFilial.value;

                if (self.values.filial == null) {
                    selectFilial.classList.add('error');
                } else {
                    selectFilial.classList.remove('error');
                    self.clearFilterFormClasses();
                }

                self.loadClasses();
                self.validateFormFields();
            }
        }

        if (selectClass) {
            selectClass.onchange = function (event) {
                self.values.class_id = selectClass.value == 0 ? null : selectClass.value;

                if (self.values.class_id == null) {
                    self.clearFilterFormClasses();
                } else {
                    selectClass.classList.remove('error');
                    self.sender.checkFormElementsValue(selectClass);
                }
                self.otherFieldsForIndividual(false);

                const cl = self.classesData.find((e) => e.id === +self.values.class_id && e.course_id === 0);
                self.checkAndDeleteTeachersFields();

                if (cl) {
                    self.loadDurationFields();
                    self.loadTeacherFields()
                }

                self.loadPaymentFields();

                //disableSubmitButton
                self.checkPriceComment();
                self.checkClassDescription();
            }
        }

        if (next) {
            next.onclick = function (event) {
                if (self.values.newSelectedTeacherId) {
                    self.values.selectedTeacherId = self.values.newSelectedTeacherId;
                    delete self.values.newSelectedTeacherId
                }
                self.loadTeacherFields();
            }
        }

        if (submit) {
            submit.onclick = function (event) {
                self.sender.clearFormDataErrors();
                self.sender.send();
            }
        }

        const subscriptionStartDateOnChange = function (event) {
            self.values.subscriptionStartDate = event.target.value;
        }

        const getTotalPrice = () => {
            let price = 0;

            if (!self.classesData) {
                return 0;
            }

            const selectedClass = self.classesData ? self.classesData.find(cl => +cl.id === +self.values.class_id) : null;
            if (!selectedClass) {
                return 0;
            }

            if (selectedClass.payType === 0) {
                price = +selectedClass.onlinePayment.price;
            } else {
                if (!self.values.subscriptionId) {
                    return 0;
                }

                const sub = selectedClass.onlinePayment.subscriptions
                    .find(({ id }) => +id === self.values.subscriptionId)
                if (!sub) {
                    if (subscriptionStartDateSelectBlock) {
                        subscriptionStartDateSelectBlock.classList.add('hide');
                    }

                    return 0;
                }

                if (subscriptionStartDateSelectBlock && sub.onlinePayment.beginDateSelectEnabled) {
                    subscriptionStartDateSelectBlock.classList.remove('hide');
                    subscriptionStartDateFromNowCheckbox.checked = true;
                    subscriptionStartDateOnChange({ target: subscriptionStartDateFromNowCheckbox })
                } else if (subscriptionStartDateSelectBlock) {
                    subscriptionStartDateSelectBlock.classList.add('hide');
                }

                price = sub.price;
            }

            return price;
        }

        if (integrationSelect) {
            if (!self.values.integrationId) {
                self.values.integrationId = +integrationSelect.value || null;
            }

            integrationSelect.onchange = function () {
                self.values.integrationId = +integrationSelect.value || null;

                if (!self.values.integrationId) {
                    integrationSelect.classList.add('error');
                } else {
                    integrationSelect.classList.remove('error');
                }

                self.validateFormFields();
            };
        }

        if (subscriptionSelect) {
            subscriptionSelect.onchange = function () {
                self.values.subscriptionId = +subscriptionSelect.value || null;

                const totalPrice = getTotalPrice();
                self.values.summa = totalPrice;
                if (totalPaymentSum) {
                    if (self.company.currency_code) {
                        totalPaymentSum.innerHTML = totalPrice.toLocaleString('ru', {
                            currency: self.company.currency_code,
                            style: 'currency',
                            useGrouping: false,
                            minimumFractionDigits: 0,
                        });
                    } else {
                        totalPaymentSum.innerHTML = `${totalPrice} ${self.company.currency_format}`
                    }
                }

                if (!self.values.subscriptionId) {
                    subscriptionSelect.classList.add('error');
                    if (paymentSumInputBlock) {
                        paymentSumInputBlock.classList.add('hide');
                    }
                    if (subscriptionStartDateSelectBlock) {
                        subscriptionStartDateSelectBlock.classList.add('hide');
                    }
                } else {
                    subscriptionSelect.classList.remove('error');

                    if (paymentSumInput) {
                        self.values.summa = totalPrice;
                        paymentSumInput.value = totalPrice;
                        paymentSumInputBlock.classList.remove('hide');

                        const { min, max } = self.getPriceToPayLimits();

                        paymentSumMin.innerHTML = min.toLocaleString('ru');

                        if (self.company.currency_code) {
                            paymentSumMax.innerHTML = max.toLocaleString('ru', {
                                currency: self.company.currency_code,
                                style: 'currency',
                                useGrouping: false,
                                minimumFractionDigits: 0,
                            });
                        } else {
                            paymentSumMax.innerHTML = `${max} ${self.company.currency_format}`
                        }
                    }
                }

                self.validateFormFields();
            };
            if (subscriptionSelect.children.length === 2) {
                subscriptionSelect.value = subscriptionSelect.children[1].value;
                subscriptionSelect.onchange();
            }
        }

        if (paymentSumInput) {
            if (!self.values.summa) {
                self.values.summa = +paymentSumInput.value || null;
            }

            paymentSumInput.oninput = function () {
                self.values.summa = +paymentSumInput.value || null;
                self.validatePaymentSum();
                self.validateFormFields();
            };
        }

        if (notPayNowCheckbox) {
            notPayNowCheckbox.onchange = function () {
                self.values.notPayNow = notPayNowCheckbox.checked;

                if (self.values.notPayNow) {
                    if (submit) {
                        submit.value = 'Отправить заявку'
                        submit.setAttribute('action-type', 'join')
                    }
                    if (paymentFields) {
                        paymentFields.classList.add('hide');
                    }
                } else {
                    if (submit) {
                        submit.value = 'Записаться и перейти к оплате'
                        submit.setAttribute('action-type', 'joinAndPay')
                    }
                    if (paymentFields) {
                        paymentFields.classList.remove('hide');
                    }
                }

                self.validateFormFields();
            };
        }

        if (subscriptionStartDateSelectBlock) {
            subscriptionStartDateFromNowCheckbox.onchange = subscriptionStartDateOnChange;
            subscriptionStartDateFromThisMonthCheckbox.onchange = subscriptionStartDateOnChange;
            subscriptionStartDateFromNextMonthCheckbox.onchange = subscriptionStartDateOnChange;
        }

        if (privacyConsent) {
            privacyConsent.onclick = function (event) {
                self.sender.clearFormDataErrors();
                self.validateFormFields();
            }
        }

        if (userConsent) {
            userConsent.onclick = function (event) {
                self.sender.clearFormDataErrors();
                self.validateFormFields();
            }
        }
    },

    setMiniLessons(data) {
        var self = this;
        if (data && data.length > 0) {
            data.forEach(function (item) {
                var miniContainer = self.baseElement.querySelector("[attr-class-id='" + item.class_id + "']");
                if (miniContainer) {
                    var tempEl = document.createElement('div');
                    tempEl.innerHTML = unescape(item.content);
                    miniContainer.innerHTML = tempEl.querySelector('.wdgMoyklass-scheduleLessonsMini').innerHTML;
                }

                // if (typeof vkAppAutosize != 'undefined') {
                //   setTimeout(function() {
                //     vkAppAutosize('WdgMoyklassVkAppWrapper');
                //   }, 100);
                // }
            });
        }

        Array.prototype.some.call(self.getPlace().getElementsByClassName('wdgMoyklass-scheduleLessonsMini'), function (elItem, index) {
            if (elItem.innerHTML.trim() == '') {
                elItem.classList.add('hide');
            } else {
                elItem.classList.remove('hide');
            }
        });
    },

    viewError(string) {
        var errorEl = document.getElementById('wdgMoyklass' + this.id + 'Other');

        var label = errorEl ? errorEl.querySelector("label") : null;
        if (label) {
            label.innerHTML = string;
            errorEl.classList.remove("hide");
            errorEl.classList.remove("success");
            errorEl.classList.add("error");
        }
    },

    hideError() {
        var errorEl = document.getElementById('wdgMoyklass' + this.id + 'Other');

        var label = errorEl ? errorEl.querySelector("label") : null;

        if (label) {
            label.innerHTML = "";
            errorEl.classList.add("hide");
        }
    },

    viewSuccess(string) {
        var errorEl = document.getElementById('wdgMoyklass' + this.id + 'Other');
        var label = errorEl ? errorEl.querySelector("label") : null;

        if (label) {
            label.innerHTML = string;
            errorEl.classList.remove("hide");
            errorEl.classList.remove("error");
            errorEl.classList.add("success");
        }
    },

    hideSuccess() {
        var errorEl = document.getElementById('wdgMoyklass' + this.id + 'Other');
        var label = errorEl ? errorEl.querySelector("label") : null;

        if (label) {
            label.innerHTML = "";

            errorEl.classList.add("hide");
        }
    },

    getPlace() {
        return this.bindPlace == 'modal' ? this.modalElement.content : this.baseElement;
    },

    initPhoneField: function (id) {
        var self = this;
        self.maskedInputs = [];
        var phones = this.getPlace().querySelectorAll("[type=tel]");
        phones.forEach(function (phone, fieldIndex) {
            var phoneFormat = phone ? phone.getAttribute("attr-phone-format") : 'common';

            if (phoneFormat != 'common' && phone != null) {
                if (phoneFormat == 'russian') {
                    self.maskedInputs.push(
                        MaskedInput({
                            elm: phone,
                            format: '+7 (___) ___-__-__',
                            separator: '+7 ()-'
                        })
                    );
                    self.maskedInputs[fieldIndex].setEnabled(true);
                }
            }
            if (phone != null) {
                phone.onfocus = function () {
                    var index = this.value.indexOf('_');

                    if (index != -1 && getCaretPos(phone) > index) {
                        self.maskedInputs[fieldIndex].setCursorPos(index);
                    }
                };
            }

            if (!self.initialPhoneValue && phone) {
                self.initialPhoneValue = phone.value;
            }

            var isOldBrowser = undefined;
            var attemptsCount = 0;

            if (phone != null) {
                phone.onkeyup = function (evt) {
                    if (attemptsCount < 3 && !isOldBrowser) {
                        attemptsCount += 1;
                        isOldBrowser = this.value.length != 18;

                        if (isOldBrowser && phoneFormat != 'common') {
                            self.maskedInputs[fieldIndex].setEnabled(false);

                            var newValue = phone.value;
                            for (var i = 0; i < self.initialPhoneValue.length; i++) {
                                newValue = newValue.replace(self.initialPhoneValue[i], '');
                            }

                            phone.value = newValue;
                        }
                    }
                }
            };

            if (phone && phoneFormat != 'common') {
                phone.onclick = function () {
                    var index = this.value.indexOf('_');

                    if (index != -1 && getCaretPos(phone) > index) {
                        self.maskedInputs[fieldIndex].setCursorPos(index);
                    }
                };
            }

            if (self.maskedInputs[fieldIndex]) {
                self.maskedInputs[fieldIndex].resetField();
            }
        });
    },

    clearFilterForm: function () {
        var place = this.getPlace();

        var form = place.querySelector("form");

        if (form && ['combo_schedule_calendar', 'schedule', 'vk_combo_schedule_calendar', 'vk_schedule'].indexOf(this.type) == -1) {
            var selectFilial = form.querySelector("select[name=filial]");
            var inputFilial = form.querySelector("input[name=filial]");

            if (selectFilial) {
                selectFilial.value = 0;
                delete this.values.filial;
                selectFilial.classList.add('error');

                this.clearFilterFormClasses();

                if (place.querySelector(".wdgMoyklassChangeElement-classes")) {
                    place.querySelector(".wdgMoyklassChangeElement-classes").classList.add('hide');
                }
            }

            if (inputFilial) {
                this.clearFilterFormClasses();

                var shortDescriptionEl = document.getElementById(this.key + 'shortDescriptionContainer');
                var tabDescriptionEl = place.querySelector('.tabDescription');

                if (tabDescriptionEl) {
                    tabDescriptionEl.classList.add("hide");
                }

                if (shortDescriptionEl) {
                    shortDescriptionEl.classList.add("hide");
                }
            }
        }
    },

    clearFilterFormClasses: function () {
        var place = this.getPlace();

        var form = place.querySelector("form");

        if (form) {
            var selectClass = form.querySelector("select[name=class_id]");
            var commentEl = document.getElementById(this.key + 'PriceComment');

            if (selectClass) {
                selectClass.value = 0;
                delete this.values.class_id;
                selectClass.classList.add('error');
            }

            if (commentEl) {
                commentEl.classList.add('hide');
            }

            if (this.lessonsSelector) {
                this.lessonsSelector.clear();
            }

            this.loadPaymentFields();
        }
    },

    loadDurationFields() {
        try {
            const elem = document.getElementById('wdgMoyklass' + this.id + 'FormDurationFields')
            if (!elem) {
                throw new Error("Duration fields element not found!");
            }
            elem.innerHTML = miniLoader;

            var queryString = this.apiUrl + '/content/form-duration-fields?id=' + this.key;

            queryString += '&class_id=' + (this.values.class_id || 0) +
                '&selected_teacher_id=' + (this.values.selectedTeacherId || '');

            if (this.values.availableIntervals) {
                queryString += '&available_intervals=' + this.values.availableIntervals;
            }

            xhrObj = new XHR();

            xhrObj.init(
                {
                    method: 'GET',
                    queryString: queryString
                },
                (response) => {
                    var responseData = JSON.parse(response.response);
                    elem.innerHTML = responseData.content;

                    if (!this.values.intervalDuration) {
                        this.values.intervalDuration = responseData.intervalDuration;
                    }

                    this.checkSelectedDuration();
                },
                (response) => {
                    throw response;
                });

        } catch (e) {
            console.log(e);
        }
    },

    loadTeacherFields() {
        try {
            const elem = document.getElementById('wdgMoyklass' + this.id + 'FormTeachersFields')
            if (!elem) {
                throw new Error("Teachers fields element not found!");
            }

            let loader = false;

            if (elem.children.length) {
                const teacherSelector = Array.from(elem.children).find((e) => e.id === `01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCxTeachers-selector`);
                if (teacherSelector) {
                    teacherSelector.innerHTML = `<div class="loader" style="min-height: ${teacherSelector.offsetHeight}px;"></div>`;
                    loader = true;
                }
            }

            if (!loader) {
                elem.innerHTML = miniLoader;
            }

            if (this.values.individualTeacherId) {
                this.values.selectedTeacherId = this.values.individualTeacherId;
                delete this.values.individualTeacherId;
            }

            if (this.values.individualDate && this.values.individualTime) {
                this.values.selectedDate = this.values.individualDate;
                this.values.selectedTime = this.values.individualTime;
            } else if ((this.values.selectedTeacherId > 0) && !this.values.individualCalendar && !this.values.selectedDate) {
                const teacher = this.teachers.find((e) => e.id === this.values.selectedTeacherId);
                this.values.selectedDate = (teacher.freeTime) ? teacher.freeTime.date : null;
            } else if (this.values.selectedTeacherId === -1 && !this.values.individualCalendar && !this.values.selectedDate) {
                this.values.selectedDate = (this.teachers.length) ? this.teachers[0].freeTime.date : null;
            }


            var queryString = this.apiUrl + '/content/form-teachers-fields?id=' + this.key;

            queryString += '&class_id=' + (this.values.class_id || 0) +
                '&selected_teacher_id=' + (this.values.selectedTeacherId || '') +
                '&selected_date=' + (this.values.selectedDate || '') + '&selected_time=' + (this.values.selectedTime || '')

            if (this.values.individualCalendar) {
                queryString += '&individual_calendar=' + this.values.individualCalendar
            }

            if (this.values.intervalDuration) {
                queryString += '&interval_duration=' + this.values.intervalDuration;
            }

            if (this.values.availableIntervals) {
                queryString += '&available_intervals=' + this.values.availableIntervals;
            }

            xhrObj = new XHR();

            xhrObj.init(
                {
                    method: 'GET',
                    queryString: queryString
                },
                (response) => {
                    var responseData = JSON.parse(response.response);
                    elem.innerHTML = responseData.content;
                    elem.style.minHeight = '';

                    this.teachers = responseData.teachers;
                    if (responseData.selectedTeacherId === -1) {
                        this.skip_teachers = true;
                        this.values.selectedTeacherId = -1
                    }

                    if (!this.values.intervalDuration) {
                        this.values.intervalDuration = responseData.intervalDuration;
                    }

                    this.selectedTeacher = responseData.selectedTeacher;
                    delete this.values.summa;
                    delete this.values.integrationId;
                    delete this.values.subscriptionId;
                    delete this.values.joinId;
                    delete this.values.userId;
                    delete this.values.notPayNow;

                    if (responseData.content !== "\n\n") {
                        if (this.selectedTeacher) {
                            this.otherFieldsForIndividual(false)
                        } else {
                            this.otherFieldsForIndividual(true);
                        }
                    }

                    if ((responseData.skipTeachers && this.values.selectedTeacherId === -1) || !this.values.selectedTeacherId) {
                        this.durationFieldsVisibility(false);
                    } else {
                        this.durationFieldsVisibility(true);
                    }

                    this.checkSelectedDuration();
                    this.initCalendar();
                    this.bindEvents();
                    this.setSubmitButton();
                    this.setNextButton();
                    this.disableNextButton();
                    this.validateFormFields();
                },
                (response) => {
                    throw response;
                });

        } catch (e) {
            console.log(e);
        }
    },

    checkSelectedDuration() {
        if (this.values.intervalDuration) {
            const elem = document.getElementById(`01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCxTeacher-duration-item-${this.values.intervalDuration}`);

            if (elem) {
                elem.classList.add('active');
            }
        }
    },

    loadTeachersFreeTime() {
        try {
            const elem = document.getElementById('wdgMoyklass' + this.id + 'FormTeachersFreeTime')
            if (!elem) {
                throw new Error("Teachers fields element not found!");
            }

            elem.innerHTML = `<div style="min-height: ${elem.offsetHeight}px;"></div>`;

            var queryString = this.apiUrl + '/content/form-teachers-freetime?id=' + this.key;

            queryString += '&class_id=' + (this.values.class_id || 0)
                + '&selected_teacher_id=' + (this.values.selectedTeacherId || '')
                + '&selected_date=' + (this.values.selectedDate)

            if (this.values.intervalDuration) {
                queryString += '&interval_duration=' + this.values.intervalDuration;
            }

            xhrObj = new XHR();

            xhrObj.init(
                {
                    method: 'GET',
                    queryString: queryString
                },
                (response) => {
                    var responseData = JSON.parse(response.response);
                    elem.innerHTML = responseData.content;
                    this.teachers = responseData.teachers;

                    delete this.values.summa;
                    delete this.values.integrationId;
                    delete this.values.subscriptionId;
                    delete this.values.joinId;
                    delete this.values.userId;
                    delete this.values.notPayNow;

                    this.checkFreeTimeError();
                    this.bindEvents();
                    this.setSubmitButton();
                    this.setNextButton();
                    this.disableNextButton();
                    this.validateFormFields();
                },
                (response) => {
                    throw response;
                });

        } catch (e) {
            console.log(e);
        }
    },

    checkAndDeleteTeachersFields() {
        const elem = document.getElementById('wdgMoyklass' + this.id + 'FormTeachersFields');
        delete this.values.selectedTeacherId;
        delete this.values.selectedDate;
        delete this.values.selectedTime;
        delete this.values.intervalDuration;

        if (elem && elem.firstChild) {
            while (elem.firstChild) {
                elem.removeChild(elem.firstChild);
            }
        }
    },

    checkFreeTimeError() {
        const container = document.getElementById('wdgMoyklass' + this.id + 'FormTeachersFreeTime');
        if (container && container.offsetHeight >= 150) {
            container.classList.add('teachers-time-scroll');
            container.classList.remove('no-grid-selector')
        } else {
            container.classList.remove('teachers-time-scroll')
        }
        const elems = Array.from(document.getElementsByClassName('wdgMoyklassForm-teachers-time-selector'));
        if (elems && elems[0]) {
            const container = elems[0];

            // Если ничего нет временных блоков, то в контейнере будет 3 элемета
            if (container.children.length === 1 && container.children[0].id === 'wdgMoyklassForm-teachers-time-selector-error') {
                const error = document.getElementById('wdgMoyklassForm-teachers-time-selector-error');
                error.classList.remove('hide')
                container.classList.add('no-grid-selector')
            }
        }
    },

    loadPaymentFields() {
        try {
            const elem = document.getElementById('wdgMoyklass' + this.id + 'FormPaymentFields')
            if (!elem) {
                throw new Error("Payment fields element not found!");
            }
            elem.innerHTML = miniLoader;

            var queryString = this.apiUrl + '/content/form-payment-fields?id=' + this.key;

            queryString += '&class_id=' + (this.values.class_id || 0);

            xhrObj = new XHR();

            xhrObj.init(
                {
                    method: 'GET',
                    queryString: queryString
                },
                (response) => {
                    var responseData = JSON.parse(response.response);
                    elem.innerHTML = responseData.content;
                    delete this.values.summa;
                    delete this.values.integrationId;
                    delete this.values.subscriptionId;
                    delete this.values.joinId;
                    delete this.values.userId;
                    delete this.values.notPayNow;
                    this.bindEvents();
                    this.setSubmitButton();
                    this.validateFormFields();
                    if (this.values.class_id) {
                        this.lessonsSelector.loadLessonsSelector();
                    }
                },
                (response) => {
                    throw response;
                });

        } catch (e) {
            console.log(e);
            console.log('stop by catch from lessons selector load');
        }
    },
}

// добавляем совместимость

WdgMoyklass["schedule01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx"] = WdgMoyklass["01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx"];

if (!WdgMoyklassCalendar) var WdgMoyklassCalendar = {};



function ModalManager(widget) {
    var self = this;
    self.widget = widget;

    self.modalContainerModal = document.createElement('div');
    self.modalContainerModal.setAttribute('id', 'SiteWidgetMoyklass' + self.widget.id + 'Modal');
    self.modalContainerModal.setAttribute('class', 'WdgMoyklassModal WdgMoyklassModalItem WdgMoyklassModalItemFade');
    self.modalContainerModal.addEventListener('click', function (event) {
        if (event.target.id == 'SiteWidgetMoyklass' + self.widget.id + 'Modal') {
            self.close();
        }
    });

    self.modalContainerDialog = document.createElement('div');
    self.modalContainerDialog.setAttribute('class', 'WdgMoyklassModalItem-dialog');

    self.modalContainerContent = document.createElement('div');
    self.modalContainerContent.setAttribute('class', 'WdgMoyklassModalItem-content');
    // self.modalContainerContent.addEventListener('click', function(){ console.log('click modalContainerContent'); });

    self.modalContainerClose = document.createElement('button');
    self.modalContainerClose.setAttribute('class', 'WdgMoyklassclose');
    self.modalContainerClose.innerHTML = '&times;';
    self.modalContainerClose.addEventListener('click', function () { self.close(); });
    self.modalContainerContent.appendChild(self.modalContainerClose);

    self.modalContainerContentBody = document.createElement('div');
    self.modalContainerContentBody.setAttribute('class', 'WdgMoyklassModalItem-body');
    self.modalContainerContent.appendChild(self.modalContainerContentBody);

    self.content = self.modalContainerContent.querySelector('.WdgMoyklassModalItem-body');

    // self.modalContainerContentForm = document.createElement('div');
    // self.modalContainerContentForm.innerHTML = '';
    // self.modalContainerContentBody.insertAdjacentHTML('beforeend', self.modalContainerContentForm.childNodes[0].nodeValue );

    self.modalContainerDialog.appendChild(self.modalContainerContent);
    self.modalContainerModal.appendChild(self.modalContainerDialog);

    document.querySelector("body").appendChild(self.modalContainerModal);
    self.modalContainerModal.classList.add("WdgMoyklassContent");

    return this;
}

ModalManager.prototype.open = function () {
    var self = this;

    if (!self.modalBackdrop) {
        self.modalBackdrop = document.createElement('div');
        self.modalBackdrop.setAttribute('id', 'wdgMoyklassModal-backdrop');
        self.modalBackdrop.setAttribute('class', 'WdgMoyklassModalItem-backdrop WdgMoyklassModalItemFade');
        document.body.appendChild(self.modalBackdrop);
    }
    //self.checkScrollbar();
    //self.setScrollbar();

    document.body.classList.add('WdgMoyklassModalItem-open');
    self.modalContainerModal.setAttribute('style', 'display:block;');

    if (typeof vkBridge !== 'undefined' && vkBridge.send) {

        if (!isMobile) {
            // Расчеет позиции модального окна для VK
            var heightModal = self['modalContainerDialog'].clientHeight;
            var height = self.widget.baseElement.clientHeight;
            var modalPosition = lastClickPositionY - Math.floor(heightModal / 2);
            // console.log('postion:' + modalPosition, 'height: ' + height, 'heightModal:' + heightModal, lastClickPositionY);
            if (lastClickPositionY > 216) {
                if ((modalPosition + heightModal + 50) > height) {
                    var position = lastClickPositionY - heightModal;
                    self['modalContainerDialog'].style.top = (position > 30 ? position : 30) + "px";
                } else {
                    self['modalContainerDialog'].style.top = (modalPosition > 0) ? modalPosition + "px" : "30px";
                }
            } else {
                self['modalContainerDialog'].style.top = "30px";
            }
        }
    }

    self.modalContainerModal.classList.add('WdgMoyklassModalItemIn');
    self.modalBackdrop.classList.add('WdgMoyklassModalItemIn');

    // для приложения VK прокручиваем страницу наверх к модальному окну
    if (typeof vkBridge != 'undefined' && typeof vkBridge.send != 'undefined') {
        if (typeof requestAllowMessages !== 'undefined') {
            requestAllowMessages();
        }
    }
    //   if (typeof vkAppAutosize != 'undefined') {
    //     vkAppAutosize('WdgMoyklassVkAppWrapper');
    //   }
    // }
};

ModalManager.prototype.close = function () {
    var self = this;

    self.modalContainerModal.setAttribute('style', 'display:none;');
    self.modalContainerModal.classList.remove('WdgMoyklassModalItemIn');
    self.modalBackdrop.parentNode.removeChild(self.modalBackdrop);
    self.modalBackdrop = null;
    //self.resetScrollbar();
    document.body.classList.remove('WdgMoyklassModalItem-open');


    self.widget.hideError();
    self.widget.hideSuccess();
    self.widget.bindPlace = 'base';

    // Если это приложение VK, подгоняем высоту фрейма под высоту контента
    // if (typeof VK != 'undefined' && typeof VK.callMethod != 'undefined' && typeof vkAppAutosize != 'undefined') {
    //   vkAppAutosize('WdgMoyklassVkAppWrapper');
    // }

    // Удалим выбранный параметр в форме, чтобы при новом октрытии он автоматически определился
    delete self.widget.values.intervalDuration;
};

// устанавливает отступы документа при открытии модального окна
ModalManager.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth;
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
        var documentElementRect = document.documentElement.getBoundingClientRect();
        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
    this.scrollbarWidth = this.measureScrollbar();
};

ModalManager.prototype.setScrollbar = function () {
    var bodyPad = parseInt((document.body.style.paddingRight || 0), 10);
    this.originalBodyPad = document.body.style.paddingRight || '';

    if (this.bodyIsOverflowing) {
        document.body.style.paddingRight = (bodyPad + this.scrollbarWidth) + 'px';
    }
};

ModalManager.prototype.resetScrollbar = function () {
    document.body.style.paddingRight = this.originalBodyPad;
};

ModalManager.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'WdgMoyklassModalItem-scrollbar-measure';
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    scrollDiv.parentNode.removeChild(scrollDiv);
    return scrollbarWidth;
};

function LessonsSelector(widget) {
    this.widget = widget;
    //var place = this.widget.getPlace();
    this.selectorElement = document.getElementById(this.widget.key + "FormLessonsContent");
    this.selectedLessons = [];
    this.Calendar = null;

    return this;
};

LessonsSelector.prototype.clear = function () {
    if (this.selectorElement) {
        this.selectorElement.innerHTML = "<div></div>";
    }

    this.selectedLessons = [];
    this.Calendar = null;
};

LessonsSelector.prototype.initCalendar = function (openDates) {
    var self = this;

    if (document.getElementById(self.widget.key + "hello-week")) {
        const prev = this.selectorElement.querySelector('.moyklassWidget-navCalendar-prev');
        const next = this.selectorElement.querySelector('.moyklassWidget-navCalendar-next');

        const today = new Date().setHours(0, 0, 0, 0);
        const todayCopy = new Date(today);
        const endDate = new Date(today).setDate(todayCopy.getDate() + +self.widget.daysCount);

        self.Calendar = new HelloWeek({
            selector: self.widget.key + "hello-week",
            langSettings: self.widget.lang === 'ru' ? LANG_RUS : LANG_ENG,
            highligthDates: openDates || [],
            format: "YYYY-MM-DD",
            monthShort: true,
            onlyHighlights: true,
            weekStart: 1,
            defaultDate: false,
            disableDatesFrom: endDate,
            onSelect: self.selectCalendarFilterDate,
            parentEl: self
        });

        prev.addEventListener('click', function () { return self.Calendar.prev() });
        next.addEventListener('click', function () { return self.Calendar.next() });
    }
};

LessonsSelector.prototype.loadLessonsSelector = function () {
    var self = this;

    try {
        if (!self.selectorElement) throw new Error("Lessons Selector Element not found!");
        self.selectorElement.innerHTML = miniLoader;

        var queryString = self.widget.apiUrl + '/content/form-lessons?id=' + self.widget.key;
        if (self.widget.values.class_id) {
            queryString += '&class_id=' + self.widget.values.class_id;

            xhrObj = new XHR();

            xhrObj.init(
                { method: "GET", queryString: queryString },
                function (response) {
                    var responseData = JSON.parse(response.response);
                    self.selectorElement.innerHTML = responseData.content;
                    if (responseData.content.includes('К сожалению')) {
                        self.widget.otherFieldsForIndividual(true)
                    }
                    self.initCalendar(responseData.lessonsDates);
                    self.updateElement();
                    self.bindEvents();
                },
                function (response) {
                    throw response;
                });
        } else {
            self.selectorElement.innerHTML = '';
        }

    } catch (e) {
        console.log('stop by catch from lessons selector load');
    }
};

LessonsSelector.prototype.loadLessonsMini = function (callback) {
    var self = this;

    try {
        var queryString = self.widget.apiUrl + '/content/minilessons?id=' + self.widget.key;
        if (self.widget.values.filial) {
            queryString += '&filial=' + self.widget.values.filial;
        }

        xhrObj = new XHR();

        xhrObj.init(
            { method: "GET", queryString: queryString },
            function (response) {
                callback(response);
            },
            function (response) {
                throw response;
            });

    } catch (e) {
        console.log('stop by catch from mini lessons load');
    }
};

LessonsSelector.prototype.updateElement = function () {
    var self = this;
    self.selectedLessons = [];

    setTimeout(function () {
        return self.setScrollBarLessonsContainer(document.getElementById(self.widget.key + 'FormLessonsContent'))
    }
        , 100);

    var lessonsHtmlCollection = document.getElementById(self.widget.key + "FormLessonsContent").getElementsByClassName("wdgMoyklassForm-lessons-item");

    Array.prototype.some.call(document.getElementById(self.widget.key + "FormLessonsContent").getElementsByClassName("wdgMoyklassForm-lessons-item"), function (el, index) {
        if (el.classList.contains('active')) {
            self.selectedLessons.push(el.getAttribute('attr-id'));
        }
    });

    self.widget.validateFormFields();
};

LessonsSelector.prototype.setScrollBarLessonsContainer = function (el) {
    if (el.querySelector(".wdgMoyklassForm-lessons-selector")) {
        var heightLessonContainer = 50;
        Array.prototype.some.call(el.getElementsByClassName("wdgMoyklassForm-lessons-item"), function (elItem, index) {
            heightLessonContainer += elItem.offsetHeight;
            return index == 1;
        });
        if (el.getElementsByClassName("wdgMoyklassForm-lessons-item").length > 3) {
            heightLessonContainer += 60;
        }
        el.querySelector(".wdgMoyklassForm-lessons-selector").style.height = heightLessonContainer + "px";
        el.querySelector(".wdgMoyklassForm-lessons-selector").style.opacity = "1";
    }
};

LessonsSelector.prototype.bindEvents = function () {
    var self = this;
    self.toggleViewButton = self.selectorElement.querySelector(".icon-mc-calendar");

    Array.prototype.some.call(this.selectorElement.getElementsByClassName("wdgMoyklassForm-lessons-item"), function (elItem, index) {
        var canjoin = elItem.getAttribute('attr-canjoin');
        if (canjoin !== 'false') {
            elItem.onclick = function () {
                self.selectItem(elItem);
            };
        }
    });

    if (self.toggleViewButton) {
        self.toggleViewButton.onclick = function (event) {
            self.toggleLessonCalendarFilter(event);
        };
    }
};

LessonsSelector.prototype.selectItem = function (elItem) {
    var self = this;
    var id = elItem.getAttribute('attr-id');
    var date = elItem.getAttribute('attr-date');
    var isEmpty = parseInt(elItem.getAttribute('attr-empty'));

    // document.getElementById("FormLessonsContent").querySelector(".FormLessonsContent-count").classList.remove("error");
    var lessonsCount = self.selectorElement.querySelector(".wdgMoyklassForm-lessons-selector").getAttribute("attr-lessons-count");
    //var formButton = document.getElementById("FormSubmitBtn");

    if (parseInt(lessonsCount) > 1 && !isEmpty) {
        var allItems = self.selectorElement.getElementsByClassName('wdgMoyklassForm-lessons-item');

        var indexLesson = self.selectedLessons.findIndex(function (el) { return el == id });

        if (indexLesson == -1) {
            self.selectedLessons.push(id);
        } else {
            self.selectedLessons.splice(indexLesson, 1);
        }

        self.updateCalendarActiveDate(id, date, indexLesson === -1);

        Array.prototype.forEach.call(allItems, function (el) {
            el.classList.remove("active");
        });

        self.selectedLessons.forEach(function (elId) {
            return self.selectorElement.querySelector('[attr-id="' + elId + '"]').classList.add("active");
        });

        self.selectorElement.querySelector('.FormLessonsContent-count span').innerHTML = self.selectedLessons.length;

        if (self.selectedLessons.length > 0) {
            self.selectorElement.querySelector('.FormLessonsContent-count').classList.remove("error");
        } else {
            self.selectorElement.querySelector('.FormLessonsContent-count').classList.add("error");
        }

        self.widget.validateFormFields();

        console.log(self.selectedLessons);
    }
};

LessonsSelector.prototype.updateCalendarActiveDate = function (id, date, isAdd) {
    var self = this;
    if (!self.selectedLessonsDate) self.selectedLessonsDate = [];
    var index = self.selectedLessonsDate.findIndex(function (el) { return el.date == date && el.id === id });

    if (index == -1) {
        self.selectedLessonsDate.push({ id, date })
    } else if (index > -1 && !isAdd) {
        self.selectedLessonsDate.splice(index, 1);
    }

    if (self.Calendar) {
        self.Calendar.selectDays(self.selectedLessonsDate);
    }
};

LessonsSelector.prototype.toggleLessonCalendarFilter = function (mouseEvent) {
    var self = this;
    var calendarEl = self.selectorElement.querySelector(".FormLessonsContent-calendarFilter");
    var lessonsEl = self.selectorElement.querySelector(".wdgMoyklassForm-lessons-selector");

    //if(mouseEvent) self.toggleLessonCalendarBtn = mouseEvent.target;

    if (calendarEl.style.opacity == '1') {
        calendarEl.style.overflow = 'hidden';
        calendarEl.style.opacity = "0";
        calendarEl.style.height = "0px";
        lessonsEl.style.transition = "opacity 0.4s";
        lessonsEl.style.opacity = "1";
        lessonsEl.style.height = "100%";
        //wdgObj.toggleLessonCalendarBtn.classList.remove('disableBtn');
        self.setScrollBarLessonsContainer(this.selectorElement);
    } else {
        //self.toggleLessonCalendarBtn.classList.add('disableBtn');
        calendarEl.style.overflow = 'inherit';
        calendarEl.style.opacity = "1";
        calendarEl.style.height = "auto";
        lessonsEl.style.transition = "none";
        lessonsEl.style.opacity = "0";
        lessonsEl.style.height = "0px";
    }
};

LessonsSelector.prototype.selectCalendarFilterDate = function () {
    var selector = this.options.parentEl;
    selector.toggleLessonCalendarFilter();
    //wdgObj.selectedLessons = [];
    selector.scrollToLessonDate(this.lastSelectedDay);
};

LessonsSelector.prototype.scrollToLessonDate = function (date) {
    scrollToTarget(document.getElementById(this.widget.key + 'dateTitleLesson' + date), this.selectorElement.querySelector('.wdgMoyklassForm-lessons-selector'));
}

function RequestSender(widget) {
    this.widget = widget;
    this.errors = [];
    this.formEl = widget.getPlace().querySelector('form');

    return this;
};

RequestSender.prototype.send = function () {
    var self = this;

    try {
        const actionType = self.widget.submitButtonElement.getAttribute('action-type');

        let isLeadForm = false;
        if (['lead_form', 'lead_button', 'lead_self_button'].includes(self.widget.type)) {
            isLeadForm = true;
        }

        var queryString = `${this.widget.apiUrl}/${isLeadForm ? 'lead_form' : (actionType === 'pay' ? 'payment' : '')}?id=${self.widget.key}`;
        var formData = this.getFormData(); // заодно ищет ошибки

        self.widget.hideError();
        self.widget.hideSuccess();
        this.checkFormDataErrors();

        xhrObj = new XHR();
        self.widget.disableSubmitButton();
        xhrObj.init(
            {
                method: "POST",
                queryString: queryString,
                formData: window.roistat ? formData.concat(`&roistat=${window.roistat.visit}`) : formData,
                headers: [['Content-Type', 'application/x-www-form-urlencoded']],
            },
            function (response) {
                self.widget.enableSubmitButton();
                if (response.status == 400) {
                    var data = JSON.parse(response.responseText);

                    if (typeof data.errors == 'string') {
                        if (data.code === 'userAlreadyJoined') {
                            self.widget.viewSuccess(data.errors);
                        } else {
                            self.widget.viewError(data.errors);
                        }
                    } else {
                        self.errors = data.errors.map(function (el) {
                            if (el.param === 'class_id') {
                                return { field: el.param, message: el.msg };
                            } else {
                                return { field: el.param.replace('params.', 'fld').replace('params[', 'fld').replace(']', ''), message: el.msg };
                            }
                        });

                        self.checkFormDataErrors();
                    }

                    if (!data.isNeedToPay) {
                        self.widget.disableSubmitButton();
                        self.formFieldsOnChange();
                    }

                    if (data.isNeedToPay && data.joinId && data.userId) {
                        self.widget.disableSubmitButton();
                        self.widget.values.joinId = data.joinId;
                        self.widget.values.userId = data.userId;
                        self.widget.values.summa = data.summa;

                        const paymentBlock = document.getElementById('TotalPaymentSum01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx');
                        if (data.summa === -1) {
                            const partialJoin = document.getElementById('PaymentSumInputBlock01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx');
                            if (partialJoin) {
                                partialJoin.classList.add('hide');
                            }
                            if (paymentBlock) {
                                paymentBlock.innerHTML = 0;
                            }
                        } else if (paymentBlock) {
                            paymentBlock.innerHTML = data.summa;
                        }

                        setTimeout(function () {
                            self.payForExistingJoin();
                        }, 3000);
                    }
                }

                if (response.status == 200) {
                    self.widget.disableSubmitButton();
                    self.formFieldsOnChange();
                    var data = JSON.parse(response.responseText);
                    let redirecting = false;

                    if (!data.directUrl && data.summa === 0) {
                        const paymentBlock = document.getElementById('TotalPaymentSum01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx');
                        const partialJoin = document.getElementById('PaymentSumInputBlock01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx');
                        if (paymentBlock) {
                            paymentBlock.innerHTML = 0;
                        }
                        if (partialJoin) {
                            partialJoin.classList.add('hide')
                        }
                    }

                    if (data.directUrl && actionType === 'pay') {
                        // window.open(data.directUrl);
                        top.window.location.href = data.directUrl;
                        self.widget.modalElement.close();
                        redirecting = true;
                    }

                    self.widget.disableGoBackButton();

                    if (actionType === 'joinAndPay' && data.joinId && data.userId && data.isNeedToPay) {
                        self.widget.values.joinId = data.joinId;
                        self.widget.values.userId = data.userId;
                        self.payForExistingJoin();
                    } else {
                        self.widget.viewSuccess(data.message);
                        // self.widget.clearFilterForm();
                        // self.widget.checkClassDescription();
                        // self.widget.disableSubmitButton();
                        // setTimeout(function() {
                        //   if (self.widget.values.class_id) {
                        //     self.widget.enableSubmitButton();
                        //   }
                        // }, 3000);

                        // если установлен google-аналитикс
                        // отправляем событие об успешной отправке заявки
                        if (typeof ga == 'function') {
                            console.log('send google');
                            ga('send', 'event', 'wdgMoyklass', 'submit', '01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx');
                            ga('send', 'pageview', '/wdgMoyklass_submit_01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx');
                        }

                        // если установлен google-tag-manager-аналитикс
                        // отправляем событие об успешной отправке заявки
                        if (typeof gtag == 'function') {
                            console.log('send google gtag');
                            gtag('event', 'send_request', {
                                'event_label': 'wdgMoyklass - 01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx',
                                'event_category': 'wdgmoyklass'
                            });
                        }

                        // если указано событие для яндекс метрики
                        if (self.widget.metrics.yandex != '') {
                            if (typeof ym == 'function') {
                                console.log('send yandex', self.widget.metrics.yandex, self.widget.key);
                                ym(parseInt(self.widget.metrics.yandex), 'reachGoal', self.widget.key);
                            }
                        }

                        if (!self.widget.isVK && self.widget.success_url && !redirecting) {
                            window.location = self.widget.success_url;
                        }
                    }
                }
            },
            function (response) {
                self.widget.enableSubmitButton();
                throw response;
            });

    } catch (e) {
        console.log('stop by catch from send form', e);
        self.widget.enableSubmitButton();
    }
};

RequestSender.prototype.payForExistingJoin = function () {
    var self = this;

    try {
        xhrObj = new XHR();
        self.widget.disableSubmitButton();
        xhrObj.init(
            {
                method: "POST",
                queryString: `${this.widget.apiUrl}/payment?id=${self.widget.key}`,
                formData: this.getFormData(),
                headers: [
                    ['Content-Type', 'application/x-www-form-urlencoded']
                ]
            },
            function (response) {
                self.widget.enableSubmitButton();
                if (response.status == 400) {
                    var data = JSON.parse(response.responseText);

                    if (typeof data.errors == 'string') {
                        if (data.code === 'userAlreadyJoined') {
                            self.widget.viewSuccess(data.errors);
                        } else {
                            self.widget.viewError(data.errors);
                        }
                    } else {
                        self.errors = data.errors.map(function (el) {
                            if (el.param === 'class_id') {
                                return { field: el.param, message: el.msg };
                            } else {
                                return { field: el.param.replace('params.', 'fld'), message: el.msg };
                            }
                        });

                        self.checkFormDataErrors();
                    }
                }

                if (response.status == 200) {
                    var data = JSON.parse(response.responseText);
                    self.widget.viewSuccess(data.message);

                    self.widget.clearFilterForm();
                    self.widget.checkClassDescription();

                    self.widget.disableSubmitButton();

                    self.formFieldsOnChange();
                    self.submitButtonEvent();

                    // setTimeout(function() {
                    //   if (self.widget.values.class_id) {
                    //     self.widget.enableSubmitButton();
                    //   }
                    // }, 3000);

                    // если установлен google-аналитикс
                    // отправляем событие об успешной отправке заявки
                    if (typeof ga == 'function') {
                        console.log('send google');
                        ga('send', 'event', 'wdgMoyklass', 'submit', '01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx');
                        ga('send', 'pageview', '/wdgMoyklass_submit_01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx');
                    }

                    // если установлен google-tag-manager-аналитикс
                    // отправляем событие об успешной отправке заявки
                    if (typeof gtag == 'function') {
                        console.log('send google gtag');
                        gtag('event', 'send_request', {
                            'event_label': 'wdgMoyklass - 01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx',
                            'event_category': 'wdgmoyklass'
                        });
                    }

                    // если указано событие для яндекс метрики
                    if (self.widget.metrics.yandex != '') {
                        if (typeof ym == 'function') {
                            console.log('send yandex', self.widget.metrics.yandex, self.widget.key);
                            ym(parseInt(self.widget.metrics.yandex), 'reachGoal', self.widget.key);
                        }
                    }

                    if (data.directUrl) {
                        top.window.location.href = data.directUrl;
                        // window.open(data.directUrl);
                        self.widget.modalElement.close();
                    }
                }
            },
            function (response) {
                self.widget.enableSubmitButton();
                throw response;
            });

    } catch (e) {
        console.log('stop by catch from send form', e);
        self.widget.enableSubmitButton();
    }
};

RequestSender.prototype.checkFormDataErrors = function () {
    var self = this;

    console.log(this.errors);
    if (this.errors.length > 0) {
        for (var i = 0; i < this.errors.length; i++) {
            var formFieldEl = self.formEl.elements[self.errors[i].field];

            if (formFieldEl) {
                var formFieldElBlock = document.getElementById(formFieldEl.id + 'Item');
                if (formFieldElBlock) {
                    var formFieldLabelEl = formFieldElBlock.querySelector('label');

                    formFieldElBlock.classList.add('error');
                    formFieldElBlock.classList.remove('hide');

                    if (formFieldLabelEl.innerHTML.trim() == "") {
                        formFieldLabelEl.innerHTML = self.errors[i].message;
                    } else {
                        formFieldLabelEl.selfLabel = true;
                    }
                } else {
                    formFieldEl.classList.add('error');
                }
                // при исправлении проверяем данные на корректность
                formFieldEl.addEventListener('keyup', function (event) {
                    self.checkFormElementsValue(event.srcElement);
                });

                formFieldEl.addEventListener('change', function (event) {
                    self.checkFormElementsValue(event.srcElement);
                });
            }
        }

        const error = self.widget.lang === 'ru'
            ? 'Неправильно заполнены поля формы, проверьте введеные данные!'
            : 'The form fields are filled in incorrectly, check the entered data!';
        self.widget.viewError(error);
        throw new Error("Form data not valid: ", self.errors);
    }
};

RequestSender.prototype.formFieldsOnChange = function () {
    const self = this;
    for (const el of self.formEl) {
        const name = el.getAttribute('name')
        if (name.includes('fl')) {
            el.addEventListener('change', (event) => {
                self.widget.enableSubmitButton();
            })
        }
    }
};

RequestSender.prototype.removeFieldOnChange = function () {
    const self = this;
    for (const el of self.formEl) {
        const name = el.getAttribute('name')
        if (name.includes('fl')) {
            el.removeEventListener('change');
        }
    }
};

RequestSender.prototype.submitButtonEvent = function () {
    const self = this;
    if (self.widget.submitButtonElement.classList.contains('disabled')) {
        self.widget.submitButtonElement.addEventListener('click', (event) => {
            if (!self.widget.submitButtonElement.classList.contains('disabled')) {
                self.removeFieldOnChange();
            }
        })
    }
}

RequestSender.prototype.checkFormElementsValue = function (el) {
    const self = this;

    // если элемент найден
    if (typeof el != 'undefined') {
        const value = el.value;
        const parent = self.formEl.querySelector('#' + el.id + 'Item');
        const label = parent.querySelector('label');
        const fieldAttrType = el.getAttribute('attr-type');

        let field = el.getAttribute('name').substring(3);
        if (['filial', 'class_id', 'subscriptionId', 'integrationId'].indexOf(el.getAttribute('name')) > -1) {
            field = el.getAttribute('name');
        }

        // телефон
        if (field == 'phone') {
            const phone = value.replace(/[^0-9]/g, '');
            const phoneFormat = el.getAttribute("attr-phone-format") || 'common';
            const isPhoneValid = phoneFormat == 'common' || (phone.length == 10 || (phone.length == 11 && (phone[0] == '7' || phone[0] == '8')));

            if (!isPhoneValid) {
                parent.classList.add('error');
                if (typeof label != 'undefined') {
                    const error = self.widget.lang === 'ru' ? 'Некорректный номер' : 'Incorrect phone number';
                    label.innerHTML = error;
                }
            } else {
                parent.classList.remove('error');
                if (typeof label != 'undefined') {
                    label.innerHTML = " ";
                }
            }

            return true;
        }

        const emailValidationRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        // email
        if (field == 'email') {
            if (value && !emailValidationRegexp.test(value)) {
                parent.classList.add('error');
                if (typeof label != 'undefined') {
                    const error = self.widget.lang === 'ru' ? 'Некорректный email' : 'Incorrect email';
                    label.innerHTML = error;
                }
            } else {
                parent.classList.remove('error');
                if (typeof label != 'undefined') {
                    label.innerHTML = " ";
                }
            }

            return true;
        }

        // counter
        if (fieldAttrType === 'counter') {
            const isCounterValid = !value || (
                value.match(/^(-?)([0-9]+)$/)
                && value >= -2147483647
                && value <= 2147483647
            )

            if (!isCounterValid) {
                parent.classList.add('error');
                if (typeof label != 'undefined') {
                    const error = self.widget.lang === 'ru' ? 'Значение должно быть целым числом' : 'Value should be whole number';
                    label.innerHTML = error;
                }
            } else {
                parent.classList.remove('error');
                if (typeof label != 'undefined') {
                    label.innerHTML = " ";
                }
            }

            return true;
        }

        // name
        if (field) {
            if (!value) {
                parent.classList.add('error');
                if (typeof label != 'undefined') {
                    const error = self.widget.lang === 'ru' ? 'Заполните поле' : 'Fill in the field';
                    label.innerHTML = error;
                }
            } else {
                parent.classList.remove('error');
                if (typeof label != 'undefined' && !label.selfLabel) {
                    label.innerHTML = " ";
                }
            }
        }

        console.log(field, value);
        self.widget.hideError();
    }
};

RequestSender.prototype.clearFormDataErrors = function () {
    if (this.errors.length > 0) {
        this.errors = [];

        var inputs = this.formEl.elements;

        for (var i = 0; i < inputs.length; i++) {
            var formFieldElBlock = document.getElementById(inputs[i].id + 'Item');

            if (formFieldElBlock) {
                let isError = formFieldElBlock.classList.contains('error');
                formFieldElBlock.classList.remove('error');
                var label = formFieldElBlock.querySelector("label");

                if (label && isError) label.innerHTML = " ";
            }
        }

        this.widget.hideError();
    }
};

RequestSender.prototype.getFormData = function () {
    var dataString = '';
    var self = this;
    self.errors = [];

    if (self.formEl.elements['class_id'] && !this.widget.values.class_id) {
        this.widget.values.class_id = self.formEl.elements['class_id'].value;
    }
    if (this.widget.values.class_id) {
        if (this.widget.values.notPayNow) {
            dataString += '&notPayNow=1';
        }
        dataString += '&class_id=' + this.widget.values.class_id;
        dataString += '&locationUrl=' + window.location.href;
        const selectedClass = this.widget.classesData ? this.widget.classesData.find(({ id }) => +id === +this.widget.values.class_id) : null;
        if (selectedClass && selectedClass.onlinePayment.enabledFromWidgets && !this.widget.values.notPayNow) {
            if (selectedClass.payType === 1 && this.widget.values.subscriptionId) {
                dataString += '&subscriptionId=' + this.widget.values.subscriptionId;
                if (this.widget.values.subscriptionStartDate) {
                    dataString += '&subscriptionStartDate=' + this.widget.values.subscriptionStartDate;
                }
            } else if (selectedClass.payType === 1) {
                self.errors.push({ field: 'subscriptionId', message: 'Абонемент не выбран' })
            }

            if (selectedClass.onlinePayment.partialPaymentForNewJoin) {
                if (this.widget.values.summa && self.widget.validatePaymentSum()) {
                    dataString += '&summa=' + this.widget.values.summa;
                } else {
                    self.errors.push({ field: 'summa', message: 'Неверная сумма' })
                }
            } else if (this.widget.values.summa) {
                dataString += '&summa=' + this.widget.values.summa;
            }

            if (this.widget.values.integrationId) {
                dataString += '&integrationId=' + this.widget.values.integrationId;
            } else {
                self.errors.push({ field: 'integrationId', message: 'Платежная система не выбрана' })
            }
        }
    } else if (!this.widget.values.class_id && !['lead_form', 'lead_button', 'lead_self_button'].includes(this.widget.type)) {
        self.errors.push({ field: 'class_id', message: 'Группа не выбрана' })
    }

    if (this.widget.values.selectedTime && this.widget.values.selectedDate && this.widget.values.selectedTeacherId) {
        dataString += '&selectedTime=' + this.widget.values.selectedTime + '&selectedDate=' + this.widget.values.selectedDate + '&selectedTeacherId=' + this.widget.values.selectedTeacherId + '&intervalDuration=' + this.widget.values.intervalDuration;
    }

    if (this.widget.values.joinId) {
        dataString += `&joinId=${this.widget.values.joinId}`;
    }
    if (this.widget.values.userId) {
        dataString += `&userId=${this.widget.values.userId}`;
    }

    if (self.formEl.elements['filial'] && !this.widget.values.filial) {
        this.widget.values.filial = self.formEl.elements['filial'].value;
    }
    if (!this.widget.values.filial) {
        self.errors.push({ field: 'filial', message: 'Филиал не выбран' })
    } else {
        dataString += `&filial_id=${this.widget.values.filial}`
    }

    var lessonsString = '';

    if (self.formEl.elements['lesson_id']) {
        lessonsString = '&lesson_ids[]=' + self.formEl.elements['lesson_id'].value;
    }

    if (this.widget.lessonsSelector && this.widget.lessonsSelector.selectedLessons.length > 0) {
        lessonsString = '';
        for (var i = 0; i < this.widget.lessonsSelector.selectedLessons.length; i++) {
            lessonsString += '&lesson_ids[]=' + this.widget.lessonsSelector.selectedLessons[i];
        }
    }

    dataString += lessonsString;
    const { lang } = this.widget;
    this.widget.fields.forEach(function (field) {
        if (field.checked) {
            var fieldHtml = self.formEl.elements['fld' + field.id];

            if (fieldHtml) {
                var urlValue = fieldHtml.value;

                if (field.type == 'phone') {
                    const phoneFormat = fieldHtml.getAttribute("attr-phone-format");

                    urlValue = urlValue.replace(/[^0-9]/g, '');
                    // Если выбран формат телефона russian, и введена только 7 (по умолчанию),
                    // очищаем значение ввода, т.к. человек ничего не ввел.
                    if (phoneFormat === 'russian' && urlValue === '7') {
                        fieldHtml.value = null;
                    }
                };
                if (field.type == 'boolean') urlValue = !!fieldHtml.checked;

                if (field.type == 'birthday') {
                    var day = self.formEl.elements['fld' + field.id + 'day'].value;
                    var month = self.formEl.elements['fld' + field.id + 'month'].value;
                    urlValue = fieldHtml.value + '-' + month + '-' + day;

                    if (!isValidDate(fieldHtml.value, parseInt(month) - 1, day)) {
                        if (field.required) {
                            self.errors.push({ field: 'fld' + field.id, message: (lang === 'ru') ? 'Неправильная дата' : 'Incorrect date' });
                        }
                    }

                    console.log(day, month, urlValue, fieldHtml.value);
                }

                var error = null;
                if (field.required) {
                    switch (field.type) {
                        case 'select':
                        case 'birthday':
                        case 'checkbox':
                            if (!fieldHtml.value || fieldHtml.value == 0) {
                                error = {
                                    field: 'fld' + field.id,
                                    message: (lang === 'ru') ? 'Выберите значение' : 'Select a value',
                                };
                            }
                            break;
                        case 'boolean':
                            if (!urlValue) {
                                error = {
                                    field: 'fld' + field.id,
                                    message: `${field.other_name || field.name}*`,
                                };
                            }
                            break;
                        default:
                            if (!fieldHtml.value) {
                                error = {
                                    field: 'fld' + field.id,
                                    message: (lang === 'ru') ? 'Заполните поле' : 'Fill in the field',
                                };
                            }
                            break;
                    }
                }

                if (fieldHtml.value) {
                    if (field.type === 'phone') {
                        const phoneFormat = fieldHtml.getAttribute("attr-phone-format");
                        const isPhoneValid = phoneFormat == 'common' || (urlValue.length == 10 || (urlValue.length == 11 && (urlValue[0] == '7' || urlValue[0] == '8')));
                        if (!isPhoneValid) {
                            error = {
                                field: 'fld' + field.id,
                                message: (lang === 'ru') ? 'Некорректный номер' : 'Incorrect phone number',
                            };
                        }
                    }

                    if (field.type == 'email') {
                        const emailValidationRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                        if (!emailValidationRegexp.test(urlValue)) {
                            error = {
                                field: 'fld' + field.id,
                                message: (lang === 'ru') ? 'Некорректный email' : 'Incorrect email',
                            };
                        }
                    }

                    if (field.type === 'counter') {
                        const isCounterValid = fieldHtml.value.match(/^(-?)([0-9]+)$/)
                            && fieldHtml.value >= -2147483647
                            && fieldHtml.value <= 2147483647

                        if (!isCounterValid) {
                            error = {
                                field: 'fld' + field.id,
                                message: lang === 'ru'
                                    ? 'Значение должно быть целым числом'
                                    : 'Value should be whole number',
                            };
                        }
                    }
                }

                if (error) self.errors.push(error);


                if (field.type == 'checkbox') {
                    if (urlValue !== '0') {
                        dataString += '&params[' + field.id + '][]=' + urlValue;
                    }
                } else {
                    if (field.type == 'birthday') {
                        if (fieldHtml.value != 0) {
                            dataString += '&params[' + field.id + ']=' + urlValue;
                        }
                    } else {
                        dataString += '&params[' + field.id + ']=' + urlValue;
                    }
                }
            }
        }
    });

    if (typeof this.formEl.elements["subscribe"] != 'undefined') {
        if (this.formEl.elements["subscribe"].checked) {
            dataString += '&subscribe=' + this.formEl.elements["subscribe"].value;
        }
    }

    if (typeof this.formEl.elements["comment"] != 'undefined') {
        dataString += '&comment=' + this.formEl.elements["comment"].value;
    }

    if (self.widget.vkData.user_id && self.widget.vkData.group_id) {
        dataString += '&vkUserId=' + self.widget.vkData.user_id + "&vkGroupId=" + self.widget.vkData.group_id;
    }

    console.log(dataString);

    return dataString;
};

// Запустим инициализацию виджета как только документ загрузится
document.addEventListener("DOMContentLoaded", function () {
    console.log("Its ok")
    WdgMoyklass["01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx"].init();
});

// //Полифилл IE9 classList  Источник: https://gist.github.com/k-gun/c2ea7c49edf7b757fe9561ba37cb19ca
// ; (function () {
//     // helpers
//     var regExp = function (name) {
//         return new RegExp('(^| )' + name + '( |$)');
//     };
//     var forEach = function (list, fn, scope) {
//         for (var i = 0; i < list.length; i++) {
//             fn.call(scope, list[i]);
//         }
//     };

//     if (detectIE() != false) {
//         Array.prototype.find = Array.prototype.find || function (callback) {
//             if (this === null) {
//                 throw new TypeError('Array.prototype.find called on null or undefined');
//             } else if (typeof callback !== 'function') {
//                 throw new TypeError('callback must be a function');
//             }
//             var list = Object(this);
//             // Makes sureelFormValuesContent has an positive integer as length.
//             var length = list.length >>> 0;
//             var thisArg = arguments[1];
//             for (var i = 0; i < length; i++) {
//                 var element = list[i];
//                 if (callback.call(thisArg, element, i, list)) {
//                     return element;
//                 }
//             }
//         };

//         Array.prototype.findIndex = Array.prototype.findIndex || function (callback) {
//             if (this === null) {
//                 throw new TypeError('Array.prototype.findIndex called on null or undefined');
//             } else if (typeof callback !== 'function') {
//                 throw new TypeError('callback must be a function');
//             }
//             var list = Object(this);
//             // Makes sures is always has an positive integer as length.
//             var length = list.length >>> 0;
//             var thisArg = arguments[1];
//             for (var i = 0; i < length; i++) {
//                 if (callback.call(thisArg, list[i], i, list)) {
//                     return i;
//                 }
//             }
//             return -1;
//         };
//     }

//     // class list object with basic methods
//     function ClassList(element) {
//         this.element = element;
//     }

//     ClassList.prototype = {
//         add: function () {
//             forEach(arguments, function (name) {
//                 if (!this.contains(name)) {
//                     this.element.className += ' ' + name;
//                 }
//             }, this);
//         },
//         remove: function () {
//             forEach(arguments, function (name) {
//                 this.element.className =
//                     this.element.className.replace(regExp(name), '');
//             }, this);
//         },
//         toggle: function (name) {
//             return this.contains(name)
//                 ? (this.remove(name), false) : (this.add(name), true);
//         },
//         contains: function (name) {
//             return regExp(name).test(this.element.className);
//         },
//         // bonus..
//         replace: function (oldName, newName) {
//             this.remove(oldName), this.add(newName);
//         }
//     };

//     // IE8/9, Safari
//     if (!('classList' in Element.prototype)) {
//         Object.defineProperty(Element.prototype, 'classList', {
//             get: function () {
//                 return new ClassList(this);
//             }
//         });
//     }

//     // replace() support for others
//     if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
//         DOMTokenList.prototype.replace = ClassList.prototype.replace;
//     }
// })();

// function detectIE() {
//     var ua = window.navigator.userAgent;

//     // Test values; Uncomment to check result …

//     // IE 10
//     // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

//     // IE 11
//     // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

//     var msie = ua.indexOf('MSIE ');
//     if (msie > 0) {
//         // IE 10 or older => return version number
//         return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
//     }

//     var trident = ua.indexOf('Trident/');
//     if (trident > 0) {
//         // IE 11 => return version number
//         var rv = ua.indexOf('rv:');
//         return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
//     }

//     // var edge = ua.indexOf('Edge/');
//     // if (edge > 0) {
//     //   // Edge (IE 12+) => return version number
//     //   return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
//     // }

//     // other browser
//     return false;

// }

// // Переделанный календарь hello week https://www.cssscript.com/minimal-clean-inline-date-picker-hello-week/
// var HelloWeek = /** @class */ (function () {
//     function HelloWeek(options) {
//         if (options === void 0) { options = {}; }
//         this.selectedDays = [];
//         this.highligthDates = [];
//         this.options = HelloWeek.extend(options);
//         this.selector = typeof this.options.selector === 'string' ? document.getElementById(this.options.selector) : this.options.selector;
//         // Early throw if selector doesn't exists
//         if (this.selector === null) {
//             throw new Error('You need to specify a selector!');
//         }
//         this.activeDates = null;
//         this.date = this.options.defaultDate ? new Date(this.options.defaultDate) : new Date();
//         this.defaultDate = this.options.defaultDate ? new Date(this.options.defaultDate) : new Date();
//         this.currentDay = new Date();
//         this.highligthDates = this.options.highligthDates || [];
//         this.disableDatesFrom = this.options.disableDatesFrom || [];
//         this.langs = this.options.langSettings;
//         this.month = this.selector.querySelector('.' + HelloWeek.CSS_CLASSES.MONTH);
//         this.week = this.selector.querySelector('.' + HelloWeek.CSS_CLASSES.WEEK);
//         this.label = this.selector.querySelector('.' + HelloWeek.CSS_CLASSES.LABEL);
//         // this.readFile(this.options.langFolder + this.options.lang + '.json', (text: any) => {
//         //     this.langs = JSON.parse(text);
//         //     this.init(() => { /** callback function */ });
//         // });
//         this.init(function () { });
//     }
//     /**
//      * Call
//      * @param {CallbackFunction} callback
//      */
//     HelloWeek.prototype.init = function (callback) {
//         if (this.options.format) {
//             this.currentDay = this.formatDate(this.currentDay, this.options.format);
//             if (this.options.defaultDate) {
//                 this.selectedDays.push(this.formatDate(this.defaultDate, this.options.format));
//             }
//         }
//         this.date.setDate(1);
//         this.updted();
//         this.options.onLoad.call(this);
//         if (callback) {
//             callback.call(this);
//         }
//     };
//     /**
//      * Public method
//      * Method to change the month to the previous, also you can send a callback function like a parameter.
//      * @param {CallbackFunction} callback
//      */
//     HelloWeek.prototype.prev = function (callback) {
//         this.clearCalendar();
//         var prevMonth = this.date.getMonth() - 1;
//         this.date.setMonth(prevMonth);
//         this.updted();
//         this.options.onChange.call(this);
//         if (callback) {
//             callback.call(this);
//         }
//     };
//     /**
//      * Public method
//      * Method to change the month to the next, also you can send a callback function like a parameter.
//      * @param {CallbackFunction} callback
//      */
//     HelloWeek.prototype.next = function (callback) {
//         this.clearCalendar();
//         var nextMonth = this.date.getMonth() + 1;
//         this.date.setMonth(nextMonth);
//         this.updted();
//         this.options.onChange.call(this);
//         if (callback) {
//             callback.call(this);
//         }
//     };
//     /**
//      * Public method
//      *
//      */
//     HelloWeek.prototype.today = function () {
//         this.clearCalendar();
//         this.date = new Date();
//         this.date.setDate(1);
//         this.updted();
//     };
//     /**
//      * Public method
//      *
//      */
//     HelloWeek.prototype.clear = function () {
//         this.clearCalendar();
//         this.date.setDate(1);
//         this.selectedDays = [];
//         this.updted();
//     };
//     /**
//      * Select day
//      * @param {CallbackFunction} callback
//      */
//     HelloWeek.prototype.selectDay = function (callback) {
//         var _this = this;
//         this.activeDates = this.selector.querySelectorAll('.' + HelloWeek.CSS_CLASSES.IS_ACTIVE);
//         for (var _i = 0, _a = Object.keys(this.activeDates); _i < _a.length; _i++) {
//             var i = _a[_i];
//             this.activeDates[i].addEventListener('click', function (event) {
//                 var selectDay = event.target;
//                 _this.selectDate = selectDay;
//                 if (_this.options.format) {
//                     // date formated
//                     _this.lastSelectedDay = _this.formatDate(parseInt(selectDay.dataset.timestamp) * 1000, _this.options.format);
//                 }
//                 else {
//                     // date in timestamp
//                     _this.lastSelectedDay = selectDay.dataset.timestamp;
//                 }

//                 _this.options.onSelect.call(_this);
//                 if (callback) {
//                     callback.call(_this);
//                 }
//             });
//         }
//     };
//     HelloWeek.prototype.creatWeek = function (dayShort) {
//         var weekDay = document.createElement('span');
//         weekDay.classList.add(HelloWeek.CSS_CLASSES.WEEK_DAY);
//         weekDay.textContent = dayShort;
//         this.week.appendChild(weekDay);
//     };
//     HelloWeek.prototype.createMonth = function () {
//         var currentMonth = this.date.getMonth();
//         while (this.date.getMonth() === currentMonth) {
//             this.createDay(this.date.getDate(), this.date.getDay());
//             // jump while
//             this.date.setDate(this.date.getDate() + 1);
//         }
//         // put correct month
//         this.date.setMonth(this.date.getMonth() - 1);
//         this.selectDay(function () { });
//     };
//     HelloWeek.prototype.selectDays = function (dates) {
//         this.clearCalendar();
//         this.selectedDays = dates.map((el) => el.date);
//         this.updted();
//     };
//     /**
//      * Create days inside hello-week
//      * @param {number} num
//      * @param {number} day
//      */
//     HelloWeek.prototype.createDay = function (num, day) {
//         var _this = this;
//         var unixTimestamp = Date.parse(this.date);
//         var timestamp = unixTimestamp / 1000;
//         var newDay = document.createElement('div');
//         newDay.textContent = num;
//         newDay.classList.add(HelloWeek.CSS_CLASSES.DAY);
//         newDay.setAttribute('data-timestamp', timestamp);
//         if (num === 1) {
//             if (this.options.weekStart === HelloWeek.DAYS_WEEK.SUNDAY) {
//                 newDay.style.marginLeft = ((day) * (100 / 7)) + 1 + '%';
//             } else {
//                 if (day === HelloWeek.DAYS_WEEK.SUNDAY) {
//                     newDay.style.marginLeft = ((7 - this.options.weekStart) * (100 / 7)) + 1 + '%';
//                 } else {
//                     newDay.style.marginLeft = ((day - 1) * (100 / 7)) + 1 + '%';
//                 }
//             }
//         }
//         if (day === HelloWeek.DAYS_WEEK.SUNDAY || day === HelloWeek.DAYS_WEEK.SATURDAY) {
//             newDay.classList.add(HelloWeek.CSS_CLASSES.IS_WEEKEND);
//         }
//         if (this.options.disabledDaysOfWeek) {
//             if (this.options.disabledDaysOfWeek.includes(day)) {
//                 newDay.classList.add(HelloWeek.CSS_CLASSES.IS_DISABLED);
//             }
//         }
//         if ((this.options.disablePastDays && this.date.getTime() <= this.defaultDate.getTime() - 1) || (this.options.minDate && timestamp <= this.options.minDate) || (this.options.maxDate && timestamp >= this.options.maxDate)) {
//             newDay.classList.add(HelloWeek.CSS_CLASSES.IS_DISABLED);
//         }
//         else {
//             newDay.classList.add(HelloWeek.CSS_CLASSES.IS_ACTIVE);
//         }
//         if (this.highligthDates) {
//             if (this.highligthDates instanceof Array) {
//                 this.highligthDates.forEach(function (date) {
//                     if (unixTimestamp >= new Date(date + 'T00:00:00').getTime() && unixTimestamp <= new Date(date + 'T23:59:59').getTime()) {
//                         newDay.classList.add(HelloWeek.CSS_CLASSES.IS_HIGHLIGHT);
//                         newDay.classList.remove(HelloWeek.CSS_CLASSES.IS_DISABLED);
//                         newDay.classList.add(HelloWeek.CSS_CLASSES.IS_ACTIVE);
//                     }
//                     if (_this.options.onlyHighlights && !newDay.classList.contains(HelloWeek.CSS_CLASSES.IS_HIGHLIGHT)) {
//                         newDay.classList.add(HelloWeek.CSS_CLASSES.IS_DISABLED);
//                         newDay.classList.remove(HelloWeek.CSS_CLASSES.IS_ACTIVE);
//                     }
//                 });
//             }
//         }
//         if (this.options.disableDates) {
//             if (this.options.disableDates[0] instanceof Array) {
//                 this.options.disableDates.map(function (date) {
//                     if (_this.options.format) {
//                         if (unixTimestamp >= new Date(date[0]).getTime() && unixTimestamp <= new Date(date[1] + 'T23:59:59').getTime()) {
//                             newDay.classList.add(HelloWeek.CSS_CLASSES.IS_DISABLED);
//                         }
//                     }
//                     else {
//                         if (unixTimestamp >= date[0] && unixTimestamp <= date[1]) {
//                             newDay.classList.add(HelloWeek.CSS_CLASSES.IS_DISABLED);
//                         }
//                     }
//                 });
//             }
//             else {
//                 if (this.options.format) {
//                     if (this.options.disableDates.includes(this.formatDate(unixTimestamp, this.options.format))) {
//                         newDay.classList.add(HelloWeek.CSS_CLASSES.IS_DISABLED);
//                     }
//                 }
//                 else {
//                     this.options.disableDates.map(function (date) {
//                         if (_this.formatDate(new Date(unixTimestamp).getTime(), 'YYYY-MM-DD') === _this.formatDate(new Date(+date).getTime(), 'YYYY-MM-DD')) {
//                             newDay.classList.add(HelloWeek.CSS_CLASSES.IS_DISABLED);
//                         }
//                     });
//                     if (this.options.disableDates.includes(unixTimestamp.toString())) {
//                         newDay.classList.add(HelloWeek.CSS_CLASSES.IS_DISABLED);
//                     }
//                 }
//             }
//         }

//         if (this.disableDatesFrom) {
//             if (_this.formatDate(new Date(unixTimestamp).getTime(), 'YYYY-MM-DD') > _this.formatDate(this.disableDatesFrom, 'YYYY-MM-DD')) {
//                 newDay.classList.add(HelloWeek.CSS_CLASSES.IS_DISABLED);
//                 newDay.classList.remove(HelloWeek.CSS_CLASSES.IS_ACTIVE);
//             }
//         }
//         // console.log(new Date(this.date).setHours(0,0,0,0));
//         if (new Date(this.date).setHours(0, 0, 0, 0) === new Date(this.currentDay).setHours(0, 0, 0, 0) && this.options.todayHighlight) {
//             newDay.classList.add(HelloWeek.CSS_CLASSES.IS_TODAY);
//         }

//         if (this.options.format) {
//             this.selectedDays.find(function (day) {
//                 if (day === _this.formatDate(unixTimestamp, _this.options.format)) {
//                     newDay.classList.add(HelloWeek.CSS_CLASSES.IS_SELECTED);
//                 }
//             });
//         } else {
//             this.selectedDays.find(function (day) {
//                 if (day === timestamp.toString()) {
//                     newDay.classList.toggle(HelloWeek.CSS_CLASSES.IS_SELECTED);
//                 }
//             });
//         }
//         if (this.month) {
//             this.month.appendChild(newDay);
//         }
//     };
//     HelloWeek.prototype.monthsAsString = function (monthIndex) {
//         return this.options.monthShort ? this.langs.monthsShort[monthIndex] : this.langs.months[monthIndex];
//     };
//     HelloWeek.prototype.weekAsString = function (weekIndex) {
//         return this.options.weekShort ? this.langs.daysShort[weekIndex] : this.langs.days[weekIndex];
//     };
//     HelloWeek.prototype.updted = function () {
//         var listDays = [];
//         this.label.textContent = this.monthsAsString(this.date.getMonth()) + ' ' + this.date.getFullYear();
//         /** Define week format */
//         var weekFormat = this.options.weekShort ? this.langs.daysShort : this.langs.days;
//         this.week.textContent = '';
//         for (var i = this.options.weekStart; i < this.langs.daysShort.length; i++) {
//             listDays.push(i);
//         }
//         for (var i = 0; i < this.options.weekStart; i++) {
//             listDays.push(i);
//         }
//         for (var _i = 0, listDays_1 = listDays; _i < listDays_1.length; _i++) {
//             var day = listDays_1[_i];
//             this.creatWeek(this.weekAsString(day));
//         }
//         this.createMonth();
//     };
//     HelloWeek.prototype.clearCalendar = function () {
//         this.month.textContent = '';
//     };
//     HelloWeek.prototype.removeActiveClass = function () {
//         for (var _i = 0, _a = Object.keys(this.activeDates); _i < _a.length; _i++) {
//             var i = _a[_i];
//             this.activeDates[i].classList.remove(HelloWeek.CSS_CLASSES.IS_SELECTED);
//         }
//     };
//     HelloWeek.prototype.destroy = function () {
//         this.removeActiveClass();
//     };
//     HelloWeek.prototype.readFile = function (file, callback) {
//         var xobj = new XMLHttpRequest();
//         xobj.overrideMimeType('application/json');
//         xobj.open('GET', file, true);
//         xobj.onreadystatechange = function () {
//             if (xobj.readyState === 4 && xobj.status === 200) {
//                 callback(xobj.responseText);
//             }
//         };
//         xobj.send(null);
//     };
//     HelloWeek.prototype.formatDate = function (timestamp, format) {
//         var dt = new Date(timestamp);
//         format = format.replace('dd', dt.getDate().toString());
//         format = format.replace('DD', (dt.getDate() > 9 ? dt.getDate() : '0' + dt.getDate()).toString());
//         format = format.replace('mm', (dt.getMonth() + 1).toString());
//         format = format.replace('MMM', this.langs.months[dt.getMonth()]);
//         format = format.replace('MM', ((dt.getMonth() + 1) > 9 ? (dt.getMonth() + 1) : '0' + (dt.getMonth() + 1)).toString());
//         format = format.replace('mmm', this.langs.monthsShort[dt.getMonth()]);
//         format = format.replace('yyyy', dt.getFullYear().toString());
//         format = format.replace('YYYY', dt.getFullYear().toString());
//         format = format.replace('YY', (dt.getFullYear().toString()).substring(2));
//         format = format.replace('yy', (dt.getFullYear().toString()).substring(2));
//         return format;
//     };
//     HelloWeek.extend = function (options) {
//         var settings = {
//             selector: '.hello-week',
//             lang: 'en',
//             langFolder: './dist/langs/',
//             format: false,
//             weekShort: true,
//             monthShort: false,
//             multiplePick: false,
//             defaultDate: false,
//             todayHighlight: true,
//             disablePastDays: false,
//             disabledDaysOfWeek: false,
//             disableDates: false,
//             weekStart: 0,
//             onlyHighlights: false,
//             minDate: false,
//             maxDate: false,
//             onLoad: function () { },
//             onChange: function () { },
//             onSelect: function () { }
//         };
//         var defaultSettings = options;
//         for (var _i = 0, _a = Object.keys(defaultSettings); _i < _a.length; _i++) {
//             var i = _a[_i];
//             settings[i] = defaultSettings[i];
//         }
//         return settings;
//     };
//     HelloWeek.CSS_CLASSES = {
//         MONTH: 'hello-week__month',
//         DAY: 'hello-week__day',
//         WEEK: 'hello-week__week',
//         WEEK_DAY: 'hello-week__week__day',
//         LABEL: 'hello-week__label',
//         IS_ACTIVE: 'is-active',
//         IS_HIGHLIGHT: 'is-highlight',
//         IS_SELECTED: 'is-selected',
//         IS_DISABLED: 'is-disabled',
//         IS_TODAY: 'is-today',
//         IS_WEEKEND: 'is-weekend'
//     };
//     HelloWeek.DAYS_WEEK = {
//         SUNDAY: 0,
//         MONDAY: 1,
//         TUESDAY: 2,
//         WEDNESDAY: 3,
//         THURSDAY: 4,
//         FRIDAY: 5,
//         SATURDAY: 6
//     };
//     return HelloWeek;
// }(window));

// // PhotoSwipe
// if (!document.getElementById('mc-pswp-root')) {
//     addStyles('https://app.moyklass.com/lib/photoswipe/photoswipe.css');
//     addStyles('https://app.moyklass.com/lib/photoswipe/default-skin.css');
//     addScript('https://app.moyklass.com/lib/photoswipe/photoswipe.min.js');
//     addScript('https://app.moyklass.com/lib/photoswipe/photoswipe-ui-default.min.js');

//     const pswpElement = document.createElement('div');
//     pswpElement.innerHTML = '<div class=pswp__bg></div><div class=pswp__scroll-wrap><div class=pswp__container><div class=pswp__item></div><div class=pswp__item></div><div class=pswp__item></div></div><div class="pswp__ui pswp__ui--hidden"><div class=pswp__top-bar><div class=pswp__counter></div><button class="pswp__button pswp__button--close"title="Close (Esc)"></button> <button class="pswp__button pswp__button--share"title=Share></button> <button class="pswp__button pswp__button--fs"title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom"title="Zoom in/out"></button><div class=pswp__preloader><div class=pswp__preloader__icn><div class=pswp__preloader__cut><div class=pswp__preloader__donut></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class=pswp__share-tooltip></div></div><button class="pswp__button pswp__button--arrow--left"title="Previous (arrow left)"></button> <button class="pswp__button pswp__button--arrow--right"title="Next (arrow right)"></button><div class=pswp__caption><div class=pswp__caption__center></div></div></div></div>';
//     pswpElement.classList.add('pswp');
//     pswpElement.setAttribute('id', 'mc-pswp-root');
//     pswpElement.setAttribute('tabindex', '-1');
//     pswpElement.setAttribute('role', 'dialog');
//     pswpElement.setAttribute('aria-hidden', 'true');
//     document.body.appendChild(pswpElement);

//     mcOpenPhotoSwipe = function (images, index) {
//         const slides = images.map(img => ({
//             src: img.publicPath,
//             w: img.w,
//             h: img.h
//         }));

//         if (WdgMoyklass["01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx"].isVK || WdgMoyklass["01DaIw4XAQ3uUWnkbhkTFDJYtwMPBuCZ6BCx"].vkData.user_id) {
//             window.open(images[index].publicPath);
//             return;
//         }

//         const gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, slides, {
//             index
//         });

//         gallery.init();
//     };
// }