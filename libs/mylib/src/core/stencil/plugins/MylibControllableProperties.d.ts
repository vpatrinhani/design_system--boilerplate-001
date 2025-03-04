import { ComponentInterface } from "@stencil/core";
export interface ControllablePropertyChangeEventDetail<T = any> {
    type: 'attribute' | 'internal';
    value: T;
}
export interface IMylibControllablePropertiesPlugin {
    [key: string]: unknown;
    setValue(propName: string, value: unknown): void;
}
interface IMylibControllablePropertiesPluginOptions {
    props: {
        [key: string]: boolean;
    };
}
export declare const registerMylibControllablePropertiesPlugin: (target: ComponentInterface, opts: IMylibControllablePropertiesPluginOptions) => IMylibControllablePropertiesPlugin;
export {};
