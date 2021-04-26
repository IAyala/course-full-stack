import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseURL } from '../shared/baseURL';

function Menu(props) {
    function RenderDish({theDish}) {
        // Use backquotes `` for the link "to" parameter
        // <CardImg width="100%" src={baseURL + theDish.image} alt={theDish.name} /> --> The image will be fetched directly from the server
        // We could remove the images from "public" folder, except the logo...
        return (
            <Card>
                <Link to={`/menu/${theDish.id}`} >
                    <CardImg width="100%" src={baseURL + theDish.image} alt={theDish.name} />
                    <CardImgOverlay>
                        <CardTitle>{theDish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderDish theDish={dish} />
            </div>
        )
    });

    if(props.dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if(props.dishes.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;