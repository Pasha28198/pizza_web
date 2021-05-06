import {createContext, useContext, useState} from 'react'

const MobileMenuCtx = createContext()

export function AppWrapper({children}){

    const [ open, setOpen ] = useState(false)

    let mobMenuState = { 
        open,
        setOpen: ()=>setOpen(!open) 
    }

    return(
        <MobileMenuCtx.Provider value={mobMenuState}>
            {children}
        </MobileMenuCtx.Provider>
    )
}

export function useMobileMenuCtx(){
    return useContext(MobileMenuCtx)
}