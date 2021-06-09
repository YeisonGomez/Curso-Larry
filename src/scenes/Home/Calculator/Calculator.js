import { useState } from "react"

import Input from "./atoms/Input/Input"
import Keyboard from "./atoms/Keyboard/Keyboard"
import ProductsSuggestion from "./atoms/ProductsSuggestion/ProductsSuggestion"

function Calculator(){

  const [value, setValue] = useState(0)
  const [suggestions, setSuggestions] = useState([])

  return (
    <div>
      <Input 
        placeholder="Valor" 
        value={value} 
        handlerSetValue={setValue}
        handlerSetSuggestions={setSuggestions}
      ></Input>
      <ProductsSuggestion suggestions={suggestions}></ProductsSuggestion>
      <Keyboard 
        inputValue={value} 
        handlerSetValue={setValue} 
        handlerSetSuggestions={setSuggestions}/>
    </div>
  )
}

export default Calculator