"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextButton = void 0;
var AbstractButton_1 = require("./AbstractButton");
var TextButton = /** @class */ (function (_super) {
    __extends(TextButton, _super);
    function TextButton(text, link) {
        var _this = _super.call(this, link) || this;
        _this.text = text;
        return _this;
    }
    TextButton.prototype.render = function () {
        return {
            "textButton": {
                "text": this.text,
                "onClick": {
                    "openLink": {
                        "url": this.getLink()
                    }
                }
            }
        };
    };
    return TextButton;
}(AbstractButton_1.AbstractButton));
exports.TextButton = TextButton;
//# sourceMappingURL=TextButton.js.map