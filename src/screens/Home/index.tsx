import { 
    Container, 
    Content,
    Header,
    Title,
    Divider,
    Number,
    ContentSort,
    InputSort,
    ButtonComponent,
} from './styles';

export function Home(){
    
    return (
        <Container>
            <Header>
                <Title>QUAL É O NÚMERO?</Title>
                <Divider />
            </Header>
            <Content>
                <Number>0</Number>
                <ContentSort>
                    <InputSort type="number" />
                    <ButtonComponent>Enviar</ButtonComponent>
                </ContentSort>
            </Content>
        </Container>
    )
}