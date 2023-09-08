export const displayPrice = (price, isDecimal = true) => {
    if (price) {
        return `${price.toLocaleString("de-DE", { maximumFractionDigits: isDecimal ? 2 : 0 })} VNĐ`;
    } else {
        return ''
    }
};