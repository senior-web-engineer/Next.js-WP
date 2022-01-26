import React from 'react';
import Link from 'next/link'

function PostCard(props) {
  const {post} = props
  return (
    <Link href={`/${post.slug}`}>
    <div className="post-card">
      <div className="post-card-banner">
        {
          post.featured_media ?
            <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url} />
            :
            <img src="img/post-banner-01.jpg"/>
        }
      </div>
      <div className="post-card-title">
        <h2>{post.title.rendered} </h2>
      </div>
      <div className="post-card-excerpt" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}>


      </div>
      <div className="post-card-date">
        <span>{post.date.split('T')[0]}</span>
      </div>
    </div>
    </Link>
  );
}

export default PostCard;