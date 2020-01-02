import { ComponentInfoDeclaration } from "./ComponentInfoDeclaration";
import React, { FC } from "react";
import { Table } from "reactstrap";

export interface ComponentInfoProps {
    info: ComponentInfoDeclaration<any>;
}

export const ComponentInfo: FC<ComponentInfoProps> = ({
    info
}: ComponentInfoProps) => {
    return <>
        <h1>{info.name}</h1>
        <p>{info.description}</p>
        <h2>Properties</h2>
        <Table striped>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {info.props.map(i => <tr>
                    <th scope="row">{i.property}</th>
                    <td>{i.type}</td>
                    <td>
                        {i.requred ? <b>Required</b> : "Optional"}
                        {i.default !== undefined && " default = " + i.default}
                    </td>
                    <td>{i.description}</td>
                </tr>)}
            </tbody>
        </Table>
        <h2>Example</h2>
        {info.example}
    </>;
};