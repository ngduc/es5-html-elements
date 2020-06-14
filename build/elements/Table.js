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
import * as React from 'react';
import { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import { em } from '../css/units';
import { TableText } from '../primitives/Table';
import Text from '../primitives/Text';
import View from '../primitives/View';
export var Table = forwardRef(function (props, ref) {
    return React.createElement(View, __assign({}, props, { ref: ref }));
});
export var THead = forwardRef(function (props, ref) {
    return React.createElement(View, __assign({}, props, { ref: ref }));
});
export var TBody = forwardRef(function (props, ref) {
    return React.createElement(View, __assign({}, props, { ref: ref }));
});
export var TFoot = forwardRef(function (props, ref) {
    return React.createElement(View, __assign({}, props, { ref: ref }));
});
export var TH = forwardRef(function (props, ref) {
    return React.createElement(TableText, __assign({}, props, { style: [styles.th, props.style], ref: ref }));
});
export var TR = forwardRef(function (props, ref) {
    return React.createElement(View, __assign({}, props, { style: [styles.tr, props.style], ref: ref }));
});
export var TD = forwardRef(function (props, ref) {
    return React.createElement(TableText, __assign({}, props, { style: [styles.td, props.style], ref: ref }));
});
export var Caption = forwardRef(function (props, ref) {
    return React.createElement(Text, __assign({}, props, { style: [styles.caption, props.style], ref: ref }));
});
var styles = StyleSheet.create({
    caption: {
        textAlign: 'center',
        fontSize: em(1),
    },
    th: {
        textAlign: 'center',
        fontWeight: 'bold',
        flex: 1,
        fontSize: em(1),
    },
    tr: {
        flexDirection: 'row',
    },
    td: {
        flex: 1,
        fontSize: em(1),
    },
});
