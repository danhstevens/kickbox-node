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
    define(['ApiClient', 'model/VerifyBatchStatusResponseProgress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VerifyBatchStatusResponseProgress'));
  } else {
    // Browser globals (root is window)
    if (!root.Kickbox) {
      root.Kickbox = {};
    }
    root.Kickbox.VerifyBatchStatusResponse = factory(root.Kickbox.ApiClient, root.Kickbox.VerifyBatchStatusResponseProgress);
  }
}(this, function(ApiClient, VerifyBatchStatusResponseProgress) {
  'use strict';




  /**
   * The VerifyBatchStatusResponse model module.
   * @module model/VerifyBatchStatusResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>VerifyBatchStatusResponse</code>.
   * @alias module:model/VerifyBatchStatusResponse
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>VerifyBatchStatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VerifyBatchStatusResponse} obj Optional instance to populate.
   * @return {module:model/VerifyBatchStatusResponse} The populated <code>VerifyBatchStatusResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('progress')) {
        obj['progress'] = VerifyBatchStatusResponseProgress.constructFromObject(data['progress']);
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The ID of the verification job
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Job status
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/VerifyBatchStatusResponseProgress} progress
   */
  exports.prototype['progress'] = undefined;
  /**
   * true if the API request did not result in any unexpected errors
   * @member {Boolean} success
   * @default true
   */
  exports.prototype['success'] = true;



  return exports;
}));


