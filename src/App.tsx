import styled from 'styled-components'

const Main = styled.main`
  background: #cbcbcb;
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
`

function App() {
  return (
    <Main>
      <Container></Container>
    </Main>
  )
}

export default App
