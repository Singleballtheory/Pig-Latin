function pigLatin(text) {
  const vowels = ["a","e","i","o","u"];
  const textArray = text.split(" ");
  let output = "";
  textArray.forEach(function(element) {
    for (let i=0; i < vowels.length; i++) {
      if (vowels[i] = element.toLowerCase().slice(0,1)) {
        output = output+element+"way ";
      } 
    }
  });
  return output.slice(0,output.length-1);
}