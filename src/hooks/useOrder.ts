import { useState } from "react";
import type { MenuItem, OrderItem } from "../types/types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  //Creas la función, especificas que tipo de dato recibirá el parámetro
  const addItem = (item: MenuItem) => {
    const itemExists = order.find((orderItem) => orderItem.id === item.id);

    if (itemExists) {
      //Si encuentra duplicados, obtenemos cual elemento es y operamos en base a eso
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      //Creamos una copia del objeto recibido y le añadimos la cantidad
      //También podemos indicar explicítamente que el nuevo objeto será de tipo OrderItem
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  return {
    order,
    addItem,
  };
}
