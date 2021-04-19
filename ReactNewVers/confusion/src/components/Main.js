import React, {Component} from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
//import DishDetail from './DishDetail';
import {DISHES} from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    // Component lifecycle
    // 1. Constructor
    // 2. Render
    // 3. componentDidMount
    // 4. and above: Renders depending on events (clic, etc)

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    render() {
        // Anything that does not match or menu will be redirect to /home (redirect)
        const HomePage = () => {
            return <Home/>
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage}></Route>
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}></Route>
                    <Redirect to="/home" ></Redirect>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;