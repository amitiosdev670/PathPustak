const { withEntitlementsPlist } = require('expo/config-plugins');

/** Local reminders do not need APNs. Wildcard dev profiles reject Push. */
function withNoPushEntitlement(config) {
  return withEntitlementsPlist(config, (mod) => {
    delete mod.modResults['aps-environment'];
    return mod;
  });
}

module.exports = withNoPushEntitlement;
