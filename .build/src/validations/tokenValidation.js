"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenValidation = void 0;
var zod_1 = require("zod");
exports.tokenValidation = zod_1.z.object({
    cardNumber: zod_1.z.number().min(13).max(16),
    cvv: zod_1.z.number().min(3).max(4),
    expirationMonth: zod_1.z.string().min(1).max(2),
    expirationYear: zod_1.z.string().min(4).max(4),
    email: zod_1.z.string().min(5).max(100).email(),
});
//# sourceMappingURL=tokenValidation.js.map