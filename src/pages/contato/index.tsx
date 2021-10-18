
import { Page } from '../../components/Page';
import { Button, makeStyles, TextField, Theme } from '@material-ui/core';
import whatsappLogo from '../../static/img/whatsappLogo.png'
import gmailLogo from '../../static/img/gmailLogo.png'
import facebookLogo from  '../../static/img/facebookLogoBlue.png'
import backgroundContact from '../../static/img/backgroundContact.png'
import useWindowDimensions from '../../utils/responsive/index'


interface PageFormProps {
    
};

const useStyles = makeStyles((theme : Theme) => ({
    backgroundContact:{
        backgroundImage: `url(${backgroundContact})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        height:"100%",
        [theme.breakpoints.up('md')] : {
            height:"900px",
        },
        display: 'flex',
        flexDirection:"column",
        marginTop:"0px"
    },
    container:{
        display: "flex",
        alignItems:"center",
        [theme.breakpoints.up('md')] : {
            flexDirection:"row",
        },
        flexDirection:"column",
        justifyContent:"space-around",
        marginTop:"100px",
    },
    containerContact:{
        background: "rgba(255, 255, 255, 0.38)",
        borderRadius: "30px",
        paddingTop:"50px",
        [theme.breakpoints.up('md')] : {
            width:"600px",
            padding:"50px"
        },
        height:"300px"
    },
    contentContact:{
        display: "flex",
        alignItems:"center",
        margin:"0px 0px 20px 15%"
    },
    contactText:{
        marginLeft:"10px"
    },
    field:{
        marginTop:"20px",
        width:"100%",
        background:"#F5F5F5"
    },
    buttonSubmit: {
        flexGrow: 1,
        textAlign:'center',
        marginTop:"24px",
        width:"200px"
    },
    callToAction:{
        display:"flex",
        flexDirection: "column",
        alignItems:"center",
        background: "rgba(255, 255, 255, 0.60)",
        padding:"30px",

        [theme.breakpoints.up('md')] : {
            background: "#FFFFFF",
        },
        [theme.breakpoints.down('md')] : {
            marginTop:"30px"
        },
    },
    textCallToAction:{
        display: "flex",
        textAlign:"center",
        color: "#000000",
        fontStyle: "normal",
        fontSize: "22px"
    }
}));


export const ContatoPage = (props: PageFormProps) => {
    const classes = useStyles();
    let windowDimensions = useWindowDimensions();
   
    return (
        <div className={classes.backgroundContact}>
            <Page>
                <div className={classes.container}>
                    <div className={classes.containerContact}>
                        <div className={classes.contentContact}>
                            <img src={whatsappLogo} alt="Ícone telefone"/>
                            <span className={classes.contactText}>(019) 99999-9999</span>
                        </div>

                        <div className={classes.contentContact}>
                            <img src={whatsappLogo} alt="Ícone telefone"/>
                            <span className={classes.contactText}>(019) 99999-9999</span>
                        </div>

                        <div className={classes.contentContact}>
                            <img src={gmailLogo} alt="Ícone telefone"/>
                            <span className={classes.contactText}>atendimento@carlos-transporte.com.br</span>
                        </div>

                        <div className={classes.contentContact}>
                            <img src={facebookLogo} alt="Ícone telefone"/>
                            <span className={classes.contactText}>Carlos Transportes Facebook</span>
                        </div>
                    </div>
                    <div>
                        <div className={classes.callToAction} style = {{width: `${windowDimensions.width > 700 ? "450px": "100%"}`}}>
                            <p className={classes.textCallToAction}>Preencha os campos abaixo e entraremos em contato</p>
                            <TextField id="outlined-basic" label="Nome *" variant="outlined" className={classes.field}/>
                            <TextField id="outlined-basic" label="Email *" variant="outlined" className={classes.field}/>
                            <TextField id="outlined-basic" label="Telefone *" variant="outlined" className={classes.field}/>
                            <TextField id="outlined-basic" label="Empresa (opcional)" variant="outlined" className={classes.field}/>

                            <Button variant="contained" size="large" color="primary" className={classes.buttonSubmit}>
                                Enviar
                            </Button>
                        </div>
                    </div>
                </div>
                
            </Page>
        </div>

    );
};

export default ContatoPage;