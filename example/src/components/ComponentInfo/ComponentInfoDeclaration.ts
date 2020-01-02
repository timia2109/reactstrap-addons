export interface ComponentInfoDeclaration<TComponentProps> {
    name: string;
    description: string;
    props: ComponentInfoProps<TComponentProps>[],
    example: JSX.Element;
}

export interface ComponentInfoProps<TComponentProps> {
    property: keyof TComponentProps,
    type: string,
    description: string;
    requred: boolean;
    default?: string;
}