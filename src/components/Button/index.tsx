import { ButtonHTMLAttributes, useEffect } from 'react';

import { Buttons } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps){
    return(
        <Buttons className="button" {...props} />
    )
}