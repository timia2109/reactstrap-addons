import { Input, Popover, PopoverBody, ListGroup, ListGroupItem } from "reactstrap";
import React, { useState } from "react";

export interface SuggestionInputProps {
    value: string;
    onChange: (value: string) => any;
    suggestions?: string[];
    id: string;
    placeholder?: string;
}

export const SuggestionInput: React.FC<SuggestionInputProps> = ({
    value, 
    onChange, 
    suggestions, 
    id, 
    placeholder
}) => {

    // Only show suggestions on focus
    const [hasFocus, setFocus] = useState(false);

    // Called when the input changed
    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    // Hide suggestions on unfocus (timeout for selection)
    const onBlur = () => setTimeout(() => setFocus(false), 30);

    return <>
        <Input
            value={value}
            onChange={onInputChange}
            onFocus={() => setFocus(true)}
            onBlur={onBlur}
            placeholder={placeholder}
            id={id} />
        <Popover
            placement="bottom"
            target={id}
            isOpen={hasFocus && suggestions !== undefined && suggestions.length > 0} >
            <ListGroup>
                {suggestions!.map(s =>
                    <ListGroupItem
                        onClick={() => onChange(s)}
                        tag="button"
                        key={s} >
                        {s}
                    </ListGroupItem>
                )}
            </ListGroup>
        </Popover>
    </>
}

