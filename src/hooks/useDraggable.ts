import { useEffect } from "react";
import {
  ConnectDragPreview,
  DragSourceHookSpec,
  FactoryOrInstance,
} from "react-dnd";
import { useMultiDrag } from "react-dnd-multi-backend";
type Props = {
  item?: any;
  dragProps?: FactoryOrInstance<DragSourceHookSpec<unknown, unknown, unknown>>;
  preview?: ConnectDragPreview;
};

export const useDraggable = (props: Props) => {
  const { item } = props;
  const [
    [dragProps, drag, preview],
    // {
    // html5: [, html5Drag],
    // touch: [touchProps, touchDrag],
    // },
  ] = useMultiDrag({
    type: "mui",
    item: () => {
      console.log(
        "🚀 ~ file: useDraggable.ts:29 ~ useMediaLibraryDrag ~ item",
        item
      );
    },
    collect: (monitor) => {
      return {
        isDragging: !!monitor.isDragging(),
      };
    },
  });
  useEffect(() => {}, [dragProps.isDragging]);
  return { isDragging: dragProps.isDragging, drag, preview };
};
