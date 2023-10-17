import styled from 'styled-components'

export const StyledRotateCard = styled.div`
  position: relative;
`

export const StyledRotateCardBack = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: #fcbc24;
  position: absolute;
  z-index: 0;
  box-shadow:
    0px 10px 20px rgba(0, 0, 0, 0.2),
    0px 6px 6px rgba(0, 0, 0, 0.23);
`

export const StyledRotateCardFront = styled.div`
  position: relative;
  z-index: 1;
  padding: 2rem 2rem 5rem;
  transition: 0.5s;
  border-radius: 30px;
  background-color: #fff;

  &:hover {
    transform: rotate(12deg);
    background-color: #ffe9b8;
  }
`

export const StyledRotateCardContent = styled.div`
  width: 100%;
  max-width: 275px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  transition: 0.5s;

  &:hover {
    transform: rotate(-12deg);
  }

  svg {
    width: 95px;
    height: 95px;
    margin-bottom: 1rem;

    polyline {
      stroke: #fcbc24;
    }
    polygon {
      stroke: #fcbc24;
    }
    line {
      stroke: #fcbc24;
    }
  }
`

export const StyledRotateCardTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  color: #febc27;
`

export const StyledRotateCardDescription = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
  color: #a7a2a2;
`
