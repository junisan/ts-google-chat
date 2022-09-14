"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyValue = void 0;
var KeyValue = /** @class */ (function () {
    function KeyValue(options) {
        this._topLabel = options.topLabel;
        this._content = options.content;
        this._bottomLabel = options.bottomLabel;
        this._multiLine = options.multiLine;
        this._link = options.link;
        this._icon = options.icon;
        this._button = options.button;
    }
    KeyValue.prototype.render = function () {
        var _a, _b;
        var result = {
            "keyValue": {
                "topLabel": this._topLabel,
                "content": this._content,
                "contentMultiline": this._multiLine,
                "bottomLabel": this._bottomLabel,
                "icon": (_a = this._icon) === null || _a === void 0 ? void 0 : _a.getIcon(),
                "button": (_b = this._button) === null || _b === void 0 ? void 0 : _b.render(),
            }
        };
        if (this._link) {
            result.keyValue.onClick = {
                "openLink": {
                    "url": this._link
                }
            };
        }
        return result;
    };
    Object.defineProperty(KeyValue.prototype, "topLabel", {
        get: function () {
            return this._topLabel;
        },
        set: function (value) {
            this._topLabel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyValue.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyValue.prototype, "bottomLabel", {
        get: function () {
            return this._bottomLabel;
        },
        set: function (value) {
            this._bottomLabel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyValue.prototype, "multiLine", {
        get: function () {
            return this._multiLine;
        },
        set: function (value) {
            this._multiLine = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyValue.prototype, "link", {
        get: function () {
            return this._link;
        },
        set: function (value) {
            this._link = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyValue.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            this._icon = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(KeyValue.prototype, "button", {
        get: function () {
            return this._button;
        },
        set: function (value) {
            this._button = value;
        },
        enumerable: false,
        configurable: true
    });
    return KeyValue;
}());
exports.KeyValue = KeyValue;
//# sourceMappingURL=KeyValue.js.map