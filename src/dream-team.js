module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;
    let result = new Array();
    members.forEach(name => {
        if (typeof name !== 'string') return false;
        else {
            name = name.trim();
            result.push(name[0].toUpperCase());
        }
    });
    return result.sort().join('');;
};