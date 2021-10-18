// @flow 
import {createStyles, makeStyles, Theme } from '@material-ui/core';
import useWindowDimensions from '../../utils/responsive/index'
import logoHome from '../../static/img/logoHome.png'

type Props = {

};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logoContainer:{
      [theme.breakpoints.up('md')] : {
        left:"60%",
        top:"30%",
        position: "absolute",
      },
      height:"60vw"
    },
    img:{
      [theme.breakpoints.up('md')] : {
        width:"501px",
        height:"189px"
      },
      [theme.breakpoints.up('sm')] : {
        width:"501px",
        height:"189px"
      },
      width:"88vw",
      height:"35vw"
    }
  }),
);

const LogoHome = (props: Props) => {

    const classes = useStyles();
    return (
      <>
        <div className={classes.logoContainer}>
          <img src={logoHome} alt="Logo Carlos Transporte" className={classes.img} />
        </div>       
      </> 
    )
};

export default LogoHome