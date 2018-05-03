<p align="center">
  <img src="https://static.kickbox.io/kickbox_github.png" alt="Kickbox Email Verification Service">
  <br>
</p>

# Email Verification & Confirmation Library for Node.js

Kickbox determines if an email address is not only valid, but associated with a actual user. Uses include:

* Preventing users from creating accounts on your applications using fake, misspelled, or throw-away email addresses.
* Reducing bounces by removing old, invalid, and low quality email addresses from your mailing lists.
* Saving money and projecting your reputation by only sending to real email users.

## Getting Started

To begin, hop over to [kickbox.com](https://kickbox.com) and create a free account. Once you've signed up and logged in, click on **API Settings** and then click **Add API Key**. Take note of the generated API Key - you'll need it to setup the client as explained below.

## Installation

Make sure you have [npm](https://npmjs.org) installed.

```bash
$ npm install kickbox
```

#### Versions

Works with Node 0.12+

## Getting Started & Authenticating

Let's include the Kickbox library and add your API key:

```js
var Kickbox = require('kickbox');
var KickboxClient = Kickbox.ApiClient.instance;

// Set Your Kickbox API Key
KickboxClient.authentications['apikey'].apiKey = 'YOUR_API_KEY_HERE';

// To verify email addresses, instantiate the verification class
var Verification = new Kickbox.VerificationApi();

// To confirm email addresses with Trust, instantiate the trust class
var Trust = new Kickbox.TrustApi();
```

## Usage

```js
Verification.verify('test@example.com').then(function(data){
  // Let's see some results
  console.log(data);
}, function(error) {
  // Something went awry
  console.error(error.body);
});
```

#### Options

**timeout** `integer` (optional) - Maximum time, in milliseconds, for the API to complete a verification request. Default: 6000. Max: 30000

```js
// Example with options
Verification.verify("test@example.com", {timeout: 6000}).then(/*...*/);
```

### Response information

See our [API Reference Documentation](https://docs.kickbox.com/v2.0/reference#section-response-values) for full response details.

## License
MIT

## Bug Reports
Report [here](https://github.com/kickboxio/kickbox-node/issues).

## Need Help?
help@kickbox.com
