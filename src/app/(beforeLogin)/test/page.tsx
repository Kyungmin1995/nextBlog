"use client";

import { useState, useRef, DragEvent } from "react";
import { useSprings, animated } from "react-spring";
import "@/app/(beforeLogin)/test/test.css";

interface DraggableItemProps {
  id: string;
  index: number;
  children: React.ReactNode;
  onDragStart: (e: DragEvent<HTMLDivElement>, index: number) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>, index: number) => void;
  onDrop: (e: DragEvent<HTMLDivElement>, index: number) => void;
  style: any;
}

const DraggableItem = ({
  id,
  index,
  children,
  onDragStart,
  onDragOver,
  onDrop,
  style,
}: DraggableItemProps) => {
  return (
    <animated.div
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={(e) => onDragOver(e, index)}
      onDrop={(e) => onDrop(e, index)}
      style={{
        ...style,
        padding: "8px",
        margin: "4px",
        backgroundColor: "lightgray",
        cursor: "move",
        width: "100%",
      }}
    >
      {children}
    </animated.div>
  );
};

interface Item {
  id: string;
  content: string;
}

const swap = (arr: any[], from: number, to: number) => {
  const newArr = arr.slice();
  const [removed] = newArr.splice(from, 1);
  newArr.splice(to, 0, removed);
  return newArr;
};

export default function Page() {
  const [items, setItems] = useState<Item[]>([
    { id: "item1", content: "Item 1" },
    { id: "item2", content: "Item 2" },
    { id: "item3", content: "Item 3" },
  ]);

  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [springs, api] = useSprings(items.length, (index) => ({
    y: index * 60,
    config: { mass: 1, tension: 300, friction: 40 },
  }));

  const handleDragStart = (e: DragEvent<HTMLDivElement>, index: number) => {
    setDraggingIndex(index);
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    if (draggingIndex !== null && draggingIndex !== index) {
      const newOrder = swap(
        items.map((_, i) => i),
        items.findIndex((_, i) => i === draggingIndex),
        items.findIndex((_, i) => i === index)
      );
      api.start((i) => ({ y: newOrder.indexOf(i) * 60 }));
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const draggedIndex = parseInt(e.dataTransfer.getData("text/plain"), 10);
    if (draggedIndex !== undefined && draggingIndex !== null) {
      setItems((prevItems) => {
        const newOrder = swap(
          prevItems.map((_, i) => i),
          draggedIndex,
          draggingIndex
        );
        return newOrder.map((i) => prevItems[i]);
      });
    }
    setDraggingIndex(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        position: "relative",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <h3>Sortable Items</h3>
      {springs.map((style, index) => (
        <DraggableItem
          key={items[index].id}
          id={items[index].id}
          index={index}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={{ ...style, position: "absolute", top: 0 }}
        >
          {items[index].content}
        </DraggableItem>
      ))}
    </div>
  );
}
