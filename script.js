async function searchPokemon() {
    const pokemonNumber = document.getElementById('pokemon-number').value;
    const pokemonImage = document.getElementById('pokemon-image');
    const pokemonName = document.getElementById('pokemon-name');
    const pokemonId = document.getElementById('pokemon-id');
    const pokemonType = document.getElementById('pokemon-type');


    if (!pokemonNumber) {
        alert('Digite o número do Pokémon');
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
        if (!response.ok) throw new Error('Pokémon não encontrado');

        const data = await response.json();
        pokemonImage.src = data.sprites.front_default;
        pokemonName.textContent = `Nome: ${data.name}`;
        pokemonId.textContent = `# ${data.id}`;
        pokemonType.textContent = `${data.types.map(typeInfo => typeInfo.type.name).join(', ')}`;

    } catch (error) {
        alert(error.message);
        resetFields();
    }
}

function resetFields() {
    document.getElementById('pokemon-number').value = '';
    document.getElementById('pokemon-image').src = '';
    document.getElementById('pokemon-name').textContent = '';
    document.getElementById('pokemon-id').textContent = '';
    document.getElementById('pokemon-type').textContent = '';

}