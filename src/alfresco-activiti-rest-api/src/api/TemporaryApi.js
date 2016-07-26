(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ArrayNode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ArrayNode'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.TemporaryApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ArrayNode);
  }
}(this, function(ApiClient, ArrayNode) {
  'use strict';

  /**
   * Temporary service.
   * @module api/TemporaryApi
   * @version 1.4.0
   */

  /**
   * Constructs a new TemporaryApi.
   * @alias module:api/TemporaryApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the completeTasks operation.
     * @callback module:api/TemporaryApi~completeTasksCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * completeTasks
     * @param {Integer} userId userId
     * @param {String} processDefinitionKey processDefinitionKey
     * @param {module:api/TemporaryApi~completeTasksCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.completeTasks = function(userId, processDefinitionKey, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling completeTasks";
      }

      // verify the required parameter 'processDefinitionKey' is set
      if (processDefinitionKey == undefined || processDefinitionKey == null) {
        throw "Missing the required parameter 'processDefinitionKey' when calling completeTasks";
      }


      var pathParams = {
      };
      var queryParams = {
        'userId': userId,
        'processDefinitionKey': processDefinitionKey
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/temporary/generate-report-data/complete-tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the generateData operation.
     * @callback module:api/TemporaryApi~generateDataCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * generateData
     * @param {Integer} userId userId
     * @param {String} processDefinitionKey processDefinitionKey
     * @param {module:api/TemporaryApi~generateDataCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.generateData = function(userId, processDefinitionKey, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling generateData";
      }

      // verify the required parameter 'processDefinitionKey' is set
      if (processDefinitionKey == undefined || processDefinitionKey == null) {
        throw "Missing the required parameter 'processDefinitionKey' when calling generateData";
      }


      var pathParams = {
      };
      var queryParams = {
        'userId': userId,
        'processDefinitionKey': processDefinitionKey
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/temporary/generate-report-data/start-process', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getHeaders operation.
     * @callback module:api/TemporaryApi~getHeadersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArrayNode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getHeaders
     * @param {module:api/TemporaryApi~getHeadersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ArrayNode}
     */
    this.getHeaders = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ArrayNode;

      return this.apiClient.callApi(
        '/api/enterprise/temporary/example-headers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getOptions operation.
     * @callback module:api/TemporaryApi~getOptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArrayNode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getOptions
     * @param {module:api/TemporaryApi~getOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ArrayNode}
     */
    this.getOptions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ArrayNode;

      return this.apiClient.callApi(
        '/api/enterprise/temporary/example-options', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
