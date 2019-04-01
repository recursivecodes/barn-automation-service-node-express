/**
 * A class that contains properties necessary to perform UpdateHealthChecker
 * @param {string} loadBalancerId The {@link https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm|OCID} of the load balancer associated with the health check policy to be updated.
 * @param {string} backendSetName The name of the backend set associated with the health check policy to be retrieved. Example: example_backend_set
 * @param {UpdateHealthCheckerDetails} updateHealthCheckerDetails An instance of {@link UpdateHealthCheckerDetails}
 * @param {string} [opcRequestId] The unique Oracle-assigned identifier for the request. If you need to contact Oracle about a particular request, please provide the request ID.
 * @param {string} [opcRetryToken] Minimum: 1 Maximum: 64 A token that uniquely identifies a request so it can be retried in case of a timeout or server error without risk of executing that same action again. Retry tokens expire after 24 hours, but can be invalidated before then due to conflicting operations (e.g., if a resource has been deleted and purged from the system, then a retry of the original creation request may be rejected).
 * @class UpdateHealthCheckerRequest
 */
class UpdateHealthCheckerRequest {

	constructor(loadBalancerId, backendSetName, updateHealthCheckerDetails, opcRequestId, opcRetryToken){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateHealthCheckerDetails;
		this.loadBalancerId = loadBalancerId;
		this.backendSetName = backendSetName;
		this.updateHealthCheckerDetails = updateHealthCheckerDetails;
		this.opcRequestId = opcRequestId;
		this.opcRetryToken = opcRetryToken;
	}

	get headers(){
		this._headers['opc-request-id'] = this.opcRequestId;
		this._headers['opc-retry-token'] = this.opcRetryToken;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['loadBalancerId'] = this.loadBalancerId;
		this._pathParams['backendSetName'] = this.backendSetName;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = UpdateHealthCheckerRequest;