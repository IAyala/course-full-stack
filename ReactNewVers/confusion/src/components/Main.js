import React, {Component} from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DishDetail from './DishDetail';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }   
}

function Main(props) {
    // Component lifecycle
    // 1. Constructor
    // 2. Render
    // 3. componentDidMount
    // 4. and above: Renders depending on events (clic, etc)
    

    function getFeatured(list) {
        return list.filter((element) => element.featured)[0]; // First element that has "featured" equal to True
    }

    // Anything that does not match or menu will be redirect to /home (redirect)
    const HomePage = () => {
        return (
            <Home 
                dish={getFeatured(props.dishes)} 
                leader={getFeatured(props.leaders)}
                promotion={getFeatured(props.promotions)}
            />
        );
    }
    
    // Remember that React routers also passes location and history, but we'll only use match here
    // parseInt(match.params.dishId,10) ---> Convert string to a based-10 integer
    const DishWithId = ({match}) => {
        return (
            <DishDetail 
                dish={props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                comments={props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            >
            </DishDetail>
        );
    }
    
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/home" component={HomePage}></Route>
                <Route exact path="/menu" component={() => <Menu dishes={props.dishes}/>}></Route>
                <Route path="/menu/:dishId" component={DishWithId}></Route>
                <Route exact path="/contactus" component={Contact} />
                <Route exact path="/aboutus" component={() => <About leaders={props.leaders}/>}></Route>
                <Redirect to="/home" ></Redirect>
            </Switch>
            <Footer />
        </div>
    );
}

export default withRouter(connect(mapStateToProps)(Main));