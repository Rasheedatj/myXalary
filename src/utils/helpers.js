export const formatToNaira = (amount) => {
  if (isNaN(amount)) {
    return 'Invalid amount';
  }

  const formattedAmount = amount.toLocaleString('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  });

  return formattedAmount;
};
