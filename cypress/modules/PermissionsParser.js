class PermissionsParser {
    getArray(identity, permissionType) {
        const arr = identity.permissions
        const permission = arr.find(item => item.rsname === permissionType);

        return permission.scopes // ['read', 'add', etc]
    }
    assertScope(identity, permissionType, scopeToCheck) {
        let scopesArray = this.getArray(identity, permissionType)
        for (const scope of scopesArray) {
            if (scope === scopeToCheck) {
                return scope;
            }
        }
        return null;
    }
}

module.exports = new PermissionsParser()