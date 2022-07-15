import React from 'react';
import ReactDOM from 'react-dom';

// importing components
import Dashboard from './components/dashboard';
import Withdrawal from './components/withdrawal';
import Transfer from './components/transfer';
import Airtime from './components/airtime';
import PayBills from './components/paybills';
import NotFound from './components/not_found';


//import './css/style.css';

//import DarkLightTheme from './components/theme_import_js/dark_light_theme';






// importing material icons
import './vendors/iconfonts/font-awesome/css/font-awesome.css';
import './vendors/iconfonts/mdi/css/materialdesignicons.min.css';


import { BrowserRouter, Switch, Routes, Route} from 'react-router-dom';

import { withRouter } from "react-router";

class Main extends React.Component {
    render() {

        var isDarkMode  = true;

        if (isDarkMode) {
            import('./css/style.css')
                .then((something) => {
                    //console.log(something.something);
                });
        }

        return (
            <BrowserRouter>

                <Routes>
						<Route path="/" exact element={<Dashboard />}/>
						<Route path="/dashboard" exact element={<Dashboard  />}/>
                        <Route path="/withdraw" exact element={<Withdrawal />}/>
                        <Route path="/transfer" exact element={<Transfer />}/>
                        <Route path="/airtime" exact element={<Airtime />}/>
                        <Route path="/paybills" exact element={<PayBills />}/>
                    {//<Route component={NotFound}/>
                         }
                </Routes>

            </BrowserRouter>
        );
    }
}
ReactDOM.render(<Main />, document.getElementById("root"));