"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextParagraph = void 0;
var TextParagraph = /** @class */ (function () {
    function TextParagraph(text) {
        this.text = text;
    }
    TextParagraph.prototype.setText = function (text) {
        this.text = text;
        return this;
    };
    TextParagraph.prototype.getText = function () {
        return this.text;
    };
    TextParagraph.prototype.render = function () {
        return {
            "textParagraph": {
                "text": this.text
            }
        };
    };
    return TextParagraph;
}());
exports.TextParagraph = TextParagraph;
//# sourceMappingURL=TextParagraph.js.map