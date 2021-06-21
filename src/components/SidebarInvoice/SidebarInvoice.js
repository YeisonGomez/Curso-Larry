import { useSelector } from 'react-redux';
import { InputNumber } from 'antd';

function SidebarInvoice(){

  const { products } = useSelector(state => state.invoice)

  return (
    <div>
     {products.map((item, i) => (
      <div key={i}>
        {item.name}
        {item.price}
        <button>-</button>
        <InputNumber value={item.quantity}/>
        <button>+</button>
        <button>Eliminar</button>
      </div>
     ))}
    </div>
  )
}

export default SidebarInvoice