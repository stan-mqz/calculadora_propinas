import MenuItems from "./components/MenuItems"
import { menuItems } from "./data/db"

function App() {



  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-5xl mx-auto py-20 grid md:grid-cols-2">

        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          {/*Iteramos sobre el arreglo que nos entrega la bd y por cada elemento (Objeto)crea un nuevo componente MenuItems*/}
          <div className="space-y-2 mt-10">

            {menuItems.map(item => (
              <MenuItems

                key={item.id}

                //Le pasamos el elemento, via props al componente, en este caso, un objeto completo
                item={item}

              />
            ))}

          </div>
        </div>

        <div>
          <h2 className="">Consumo</h2>
        </div>


      </main>

    </>


  )
}

export default App
