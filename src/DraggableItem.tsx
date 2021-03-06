import {DragEvent, FC, ReactNode} from 'react';

type Props = {
  children?: ReactNode
  draggableData: {
    [key: string]: string
  }
}

export const DraggableItem: FC<Props> = ({ children, draggableData }) => {
  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    Object.keys(draggableData)
      .forEach(key => e.dataTransfer.setData(key, draggableData[key]))
  }
  
  return <div
    draggable={true}
    onDragStart={onDragStart}
  >
    { children }
  </div>
}
