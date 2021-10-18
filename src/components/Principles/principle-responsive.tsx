import {createStyles, makeStyles, Theme } from '@material-ui/core';

type Props = {
  title: string,
  img: string
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    principle:{
      height: "300px",
      margin: "8px"
    },
    principleImage:{
      display: "flex",
      flexDirection:'column',
      justifyContent: 'center',
      alignItems: "center",
      borderRadius: "180px",
      background:  '#F5F5F5',
      marginTop: "30px",
      height:"100px",
      width: "100px"
    },
    img:{
      height: '40px'
    },
    contentPrinciple:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign:"center"
    },
    h1:{
     fontSize:"15px",
     color: "#F5F5F5"
    }
  }),
);

const PrincipleResponsive : React.FC<Props>  = (props) => {
  const classes = useStyles();
    return (
        <div className={classes.principle}>
            <div className={classes.contentPrinciple}>
                <div className={classes.principleImage}>
                  <img src={props.img} alt="Principle" className={classes.img} />
                </div>
                <h1 className={classes.h1}>{props.title}</h1>
            </div>
        </div>
    );
};

export default PrincipleResponsive;