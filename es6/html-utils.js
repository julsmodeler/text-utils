"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlUtils = void 0;
class HtmlUtils {
    constructor() { }
    static escape(s) {
        // https://stackoverflow.com/questions/6234773/can-i-escape-html-special-chars-in-javascript
        return (s + '').replace(/[&<>"']/g, (m) => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
        }[m]));
    }
    static encodeArrowLine(s) {
        for (let i = 0, len = HtmlUtils.ARROW_TABLE.length; i < len; i++) {
            if (HtmlUtils.ARROW_TABLE[i][0] === s)
                return `<font point-size="15">${HtmlUtils.ARROW_TABLE[i][1]}</font>`;
            if (i > 3)
                s = s.replace(HtmlUtils.ARROW_TABLE[i][0], HtmlUtils.ARROW_TABLE[i][1]);
        }
        return s;
    }
}
exports.HtmlUtils = HtmlUtils;
HtmlUtils.ARROW_TABLE = [
    ['->', '&rarr;'],
    ['<-', '&larr;'],
    ['/', '&darr;'],
    ['/\\', '&uarr;'],
    ['|>', '&#9654;'],
    ['<|', '&#9664;'],
];
//# sourceMappingURL=html-utils.js.map