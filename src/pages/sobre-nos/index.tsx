
import { Page } from '../../components/Page';
import { makeStyles, Theme } from '@material-ui/core';
import truckTransport from '../../static/img/truckTransport.png'
import travels from '../../static/img/travels.png'

interface PageFormProps {
    
};


const useStyles = makeStyles((theme : Theme) => ({
    imagesRight:{
        marginTop:"100px",
        marginRight:"50px",
        borderRadius: "50px",
        [theme.breakpoints.up(550)] : {
            height:"300px"
        },
        height:"250px"

    },
    imagesLeft:{
        marginTop:"100px",
        marginLeft:"50px",
        borderRadius: "50px",
    },
    containerTruck:{
        display: "flex",
        alignItems:"center",
        [theme.breakpoints.up(800)] : {
            flexDirection:"row"
        },
        flexDirection:"column"
    },
    containerTravels:{
        display: "flex",
        alignItems:"center",
        [theme.breakpoints.up(800)] : {
            flexDirection:"row"
        },
        flexDirection:"column-reverse"
    },
    text:{
        fontSize:"20px",
        [theme.breakpoints.up(800)] : {
           marginTop:"0px"
        },
        marginTop:"30px"
    },
    modalityContainer:{
        marginTop: "120px"
    },
    modalityTransport:{
        display:"inline",
        padding:"8px",
        fontSize:"40px",
        color:"#FFFFFF",
        background: "#F5E233"
    },
    modalityDescription:{
        fontSize:"20px"
    }
}));


export const SobreNosPage = (props: PageFormProps) => {
    const classes = useStyles();
   
    return (
        <Page>
            <div className={classes.containerTruck}>
              <img src={truckTransport} alt="Caminhão Carlos Transportes" className={classes.imagesRight} />
              <span className={classes.text}>Scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips</span>
            </div>

            <div className={classes.containerTravels}>
              <span className={classes.text}>Scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips</span>
              <img src={travels} alt="Cidades" className={classes.imagesLeft} />
            </div>

            <div className={classes.modalityContainer}>
                <div className={classes.modalityTransport}>
                    ENTREGAS EMPRESÁRIAIS
                </div>
                <p className={classes.modalityDescription}>
                    Scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips
                </p>
            </div>

            
            <div className={classes.modalityContainer}>
                <div className={classes.modalityTransport}>
                    FRETES
                </div>
                <p className={classes.modalityDescription}>
                    Scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips
                </p>
            </div>

            
            <div className={classes.modalityContainer}>
                <div className={classes.modalityTransport}>
                    MUDANÇAS
                </div>
                <p className={classes.modalityDescription}>
                    Scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips
                </p>
            </div>
        </Page>
    );
};

export default SobreNosPage;