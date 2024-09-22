import { OrderItem } from "../types/types"

type OrderContentsProps = {

  order: OrderItem[]

}

export default function ({order} : OrderContentsProps) {
  return (

    <div>
        <h2 className="font-black text-4xl">Consumo</h2>

          <div className="space-y-3 mt-5">

              {order.length === 0 ? 
              
                <p>La orden esta vacía</p>
              
              : (
                order.map(item => (
                  <div key={item.id}>
                      <p>{item.name}</p>
                  </div>
                  
                ))
              )
              
              }

          </div>
    </div>
  )
}
