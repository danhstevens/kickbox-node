/**
 * Kickbox
 * Kickbox API
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 1.0.12-1
 *
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Kickbox) {
      root.Kickbox = {};
    }
    root.Kickbox.VerifyResponse = factory(root.Kickbox.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VerifyResponse model module.
   * @module model/VerifyResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>VerifyResponse</code>.
   * @alias module:model/VerifyResponse
   * @class
   * @param result {module:model/VerifyResponse.ResultEnum} The verification result.
   * @param reason {module:model/VerifyResponse.ReasonEnum} The reason for the result.
   * @param role {Boolean} true if the email address is a role address, e.g. \"postmaster@example.com\" or \"support@example.com\")
   * @param free {Boolean} true if the email address uses a free service such as gmail.com or yahoo.com
   * @param disposable {Boolean} true if the email address uses a disposable domain, like trashmail.com or mailinator.com
   * @param acceptAll {Boolean} true if the email was accepted, but the domain appears to accept all emails addressed to that domain
   * @param didYouMean {String} Returns a suggested email if a possible spelling error was detected. For example, \"bill.lumbergh@gamil.com\" would return a result of \"bill.lumbergh@gmail.com\"
   * @param sendex {Number} A quality score of the provided email address ranging between 0 (no quality) and 1 (perfect quality). More information on the Sendex Score can be found at https://docs.kickbox.io/v2.0/docs/the-sendex
   * @param email {String} A normalized version of the provided email address. For instance, \"BoB@example.com\" returns a result of \"bob@example.com\"
   * @param user {String} The user (also known as the local part) of the provided email address. For example, \"bob@example.com\" results in \"bob\"
   * @param domain {String} The domain part of the email address. For instance, \"bob@example.com\" results in \"example.com\"
   * @param success {Boolean} true if the API request did not result in any unexpected errors
   */
  var exports = function(result, reason, role, free, disposable, acceptAll, didYouMean, sendex, email, user, domain, success) {
    var _this = this;

    _this['result'] = result;
    _this['reason'] = reason;
    _this['role'] = role;
    _this['free'] = free;
    _this['disposable'] = disposable;
    _this['accept_all'] = acceptAll;
    _this['did_you_mean'] = didYouMean;
    _this['sendex'] = sendex;
    _this['email'] = email;
    _this['user'] = user;
    _this['domain'] = domain;
    _this['success'] = success;
  };

  /**
   * Constructs a <code>VerifyResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VerifyResponse} obj Optional instance to populate.
   * @return {module:model/VerifyResponse} The populated <code>VerifyResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'Boolean');
      }
      if (data.hasOwnProperty('free')) {
        obj['free'] = ApiClient.convertToType(data['free'], 'Boolean');
      }
      if (data.hasOwnProperty('disposable')) {
        obj['disposable'] = ApiClient.convertToType(data['disposable'], 'Boolean');
      }
      if (data.hasOwnProperty('accept_all')) {
        obj['accept_all'] = ApiClient.convertToType(data['accept_all'], 'Boolean');
      }
      if (data.hasOwnProperty('did_you_mean')) {
        obj['did_you_mean'] = ApiClient.convertToType(data['did_you_mean'], 'String');
      }
      if (data.hasOwnProperty('sendex')) {
        obj['sendex'] = ApiClient.convertToType(data['sendex'], 'Number');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'String');
      }
      if (data.hasOwnProperty('domain')) {
        obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The verification result.
   * @member {module:model/VerifyResponse.ResultEnum} result
   */
  exports.prototype['result'] = undefined;
  /**
   * The reason for the result.
   * @member {module:model/VerifyResponse.ReasonEnum} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * true if the email address is a role address, e.g. \"postmaster@example.com\" or \"support@example.com\")
   * @member {Boolean} role
   * @default false
   */
  exports.prototype['role'] = false;
  /**
   * true if the email address uses a free service such as gmail.com or yahoo.com
   * @member {Boolean} free
   * @default false
   */
  exports.prototype['free'] = false;
  /**
   * true if the email address uses a disposable domain, like trashmail.com or mailinator.com
   * @member {Boolean} disposable
   * @default false
   */
  exports.prototype['disposable'] = false;
  /**
   * true if the email was accepted, but the domain appears to accept all emails addressed to that domain
   * @member {Boolean} accept_all
   * @default false
   */
  exports.prototype['accept_all'] = false;
  /**
   * Returns a suggested email if a possible spelling error was detected. For example, \"bill.lumbergh@gamil.com\" would return a result of \"bill.lumbergh@gmail.com\"
   * @member {String} did_you_mean
   * @default 'null'
   */
  exports.prototype['did_you_mean'] = 'null';
  /**
   * A quality score of the provided email address ranging between 0 (no quality) and 1 (perfect quality). More information on the Sendex Score can be found at https://docs.kickbox.io/v2.0/docs/the-sendex
   * @member {Number} sendex
   */
  exports.prototype['sendex'] = undefined;
  /**
   * A normalized version of the provided email address. For instance, \"BoB@example.com\" returns a result of \"bob@example.com\"
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The user (also known as the local part) of the provided email address. For example, \"bob@example.com\" results in \"bob\"
   * @member {String} user
   */
  exports.prototype['user'] = undefined;
  /**
   * The domain part of the email address. For instance, \"bob@example.com\" results in \"example.com\"
   * @member {String} domain
   */
  exports.prototype['domain'] = undefined;
  /**
   * true if the API request did not result in any unexpected errors
   * @member {Boolean} success
   * @default true
   */
  exports.prototype['success'] = true;


  /**
   * Allowed values for the <code>result</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ResultEnum = {
    /**
     * value: "deliverable"
     * @const
     */
    "deliverable": "deliverable",
    /**
     * value: "undeliverable"
     * @const
     */
    "undeliverable": "undeliverable",
    /**
     * value: "risky"
     * @const
     */
    "risky": "risky",
    /**
     * value: "unknown"
     * @const
     */
    "unknown": "unknown"  };

  /**
   * Allowed values for the <code>reason</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ReasonEnum = {
    /**
     * value: "invalid_email"
     * @const
     */
    "invalid_email": "invalid_email",
    /**
     * value: "invalid_domain"
     * @const
     */
    "invalid_domain": "invalid_domain",
    /**
     * value: "rejected_email"
     * @const
     */
    "rejected_email": "rejected_email",
    /**
     * value: "accepted_email"
     * @const
     */
    "accepted_email": "accepted_email",
    /**
     * value: "low_quality"
     * @const
     */
    "low_quality": "low_quality",
    /**
     * value: "low_deliverability"
     * @const
     */
    "low_deliverability": "low_deliverability",
    /**
     * value: "no_connect"
     * @const
     */
    "no_connect": "no_connect",
    /**
     * value: "timeout"
     * @const
     */
    "timeout": "timeout",
    /**
     * value: "invalid_smtp"
     * @const
     */
    "invalid_smtp": "invalid_smtp",
    /**
     * value: "unavailable_smtp"
     * @const
     */
    "unavailable_smtp": "unavailable_smtp",
    /**
     * value: "unexpected_error"
     * @const
     */
    "unexpected_error": "unexpected_error"  };


  return exports;
}));


