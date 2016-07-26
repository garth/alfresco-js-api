(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UserProcessInstanceFilterRepresentation', 'model/UserTaskFilterRepresentation', 'model/ResultListDataRepresentation', 'model/UserFilterOrderRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UserProcessInstanceFilterRepresentation'), require('../model/UserTaskFilterRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/UserFilterOrderRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.UserFiltersApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.UserProcessInstanceFilterRepresentation, root.ActivitiPublicRestApi.UserTaskFilterRepresentation, root.ActivitiPublicRestApi.ResultListDataRepresentation, root.ActivitiPublicRestApi.UserFilterOrderRepresentation);
  }
}(this, function(ApiClient, UserProcessInstanceFilterRepresentation, UserTaskFilterRepresentation, ResultListDataRepresentation, UserFilterOrderRepresentation) {
  'use strict';

  /**
   * UserFilters service.
   * @module api/UserFiltersApi
   * @version 1.4.0
   */

  /**
   * Constructs a new UserFiltersApi.
   * @alias module:api/UserFiltersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createUserProcessInstanceFilter operation.
     * @callback module:api/UserFiltersApi~createUserProcessInstanceFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserProcessInstanceFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user process instance task filter
     * @param {module:model/UserProcessInstanceFilterRepresentation} userProcessInstanceFilterRepresentation userProcessInstanceFilterRepresentation
     * @param {module:api/UserFiltersApi~createUserProcessInstanceFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserProcessInstanceFilterRepresentation}
     */
    this.createUserProcessInstanceFilter = function(userProcessInstanceFilterRepresentation, callback) {
      var postBody = userProcessInstanceFilterRepresentation;

      // verify the required parameter 'userProcessInstanceFilterRepresentation' is set
      if (userProcessInstanceFilterRepresentation == undefined || userProcessInstanceFilterRepresentation == null) {
        throw "Missing the required parameter 'userProcessInstanceFilterRepresentation' when calling createUserProcessInstanceFilter";
      }


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
      var returnType = UserProcessInstanceFilterRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/filters/processes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUserTaskFilter operation.
     * @callback module:api/UserFiltersApi~createUserTaskFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserTaskFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new task filter
     * @param {module:model/UserTaskFilterRepresentation} userTaskFilterRepresentation userTaskFilterRepresentation
     * @param {module:api/UserFiltersApi~createUserTaskFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserTaskFilterRepresentation}
     */
    this.createUserTaskFilter = function(userTaskFilterRepresentation, callback) {
      var postBody = userTaskFilterRepresentation;

      // verify the required parameter 'userTaskFilterRepresentation' is set
      if (userTaskFilterRepresentation == undefined || userTaskFilterRepresentation == null) {
        throw "Missing the required parameter 'userTaskFilterRepresentation' when calling createUserTaskFilter";
      }


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
      var returnType = UserTaskFilterRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/filters/tasks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserProcessInstanceFilter operation.
     * @callback module:api/UserFiltersApi~deleteUserProcessInstanceFilterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user process instance task filter
     * @param {Integer} userFilterId userFilterId
     * @param {module:api/UserFiltersApi~deleteUserProcessInstanceFilterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUserProcessInstanceFilter = function(userFilterId, callback) {
      var postBody = null;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling deleteUserProcessInstanceFilter";
      }


      var pathParams = {
        'userFilterId': userFilterId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/filters/processes/{userFilterId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserTaskFilter operation.
     * @callback module:api/UserFiltersApi~deleteUserTaskFilterCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a task filter
     * @param {Integer} userFilterId userFilterId
     * @param {module:api/UserFiltersApi~deleteUserTaskFilterCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUserTaskFilter = function(userFilterId, callback) {
      var postBody = null;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling deleteUserTaskFilter";
      }


      var pathParams = {
        'userFilterId': userFilterId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/filters/tasks/{userFilterId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserProcessInstanceFilter operation.
     * @callback module:api/UserFiltersApi~getUserProcessInstanceFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserProcessInstanceFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific user process instance task filter
     * @param {Integer} userFilterId userFilterId
     * @param {module:api/UserFiltersApi~getUserProcessInstanceFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserProcessInstanceFilterRepresentation}
     */
    this.getUserProcessInstanceFilter = function(userFilterId, callback) {
      var postBody = null;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling getUserProcessInstanceFilter";
      }


      var pathParams = {
        'userFilterId': userFilterId
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
      var returnType = UserProcessInstanceFilterRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/filters/processes/{userFilterId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserProcessInstanceFilters operation.
     * @callback module:api/UserFiltersApi~getUserProcessInstanceFiltersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve list of taks filters
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.appId appId
     * @param {module:api/UserFiltersApi~getUserProcessInstanceFiltersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getUserProcessInstanceFilters = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'appId': opts['appId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResultListDataRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/filters/processes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserTaskFilter operation.
     * @callback module:api/UserFiltersApi~getUserTaskFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserTaskFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific task filter
     * @param {Integer} userFilterId userFilterId
     * @param {module:api/UserFiltersApi~getUserTaskFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserTaskFilterRepresentation}
     */
    this.getUserTaskFilter = function(userFilterId, callback) {
      var postBody = null;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling getUserTaskFilter";
      }


      var pathParams = {
        'userFilterId': userFilterId
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
      var returnType = UserTaskFilterRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/filters/tasks/{userFilterId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserTaskFilters operation.
     * @callback module:api/UserFiltersApi~getUserTaskFiltersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve list of task filters
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.appId appId
     * @param {module:api/UserFiltersApi~getUserTaskFiltersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getUserTaskFilters = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'appId': opts['appId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResultListDataRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/filters/tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the orderUserProcessInstanceFilters operation.
     * @callback module:api/UserFiltersApi~orderUserProcessInstanceFiltersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To order the list of user process instance filters
     * @param {module:model/UserFilterOrderRepresentation} filterOrderRepresentation filterOrderRepresentation
     * @param {module:api/UserFiltersApi~orderUserProcessInstanceFiltersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.orderUserProcessInstanceFilters = function(filterOrderRepresentation, callback) {
      var postBody = filterOrderRepresentation;

      // verify the required parameter 'filterOrderRepresentation' is set
      if (filterOrderRepresentation == undefined || filterOrderRepresentation == null) {
        throw "Missing the required parameter 'filterOrderRepresentation' when calling orderUserProcessInstanceFilters";
      }


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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/filters/processes', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the orderUserTaskFilters operation.
     * @callback module:api/UserFiltersApi~orderUserTaskFiltersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To order the list of user task filters
     * @param {module:model/UserFilterOrderRepresentation} filterOrderRepresentation filterOrderRepresentation
     * @param {module:api/UserFiltersApi~orderUserTaskFiltersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.orderUserTaskFilters = function(filterOrderRepresentation, callback) {
      var postBody = filterOrderRepresentation;

      // verify the required parameter 'filterOrderRepresentation' is set
      if (filterOrderRepresentation == undefined || filterOrderRepresentation == null) {
        throw "Missing the required parameter 'filterOrderRepresentation' when calling orderUserTaskFilters";
      }


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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/filters/tasks', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserProcessInstanceFilter operation.
     * @callback module:api/UserFiltersApi~updateUserProcessInstanceFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserProcessInstanceFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user process instance task filter
     * @param {Integer} userFilterId userFilterId
     * @param {module:model/UserProcessInstanceFilterRepresentation} userProcessInstanceFilterRepresentation userProcessInstanceFilterRepresentation
     * @param {module:api/UserFiltersApi~updateUserProcessInstanceFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserProcessInstanceFilterRepresentation}
     */
    this.updateUserProcessInstanceFilter = function(userFilterId, userProcessInstanceFilterRepresentation, callback) {
      var postBody = userProcessInstanceFilterRepresentation;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling updateUserProcessInstanceFilter";
      }

      // verify the required parameter 'userProcessInstanceFilterRepresentation' is set
      if (userProcessInstanceFilterRepresentation == undefined || userProcessInstanceFilterRepresentation == null) {
        throw "Missing the required parameter 'userProcessInstanceFilterRepresentation' when calling updateUserProcessInstanceFilter";
      }


      var pathParams = {
        'userFilterId': userFilterId
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
      var returnType = UserProcessInstanceFilterRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/filters/processes/{userFilterId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserTaskFilter operation.
     * @callback module:api/UserFiltersApi~updateUserTaskFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserTaskFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a specific task filter
     * @param {Integer} userFilterId userFilterId
     * @param {module:model/UserTaskFilterRepresentation} userTaskFilterRepresentation userTaskFilterRepresentation
     * @param {module:api/UserFiltersApi~updateUserTaskFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserTaskFilterRepresentation}
     */
    this.updateUserTaskFilter = function(userFilterId, userTaskFilterRepresentation, callback) {
      var postBody = userTaskFilterRepresentation;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling updateUserTaskFilter";
      }

      // verify the required parameter 'userTaskFilterRepresentation' is set
      if (userTaskFilterRepresentation == undefined || userTaskFilterRepresentation == null) {
        throw "Missing the required parameter 'userTaskFilterRepresentation' when calling updateUserTaskFilter";
      }


      var pathParams = {
        'userFilterId': userFilterId
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
      var returnType = UserTaskFilterRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/filters/tasks/{userFilterId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
