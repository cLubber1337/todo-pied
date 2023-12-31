import { ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import s from './ui-dialog.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

interface UiDialogProps {
  trigger?: ReactNode
  content: ReactNode
  title?: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const UiDialog = ({ trigger, content, title, isOpen, setIsOpen }: UiDialogProps) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={'overlay'} />

        <Dialog.Content className={'modal-content'}>
          <Dialog.Title className={s.title}>{title}</Dialog.Title>
          {content}
          <Dialog.Close className={s.closeBtn} aria-label="Close">
            <FontAwesomeIcon icon={faXmark} />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
