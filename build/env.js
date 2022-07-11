"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-empty-interface */
require("dotenv/config");
var zod_1 = __importDefault(require("zod"));
var envSchema = zod_1.default.object({
    NODE_ENV: zod_1.default.string(),
    DEBUG: zod_1.default.string().optional(),
});
try {
    envSchema.parse(process.env);
}
catch (e) {
    console.error('Failed to parse environment variables.');
    console.error(e);
    process.exit(1);
}
console.log("Loading ".concat(process.env.NODE_ENV, " environment."));
//# sourceMappingURL=env.js.map