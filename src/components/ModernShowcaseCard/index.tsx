import './styles.scss'
// import {} from './styles'

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

// Pensei em fazer um useState que captura o card com hover e
// solta o efeito com onblur, usando um reset time e retirando
// o efeito de uma vez sempre que outro card for focado com hover

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
