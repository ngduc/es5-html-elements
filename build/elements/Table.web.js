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
import { forwardRef } from 'react';
import { StyleSheet, createElement } from 'react-native';
export var Table = forwardRef(function (props, ref) {
    return createElement('table', __assign(__assign({}, props), { style: [styles.reset, props.style], ref: ref }));
});
export var THead = forwardRef(function (props, ref) {
    return createElement('thead', __assign(__assign({}, props), { style: [styles.reset, props.style], ref: ref }));
});
export var TBody = forwardRef(function (props, ref) {
    return createElement('tbody', __assign(__assign({}, props), { style: [styles.reset, props.style], ref: ref }));
});
export var TFoot = forwardRef(function (props, ref) {
    return createElement('tfoot', __assign(__assign({}, props), { style: [styles.reset, props.style], ref: ref }));
});
export var TH = forwardRef(function (props, ref) {
    return createElement('th', __assign(__assign({}, props), { style: [styles.reset, props.style], ref: ref }));
});
export var TR = forwardRef(function (props, ref) {
    return createElement('tr', __assign(__assign({}, props), { style: [styles.reset, props.style], ref: ref }));
});
export var TD = forwardRef(function (props, ref) {
    return createElement('td', __assign(__assign({}, props), { style: [styles.reset, props.style], ref: ref }));
});
export var Caption = forwardRef(function (props, ref) {
    return createElement('caption', __assign(__assign({}, props), { style: [styles.reset, props.style], ref: ref }));
});
var styles = StyleSheet.create({
    reset: {
        fontFamily: 'System',
        padding: 0,
    },
});
