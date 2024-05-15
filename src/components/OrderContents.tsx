import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

type OrderContentsProps = {
  order: OrderItem[];
  removeItem: (itemId: OrderItem["id"]) => void;
};

export default function OrderContents({
  order,
  removeItem,
}: OrderContentsProps) {
  return (
    <div className="">
       <h2 className="font-black text-2xl">Consumo</h2>
      <div className="space-y-1">
        {!order?.length ? (
          <p className="font-bold">La orden está vacía</p>
        ) : (
          order.map((orderItem) => (
            <div
              key={orderItem.id}
              className="flex justify-between items-center border-t border-gray-200 py-2 last-of-type:border-b"
            >
              <div>
                <p>
                  {orderItem.name} - {formatCurrency(orderItem.price)}
                </p>
                <p className="font-bold">
                  Cantidad: {orderItem.quantity} -{" "}
                  {formatCurrency(orderItem.price * orderItem.quantity)}
                </p>
              </div>
              <button
                onClick={() => removeItem(orderItem.id)}
                className="text-center bg-red-400 h-6 w-6 rounded-full text-white font-black"
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
