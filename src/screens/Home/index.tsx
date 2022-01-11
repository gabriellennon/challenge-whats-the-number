import { FormEvent, useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { Button } from '../../components/Button';
import '../../styles/styles.css';
import { api } from '../../services/api';
import { 
    Container, 
    Content,
    Header,
    Title,
    Divider,
    Number,
    ContentSort,
    InputSort,
    LoadingStyle,
    ButtonComponent,
    Error,
    NewMatch,
    DescriptionUser
} from './styles';

export function Home(){
    //INPUT DO USUARIO
    const [numberInpt, setNumberInpt] = useState('');

    const [feedbackUser, setFeedbackUser] = useState('');

    //NUMERO DA REQUEST
    const [number, setNumber] = useState<any | number>(0);

    const [loading, setLoading] = useState(false);
    //ESTADOS DE CONTOLE DE: ERRO, LOADING, DISABLEDS
    const [disabled, setDisabled] = useState(true);
    const [errorRequest, setErrorRequest] = useState(false);
    const [disabledForm, setDisabledForm] = useState(false);
    const [userError, setUserError] = useState(false);
    const [buttonNew, setButtonNew] = useState(false);

    useEffect(() => {
        setButtonNew(false);
    },[])
    
    //VALIDACAO PARA SO PODER SORTEAR SE TIVER ALGUM PALPITE DIGITADO NO INPUT
    useEffect(() => {
        if(numberInpt !== ''){
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    },[numberInpt])

    //SUBMIT FORM INPUT
    function handleValueInput(event: FormEvent){
        event.preventDefault();
        getData();
    }

    //FUNCTION DA REQUEST
    function getData() {
        setLoading(true);
        api.get('rand?min=1&max=300').then(response => {
            const numberInput = numberInpt !== '' ?  numberInpt : 0;
            const numberFormat = leftPad(numberInput, 3)
            setNumber(numberFormat)

            //VENDO SE O PALPITE DO USUARIO É IGUAL AO NUMERO DE RESPOSTA DA REQUEST
            if(response.data.value == numberInput){
                setUserError(false);
                setFeedbackUser('Você acertou!!!!')
            } else {
                setUserError(true);
                if(response.data.value > numberInput){
                    setFeedbackUser('É maior')
                } else {
                    setFeedbackUser('É maior')
                }
            }


            setErrorRequest(false);
            setButtonNew(true);
            setDisabledForm(true);
            setLoading(false);
        }, error => {
            setErrorRequest(true);
            setDisabledForm(true);
            setButtonNew(true);
            setLoading(false);
            console.log(error)
        });

        //RESETANDO O INPUT
        setNumberInpt('');
    }

    //FUNCAO PARA ADICIOAR 0 A ESQUERDA
    ///PARAMETROS: VALOR, QUANTIDADE MAXIMA DE 0 PARA OCUPAR, PADDICHAR (OPCIONAL) - PRA QUAL CARACTER É USADO
    function leftPad(value:  any, totalWidth: number, paddingChar?: any) {
        var length = totalWidth - value.toString().length + 1;
        return Array(length).join(paddingChar || '0') + value;
    }

    function newMath(){
        setDisabled(false);
        setDisabledForm(false);
        setFeedbackUser('');
        setButtonNew(false);
        setNumber(0);
    }
    
    //LOGICA PARA ESPERAR RECEBER RESPOSTA DA API PARA MOSTRAR O CONTEUDO, USANDO O LOADING ENQUANTO ESPERA
    if(loading){
        return (
            <LoadingStyle>
                <ClipLoader color="DA471A" loading={loading} size={80} />
            </LoadingStyle>
        )
    }
    return (
        <Container>
            <Header>
                <Title>QUAL É O NÚMERO?</Title>
                <Divider />
            </Header>
            <Content>
                {
                    feedbackUser !== '' ?
                    <DescriptionUser className={feedbackUser === 'Você acertou!!!!' ? 'userSuccess' : ''}>{feedbackUser}</DescriptionUser>
                    : ''
                }
                {
                    errorRequest ? 
                    <>
                        <Error>ERRO</Error>
                        <Number className={errorRequest || userError ? 'erroNumber' : ''}>502</Number>
                    </>
                    : <Number className={userError ? '' : 'userSuccess'}>{number}</Number>
                }
                {
                    buttonNew ?
                    <NewMatch onClick={() => newMath()}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2364 1.7625C9.14822 0.675 7.65478 0 5.99625 0C2.67917 0 0 2.685 0 6C0 9.315 2.67917 12 5.99625 12C8.7955 12 11.1295 10.0875 11.7974 7.5H10.2364C9.62101 9.2475 7.95497 10.5 5.99625 10.5C3.51219 10.5 1.49343 8.4825 1.49343 6C1.49343 3.5175 3.51219 1.5 5.99625 1.5C7.24203 1.5 8.35272 2.0175 9.16323 2.835L6.74672 5.25H12V0L10.2364 1.7625Z" fill="white"/>
                        </svg>
                        Nova Partida
                    </NewMatch>
                    :
                    <></>
                }
                <ContentSort>
                    <form onSubmit={handleValueInput}>
                        <InputSort 
                            value={numberInpt} 
                            type="number" 
                            maxLength={3}
                            onChange={event => setNumberInpt(event.target.value)}
                            placeholder='Digite o palpite'
                            disabled={disabledForm}
                        />
                        <ButtonComponent
                            type="submit"
                            disabled={disabled}
                        >Enviar</ButtonComponent>
                    </form>
                </ContentSort>
            </Content>
        </Container>
    )
}