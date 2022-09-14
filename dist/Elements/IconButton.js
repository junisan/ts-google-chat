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
exports.IconButton = void 0;
var AbstractButton_1 = require("./AbstractButton");
var IconButton = /** @class */ (function (_super) {
    __extends(IconButton, _super);
    function IconButton(icon, link) {
        var _this = _super.call(this, link) || this;
        _this.icon = icon;
        return _this;
    }
    IconButton.prototype.render = function () {
        return {
            "imageButton": {
                "icon": this.icon.getIcon(),
                "onClick": {
                    "openLink": {
                        "url": this.getLink()
                    }
                }
            }
        };
    };
    return IconButton;
}(AbstractButton_1.AbstractButton));
exports.IconButton = IconButton;
//# sourceMappingURL=IconButton.js.map