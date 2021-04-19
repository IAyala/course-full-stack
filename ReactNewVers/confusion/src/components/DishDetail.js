import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem , BreadcrumbItem, Breadcrumb} from 'reactstrap';
import { Link } from 'react-router-dom';

function DishDetail(props) {
    // Remember to pass the parameter between {} as this is used as a component
    // <RenderAllComments comments={props.comments} />
    function RenderAllComments({comments}) {
        
        function getDateString(date) {
            return date.toLocaleDateString("en-US", getDateOptions());
        }
        
        function getDateOptions() {
            return {
                year: 'numeric',
                month: 'short', 
                day: '2-digit'
            };
        }
        
        function RenderOneComment(comment) {
            return (
                <ListGroupItem id={comment.id} className="comments-list">
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {getDateString(new Date(comment.date))}</p>
                </ListGroupItem>
            );
        }
        
        if (comments == null) {
            return (<div></div>);
        }
        
        const theComments = comments.map((theComment) => {
            return(RenderOneComment(theComment));
        });
        
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <div>
                    <ListGroup>
                        {theComments}
                    </ListGroup>
                </div>
            </div>
        );
    }
    
    function RenderDish({dish}) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    if(props.dish != null) {
        return (
            <div className="container dish-detail">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderAllComments comments={props.comments} />
                </div>
            </div>
        );
    }

    return(<div></div>); //Nothing will be rendered if selectedDish == null
}

export default DishDetail;