import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Nav from '../components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profil from "./Profil"
import Group from './Group';

const AccueilDash = () => {
    return (
        <div className=''>
            <BrowserRouter>
                <Nav />
                <div className='flex'>
                    <Sidebar />
                    <div className="h-screen flex-1 p-7">
                        {/* <h1 className="text-2xl font-semibold ">Messages</h1> */}
                        <Routes>
                            <Route path="/Discussions" element={<>Discussions</>} />
                            <Route path="/Contacts" element={<>Contacts</>} />
                            <Route path="/Demandes" element={<>Demandes</>} />
                            <Route path="/Découvrir" element={<>Découvrir</>} />
                      
                            <Route  path="profil" index element={<Profil />} />
                            <Route  path="groupe" index element={<Group />} />
                            
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>

        </div>
    );
};

export default AccueilDash;