import Badge from "@material-ui/core/Badge"
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    badge: {
        background: "#3A7F5F"
    }
});

const ChartPosRecap = (props) => {
    const classes = useStyles();
    
    return (
        <div className="flex flex-col md:self-center md:w-80 bg-dark-1 bg-opacity-90 px-4 py-4 rounded-2xl">
            <h1 className="font-bold text-3xl text-center">Chart History</h1>
            <h1 className="text-center font-thin mt-3 mb-4">This album has charted {props.positions.length} {props.positions.length > 1 ? 'times on the Billboard 200 Year End Chart' : 'time on the Billboard 200 Year End Chart'}</h1>
            {props.positions.map((position) => {
                return (
                    <div className="flex flex-row justify-center">
                        <Badge badgeContent={`#${position.rank}`} classes={{colorPrimary: classes.badge }} color="primary">
                            <h1 className="bg-dark text-center py-1 px-2 my-1 rounded-full font-bold w-20 shadow-md">{position.year}</h1>
                        </Badge>
                    </div>)
            })}
        </div>
    )
}

export default ChartPosRecap
