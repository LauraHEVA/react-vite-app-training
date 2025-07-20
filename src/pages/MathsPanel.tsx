import React from "react";

import CountPanel from "../components/count-panel/CountPanel";
import Title from "../components/title/Title";

export default function MathsPanel() {
    return (
        <>
            <Title text="Botones que hacen cosas:" />
            <CountPanel />
        </>
    );
}