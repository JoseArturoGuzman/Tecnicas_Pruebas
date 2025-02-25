export function calculateFinalPrice(
  originalPrice: number,
  discountPercentage: number
): number {
  if (originalPrice < 0 || discountPercentage < 0 || discountPercentage > 100) {
    throw new Error("Invalid input");
  }

  return Number(
    (originalPrice - originalPrice * (discountPercentage / 100)).toFixed(2)
  );
}
