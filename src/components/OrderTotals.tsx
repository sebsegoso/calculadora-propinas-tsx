import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  saveOrder: () => void;
};

export default function OrderTotals({
  order,
  tip,
  saveOrder,
}: OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () =>
      order.reduce(
        (total, item: OrderItem) => total + item.quantity * item.price,
        0
      ),
    [order]
  );

  const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip]);

  const totalAmount = useMemo(
    () => subtotalAmount + tipAmount,
    [subtotalAmount, tipAmount]
  );

  return (
    <>
      <div className="space-y-3 ">
        <h2 className="font-black text-2xl">Totales y propina</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button
        disabled={!totalAmount}
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        onClick={saveOrder}
      >
        Almacenar orden
      </button>
    </>
  );
}
