class PermissionsParser {
    getArray(identityResponse, permissionType) {
        const arr = identityResponse.body.data.permissions
        const permission = arr.find(item => item.rsname === permissionType);

        return permission.scopes // ['read', 'add', etc]
    }
    assertScope(identityResponse, permissionType, scopeToCheck) {
        let scopesArray = this.getArray(identityResponse, permissionType)
        for (const scope of scopesArray) {
            if (scope === scopeToCheck) {
                return scope;
            }
        }
        return null;
    }
}

module.exports = new PermissionsParser()