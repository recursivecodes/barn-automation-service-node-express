/**
* 
* @param {string} compartmentId The OCID of the tenancy containing the tag namespace.
* @param {string} name Minimum: 1 Maximum: 100 The name you assign to the tag namespace during creation. It must be unique across all tag namespaces in the tenancy and cannot be changed.
* @param {string} description Minimum: 1 Maximum: 400 The description you assign to the tag namespace during creation.
* @param {Object} [freeformTags] Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Department": "Finance"}
* @param {Object} [definedTags] Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see {@link https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm|Resource Tags}. Example: {"Operations": {"CostCenter": "42"}}
* @class CreateTagNamespaceDetails
*/
class CreateTagNamespaceDetails {
	constructor(compartmentId, name, description, freeformTags, definedTags){
		this.compartmentId = compartmentId;
		this.name = name;
		this.description = description;
		this.freeformTags = freeformTags;
		this.definedTags = definedTags;
	}
}

module.exports = CreateTagNamespaceDetails;