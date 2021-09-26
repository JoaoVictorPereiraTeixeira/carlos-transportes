import {createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

type Props = {
  title: string,
  img: string
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    principle:{
      width:"320px",
      height: "300px",
      margin: "20px"
    },
    principleImage:{
        display: "flex",
        alignItems: "center",
        borderRadius: "180px",
        background:  '#F5F5F5',
        marginTop: "30px",
        marginLeft: "-20px",
        height:"150px",
        width: "150px"
    },
    img:{
      marginLeft: "18%",
    },
    contentPrinciple:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign:"center"
    },
    h1:{
     fontSize:"24px",
     color: "#8A8A8A"
    }
  }),
);


const PrincipleResponsive : React.FC<Props>  = (props) => {
  const classes = useStyles();
    return (
        <div className={classes.principle}>
            <div className={classes.contentPrinciple}>
                <div className={classes.principleImage}>
                  <img src={props.img} alt="Pontualidade" className={classes.img} />
                </div>
                <h1 className={classes.h1}>{props.title}</h1>
            </div>
        </div>
    );
};


export default PrincipleResponsive;