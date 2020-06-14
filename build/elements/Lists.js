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
import { Platform } from 'react-native';
import Text from '../primitives/Text';
import View from '../primitives/View';
function createView(nativeProps) {
    if (nativeProps === void 0) { nativeProps = {}; }
    return forwardRef(function (props, ref) {
        return React.createElement(View, __assign({}, nativeProps, props, { ref: ref }));
    });
}
export var UL = createView(Platform.select({
    web: {
        accessibilityRole: 'list',
    },
}));
function isTextProps(props) {
    // Treat <li></li> as a Text element.
    return typeof props.children === 'string';
}
export var LI = forwardRef(function (props, ref) {
    if (isTextProps(props)) {
        var accessibilityRole_1 = Platform.select({
            web: 'listitem',
            default: props.accessibilityRole,
        });
        return React.createElement(Text, __assign({}, props, { accessibilityRole: accessibilityRole_1, ref: ref }));
    }
    var accessibilityRole = Platform.select({
        web: 'listitem',
        default: props.accessibilityRole,
    });
    return React.createElement(View, __assign({}, props, { accessibilityRole: accessibilityRole, ref: ref }));
});
