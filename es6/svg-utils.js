"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SvgUtils = void 0;
class SvgUtils {
    constructor() { }
    static escape(s) {
        return (s + '').replace(/-/g, '&#45;');
    }
    static unescape(s) {
        return (s + '').replace(/&#45;/g, '-');
    }
}
exports.SvgUtils = SvgUtils;
//# sourceMappingURL=svg-utils.js.map