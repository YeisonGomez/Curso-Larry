function ProductsSuggestion({ suggestions }) {
  return (
    <div>
      {suggestions.map((product, i) =>
        <div key={i}>
          { `${product.emoji} ${product.name}` }
        </div>
      )}
    </div>
  )
}

export default ProductsSuggestion