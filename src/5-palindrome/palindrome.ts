export const isPalindrome = (str: string): boolean => {
  // Remove espaços, transforma em minúsculas e remove pontuações
  const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
  
  // Compara a string original com sua versão invertida
  return cleanedStr === cleanedStr.split('').reverse().join('');
};
