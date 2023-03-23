import styles from '@/components/tooltip.module.scss'

import type { PropsWithChildren } from 'react'
import classNames from 'classnames'

export type TooltipProps = PropsWithChildren<{
  message?: string
  className?: string
}>

export const Tooltip = ({
  children,
  message,
  className,
}: TooltipProps): JSX.Element => (
  <div className={classNames(styles.wrapper, className)}>
    <div>{children}</div>
    {message && <div className={styles.message}>{message}</div>}
  </div>
)
