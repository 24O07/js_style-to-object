'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const declarations = sourceString.split(';');

  declarations.forEach((decl) => {
    const trimmed = decl.trim();

    if (!trimmed) {
      return;
    }

    const [key, value] = trimmed.split(':');

    if (key && value) {
      obj[key.trim()] = value.trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
