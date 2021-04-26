/* eslint-disable */

import { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem , BreadcrumbItem, Breadcrumb} from 'reactstrap';
import { Button, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseURL } from '../shared/baseURL';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentFormComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
          };
        this.toggleModal = this.toggleModal.bind(this);
    }
    
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render() {
        return (
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)} className="col-12">
                            <Row className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name">Your Name</Label>
                                <Control.text model=".author" id="author" name="author"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }}/>
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters ',
                                            maxLength: 'Must be 15 characters or less '
                                        }} />
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment" 
                                    rows="6" className="form-control"/>
                            </Row>
                            <Row className="form-group">
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    };
}

function DishDetail(props) {
    // Remember to pass the parameter between {} as this is used as a component
    // <RenderAllComments comments={props.comments} />
    function RenderAllComments({comments, postComment, dishId}) {
        
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
                <Fade in>
                    <ListGroupItem id={comment.id} className="comments-list">
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {getDateString(new Date(comment.date))}</p>
                    </ListGroupItem>
                </Fade>
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
                        <Stagger in>
                            {theComments}
                        </Stagger>
                    </ListGroup>
                    <CommentFormComponent dishId={dishId} postComment={postComment}/>
                </div>
            </div>
        );
    }
    
    function RenderDish({dish}) {
        return (
            <div className="col-12 col-md-5 m-1">
                <FadeTransform in transformProps = {{exitTransform: 'scale(0.5) translateY(-50%)'}}>
                    <Card>
                        <CardImg width="100%" src={baseURL + dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            </div>
        );
    }

    if(props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if(props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        )
    }
    else if(props.dish != null) {
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
                    <RenderAllComments
                        comments={props.comments} 
                        postComment={props.postComment}
                        dishId={props.dish.id} >
                    </RenderAllComments>
                </div>
            </div>
        );
    }
    return(<div></div>); //Nothing will be rendered if selectedDish == null
}

export default DishDetail;