const kickbox = require('./src/index.js');

// Syntax sweeteners
module.exports = function(apiKey) {
  // Init client, set API key
  const client = kickbox.ApiClient.instance;
  client.authentications['apikey'].apiKey = apiKey;

  // Init APIs
  const verification = new kickbox.VerificationApi();
  const trust = new kickbox.TrustApi();

  return {
    client: client,
    verification: verification,
    trust: trust
  }
}