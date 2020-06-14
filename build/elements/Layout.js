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
import View from '../primitives/View';
function createView(nativeProps) {
    if (nativeProps === void 0) { nativeProps = {}; }
    return forwardRef(function (props, ref) {
        return React.createElement(View, __assign({}, nativeProps, props, { ref: ref }));
    });
}
export var Nav = createView(Platform.select({
    web: {
        accessibilityRole: 'navigation',
    },
}));
export var Footer = createView(Platform.select({
    web: {
        accessibilityRole: 'contentinfo',
    },
}));
export var Aside = createView(Platform.select({
    web: {
        accessibilityRole: 'complementary',
    },
}));
export var Header = createView(Platform.select({
    web: {
        accessibilityRole: 'banner',
    },
    default: {
        accessibilityRole: 'header',
    },
}));
export var Main = createView(Platform.select({
    web: {
        accessibilityRole: 'main',
    },
}));
export var Article = createView(Platform.select({
    web: {
        accessibilityRole: 'article',
    },
}));
export var Section = createView({
    accessibilityRole: 'summary',
});
