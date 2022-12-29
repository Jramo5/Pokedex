const pokemon = async () => {
    const pokename = document.getElementById("pokemon-name");
    let pokemonName = pokename.value;
    pokemonName = pokemonName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokemonImage("../assets/img/pokew.webp")
        }
            else {
                return res.json();
            }
        });

        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            const PokeNMe = data.name;
            const tipo = data.types;
            const height = data.height;
            const peso = data.weight;
            const abilities = data.abilities;
            const experience = data.base_experience;
            pokemonImage(pokeImg);
            PokeNM(PokeNMe);
            poke_type(tipo);
            Altura(height);
            Weight(peso);
            habilidad(abilities);
            experiencia(experience);
            console.log(pokeImg);
        }
    };

const pokemonImage = (url) => {
    const pokePhoto = document.getElementById("pokemon-image");
    pokePhoto.src = url;
}


const PokeNM = (poke) =>{
    const pokeNombre = document.getElementById('poke-resultado');
    const name = poke;
    pokeNombre.innerHTML = poke.toUpperCase();
}

const poke_type = (types) => {
    const type_name = document.getElementById('poke-type');
    const tipo_pokemon = types.map((item) => item.type.name);
    type_name.innerHTML = tipo_pokemon;
}

const Altura = (height) =>{
    const altura = document.getElementById('poke-altura');
    const altura_pokemon = height;
    altura.innerHTML = height + ' m';
}

const Weight = (Weight) =>{
    const peso = document.getElementById('Weight');
    const peso_pokemon = Weight;
    peso.innerHTML = Weight + ' kg';  
}

const habilidad = (abilites) => {
    const habilidad_pokemon = document.getElementById('pokemon-habilidad');
    tipo_habilidad = abilites.map((item) => item.ability.name);
    habilidad_pokemon.innerHTML = tipo_habilidad;
}

const experiencia = (exp) =>{
    const experience = document.getElementById('pokemon-experiencia');
    pokeExp = exp;
    experience.innerHTML = exp;
}