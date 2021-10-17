import {createStyles, makeStyles, Theme } from '@material-ui/core';
import useWindowDimensions from '../../utils/responsive/index'
import Principle from './principle';
import PrincipleResponsive from './principle-responsive';
import pontualidade from '../../static/img/pontualidade.png'
import qualidade from '../../static/img/qualidade.png'
import respeito from '../../static/img/respeito.png'

type Props = {
    
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    principles:{
        display:"flex",
        justifyContent:"center",
        width: "100%"
    }
  }),
);

const Principles = (props: Props) => {
    let windowDimensions = useWindowDimensions();

    const classes = useStyles();
    return (
        <div className={classes.principles}>
             {windowDimensions.width > 850 ? 
              (
                <>
                  <Principle img={pontualidade} title="Pontualidade" text="scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the"/>
                  <Principle img={qualidade} title="Qualidade" text="scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the"/>         
                  <Principle img={respeito} title="Respeito" text="scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the"/>       
                </>
              )
              : 
              (
                <>
                  <PrincipleResponsive img={pontualidade} title="Pontualidade"/>
                  <PrincipleResponsive img={qualidade} title="Qualidade"/>         
                  <PrincipleResponsive img={respeito}title="Respeito"/>   
                </>
              )
            }
        </div>

    );
};

export default Principles