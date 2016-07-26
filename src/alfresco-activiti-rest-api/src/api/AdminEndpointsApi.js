(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateEndpointBasicAuthRepresentation', 'model/EndpointBasicAuthRepresentation', 'model/EndpointConfigurationRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateEndpointBasicAuthRepresentation'), require('../model/EndpointBasicAuthRepresentation'), require('../model/EndpointConfigurationRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.AdminEndpointsApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.CreateEndpointBasicAuthRepresentation, root.ActivitiPublicRestApi.EndpointBasicAuthRepresentation, root.ActivitiPublicRestApi.EndpointConfigurationRepresentation);
  }
}(this, function(ApiClient, CreateEndpointBasicAuthRepresentation, EndpointBasicAuthRepresentation, EndpointConfigurationRepresentation) {
  'use strict';

  /**
   * AdminEndpoints service.
   * @module api/AdminEndpointsApi
   * @version 1.4.0
   */

  /**
   * Constructs a new AdminEndpointsApi.
   * @alias module:api/AdminEndpointsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createBasicAuthConfiguration operation.
     * @callback module:api/AdminEndpointsApi~createBasicAuthConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointBasicAuthRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createBasicAuthConfiguration
     * @param {module:model/CreateEndpointBasicAuthRepresentation} createRepresentation createRepresentation
     * @param {module:api/AdminEndpointsApi~createBasicAuthConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EndpointBasicAuthRepresentation}
     */
    this.createBasicAuthConfiguration = function(createRepresentation, callback) {
      var postBody = createRepresentation;

      // verify the required parameter 'createRepresentation' is set
      if (createRepresentation == undefined || createRepresentation == null) {
        throw "Missing the required parameter 'createRepresentation' when calling createBasicAuthConfiguration";
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
      var returnType = EndpointBasicAuthRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/basic-auths', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createEndpointConfiguration operation.
     * @callback module:api/AdminEndpointsApi~createEndpointConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointConfigurationRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createEndpointConfiguration
     * @param {module:model/EndpointConfigurationRepresentation} representation representation
     * @param {module:api/AdminEndpointsApi~createEndpointConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EndpointConfigurationRepresentation}
     */
    this.createEndpointConfiguration = function(representation, callback) {
      var postBody = representation;

      // verify the required parameter 'representation' is set
      if (representation == undefined || representation == null) {
        throw "Missing the required parameter 'representation' when calling createEndpointConfiguration";
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
      var returnType = EndpointConfigurationRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/endpoints', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBasicAuthConfiguration operation.
     * @callback module:api/AdminEndpointsApi~getBasicAuthConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointBasicAuthRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getBasicAuthConfiguration
     * @param {Integer} basicAuthId basicAuthId
     * @param {Integer} tenantId tenantId
     * @param {module:api/AdminEndpointsApi~getBasicAuthConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EndpointBasicAuthRepresentation}
     */
    this.getBasicAuthConfiguration = function(basicAuthId, tenantId, callback) {
      var postBody = null;

      // verify the required parameter 'basicAuthId' is set
      if (basicAuthId == undefined || basicAuthId == null) {
        throw "Missing the required parameter 'basicAuthId' when calling getBasicAuthConfiguration";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getBasicAuthConfiguration";
      }


      var pathParams = {
        'basicAuthId': basicAuthId
      };
      var queryParams = {
        'tenantId': tenantId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EndpointBasicAuthRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/basic-auths/{basicAuthId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBasicAuthConfigurations operation.
     * @callback module:api/AdminEndpointsApi~getBasicAuthConfigurationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EndpointBasicAuthRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getBasicAuthConfigurations
     * @param {Integer} tenantId tenantId
     * @param {module:api/AdminEndpointsApi~getBasicAuthConfigurationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/EndpointBasicAuthRepresentation>}
     */
    this.getBasicAuthConfigurations = function(tenantId, callback) {
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getBasicAuthConfigurations";
      }


      var pathParams = {
      };
      var queryParams = {
        'tenantId': tenantId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [EndpointBasicAuthRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/admin/basic-auths', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEndpointConfiguration operation.
     * @callback module:api/AdminEndpointsApi~getEndpointConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointConfigurationRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getEndpointConfiguration
     * @param {Integer} endpointConfigurationId endpointConfigurationId
     * @param {Integer} tenantId tenantId
     * @param {module:api/AdminEndpointsApi~getEndpointConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EndpointConfigurationRepresentation}
     */
    this.getEndpointConfiguration = function(endpointConfigurationId, tenantId, callback) {
      var postBody = null;

      // verify the required parameter 'endpointConfigurationId' is set
      if (endpointConfigurationId == undefined || endpointConfigurationId == null) {
        throw "Missing the required parameter 'endpointConfigurationId' when calling getEndpointConfiguration";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getEndpointConfiguration";
      }


      var pathParams = {
        'endpointConfigurationId': endpointConfigurationId
      };
      var queryParams = {
        'tenantId': tenantId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EndpointConfigurationRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/endpoints/{endpointConfigurationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEndpointConfigurations operation.
     * @callback module:api/AdminEndpointsApi~getEndpointConfigurationsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EndpointConfigurationRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getEndpointConfigurations
     * @param {Integer} tenantId tenantId
     * @param {module:api/AdminEndpointsApi~getEndpointConfigurationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/EndpointConfigurationRepresentation>}
     */
    this.getEndpointConfigurations = function(tenantId, callback) {
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getEndpointConfigurations";
      }


      var pathParams = {
      };
      var queryParams = {
        'tenantId': tenantId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [EndpointConfigurationRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/admin/endpoints', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeBasicAuthonfiguration operation.
     * @callback module:api/AdminEndpointsApi~removeBasicAuthonfigurationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * removeBasicAuthonfiguration
     * @param {Integer} basicAuthId basicAuthId
     * @param {Integer} tenantId tenantId
     * @param {module:api/AdminEndpointsApi~removeBasicAuthonfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeBasicAuthonfiguration = function(basicAuthId, tenantId, callback) {
      var postBody = null;

      // verify the required parameter 'basicAuthId' is set
      if (basicAuthId == undefined || basicAuthId == null) {
        throw "Missing the required parameter 'basicAuthId' when calling removeBasicAuthonfiguration";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling removeBasicAuthonfiguration";
      }


      var pathParams = {
        'basicAuthId': basicAuthId
      };
      var queryParams = {
        'tenantId': tenantId
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
        '/api/enterprise/admin/basic-auths/{basicAuthId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeEndpointConfiguration operation.
     * @callback module:api/AdminEndpointsApi~removeEndpointConfigurationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * removeEndpointConfiguration
     * @param {Integer} endpointConfigurationId endpointConfigurationId
     * @param {Integer} tenantId tenantId
     * @param {module:api/AdminEndpointsApi~removeEndpointConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeEndpointConfiguration = function(endpointConfigurationId, tenantId, callback) {
      var postBody = null;

      // verify the required parameter 'endpointConfigurationId' is set
      if (endpointConfigurationId == undefined || endpointConfigurationId == null) {
        throw "Missing the required parameter 'endpointConfigurationId' when calling removeEndpointConfiguration";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling removeEndpointConfiguration";
      }


      var pathParams = {
        'endpointConfigurationId': endpointConfigurationId
      };
      var queryParams = {
        'tenantId': tenantId
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
        '/api/enterprise/admin/endpoints/{endpointConfigurationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBasicAuthConfiguration operation.
     * @callback module:api/AdminEndpointsApi~updateBasicAuthConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointBasicAuthRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateBasicAuthConfiguration
     * @param {Integer} basicAuthId basicAuthId
     * @param {module:model/CreateEndpointBasicAuthRepresentation} createRepresentation createRepresentation
     * @param {module:api/AdminEndpointsApi~updateBasicAuthConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EndpointBasicAuthRepresentation}
     */
    this.updateBasicAuthConfiguration = function(basicAuthId, createRepresentation, callback) {
      var postBody = createRepresentation;

      // verify the required parameter 'basicAuthId' is set
      if (basicAuthId == undefined || basicAuthId == null) {
        throw "Missing the required parameter 'basicAuthId' when calling updateBasicAuthConfiguration";
      }

      // verify the required parameter 'createRepresentation' is set
      if (createRepresentation == undefined || createRepresentation == null) {
        throw "Missing the required parameter 'createRepresentation' when calling updateBasicAuthConfiguration";
      }


      var pathParams = {
        'basicAuthId': basicAuthId
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
      var returnType = EndpointBasicAuthRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/basic-auths/{basicAuthId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEndpointConfiguration operation.
     * @callback module:api/AdminEndpointsApi~updateEndpointConfigurationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointConfigurationRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateEndpointConfiguration
     * @param {Integer} endpointConfigurationId endpointConfigurationId
     * @param {module:model/EndpointConfigurationRepresentation} representation representation
     * @param {module:api/AdminEndpointsApi~updateEndpointConfigurationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EndpointConfigurationRepresentation}
     */
    this.updateEndpointConfiguration = function(endpointConfigurationId, representation, callback) {
      var postBody = representation;

      // verify the required parameter 'endpointConfigurationId' is set
      if (endpointConfigurationId == undefined || endpointConfigurationId == null) {
        throw "Missing the required parameter 'endpointConfigurationId' when calling updateEndpointConfiguration";
      }

      // verify the required parameter 'representation' is set
      if (representation == undefined || representation == null) {
        throw "Missing the required parameter 'representation' when calling updateEndpointConfiguration";
      }


      var pathParams = {
        'endpointConfigurationId': endpointConfigurationId
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
      var returnType = EndpointConfigurationRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/endpoints/{endpointConfigurationId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
