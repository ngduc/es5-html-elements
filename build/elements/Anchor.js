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
import { Linking, Platform } from 'react-native';
import Text from '../primitives/Text';
export var A = forwardRef(function (_a, ref) {
    var href = _a.href, target = _a.target, props = __rest(_a, ["href", "target"]);
    var nativeProps = Platform.select({
        web: {
            href: href,
            target: target,
        },
        default: {
            onPress: function (event) {
                props.onPress && props.onPress(event);
                if (Platform.OS !== 'web' && href !== undefined) {
                    Linking.openURL(href);
                }
            },
        },
    });
    return React.createElement(Text, __assign({ accessibilityRole: "link" }, props, nativeProps, { ref: ref }));
});
