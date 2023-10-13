import './styles.scss'
import { RoundButton, RoundButtonLink } from './styles'
import TelegramIcon from './TelegramIcon'

export const RoundIconButtonSass = () => {
  return (
    <a href="#" className="round-button-link">
      <button className="round-button">
        <TelegramIcon />
      </button>
    </a>
  )
}

export const RoundIconButtonSTC = () => {
  return (
    <RoundButtonLink href="#">
      <RoundButton>
        <TelegramIcon />
      </RoundButton>
    </RoundButtonLink>
  )
}
