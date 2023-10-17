import './styles.scss'
import {
  StyledRotateCard,
  StyledRotateCardBack,
  StyledRotateCardContent,
  StyledRotateCardDescription,
  StyledRotateCardFront,
  StyledRotateCardTitle,
} from './styles'
import LaptopIcon from './LaptopIcon'

const title = 'Customizable'
const description =
  'Lorem ipsum Dolar. Sit Amet Consectetur Adipisicing Elit. Invetore. Atque?.'

export const RotateHoverCardSass = () => {
  return (
    <div className="rotate-card">
      <div className="rotate-card-back" />
      <div className="rotate-card-front">
        <div className="rotate-card-content">
          <LaptopIcon />
          <p className="rotate-card-title">{title}</p>
          <p className="rotate-card-description">{description}</p>
        </div>
      </div>
    </div>
  )
}

export const RotateHoverCardSTC = () => {
  return (
    <StyledRotateCard>
      <StyledRotateCardBack />
      <StyledRotateCardFront>
        <StyledRotateCardContent>
          <LaptopIcon />
          <StyledRotateCardTitle>{title}</StyledRotateCardTitle>
          <StyledRotateCardDescription>
            {description}
          </StyledRotateCardDescription>
        </StyledRotateCardContent>
      </StyledRotateCardFront>
    </StyledRotateCard>
  )
}
