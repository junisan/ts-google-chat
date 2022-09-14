"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleMessage = void 0;
var SimpleMessage = /** @class */ (function () {
    function SimpleMessage(text) {
        this.message = text !== null && text !== void 0 ? text : '';
    }
    SimpleMessage.prototype.addText = function (text) {
        this.message += text;
        return this;
    };
    SimpleMessage.prototype.addLine = function () {
        return this.addText('\r\n');
    };
    SimpleMessage.prototype.addBold = function (text) {
        return this.addText("*".concat(text, "*"));
    };
    SimpleMessage.prototype.addItalic = function (text) {
        return this.addText("_".concat(text, "_"));
    };
    SimpleMessage.prototype.addStrike = function (text) {
        return this.addText("~".concat(text, "~"));
    };
    SimpleMessage.prototype.addMonospaceText = function (text) {
        return this.addText("`" + text + "`");
    };
    SimpleMessage.prototype.addMonospaceBlock = function (text) {
        return this.addText("```" + text + "```");
    };
    SimpleMessage.prototype.addLink = function (link, displayText) {
        var full = "<".concat(link).concat((displayText ? '|' + displayText : ''), ">");
        return this.addText(full);
    };
    SimpleMessage.prototype.addMention = function (userId) {
        return this.addText("<users/".concat(userId, ">"));
    };
    SimpleMessage.prototype.addMentionAll = function (prependText, appendText) {
        return this.addText("".concat(prependText !== null && prependText !== void 0 ? prependText : '', "<users/all>").concat(appendText !== null && appendText !== void 0 ? appendText : ''));
    };
    SimpleMessage.prototype.render = function () {
        return {
            'text': this.message
        };
    };
    return SimpleMessage;
}());
exports.SimpleMessage = SimpleMessage;
//# sourceMappingURL=SimpleMessage.js.map