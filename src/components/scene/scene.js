import React, { useState } from "react";
import { Border, Button, BackgroundMain } from "../../styles";

const Scene = props => {
    const [line, setLine] = useState(0);

    const next = () => {
        if (line < 3) {
            setLine(line + 1)
        };
    }

    const previous = () => {
        if (line > 0) {
            setLine(line - 1)
        };
    }


    return <BackgroundMain back={props.story[line].img} >

        <Button onClick={() => previous()}>Previous</Button>
        <Button onClick={() => next()}>Next</Button>

        {props.story.map((data, key) => {
            return (
                <Border key={key} isSelected={key === line ? true : false} ><li key={key}>{data.txt}</li></Border>
            )
        })
        }

    </BackgroundMain>
}

export default Scene;