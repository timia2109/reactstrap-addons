import React from "react";
import { ComponentInfoDeclaration } from "./components/ComponentInfo/ComponentInfoDeclaration";
import { LoadingAlert } from "./reactComponentLib";
import { SuggestionInputTest } from "./components/SuggestionInput/SuggestionInputTest";

export const ComponentInfos: ComponentInfoDeclaration<any>[] = [
    {
        name: "LoadingAlert",
        description: "Alert with loading spinner",
        props: [
            {
                property: "title",
                type: "string",
                description: "Content of the Alert",
                requred: false,
                default: "Loading..."
            },
            {
                property: "color",
                type: "string",
                description: "Bootstrap color of the alert (primary, secoundary, ...)",
                requred: false,
                default: "primary"
            }
        ],
        example: <LoadingAlert />
    }, 
    {
        name: "SuggestionInput",
        description: "Provides a text field containing suggestions",
        example: <SuggestionInputTest />,
        props: [
            {
                property: "value",
                type: "string",
                description: "The current value of the input",
                requred: true
            },
            {
                property: "onChange",
                type: "(value: string) => any",
                description: "Is called, when the input changes (use this to fetch suggestions)",
                requred: true
            },
            {
                property: "suggestions",
                type: "string[]",
                description: "Suggestions which are shown",
                requred: false,
                default: "[]"
            },
            {
                property: "id",
                type: "string",
                description: "DOM ID of the input",
                requred: true
            },
            {
                property: "placeholder",
                type: "string",
                description: "Placeholder of the Input",
                requred: false
            }
        ]
    }
];