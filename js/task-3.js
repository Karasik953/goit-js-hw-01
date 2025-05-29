function getElementWidth(content, padding, border) {
    const widthContent = parseFloat(content);
    const thicknessPadding = parseFloat(padding) * 2;
    const thicknessBorder= parseFloat(border) * 2;

    return widthContent + thicknessBorder + thicknessPadding;
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px")); 
console.log(getElementWidth("200px", "0px", "0px")); 
