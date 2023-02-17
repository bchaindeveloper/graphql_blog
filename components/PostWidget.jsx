import React, { useState, useEffect} from 'react';
import moment from 'moment';
import Link from 'next/Link';
import { getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, SetRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
        getSimilarPosts(category, slug)
          .then((result) => SetRelatedPosts(result))
    } else {
      getRecentPosts()
      .then((result) => getRecentPosts(result))
    }

  }, [input])
  return (
    <div>
      PostWidget
    </div>
  )
}

export default PostWidget