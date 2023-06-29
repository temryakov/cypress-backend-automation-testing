class PermissionsParser {
    getArray(identity, permissionType) {
        const arr = identity.permissions;
        const permission = arr.find(item => item.rsname === permissionType);
        
        if (typeof permission !== 'undefined' && typeof permission.scopes !== 'undefined') {
            return permission.scopes; // ['read', 'add', etc]
        }
        return null;
    }
    assertScope(identity, permissionType, scopeToCheck) {
        let scopesArray = this.getArray(identity, permissionType)

        if (scopesArray === null) return null;

        for (const scope of scopesArray) {
            if (scope === scopeToCheck) {
                return scope;
            }
        }
        return null;
    }
}

module.exports = new PermissionsParser()