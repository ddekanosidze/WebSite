import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../../mainPage/MainPage';
import Casino from '../../casino/Casino'
import Slots from '../../slots/Slots'
import Keno from '../../keno/Keno'
import JetX from '../../jetx/JetX'
import Games from '../../games/Games'
import Boardgames from '../../boardgames/Boardgames'
import Profile from '../../profile/Profile';
import ProtectedRoute from './ProtectedRoute';
import PersonalInformation from '../../profile/personalinformation/PersonalInformation';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/casino" element={<Casino />}/>
            <Route path="/slots" element={<Slots />}/>
            <Route path="/keno" element={<Keno />}/>
            <Route path="/jetx" element={<JetX />}/>
            <Route path="/games" element={<Games />}/>
            <Route path="/boardgames" element={<Boardgames />}/>

            <Route exact path="/client/profile" element={<div><Profile /><ProtectedRoute /></div>}>
                <Route path="" element={<PersonalInformation />} /> 
            </Route>
        </Routes>
    )
}

export default Router

