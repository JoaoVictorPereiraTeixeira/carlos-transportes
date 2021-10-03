
import { Page } from '../../components/Page';
import { Button, makeStyles, TextField, Theme } from '@material-ui/core';
import whatsappLogo from '../../static/img/whatsappLogo.png'
import gmailLogo from '../../static/img/gmailLogo.png'
import facebookLogo from  '../../static/img/facebookLogoBlue.png'
import backgroundContact from '../../static/img/backgroundContact.png'

interface PageFormProps {
    
};


const useStyles = makeStyles((theme : Theme) => ({
    backgroundContact:{
        backgroundImage: `url(${backgroundContact})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        height:"900px",
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
        padding:"50px",
        [theme.breakpoints.up('md')] : {
            width:"600px",
        },
        width:"450px",
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
    callToAction:{
        display:"flex",
        flexDirection: "column",
        alignItems:"center",
        background:"#FFFFFF",
        width:"450px",
        padding:"30px",
        [theme.breakpoints.down('md')] : {
            marginTop:"30px",
        },
    },
    field:{
        marginTop:"20px",
        width:"400px",
        background:"#F5F5F5"
    },
    buttonSubmit: {
      flexGrow: 1,
      textAlign:'center',
      marginTop:"24px",
      width:"200px"
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
                        <div className={classes.callToAction}>
                            <p className={classes.textCallToAction}>Preencha os campos abaixo e entraremos em contato</p>
                            <TextField id="outlined-basic" label="Nome *" variant="outlined" className={classes.field}/>
                            <TextField id="outlined-basic" label="Email *" variant="outlined" className={classes.field}/>
                            <TextField id="outlined-basic" label="Telefone *" variant="outlined" className={classes.field}/>
                            <TextField id="outlined-basic" label="Empresa (opcional)" variant="outlined" className={classes.field}/>

                            
                            <Button variant="contained" size="large" color="primary" className={classes.buttonSubmit}>
                                Enviar feedback
                            </Button>
                        </div>
                    </div>
                </div>
                
            </Page>
        </div>

    );
};

export default ContatoPage;