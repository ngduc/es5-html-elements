var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { forwardRef } from 'react';
import { createElement, StyleSheet } from 'react-native';
export var P = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return createElement('p', __assign(__assign({}, props), { style: [styles.reset, style], ref: ref }));
});
export var B = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return createElement('b', __assign(__assign({}, props), { style: [styles.reset, style], ref: ref }));
});
export var S = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return createElement('s', __assign(__assign({}, props), { style: [styles.reset, style], ref: ref }));
});
export var Del = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return createElement('del', __assign(__assign({}, props), { style: [styles.reset, style], ref: ref }));
});
export var Strong = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return createElement('strong', __assign(__assign({}, props), { style: [styles.reset, style], ref: ref }));
});
export var I = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return createElement('i', __assign(__assign({}, props), { style: [styles.reset, style], ref: ref }));
});
export var Q = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return createElement('q', __assign(__assign({}, props), { style: [styles.reset, style], ref: ref }));
});
export var BlockQuote = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return createElement('blockquote', __assign(__assign({}, props), { style: [styles.reset, style], ref: ref }));
});
export var EM = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return createElement('em', __assign(__assign({}, props), { style: [styles.reset, style], ref: ref }));
});
export var BR = forwardRef(function (props, ref) {
    return createElement('br', __assign(__assign({}, props), { ref: ref }));
});
export var Small = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return createElement('small', __assign(__assign({}, props), { style: [styles.reset, style], ref: ref }));
});
export var Mark = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return createElement('mark', __assign(__assign({}, props), { style: [styles.reset, style], ref: ref }));
});
export var Code = forwardRef(function (props, ref) {
    return createElement('code', __assign(__assign({}, props), { ref: ref }));
});
export var Time = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return createElement('time', __assign(__assign({}, props), { style: [styles.reset, style], ref: ref }));
});
export var Pre = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return createElement('pre', __assign(__assign({}, props), { style: [styles.reset, style], ref: ref }));
});
var styles = StyleSheet.create({
    reset: {
        fontFamily: 'System',
        color: '#000',
        border: '0 solid black',
        boxSizing: 'border-box',
        // @ts-ignore: inline is not supported
        display: 'inline',
        margin: 0,
        padding: 0,
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
    },
});
