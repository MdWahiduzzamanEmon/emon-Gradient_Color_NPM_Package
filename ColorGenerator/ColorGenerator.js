
// write a function that takes in a string and returns a color gradient

const colorGenerator = (colorList=[],step,deg=90) => {
    const fruct = step ? step: colorList.length;
    let stepValue = Math.floor(100/fruct);
    // if no color is passed, return black
    if(colorList?.length === 0) return "black";
    
    return `linear-gradient(${deg}deg, ${colorList.map((color,index)=>`${color} ${(index)*stepValue}%`).join(", ")})`;
}

export default colorGenerator;
// `linear-gradient(${deg}deg, ${colorList.map((color,index)=>`${color} ${index*step}%`).join(", ")})`;