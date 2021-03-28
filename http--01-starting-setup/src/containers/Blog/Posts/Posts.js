import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import './Posts.css';
class Posts extends Component {
	state = {
		posts: [],
		error: false
	};
	componentDidMount() {
		axios
			.get('/posts')
			.then((response) => {
				const posts = response.data.slice(0, 4);
				const updatedPosts = posts.map((post) => {
					return {
						...post,
						author: 'Max'
					};
				});
				this.setState({ posts: updatedPosts });
			})
			.catch((err) => {
				// console.log(err);
				this.setState({ error: true });
			});
	}
	postSelectedHandler = (id) => {
		this.props.history.push({pathname: '/posts/'+id});
	};
	render() {
		let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>;
		if (!this.state.error) {
			posts = this.state.posts.map((post) => {
				return (
						<Post
							key={post.id}
							title={post.title}
							author={post.author}
							clicked={() => this.postSelectedHandler(post.id)}
						/>
				);
			});
		}
		return (<div>
					<section className="Posts">{posts}</section>;
					<Route path={this.props.match.url+"/:id"} exact component={FullPost} />
				</div>); 
	}
}

export default Posts;
