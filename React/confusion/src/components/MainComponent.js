import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import MenuComponent from './MenuComponent'
import DishDetailComponent from './DishDetailComponent'
import {DISHES} from '../shared/dishes'

class MainComponent extends Component {
    // Component lifecycle
    // 1. Constructor
    // 2. Render
    // 3. componentDidMount
    // 4. and above: Renders depending on events (clic, etc)

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        // DON'T DO this.selectedDish = dish !!!! Use setState instead
        this.setState(
            {
                selectedDish: dishId
            }
        );
    }

    render() {
        return (
            <div>
            <Navbar dark color="primary">
                <div className="container">
                <NavbarBrand href="/"> 
                    Ristorante Con Fusion
                </NavbarBrand>
                </div>
            </Navbar>
            <MenuComponent dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
            <DishDetailComponent 
                dish={this.state.dishes.filter( (dish) => dish.id === this.state.selectedDish )[0]}/>
            </div>
        );
    }
}

export default MainComponent;