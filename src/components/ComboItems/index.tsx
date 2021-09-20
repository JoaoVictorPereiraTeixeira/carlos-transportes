import { Button, createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import * as React from 'react';
import AdditionMenu from './additionMenu';
import TransportItems from './transportItems';
type Props = {
    defaultValues: string[]
};

export const ComboItems = (props: Props) => {
    return (    
        <div>
          <AdditionMenu/>
          <TransportItems values={props.defaultValues}/>
        </div>
    );
};