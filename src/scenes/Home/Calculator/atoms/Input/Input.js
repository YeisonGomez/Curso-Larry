import { useDispatch } from 'react-redux';
import { InputNumber } from 'antd';
import { findProductByPrice } from '../../../../../common/db/Products'
import { invoice as InvoiceActions } from '../../../../../services/Invoice/InvoiceActions'

function Input({ value, handlerSetValue, handlerSetSuggestions, ...props }){

  const dispatch = useDispatch()

  const onChange = (e) => {
    handlerSetValue(e.target.value)
    const suggestions = findProductByPrice(parseInt(e.target.value))
    handlerSetSuggestions(suggestions)
  }

  const goInvoice = () => {
    dispatch(InvoiceActions.addProduct({ name: 'Producto 1', price: value, quantity: 1 }))
  }

  return (
    <div>
      <InputNumber 
        defaultValue={0}
        keyboardtype="number-pad"
        formatter={value => `$${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={value => value.replace(/\$\s?|(,*)/g, '')} 
        value={value} 
        onChange={onChange} 
        {...props}
      />
      <button onClick={goInvoice}>OK</button>
    </div>
  )
}

export default Input