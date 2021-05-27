// Extracts keys from an array of objects with the given prefix,
// followed by a period, into their own sub-object.
// Assumes uniform data structure. Depends on map-properties.

const mapProperties = require("./map-properties");

const prefixedPropertyMap = (arr, prefix) => {
  const mapConfig = {};
  Object.keys(arr[0]).forEach((key) => {
    if (key.startsWith(`${prefix}.`)) {
      mapConfig[key] = key;
    }
  });
  return arr.map(mapProperties(mapConfig));
};

module.exports = prefixedPropertyMap;
