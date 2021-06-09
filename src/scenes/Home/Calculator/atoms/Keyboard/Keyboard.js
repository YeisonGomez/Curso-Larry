import { findProductByPrice } from "../../../../../common/db/Products";

const keyboardNumbers = [
  ['7', '8', '9', '<'],
  ['4', '5', '6', 'AC'],
  ['1', '2', '3'],
  ['0', '00', '=']
];

function Keyboard({ inputValue, handlerSetValue, handlerSetSuggestions }) {

  const actionButton = (value) => {
    let suggestions = []

    if(value === '<'){
      const newValue = inputValue.substring(0, inputValue.length - 1)
      handlerSetValue(newValue)
      suggestions = findProductByPrice(parseInt(newValue))
    } else if(value === 'AC'){
      handlerSetValue(0)
    } else if(inputValue == '0')
      handlerSetValue(value)
    else {
      suggestions = findProductByPrice(parseInt(inputValue + value))
      handlerSetValue(inputValue + value)
    }

    handlerSetSuggestions(suggestions)
  }
  
  return (
    <div>
      {keyboardNumbers.map((row, i) => (
        <div key={i}>
          {row.map((item, j) =>
            <button key={j} onClick={() => actionButton(item)}>
              {item}
            </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default Keyboard