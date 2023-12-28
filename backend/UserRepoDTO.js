class UserRepoDTO {
    constructor(repo) {
        const includedProperties = [
            'id', 'name', 'private','description','fork','url','language','clone_url','visibility'
        ];

        Object.assign(
            this,
            ...Object.keys(repo)
              .filter(key => includedProperties.includes(key))
              .map(key => ({ [key]: repo[key] }))
        );
    }
}

module.exports = UserRepoDTO;