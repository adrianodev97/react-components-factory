import styled from 'styled-components'

export const Card = styled.div`
  flex: 1;
  max-width: 300px;
  padding: 2rem;
  background-color: #21272f;
  border-radius: 0.5rem;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`

export const CardIcon = styled.div`
  width: 75px;

  svg {
    polyline {
      stroke: #00bd9580;
    }
    polygon {
      stroke: #00bd9580;
    }
    line {
      stroke: #00bd9580;
    }
  }
`

export const CardTitle = styled.h4`
  color: #fff;
  font-size: 20px;
  text-align: center;
`

export const CardDescription = styled.p`
  color: #b9b9b9;
  text-align: center;
`
