import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import * as React from 'react';
import AdditionMenu from './additionMenu';
import TransportItems from './transportItems';
type Props = {
    defaultValues: string[]
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    additionMenu: {
        display: "flex",
        alignItems: "center"
    }
  }),
);


export const ComboItems = (props: Props) => {
    const classes = useStyles();

    return (    
        <div>
          <AdditionMenu/>
          <TransportItems values={props.defaultValues}/>
        </div>
    );
};