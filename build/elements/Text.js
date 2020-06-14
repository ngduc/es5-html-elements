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
import * as React from 'react';
import { forwardRef } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { em } from '../css/units';
import Text from '../primitives/Text';
import View from '../primitives/View';
export var P = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return React.createElement(Text, __assign({}, props, { style: [styles.p, style], ref: ref }));
});
export var B = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return React.createElement(Text, __assign({}, props, { style: [styles.b, style], ref: ref }));
});
export var S = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return React.createElement(Text, __assign({}, props, { style: [styles.s, style], ref: ref }));
});
export var I = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return React.createElement(Text, __assign({}, props, { style: [styles.i, style], ref: ref }));
});
export var Q = forwardRef(function (_a, ref) {
    var children = _a.children, cite = _a.cite, style = _a.style, props = __rest(_a, ["children", "cite", "style"]);
    return (React.createElement(Text, __assign({}, props, { style: [styles.q, style], ref: ref }),
        "\"",
        children,
        "\""));
});
export var BlockQuote = forwardRef(function (_a, ref) {
    var style = _a.style, cite = _a.cite, props = __rest(_a, ["style", "cite"]);
    return React.createElement(View, __assign({}, props, { style: [styles.blockQuote, style], ref: ref }));
});
export var BR = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return React.createElement(Text, __assign({}, props, { style: [styles.br, style], ref: ref }));
});
export var Mark = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return React.createElement(Text, __assign({}, props, { style: [styles.mark, style], ref: ref }));
});
export var Code = forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return React.createElement(Text, __assign({}, props, { style: [styles.code, style], ref: ref }));
});
function isTextProps(props) {
    return typeof props.children === 'string';
}
export var Pre = forwardRef(function (props, ref) {
    if (isTextProps(props)) {
        return React.createElement(Text, __assign({}, props, { style: [styles.code, styles.pre, props.style], ref: ref }));
    }
    return React.createElement(View, __assign({}, props, { style: [styles.pre, props.style], ref: ref }));
});
// Extract dateTime to prevent passing it to the native Text element
export var Time = forwardRef(function (_a, ref) {
    var dateTime = _a.dateTime, props = __rest(_a, ["dateTime"]);
    return React.createElement(Text, __assign({}, props, { ref: ref }));
});
export var Strong = B;
export var Del = S;
export var EM = I;
var styles = StyleSheet.create({
    p: {
        marginVertical: em(1),
    },
    b: {
        fontWeight: 'bold',
    },
    q: {
        fontStyle: 'italic',
    },
    code: {
        fontFamily: Platform.select({ default: 'Courier', android: 'monospace' }),
        fontWeight: '500',
    },
    pre: {
        marginVertical: em(1),
    },
    blockQuote: {
        marginVertical: em(1),
    },
    br: {
        width: 0,
        height: em(0.5),
    },
    s: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    mark: {
        backgroundColor: 'yellow',
        color: 'black',
    },
    i: {
        fontStyle: 'italic',
    },
});
