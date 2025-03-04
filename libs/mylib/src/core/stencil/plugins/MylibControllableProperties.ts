/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentInterface, getElement } from "@stencil/core";
import { isString } from "$lib-mylib/src/utils/object";
import { toKebabCase } from "$lib-mylib/src/utils/string";

export interface ControllablePropertyChangeEventDetail<T = any> {
  type: 'attribute'|'internal';
  value: T;
}

export interface IMylibControllablePropertiesPlugin {
  [key: string]: unknown;
  setValue(propName: string, value: unknown): void;
  isControlledProperty(propName: string): boolean;
}

interface IMylibControllablePropertiesPluginOptions {
  props: { [key:string]: boolean | string }
}

class MylibControllablePropertiesPlugin implements IMylibControllablePropertiesPlugin {
  hostTarget: ComponentInterface;
  options: IMylibControllablePropertiesPluginOptions;

  [key: string]: unknown;

  private get hostEl() {
    return getElement(this.hostTarget);
  }

  private get controllableProperties() {
    return this.options.props;
  };
  controlledProps: any = {};

  /**
   *
   */
  constructor(target: ComponentInterface, options: IMylibControllablePropertiesPluginOptions) {
    this.hostTarget = target;
    this.options = {
      ...options
    };
  }

  public isControlledProperty(propName: string): boolean {
    const { hostEl } = this;

    if (hostEl.hasAttribute(`uncontrolled-mode`))
      return false;

    const ctrlPropDeclaration = this.controllableProperties[propName];

    // The case is when the attribute is explicity marked as boolean, then we need to make it mandatory as controllable
    // due the un-presence of the attribute represents the `false` value and there is no way to identofy on the inital
    // element tag rendering that the false value was set and means that it should be controllable
    const attributeTypeIsControllableMandatory: boolean = (
      (isString(ctrlPropDeclaration))
        && ((ctrlPropDeclaration as string).toLowerCase() === 'boolean')
    );

    return (attributeTypeIsControllableMandatory || hostEl.hasAttribute(toKebabCase(propName)));
  }

  private _setup() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const [propName, _value] of Object.entries(this.controllableProperties)) {
      // eslint-disable-next-line no-console
      // console.log('[MylibControllablePropertiesPlugin] _setup(propName, _value):', propName, _value);
      if (this.isControlledProperty(propName)) {
        this.controlledProps[propName] = true;
      }
      // eslint-disable-next-line no-console
      // console.log('[MylibControllablePropertiesPlugin] _setup(this.controlledProps):', this.controlledProps);
      this._setupProperty(propName);
    }
  }

  private _setupProperty(propName: string) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;

    Object.defineProperty(this, propName, {
      get() {
        return that.hostTarget[propName];
      },
      set(value) {
        that.setValue(propName, value)
      }
    })

    this._setupPropWatcher(propName);
  }

  private _setupPropWatcher(propName: string) {
    const proto = Object.getPrototypeOf(this.hostTarget);
    const propDescriptor = Object.getOwnPropertyDescriptor(proto, propName);

    if (!propDescriptor)
      return;

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this;

    const typeWatchers = proto.constructor.watchers

    if (typeWatchers[propName]) {
      const propWatcherMethodName = typeWatchers[propName][0];

      this.hostTarget[propWatcherMethodName] = function (newValue: any, oldValue: any) {
        proto[propWatcherMethodName].call(this, newValue, oldValue);

        if (oldValue === newValue)
          return;

        that._emitPropChange(propName, {type: 'attribute', value: newValue });
      }
    }
  }

  private _emitPropChange(propName: string, detail: ControllablePropertyChangeEventDetail) {
    const eventEmitter = this.hostTarget[`${propName}Change`];
    if (eventEmitter)
      eventEmitter.emit(detail);
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public target_componentDidLoad() {
    this._setup();
  }

  public setValue(propName: string, value: unknown): void {
    // console.log('[MylibControllablePropertiesPlugin] (this.controlledProps) setValue(propName, value):', this.controlledProps, propName, value);
    if (!this.controlledProps[propName]) {
      const proto = Object.getPrototypeOf(this.hostTarget);
      const toggledDescriptor: any = Object.getOwnPropertyDescriptor(proto, propName);

      if (!toggledDescriptor) return;

      toggledDescriptor.set.call(this.hostTarget, value);
      return;
    }

    this._emitPropChange(propName, {type: 'internal', value: value });
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const registerMylibControllablePropertiesPlugin = (
  target: ComponentInterface,
  opts: IMylibControllablePropertiesPluginOptions
): IMylibControllablePropertiesPlugin => {
  // console.log('[registerMylibThemableComponent] (opts, target)', opts, target);
  const buildContext = new MylibControllablePropertiesPlugin(target, opts);

  const { componentDidLoad } = target;

  target.componentDidLoad = function () {
    buildContext.target_componentDidLoad();
    componentDidLoad && componentDidLoad.call(this);
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return buildContext;
}
