// @flow 
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
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
    const [value, setValue] = React.useState<number | null>(0);
    const [hover, setHover] = React.useState(-1);

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
              value={value}
              size="large"
              precision={1}
              onChange={(event, newValue) => {
                setValue(newValue);
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