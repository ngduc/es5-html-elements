import * as React from 'react';
import { TextProps } from '../primitives/Text';
import { ViewProps } from '../primitives/View';
export declare const P: React.ComponentType<TextProps>;
export declare const B: React.ComponentType<TextProps>;
export declare const S: React.ComponentType<TextProps>;
export declare const I: React.ComponentType<TextProps>;
export declare const Q: React.ComponentType<React.PropsWithChildren<Pick<any, string | number | symbol> & import("../primitives/Text").WebTextProps & {
    cite?: string;
}>>;
export declare const BlockQuote: React.ComponentType<React.PropsWithChildren<import("../primitives/View").WebViewProps & Pick<any, string | number | symbol> & {
    cite?: string;
}>>;
export declare const BR: React.ComponentType<TextProps>;
export declare const Mark: React.ComponentType<TextProps>;
export declare const Code: React.ComponentType<TextProps>;
declare type PreProps = TextProps | ViewProps;
export declare const Pre: React.ComponentType<PreProps>;
export declare const Time: React.ComponentType<React.PropsWithChildren<Pick<any, string | number | symbol> & import("../primitives/Text").WebTextProps & {
    dateTime?: string;
}>>;
export declare const Strong: React.ComponentType<TextProps>;
export declare const Del: React.ComponentType<TextProps>;
export declare const EM: React.ComponentType<TextProps>;
export {};
