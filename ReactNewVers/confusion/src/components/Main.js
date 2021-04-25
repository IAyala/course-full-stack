import { Component } from 'react';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';
import About from './AboutComponent';
import ContactRedux from './ContactCompRedux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DishDetail from './DishDetail';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';

// This method allows to get these variables into this Component
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

// This method allows to dispatch actions (plain JS objects) to modify the state
const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())}
});

class Main extends Component {
    // Component lifecycle
    // 1. Constructor
    // 2. Render
    // 3. componentDidMount
    // 4. and above: Renders depending on events (clic, etc)
    
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
    }

    render() {
        const getFeatured = (list) => {
            return list.filter((element) => element.featured)[0]; // First element that has "featured" equal to True
        }
        
        // Anything that does not match or menu will be redirect to /home (redirect)
        const HomePage = () => {
            return (
                <Home 
                    dish={getFeatured(this.props.dishes.dishes)} // State has changed its shape. See dishes.js reducer for details
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errmess}
                    leader={getFeatured(this.props.leaders)}
                    promotion={getFeatured(this.props.promotions)}
                />
            );
        }
        
        // Remember that React routers also passes location and history, but we'll only use match here
        // parseInt(match.params.dishId,10) ---> Convert string to a based-10 integer
        const DishWithId = ({match}) => {
            return (
                <DishDetail 
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errmess}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                    addComment={this.props.addComment}
                >
                </DishDetail>
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage}></Route>
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>}></Route>
                    <Route path="/menu/:dishId" component={DishWithId}></Route>
                    <Route exact path="/contactus" component={ContactRedux} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders}/>}></Route>
                    <Redirect to="/home" ></Redirect>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));