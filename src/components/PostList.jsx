import React from "react";
import {TransitionGroup,CSSTransition} from "react-transition-group" //Для анимаций

import PostItem from "./PostItem";

/**
 * Список постов. 
 * @param {Array} posts - список постов 
 * @param {String} title - заголовок 
 * @param {Function} remove - коллбек для удаления поста
 */
const PostList = ({posts, title,remove}) => {
	if (!posts.length){
		return(
			<h1 style={{textAlign:"center"}}> Посты не найдены!</h1>
		)
	}
	return (
		<div >
			<h1 style={{textAlign:'center'}}> {title}</h1>
			<TransitionGroup>
				{posts.map((post,index) => 
					<CSSTransition
						key={post.id}
						timeout={500}
						classNames="post"
					>
							<PostItem remove={remove} number={index+1} post={post} />
						</CSSTransition>
				)}
			</TransitionGroup>
		</div>
	);
}

export default PostList;

 