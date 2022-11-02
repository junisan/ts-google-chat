"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleChatSender = void 0;
var https = require("https");
var GoogleChatSender = /** @class */ (function () {
    function GoogleChatSender(options) {
        var _a;
        this.url = new URL(options.url);
        this.client = (_a = options.client) !== null && _a !== void 0 ? _a : https;
    }
    GoogleChatSender.prototype.send = function (message) {
        var _this = this;
        var json = JSON.stringify(message.render());
        var requestOptions = {
            protocol: 'https:',
            port: 443,
            hostname: this.url.hostname,
            path: this.url.pathname + this.url.search,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        return new Promise(function (resolve, reject) {
            var request = _this.client.request(requestOptions, function (res) {
                var data = '';
                res.on('data', function (chunk) {
                    data += chunk;
                });
                res.on('end', function () {
                    var json = JSON.parse(data);
                    if (res.statusCode && (res.statusCode >= 200 && res.statusCode <= 299)) {
                        resolve(json);
                    }
                    else {
                        reject(json);
                    }
                });
            }).on('error', function (error) {
                console.error(error);
                return reject(error);
            });
            request.write(json);
            request.end();
        });
    };
    return GoogleChatSender;
}());
exports.GoogleChatSender = GoogleChatSender;
//# sourceMappingURL=GoogleChatSender.js.map