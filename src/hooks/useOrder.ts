import { useState } from "react";
import type { MenuItem, OrderItem } from "../types/types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  //Creas la función, especificas que tipo de dato recibirá el parámetro
  const addItem = (item: MenuItem) => {
    //Bucamos en el state de orden un elemento cuyo id, sea igual que la id del objeto que recibió la función
    const itemExists = order.find((orderItem) => orderItem.id === item.id);

    //Si encuentra un elemento que cumpla la condición devolverá un truthy, sino, un falsy
    if (itemExists) {

      //Si se cumple la condición, creamos una copia del estado "order", como vamos a modificar uno de sus elementos usamos map. Le decimos que entregue un true o un false en caso la             condición que le pasamos se cumpla o no.

      //Al elemento que cumpla la condición, al ser un objeto, creamos una copia exacta de él, y modificamos la propiedad quantity. Lo almacenamos en la variable updatedOrder
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
                                     
      );

      //Pasamos updatedOrder como argumento a setOrder
      setOrder(updatedOrder);
    } else {
      //Si no se cumple la condición y entrega un fasly, creamos una copia del objeto recibido y le añadimos la cantidad
      //También podemos indicar explicítamente que el nuevo objeto será de tipo OrderItem
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };

  function removeItem(id: MenuItem['id']) {
    const updatedOrder = order.filter(orderItem => orderItem.id !== id )

    setOrder(updatedOrder)
  }

  return {
    order,
    addItem,
    removeItem
  };
}
