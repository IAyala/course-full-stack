import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

function DishDetail(props) {
    function getDateOptions() {
        return {
            year: 'numeric',
            month: 'short', 
            day: '2-digit'
        };
    }
    
    function getDateString(date) {
        return date.toLocaleDateString("en-US", getDateOptions());
    }
    
    function renderOneComment(comment) {
        return (
            <ListGroupItem id={comment.id} className="comments-list">
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {getDateString(new Date(comment.date))}</p>
            </ListGroupItem>
        );
    }

    function renderAllComments(dish) {
        if (dish.comments == null) {
            return (<div></div>);
        }
        const comments = dish.comments.map((theComment) => {
            return(renderOneComment(theComment));
        });
        return (
            <div>
                <ListGroup>
                    {comments}
                </ListGroup>
            </div>
        );
    }
    
    if(props.dish != null) {
        return (
            <div className="container dish-detail">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={props.dish.image} alt={props.dish.name}/>
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {renderAllComments(props.dish)}
                    </div>
                </div>
            </div>
        );
    }
    return(<div></div>); //Nothing will be rendered if selectedDish == null
}

export default DishDetail;