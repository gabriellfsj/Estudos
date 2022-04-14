// Atvidiade Maps

function getAdmins (map) {
    let admins = []
    for (const [key, value] of map) {
        if (value === 'Admin') {
            admins.push(key)
        }
    }
    return admins;
}

const usuario = new Map()

usuario.set('Luiz', 'Admin')
usuario.set('Stephany', 'Admin')
usuario.set('Jorge', 'User')
usuario.set('Gabriel', 'Admin')

console.log(getAdmins(usuario))