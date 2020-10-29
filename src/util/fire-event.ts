export const fireEvent = <Detail extends object | undefined = undefined>(
  target: EventTarget,
  event: string,
  detail?: Detail
): void => {
  target.dispatchEvent(new CustomEvent(event, { detail }));
};
