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

- - - - 

## License
MIT

## Bug Reports
Report [here](https://github.com/kickboxio/kickbox-node/issues).

## Need Help?
* Slack with us: http://slack.kickbox.com/
* Email us: help@kickbox.com
