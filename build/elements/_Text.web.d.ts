import { ComponentType } from 'react';
import { TextProps } from '../primitives/Text';
export declare const P: ComponentType<TextProps>;
export declare const B: ComponentType<TextProps>;
export declare const S: ComponentType<TextProps>;
export declare const Del: ComponentType<TextProps>;
export declare const Strong: ComponentType<TextProps>;
export declare const I: ComponentType<TextProps>;
export declare const Q: ComponentType<import("react").PropsWithChildren<Pick<any, string | number | symbol> & import("../primitives/Text").WebTextProps & {
    cite?: string;
}>>;
export declare const BlockQuote: ComponentType<import("react").PropsWithChildren<import("../primitives/View").WebViewProps & Pick<any, string | number | symbol> & {
    cite?: string;
}>>;
export declare const EM: ComponentType<TextProps>;
export declare const BR: ComponentType<TextProps>;
export declare const Small: ComponentType<TextProps>;
export declare const Mark: ComponentType<TextProps>;
export declare const Code: ComponentType<TextProps>;
export declare const Time: ComponentType<import("react").PropsWithChildren<Pick<any, string | number | symbol> & import("../primitives/Text").WebTextProps & {
    dateTime?: string;
}>>;
export declare const Pre: ComponentType<TextProps>;
