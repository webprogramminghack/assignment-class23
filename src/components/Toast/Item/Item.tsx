import { FC, ReactNode } from 'react'
import style from './Item.module.scss'
import { Header } from './Header';
import { Body } from './Body';

type ToastType = {
  children: ReactNode;
}

type SubComponents = {
  Header: typeof Header
  Body: typeof Body
}

export const Item: FC<ToastType> & SubComponents = ({ children }) => {
  return (
    <div className={style.item}>
      { children }
    </div>
  )
}

Item.Header = Header
Item.Body = Body
