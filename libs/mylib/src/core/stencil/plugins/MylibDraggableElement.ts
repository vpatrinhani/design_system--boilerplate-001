import { ComponentInterface } from "@stencil/core";

export interface IMylibDraggableElementPlugin {
  draggingMode: boolean;
  startDrag(params: { initPosX: number, initPosY: number }): void;
  dragMove(x: number, y: number): void;
  resetPosition(): void;
  endDrag(): void;
}

interface IMylibDraggableElementPluginOptions {
  elementsPresentAfterRender?: boolean;
  classNameDraggingMode?: string;
  getIsDraggable: (() => boolean)
  getDraggableElement: (() => HTMLElement | null)
  getDraggableTriggerElement: (() => HTMLElement | null)
}

class MylibDraggableElementPlugin implements IMylibDraggableElementPlugin {
  hostTarget: ComponentInterface;
  options: IMylibDraggableElementPluginOptions;

  private get isDraggable(): boolean {
    return this.options.getIsDraggable();
  }

  private get draggableEl(): HTMLElement | null {
    return this.options.getDraggableElement();
  }

  private get draggableTriggerEl(): HTMLElement | null {
    return this.options.getDraggableTriggerElement();
  }

  public draggingMode = false;

  private bound_onMouseDown_draggableTrigger: EventListenerOrEventListenerObject;
  private bound_mouseUp_window_listener_dragMode: EventListenerOrEventListenerObject;
  private bound_mouseMove_window_listener_dragMode: EventListenerOrEventListenerObject;

  private drag_current_posX = 0;
  private drag_current_posY = 0;

  /**
   *
   */
  constructor(target: ComponentInterface, options: IMylibDraggableElementPluginOptions) {
    this.hostTarget = target;
    this.options = {
      elementsPresentAfterRender: false,
      classNameDraggingMode: 'dragging-mode',
      getIsDraggable: (() => false),
      getDraggableElement: (() => null),
      getDraggableTriggerElement: (() => null),
      ...options
    };
  }

  public target_connectedCallback(): void {
    this.bound_onMouseDown_draggableTrigger = this.handle_onMouseDown_draggableTrigger.bind(this);
    this.bound_mouseMove_window_listener_dragMode = this.handle_mouseMove_dragMode.bind(this);
    this.bound_mouseUp_window_listener_dragMode = this.handle_mouseUp_dragMode.bind(this);
  }

  public target_disconnectedCallback(): void {
    this.bound_onMouseDown_draggableTrigger = null;
    this.bound_mouseMove_window_listener_dragMode = null;
    this.bound_mouseUp_window_listener_dragMode = null;
  }

  public target_componentDidLoad() {
    if (this.options.elementsPresentAfterRender) return;

    this.init_draggableTriggerEl();
  }

  public target_componentDidRender() {
    if (!this.options.elementsPresentAfterRender) return;

    this.init_draggableTriggerEl();
  }

  private init_draggableTriggerEl() {
    const { draggableTriggerEl, isDraggable } = this;

    // console.log('[init_draggableTriggerEl] (draggableTriggerEl, draggableEl)', draggableTriggerEl, draggableEl);

    if (!isDraggable) return;

    if (!draggableTriggerEl) return;

    draggableTriggerEl.removeEventListener('mousedown', this.bound_onMouseDown_draggableTrigger);
    draggableTriggerEl.addEventListener('mousedown', this.bound_onMouseDown_draggableTrigger);
  }

  public startDrag({
    initPosX,
    initPosY
  }): void {
    this.draggingMode = true;

    if (initPosX) this.drag_current_posX = initPosX;
    if (initPosY) this.drag_current_posY = initPosY;

    const { draggableEl } = this;

    // console.log('[startDrag] draggableEl(offsetTop, offsetLeft):',draggableEl, draggableEl?.offsetTop, draggableEl?.offsetLeft);
    // console.log('[startDrag] (drag_current_posX, drag_current_posY):', this.drag_current_posX, this.drag_current_posY);

    draggableEl.classList.add(this.options.classNameDraggingMode);

    draggableEl.style.userSelect = 'none';
    draggableEl.style.width = draggableEl.clientWidth + 'px';
    draggableEl.style.height = draggableEl.clientHeight + 'px';

    window.addEventListener('mousemove', this.bound_mouseMove_window_listener_dragMode)
    window.addEventListener('mouseup', this.bound_mouseUp_window_listener_dragMode)
  }

  public dragMove(x: number, y: number) {
    if (!this.draggingMode) return;

    const diffPosX = this.drag_current_posX - x;
    const diffPosY = this.drag_current_posY - y;

    this.drag_current_posX = x;
    this.drag_current_posY = y;

    const { draggableEl } = this;

    const newDialogPosTop = draggableEl.offsetTop - diffPosY;
    const newDialogPosLeft = draggableEl.offsetLeft - diffPosX;

    // console.log('[dragMove] (x, y, diffPosX, diffPosY, newDialogPosTop, newDialogPosLeft):', x, y, diffPosX, diffPosY, newDialogPosTop, newDialogPosLeft);

    draggableEl.style.top = `${newDialogPosTop}px`;
    draggableEl.style.left = `${newDialogPosLeft}px`;
  }

  public resetPosition() {
    if (this.draggingMode) return;

    const { draggableEl } = this;

    if (!draggableEl) return;

    draggableEl.style.width = '';
    draggableEl.style.height = '';
    draggableEl.style.top = '';
    draggableEl.style.left = '';
  }

  public endDrag() {
    this.draggingMode = false;

    const { draggableEl } = this;

    // console.log('[endDrag] draggableEl(offsetTop, offsetLeft):', this.draggableEl.offsetTop, this.draggableEl.offsetLeft);
    // console.log('[endDrag] (drag_current_posX, drag_current_posY):', this.drag_current_posX, this.drag_current_posY);

    draggableEl.style.userSelect = '';

    draggableEl.classList.remove(this.options.classNameDraggingMode);

    window.removeEventListener('mousemove', this.bound_mouseMove_window_listener_dragMode);
    window.removeEventListener('mouseup', this.bound_mouseUp_window_listener_dragMode);

    this.drag_current_posX = 0;
    this.drag_current_posY = 0;
  }


  private handle_onMouseDown_draggableTrigger(e: MouseEvent) {
    if (!this.isDraggable) return;

    // left button only
    if (e.button !== 0) return;

    this.startDrag({
      initPosX: e.clientX,
      initPosY: e.clientY
    });
  }

  private handle_mouseMove_dragMode(e: MouseEvent) {
    // console.log('[handle_mouseMove_dragMode] e:', e);
    if ((!this.isDraggable) || (!this.draggingMode)) return;

    if ((e.clientX < 0) || (e.clientY < 0)) return;

    this.dragMove(e.clientX, e.clientY);
  }

  private handle_mouseUp_dragMode() {
    // console.log('[handle_mousUp_dragMode] e:', e);
    if ((!this.isDraggable) || (!this.draggingMode)) return;

    this.endDrag();
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const registerMylibDraggableElementPlugin = (
  target: ComponentInterface,
  opts: IMylibDraggableElementPluginOptions
): IMylibDraggableElementPlugin => {
  // console.log('[registerMylibThemableComponent] (opts, target)', opts, target);
  const buildContext = new MylibDraggableElementPlugin(target, opts);

  const { connectedCallback, componentDidLoad, componentDidRender, disconnectedCallback } = target;

  if (target.isConnected) {
    buildContext.target_connectedCallback();
  }

  target.connectedCallback = function () {
    buildContext.target_connectedCallback();
    connectedCallback && connectedCallback.call(this);
  };

  target.componentDidLoad = function () {
    buildContext.target_componentDidLoad();
    componentDidLoad && componentDidLoad.call(this);
  };

  target.componentDidRender = function () {
    buildContext.target_componentDidRender();
    componentDidRender && componentDidRender.call(this);
  };

  target.disconnectedCallback = function () {
    buildContext.target_disconnectedCallback.call(this);
    disconnectedCallback && disconnectedCallback.call(this);
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return buildContext;
}
