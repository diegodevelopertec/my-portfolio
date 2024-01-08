import {  ReactNode } from "react"
import { Container } from "./style"
import Header from "../Header"
import Footer from "../Footer"

type Props={
    children:ReactNode
}
export default ({children}:Props)=>{
    return <Container>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </Container>
}