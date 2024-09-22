//Type que le indica a cada objeto de la BD que tipo de dato deben tener sus propiedades

export type MenuItem = {
  id: number;
  name: String;
  price: number;
};

//Creamos un nuevo type para la orden, esto por que al agregar la orden necesitamos todas las propiedades del producto (objeto) y una extra (cantidad)

export type OrderItem = MenuItem & {
  quantity: number;
};
