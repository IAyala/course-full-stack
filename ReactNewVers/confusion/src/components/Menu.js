import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Menu(props) {
    function RenderDish({theDish}) {
        // Use backquotes `` for the link "to" parameter
        return (
            <Card>
                <Link to={`/menu/${theDish.id}`} >
                    <CardImg width="100%" src={theDish.image} alt={theDish.name} />
                    <CardImgOverlay>
                        <CardTitle>{theDish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderDish theDish={dish} />
            </div>
        )
    });
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

export default Menu;