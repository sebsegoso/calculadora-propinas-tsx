import { useCallback, useState } from "react";
import type { MenuItem, OrderItem } from "../types";
export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const [tip, setTip] = useState(0.1);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);

    if (itemExist) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };

      setOrder((order) => [...order, newItem]);
    }
  };
  const removeItem = (itemId: MenuItem["id"]) => {
    setOrder((order) => order.filter((orderItem) => orderItem.id !== itemId));
  };

  const saveOrder = useCallback(() => {
    console.log(order);
    setOrder([]);
    setTip(0);
  }, [order]);

  return {
    order,
    addItem,
    removeItem,
    tip,
    setTip,
    saveOrder,
  };
}
