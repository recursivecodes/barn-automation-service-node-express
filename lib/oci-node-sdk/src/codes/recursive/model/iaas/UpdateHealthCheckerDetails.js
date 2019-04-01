/**
* The health checker's configuration details.
* @param {string} protocol The protocol the health check must use; either HTTP or TCP. Example: HTTP
* @param {number} port The backend server port against which to run the health check. Example: 8080
* @param {number} returnCode The status code a healthy backend server should return. Example: 200
* @param {number} retries The number of retries to attempt before a backend server is considered "unhealthy". Example: 3
* @param {number} timeoutInMillis The maximum time, in milliseconds, to wait for a reply to a health check. A health check is successful only if a reply returns within this timeout period. Example: 3000
* @param {number} intervalInMillis The interval between health checks, in milliseconds. Example: 10000
* @param {string} responseBodyRegex A regular expression for parsing the response body from the backend server. Example: ^((?!false).|\s)*$
* @param {string} [urlPath] The path against which to run the health check. Example: /healthcheck
* @class UpdateHealthCheckerDetails
*/
class UpdateHealthCheckerDetails {
	constructor(protocol, port, returnCode, retries, timeoutInMillis, intervalInMillis, responseBodyRegex, urlPath){
		this.protocol = protocol;
		this.port = port;
		this.returnCode = returnCode;
		this.retries = retries;
		this.timeoutInMillis = timeoutInMillis;
		this.intervalInMillis = intervalInMillis;
		this.responseBodyRegex = responseBodyRegex;
		this.urlPath = urlPath;
	}
}

module.exports = UpdateHealthCheckerDetails;