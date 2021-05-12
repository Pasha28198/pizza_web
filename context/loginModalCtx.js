import {createContext, useContext, useState} from 'react'

const LoginModalCtx = createContext()

export function ModalWrapper({children}){

    const [isReg, setIsReg] = useState(false)

    let loginModalState = { 
        isReg,
        setIsReg: ()=>setIsReg(!isReg) 
    }

    return(
        <LoginModalCtx.Provider value={loginModalState}>
            {children}
        </LoginModalCtx.Provider>
    )
}

export function useLoginModalCtx(){
    return useContext(LoginModalCtx)
}