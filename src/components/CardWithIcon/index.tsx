import './styles.scss'
import {
  Card,
  CardContent,
  CardDescription,
  CardIcon,
  CardTitle,
} from './styles'
import LaptopIcon from './LaptopIcon'

export const CardWithIconSass = () => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-icon">
          <LaptopIcon />
        </div>
        <h4 className="card-title">Card Title</h4>
        <p className="card-description">
          Lorem ipsum, er lipsum as it is sometimes k
        </p>
      </div>
    </div>
  )
}

export const CardWithIconSTC = () => {
  return (
    <Card>
      <CardContent>
        <CardIcon>
          <LaptopIcon />
        </CardIcon>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Lorem ipsum, er lipsum as it is sometimes known, is dummy text used in
          laying
        </CardDescription>
      </CardContent>
    </Card>
  )
}
