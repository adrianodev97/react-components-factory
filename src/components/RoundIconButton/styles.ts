import styled from 'styled-components'

export const RoundButtonLink = styled.a`
  text-decoration: none;
`

export const RoundButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    rgb(2, 153, 158) 30%,
    rgb(0, 173, 145) 50%
  );
  box-shadow:
    0px 10px 20px rgba(2, 153, 158, 0.2),
    0px 6px 6px rgba(2, 153, 158, 0.23);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  svg {
    width: 35px;
    height: 35px;
    display: flex;
  }
`
