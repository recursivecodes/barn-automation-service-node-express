/**
 * A class that contains properties necessary to perform UpdateZone
 * @param {string} zoneNameOrId The name or OCID of the target zone.
 * @param {UpdateZoneDetails} updateZoneDetails An instance of {@link UpdateZoneDetails}
 * @param {string} [compartmentId] Minimum: 1 Maximum: 255 The OCID of the compartment the resource belongs to.
 * @param {string} [ifMatch] The If-Match header field makes the request method conditional on the existence of at least one current representation of the target resource, when the field-value is *, or having a current representation of the target resource that has an entity-tag matching a member of the list of entity-tags provided in the field-value.
 * @param {string} [ifUnmodifiedSince] The If-Unmodified-Since header field makes the request method conditional on the selected representation's last modification date being earlier than or equal to the date provided in the field-value. This field accomplishes the same purpose as If-Match for cases where the user agent does not have an entity-tag for the representation.
 * @class UpdateZoneRequest
 */
class UpdateZoneRequest {

	constructor(zoneNameOrId, updateZoneDetails, compartmentId, ifMatch, ifUnmodifiedSince){
		this._headers = {};
		this._pathParams = {};
		this._queryParams = {};
		this.body = '';
		this.body = updateZoneDetails;
		this.zoneNameOrId = zoneNameOrId;
		this.updateZoneDetails = updateZoneDetails;
		this.compartmentId = compartmentId;
		this.ifMatch = ifMatch;
		this.ifUnmodifiedSince = ifUnmodifiedSince;
	}

	get headers(){
		this._headers['if-match'] = this.ifMatch;
		this._headers['if-unmodified-since'] = this.ifUnmodifiedSince;
		return this._headers;
	}
	set headers(value){
		this._headers = value;
	}
	get queryParams(){
		this._queryParams['compartmentId'] = this.compartmentId;
		return this._queryParams;
	}
	set queryParams(value){
		this._queryParams = value;
	}
	get pathParams(){
		this._pathParams['zoneNameOrId'] = this.zoneNameOrId;
		return this._pathParams;
	}
	set pathParams(value){
		this._pathParams = value;
	}
}
module.exports = UpdateZoneRequest;