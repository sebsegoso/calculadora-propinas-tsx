import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { addItem, order, removeItem, setTip, tip, saveOrder } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5 text-center">
        <h1 className="text-3xl font-bold">Calculadora de propinas</h1>
      </header>
      <main className="max-w-6xl mx-auto py-10 grid md:grid-cols-2">
        <div className="space-y-4 p-5">
          <h2>Menú</h2>

          <div className="space-y-1">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-4">
          {order.length ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} saveOrder={saveOrder} />
            </>
          ) : (
            <p className="text-center">La orden está vacía</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
