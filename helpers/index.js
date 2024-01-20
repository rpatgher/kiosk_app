export const formatToMoney = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}