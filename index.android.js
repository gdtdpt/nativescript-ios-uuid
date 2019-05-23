var device = require('tns-core-modules/platform/platform');

function getUUID() {
  return device ? device.uuid : "";
}

exports.getUUID = getUUID;
