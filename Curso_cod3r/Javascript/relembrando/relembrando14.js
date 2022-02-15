const escolherVeiculo = (veiculo) =>{

    switch (veiculo) {
        case "Caminhão":
            console.log(`O valor dos caminhões são:
            # Trovão : 100.000
            # Monstro: 250.000
            # Thor: 150.000
            `)
            break;
        case "Moto":
            console.log(`O valor das motos são:
            # Trinity : 65.000
            # Ninja: 50.000
            # Tornado: 100.000
            `)
            break;
        default:
            break;
    }
}


escolherVeiculo('Caminhão')