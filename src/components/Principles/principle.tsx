import {createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

type Props = {
    
};


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    principle:{
      borderRadius: "180px",
      background:  '#FFFFFF',
      boxShadow: "8px 8px 32px rgba(0, 0, 0, 0.16)",
      width:"320px",
      height: "600px",
      margin: "20px"
    },
    principleImage:{
        borderRadius: "180px",
        background:  '#F5F5F5',
        marginTop: "30px",
        height:"200px",
        width: "200px"
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
    },
    h5:{
        fontSize:"18px",
        color: "#000000",
        fontWeight: "normal"
    }
  }),
);


const Principle = (props: Props) => {
  const classes = useStyles();
    return (
        <div className={classes.principle}>
            <div className={classes.contentPrinciple}>
                <div className={classes.principleImage}/>
                
                <h1 className={classes.h1}>No prazo</h1>
                <h5 className={classes.h5}> scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the</h5>

            </div>
        </div>
    );
};


export default Principle;