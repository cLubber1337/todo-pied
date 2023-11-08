import { Link } from 'react-router-dom'
import { UiButton } from '@/components/ui-kit'
import s from './not-found-page.module.scss'
import imag404 from '../../../public/404.svg'

export const NotFoundPage = () => {
  return (
    <div>
      <div className={s.wrapper}>
        <img src={imag404} alt="404" className={s.image} />

        <UiButton as={Link} to="/" className={s.button}>
          Go to main page
        </UiButton>
      </div>
    </div>
  )
}
