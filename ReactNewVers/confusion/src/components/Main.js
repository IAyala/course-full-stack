import React, {Component} from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import About from './AboutComponent';
import Contact from './ContactComponent';
//import DishDetail from './DishDetail';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';
import { Switch, Route, Redirect } from 'react-router-dom';
import DishDetail from './DishDetail';

class Main extends Component {
    // Component lifecycle
    // 1. Constructor
    // 2. Render
    // 3. componentDidMount
    // 4. and above: Renders depending on events (clic, etc)

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    getFeatured(list) {
        return list.filter((element) => element.featured)[0]; // First element that has "featured" equal to True
    }

    render() {
        // Anything that does not match or menu will be redirect to /home (redirect)
        const HomePage = () => {
            return (
                <Home 
                    dish={this.getFeatured(this.state.dishes)} 
                    leader={this.getFeatured(this.state.leaders)}
                    promotion={this.getFeatured(this.state.promotions)}
                />
            );
        }
        
        // Remember that React routers also passes location and history, but we'll only use match here
        // parseInt(match.params.dishId,10) ---> Convert string to a based-10 integer
        const DishWithId = ({match}) => {
            return (
                <DishDetail 
                    dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                >
                </DishDetail>
            );
        }
        
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage}></Route>
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>}></Route>
                    <Route path="/menu/:dishId" component={DishWithId}></Route>
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders}/>}></Route>
                    <Redirect to="/home" ></Redirect>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;