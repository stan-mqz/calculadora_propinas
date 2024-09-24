import MenuItems from "./components/MenuItems";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, tip, setTip, addItem, removeItem } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-5xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          {/*Iteramos sobre el arreglo que nos entrega la bd y por cada elemento (Objeto)crea un nuevo componente MenuItems*/}
          <div className="space-y-2 mt-10">
            {menuItems.map((item) => (
              <MenuItems
                key={item.id}
                //Le pasamos el elemento, via props al componente, en este caso, un objeto completo
                item={item}
                //Pasas la función al componente vía props
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dahed border-slate-300 p-5 rounded-lg space-y-10s">
          <OrderContents 
          order={order} 
          removeItem={removeItem}
           />

          <TipPercentageForm
         
          setTip={setTip}
          
          />

          <OrderTotals 
          order={order} 
          />
        </div>
      </main>
    </>
  );
}

export default App;
