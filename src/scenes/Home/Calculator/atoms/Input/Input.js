import { findProductByPrice } from '../../../../../common/db/Products'

function Input({ value, handlerSetValue, handlerSetSuggestions, ...props }){

  const onChange = (e) => {
    handlerSetValue(e.target.value)
    const suggestions = findProductByPrice(parseInt(e.target.value))
    handlerSetSuggestions(suggestions)
  }

  return (
    <input value={value} onChange={onChange} {...props}></input>
  )
}

export default Input