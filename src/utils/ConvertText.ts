export const textToBinary = (text: String) => {
  let binaryText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i).toString(2);
    binaryText += '0'.repeat(8 - char.length) + char + ' ';
  }
  return binaryText.trim();
};
