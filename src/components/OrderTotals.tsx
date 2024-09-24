import { useMemo } from "react";
import { OrderItem } from "../types/types";
import { formatCurrency } from "../helpers";

type OrderTotalProps = {
  order: OrderItem[]
  tip: number
  placeOrder : () => void
};

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalProps) {
  const subtotalAmount = useMemo(() => order.reduce(
    (total, orderItem) => total + orderItem.price * orderItem.quantity,
    0
  ), [order])

  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
  const totalAmount = useMemo(() => subtotalAmount + tipAmount
  , [tip,order])

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
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>

        <p>
          Total a pagar: {""}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
      onClick={placeOrder}
      >
        Guardar Orden
      </button>
    </>
  );
}
