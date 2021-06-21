import { useDispatch } from 'react-redux';

import { invoice as InvoiceActions } from '../../../../../services/Invoice/InvoiceActions'

function ProductsSuggestion({ suggestions }) {

  const dispatch = useDispatch()

  const goInvoice = (product) => {
    dispatch(InvoiceActions.addProduct({ name: product.name, price: product.price, quantity: 1 }))
  }
  
  return (
    <div>
      {suggestions.map((product, i) =>
        <button key={i} onClick={() => goInvoice(product)}>
          { `${product.emoji} ${product.name}` }
        </button>
      )}
    </div>
  )
}

export default ProductsSuggestion