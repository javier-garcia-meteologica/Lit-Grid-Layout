export interface LayoutItem <Key extends string = string> {
  width: number;
  height: number;
  posX: number;
  posY: number;
  key: Key;
  hasMoved?: boolean;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
}
export type Layout <Key extends string = string> = Array<LayoutItem<Key>>;

export interface LayoutObject {
  [key: string]: LayoutItem;
}

export interface LayoutItemElement extends HTMLElement {
  key: string;
  grid: {
    width: number;
    height: number;
    posX: number;
    posY: number;
  };
}

export interface LGLDomEvent<T> extends Event {
  detail: T;
}

export interface LGLItemDomEvent<T> extends Event {
  detail: T;
  currentTarget: LayoutItemElement;
}

export interface DraggingEvent {
  deltaX: number;
  deltaY: number;
}

export interface ResizingEvent {
  width: number;
  height: number;
}

export interface ItemDraggedEvent {
  newPosX: number;
  newPosY: number;
}

export interface ItemResizedEvent {
  newWidth: number;
  newHeight: number;
}

export interface LayoutChangedEvent {
  layout: Layout;
}

export interface ItemChangedEvent {
  item?: LayoutItem;
  layout: Layout;
}

export interface DragStartEvent {
  startX?: number;
  startY?: number;
}

export interface MouseLocation {
  x: number;
  y: number;
}

export interface ResizableResizeEvent {
  width: number;
  height: number;
  deltaX: number;
  deltaY: number;
}

export interface MouseTouchLocation {
  x: number;
  y: number;
}

export type EventHandler<T> = (e: T) => void | false;
