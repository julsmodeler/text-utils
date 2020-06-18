"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringUtils = void 0;
class StringUtils {
    constructor() { }
    static replaceAll(str, srch, repl) {
        let regex = new RegExp(StringUtils.escapeRegExp(srch), 'g');
        return str.replace(regex, repl);
    }
    static escapeRegExp(str) {
        return str.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    static removeTrailingNewlineIfAny(str) {
        if (str && str.endsWith('\n'))
            str = str.substr(0, str.length - 1);
        return str;
    }
}
exports.StringUtils = StringUtils;
//# sourceMappingURL=string-utils.js.map