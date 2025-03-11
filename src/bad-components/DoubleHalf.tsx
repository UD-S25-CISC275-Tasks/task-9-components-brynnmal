import React from "react";
import { Button } from "react-bootstrap";
import { useDoubleHalfState } from "./DoubleHalfState";

function Doubler(): React.JSX.Element {
    const {dhValue, setDhValue} = useDoubleHalfState();
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver(): React.JSX.Element {
    const {dhValue, setDhValue} = useDoubleHalfState();
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const { dhValue } = useDoubleHalfState();
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler/ >
            <Halver/ >
        </div>
    );
}
