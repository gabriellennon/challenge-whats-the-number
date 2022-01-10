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
    Error
} from './styles';

export function Home(){
    const [numberInpt, setNumberInpt] = useState('');
    const [number, setNumber] = useState<any | number>(0);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [errorRequest, setErrorRequest] = useState(false);
    const [disabledForm, setDisabledForm] = useState(false);
    const [userError, setUserError] = useState(false);
    
    useEffect(() => {
        if(numberInpt !== ''){
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    },[numberInpt])

    function handleValueInput(event: FormEvent){
        event.preventDefault();
        getData();
    }

    function getData() {
        setLoading(true);
        api.get('rand?min=1&max=300').then(response => {
            setNumber(response.data.value)
            console.log(number);
            console.log(response.data.value);
            setLoading(false);
        }, error => {
            setErrorRequest(true);
            setDisabledForm(true);
            setLoading(false);
            console.log(error)
        });
    }
    
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
                    errorRequest ? 
                    <>
                        <Error>ERRO</Error>
                        <Number className={errorRequest || userError ? 'erroNumber' : ''}>502</Number>
                    </>
                    : <Number>{number}</Number>
                }
                <ContentSort>
                    <form onSubmit={handleValueInput}>
                        <InputSort 
                            value={numberInpt} 
                            type="number" 
                            onChange={event => setNumberInpt(event.target.value)}
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