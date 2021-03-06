import type { Layout, LayoutItem } from "../types";
import { intersects } from "./intersects";

export const getAllIntersects = (
  layout: Layout,
  layoutItem: LayoutItem
): Array<LayoutItem> => {
  return layout.filter((l) => intersects(l, layoutItem));
};
