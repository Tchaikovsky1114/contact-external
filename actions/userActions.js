export const convertCallNumber = (number,tabIndex) => {
  // 애드피아몰 - 63637
  const callNumber = number.includes('010') ? `tel://${number}` : tabIndex == 1 ? `tel://0263637${number}` : `tel://0262625${number}`
  return callNumber 
}