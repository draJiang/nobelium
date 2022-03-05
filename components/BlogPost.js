import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'

const BlogPost = ({ post }) => {
  
  const tags = post.tags.map(item =>
    <span key={item.id} className=' flex-shrink-0 text-gray-500 dark:text-gray-400'>  ·  {item}</span>
  )

  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <a>
        <article key={post.id} className="post mb-2 md:mb-6 dark:post_dark">
          <header className="flex flex-col justify-between md:flex-row md:items-baseline">
            <h2 className="pose_title text-lg md:text-xl font-medium mb-2 cursor-pointer text-gray-800 dark:text-gray-100">
              {post.title}
            </h2>
          </header>
          <main>
            <p className="post_summary md:block leading-8 text-gray-500 dark:text-gray-300">
              {post.summary}
            </p>

          </main>

          <div className='minor flex'>
            <time className="post_time flex-shrink-0 text-gray-500 dark:text-gray-400">
              {formatDate(post?.date?.start_date || post.createdTime, BLOG.lang)}
            </time>
            {tags}
          </div>

        </article>
      </a>
    </Link>
  )
}

export default BlogPost
