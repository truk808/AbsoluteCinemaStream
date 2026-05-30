import './App.css'
import AppRouter from "./routes/AppRoutes.tsx";
import {Header} from "../widjets/Header/ui/Header.tsx";

function App() {


    return (
        <>
            <Header />
            <div className='container'>
                <AppRouter />
            </div>
        </>
    )
}

export default App
