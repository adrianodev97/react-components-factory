import styled from 'styled-components'
import { ModernShowcaseCardSass } from './components/ModernShowcaseCard'

const Main = styled.main`
  background: #262626;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
`

const Content = styled.div`
  width: 100%;
  max-width: 500px;
  height: 850px;
`

function App() {
  return (
    <Main>
      <Container>
        <Content>
          <ModernShowcaseCardSass />
        </Content>
      </Container>
    </Main>
  )
}

export default App
