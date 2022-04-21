/**
 * 핸드폰 뒤에 4자리를 제외한 번호 *로 가리기
 *
 * @param {string} phoneNumber
 * @returns {string} : *, 원본 4자리를 포함한 문자열
 */
function hidePhoneNumbers(phoneNumber = '') {
  return '*'.repeat(phoneNumber.length - 4) + phoneNumber.slice(-4);
}

console.log(hidePhoneNumbers('01099999999'));
