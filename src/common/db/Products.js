export const products = [
  { name: "Tomate", emoji: "🍅", price: 500 },
  { name: "Cebolla", emoji: "🧅", price: 300 },
  { name: "Lechuga", emoji: "🥬", price: 500 },
]

export const findProductByPrice = (price) => {
  const suggestions = [];

  products.forEach(item => {
    if(item.price === price)
      suggestions.push(item)
  })

  return suggestions
}