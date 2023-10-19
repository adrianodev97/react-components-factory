import './styles.scss'
import {} from './styles'

const cardInfo = {
  title: 'Placeholder',
  backgroundImage: {
    src: 'https://source.unsplash.com/random?modern-bedroom',
    width: 1200,
    height: 900,
    alt: 'Placeholder',
  },
  href: '#',
}

export const ModernShowcaseCardSass = () => {
  return (
    <div className="showcase-card">
      <a href={cardInfo.href} className="showcase-card-link">
        <div className="showcase-card-content">
          <div className="showcase-hover-content">
            <p className="showcase-title"></p>
          </div>
          <img
            src={cardInfo.backgroundImage.src}
            width={cardInfo.backgroundImage.width}
            height={cardInfo.backgroundImage.height}
            alt={cardInfo.backgroundImage.alt}
          />
        </div>
      </a>
    </div>
  )
}

export const ModernShowcaseCardSTC = () => {
  return (
    <>
      <></>
    </>
  )
}
