import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import {DispatchContext} from '../../Context'
import React, {useContext, useEffect, useState} from 'react';

import {createStyles, makeStyles, Theme } from '@material-ui/core';


type Props = {
    
};


const labels: { [index: string]: string } = {
  1: 'Péssima',
  2: 'Ruim',
  3: 'Boa',
  4: 'Ótima',
  5: 'Excelente',
};

const RatingMUI = (props: Props) => {
    const [value, setValue] = useState<number | null>(0);
    const [hover, setHover] = useState(-1);
    const {state, dispatch} = useContext(DispatchContext)


    return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Rating
              name="hover-feedback"
              value={state.feedback.avaliation}
              size="large"
              precision={1}
              onChange={(event, newValue) => {
                setValue(newValue);
                dispatch({type: 'CHANGE_FEEDBACK_AVALIATION', avaliation: newValue})
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={<StarIcon  style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
              <Box sx={{ ml: 2, marginTop:"10px" }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
    );
};

export default RatingMUI