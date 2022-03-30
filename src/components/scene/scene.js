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

    return <BackgroundMain back = {props.story[line].img} >
        <Button onClick={() => previous()}>PREVIOUS</Button>
        <Button onClick={() => next()}>NEXT</Button>

        {props.story.map((data, position) => {
            return (
                <Border position = {position} isSelected = {position === line ? true : false} ><li position = {position} >{data.txt}</li></Border>
            )
        })
        }
    </BackgroundMain>
}

export default Scene;