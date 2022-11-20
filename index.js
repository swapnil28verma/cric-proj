"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.hello = void 0;
const world = 'something';
function hello(who = world) {
    return `Hello ${who}! `;
}
exports.hello = hello;
function add(a, b) {
    return a + b;
}
exports.add = add;
