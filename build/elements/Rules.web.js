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
import { createElement } from 'react-native';
export var HR = forwardRef(function (props, ref) {
    return createElement('hr', __assign(__assign({}, props), { ref: ref }));
});
