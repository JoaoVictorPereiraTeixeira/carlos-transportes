import {createStyles, makeStyles, Theme } from '@material-ui/core';

type Props = {
    title: string,
    text: string,
    img: string
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    principle:{
      borderRadius: "180px",
      background:  '#FFFFFF',
      boxShadow: "8px 8px 32px rgba(0, 0, 0, 0.16)",
      width:"320px",
      height: "600px",
      margin: "20px",
      transition:"0.3s",
      '&:hover': {
        marginTop: "-20px",
      },
    },
    principleImage:{
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center",
        borderRadius: "180px",
        background:  '#F5F5F5',
        marginTop: "30px",
        height:"200px",
        width: "200px"
    },
    img:{
      
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

const Principle : React.FC<Props> = (props) => {
  const classes = useStyles();
    return (
        <div className={classes.principle}>
            <div className={classes.contentPrinciple}>
                <div className={classes.principleImage}>
                  <img src={props.img} alt="Pontualidade" className={classes.img} />
                </div>
                
                <h1 className={classes.h1}>{props.title}</h1>
                <h5 className={classes.h5}>{props.text}</h5>

            </div>
        </div>
    );
};

export default Principle;