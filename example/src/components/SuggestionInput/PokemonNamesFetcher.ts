/**
 * Loads some Pokemon Names from the PokeAPI (as Testdata)
 */
export default async function fetchPokemonNames() : Promise<string[]> {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=150";
    const request = await fetch(url);
    const response = await request.json();

    return response.results.map((o: any) => o.name);
}