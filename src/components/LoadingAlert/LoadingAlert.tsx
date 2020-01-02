import React, { FC } from "react";
import { Alert, Spinner } from "reactstrap";

export interface LoadingAlertProps {
    title?: string;
    color?: string;
}

export const LoadingAlert: FC<LoadingAlertProps> = ({
    title, color
}: LoadingAlertProps) => {
    
    if (title === undefined) {
        title = "Loading...";
    }

    if (color === undefined) {
        color = "primary";
    }

    return <Alert
        color={color}>
        <Spinner color={color} className="mr-1" />
        {title}
    </Alert>
};