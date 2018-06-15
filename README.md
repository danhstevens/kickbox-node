<p align="center">
  <a href="https://kickbox.com"><img src="https://static.kickbox.io/kickbox_github.png" alt="Kickbox Email Verification Service"></a>
  <br>
</p>

# Email Verification & Confirmation Library for Node.js

Our [Email Verification](https://kickbox.com/email-verification) API ensures you only send to real email addresses and prevents sending to invalid, mistyped, and disposable email addresses. The [Trust (Email Confirmation)](https://kickbox.com/trust) API is an email confirmation service that ensures your users own the email address they provide and prevents bots and malicious users from creating fake accounts.

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

Let's include the Kickbox library and set your API key:

```js
const kickbox = require('kickbox')('YOUR_API_KEY_HERE');
```

- - - - 

# Email Address Verification Methods
* **[`verification.verify`](#verificationverify)** - Verify a single email address
* **[`verification.verifyBatch`](#verificationverifybatch)** - Verify multiple email addresses (up to 1 million)
* **[`verification.verifyBatchStatus`](#verificationverifybatchstatus)** - Check on the status of a batch verification job
* **[`verification.balance`](#verificationbalance)** - Check your verification credit balance

# Trust Methods
* **[`trust.validate`](#trustvalidate)** - Validate a user's Trust token

- - - - 

## `verification.verify`
Verify a single email address

### Usage

```js
kickbox.verification.verify('test@example.com').then(function(data){
  // Let's see some results
  console.log(data);
}, function(error) {
  // Something went awry
  console.error(error);
});
```

#### Options

* **timeout** `integer` (optional) - Maximum time, in milliseconds, for the API to complete a verification request. Default: 6000. Max: 30000

```js
// Example with options
kickbox.verification.verify("test@example.com", {timeout: 6000}).then(/*...*/);
```

### Response

See our [API Reference Documentation](https://docs.kickbox.com/v2.0/reference#section-response-values) for full response details.

## `verification.verifyBatch`
Verify multiple email addresses (up to 1 million)

### Usage

```js
var body = "email1@example.com\nemail2@example.com"; // The list of email addresses, one per line or in CSV format.
var options = {/* your options here */};
kickbox.verification.verifyBatch(body, options).then(function(data) {
  // Response data
}, function(error) {
  // Error data
});
```

#### Options

* **xKickboxFilename** `string` (optional) - The file containing your results will have the specified name.
* **xKickboxCallback** `string` (optional) - If a valid URL is specified, Kickbox will send a HTTP **POST**  containing the results of the job to it when the batch verification completes.

### Response
* **id** `integer` - The ID of the verification job
* **message** `string` - Additional information from the server
* **success** `boolean` - _true_ if the API request did not result in any unexpected errors

## `verification.verifyBatchStatus`
Check on the status of a batch verification job

### Usage

```js
kickbox.verification.verifyBatchStatus(jobId).then(function(data){
  // Response data
}, function(error) {
  // Error data
});
```

### Response

See our [API Reference Documentation](https://docs.kickbox.com/v2.0/reference#check-job-status) for full response details.

## `verification.balance`
Check your verification credit balance

### Usage

```js
kickbox.verification.balance().then(function(data) {
  // Response data
}, function(error) {
  // Error data
});
```

### Response
* **balance** `integer` - Your verification credit balance
* **message** `string` - Additional information from the server
* **success** `boolean` - _true_ if the API request did not result in any unexpected errors

- - - - 

## `trust.validate`
Check that the Trust token is real

### Usage

```js
kickbox.trust.validate(appId, token, email).then(function() {
  // Validated successfully
}, function(error) {
  // Error data
});
```

#### Parameters

* **appId** `string` - Find this on the `connect` page for your app. This is the same for both test and production modes.
* **token** `string` - The token provided from the front-end library. See [Client Side Installation](https://docs.kickbox.com/docs/client-side-installation).
* **email** `string` (optional) - The email of the user signing up. This is cross-referenced with the email used to generate the token, so this must be the same email address the user entered into your form.

- - - - 

## License
MIT

## Bug Reports
Report [here](https://github.com/kickboxio/kickbox-node/issues).

## Need Help?
* Slack with us: http://slack.kickbox.com/
* Email us: help@kickbox.com
