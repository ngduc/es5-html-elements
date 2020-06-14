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
import View from '../primitives/View';
export var HR = forwardRef(function (props, ref) {
    return React.createElement(View, __assign({}, props, { style: [styles.hr, props.style], ref: ref }));
});
var styles = StyleSheet.create({
    hr: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#9A9A9A',
        borderBottomColor: '#EEEEEE',
        marginVertical: 8,
    },
});
