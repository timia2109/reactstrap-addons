import React from "react";

import { FormGroup, Label } from "reactstrap";
import fetchPokemonNames from "./PokemonNamesFetcher";
import { SuggestionInput } from "../../reactComponentLib";

// Fetch some example data
interface SuggestionInputTestStates {
    pokemonNames: string[];
    suggestions: string[];
    value: string;
}

export class SuggestionInputTest extends React.Component<{}, SuggestionInputTestStates> {
    constructor(props: {}) {
        super(props);

        this.state = {
            pokemonNames: [],
            suggestions: [],
            value: ""
        };

        this.onValueChange = this.onValueChange.bind(this);
    }

    async componentDidMount() {
        this.setState({
            pokemonNames: await fetchPokemonNames()
        });
    }

    onValueChange(value: string) {
        // Search for suggestions
        const lowerValue = value.toLowerCase();
        const suggestions = this.state.pokemonNames.filter(v => v.substring(0, lowerValue.length) === lowerValue);
        this.setState({
            value, suggestions
        });
    }

    render() {
        return <FormGroup>
            <Label for="pokemonChooser">Whats your favorite Pokemon?</Label>
            <SuggestionInput
                value={this.state.value}
                onChange={this.onValueChange}
                suggestions={this.state.suggestions}
                id="pokemonChooser"
            />
        </FormGroup>;
    }
}