import { useMemo } from "react";
import { OrderItem } from "../types/types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  order: OrderItem[];
};

export default function OrderTotals({ order }: OrderTotalProps) {
  const subtotalAmount = useMemo(() => order.reduce(
    (total, orderItem) => total + orderItem.price * orderItem.quantity,
    0
  ), [order])

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propina:</h2>
        {/* Puedes insertar un espacio en blanco con eso */}
        <p>
          Subtotal a pagar: {""}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>

        <p>
          Propina: {""}
          <span className="font-bold">{formatCurrency(12)}</span>
        </p>

        <p>
          Total a pagar: {""}
          <span className="font-bold">{formatCurrency(12)}</span>
        </p>
      </div>

      <button></button>
    </>
  );
}
