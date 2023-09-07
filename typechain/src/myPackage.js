// @ts-check

// JSDoc으로 코멘트를 작성하면
// js코드도 타입스크립트가 감시한다.

/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url 
 * @returns boolean
 */
export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code 
 * @returns number
 */
export function exit(code) {
  return code + 1;
}
