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
import { Platform, StyleSheet } from 'react-native';
import { em } from '../css/units';
import Text from '../primitives/Text';
function createHeadingComponent(level) {
    var nativeProps = Platform.select({
        web: {
            'aria-level': "" + level,
        },
        default: {},
    });
    return forwardRef(function (props, ref) {
        return (React.createElement(Text, __assign({}, nativeProps, { accessibilityRole: "header" }, props, { style: [styles["h" + level], props.style], ref: ref })));
    });
}
export var H1 = createHeadingComponent(1);
export var H2 = createHeadingComponent(2);
export var H3 = createHeadingComponent(3);
export var H4 = createHeadingComponent(4);
export var H5 = createHeadingComponent(5);
export var H6 = createHeadingComponent(6);
// Default web styles: http://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css
var styles = StyleSheet.create({
    h1: {
        fontSize: em(2),
        marginVertical: em(0.67),
        fontWeight: 'bold',
    },
    h2: {
        fontSize: em(1.5),
        marginVertical: em(0.83),
        fontWeight: 'bold',
    },
    h3: {
        fontSize: em(1.17),
        marginVertical: em(1),
        fontWeight: 'bold',
    },
    h4: {
        fontSize: em(1),
        marginVertical: em(1.33),
        fontWeight: 'bold',
    },
    h5: {
        fontSize: em(0.83),
        marginVertical: em(1.67),
        fontWeight: 'bold',
    },
    h6: {
        fontSize: em(0.67),
        marginVertical: em(2.33),
        fontWeight: 'bold',
    },
});
