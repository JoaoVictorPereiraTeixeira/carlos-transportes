// @flow 
import {createStyles, makeStyles, Theme } from '@material-ui/core';
import useWindowDimensions from '../../utils/responsive/index'
import logoHome from '../../static/img/logoHome.png'

type Props = {

};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logoContainer:{
      left:"60%",
      top:"30%",
      position: "absolute"
    },
    img:{
      width:"501px",
      height:"189px"
    }
  }),
);

const LogoHome = (props: Props) => {
    let windowDimensions = useWindowDimensions();

    const classes = useStyles();
    return (
      <>
        {
          windowDimensions.width > 1000 ? 
          (
            <div className={classes.logoContainer}>
              <img src={logoHome} alt="Logo Carlos Transporte" className={classes.img} />
            </div>
          ) : (<div></div>)
      }
      </> 
    )
};

export default LogoHome