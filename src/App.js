import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import RoomHome from './pages/RoomHome';
import TempHome from './TempHome';
import EditorPage from './pages/EditorPage';
import HomePage from "./HomePage";
import Signup from "./components/SignUp";
import Login from "./components/Login";

// TempHome will redirect on /room page use it in Homepage page

function App() {
    return (
        <>
            <div>
                <Toaster
                    position="top-right"
                    toastOptions={{
                        success: {
                            theme: {
                                primary: '#4aed88',
                            },
                        },
                    }}
                ></Toaster>
            </div>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>} ></Route>
                    <Route path="/room" element={<RoomHome />}></Route>
                    <Route
                        path="/editor/:roomId"
                        element={<EditorPage />}
                    ></Route>
                    <Route exact path="/createuser" element={<Signup/>} />
                    <Route exact path="/login" element={<Login/>} />
                </Routes>
            </BrowserRouter>

        </>
    );
};

export default App;
