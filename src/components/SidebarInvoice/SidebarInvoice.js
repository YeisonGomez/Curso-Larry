import { useSelector } from 'react-redux';

function SidebarInvoice(){

  const { products } = useSelector(state => state.invoice)

  return (
    <div>
     {products.map((item, i) => (
      <div key={i}>
        {item.name}
        {item.price}
        <button>-</button>
        <input value={item.quantity}/>
        <button>+</button>
        <button>Eliminar</button>
      </div>
     ))}
    </div>
  )
}

export default SidebarInvoice