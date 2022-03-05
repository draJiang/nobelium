import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Pagination from '@/components/Pagination'
import { getAllPosts } from '@/lib/notion'
import BLOG from '@/blog.config'

export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const postsToShow = posts.slice(0, BLOG.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > BLOG.postsPerPage
  return {
    props: {
      page: 1, // current page is 1
      postsToShow,
      showNext
    },
    revalidate: 1
  }
}

const blog = ({ postsToShow, page, showNext }) => {
  return (

    <Container title={BLOG.title} description={BLOG.description}>
      <div className='hello'>
        <img alt='Jiang zi long' className='avatar' src='/avatar.png' ></img>
        <p>我失去了表达，在光天化日之下</p>
        <div className='badgeList info'>
          <img alt='Guangzhou' src='https://img.shields.io/badge/-Guangzhou-8ABAFF' ></img>
          <img alt='UX designer' src='https://img.shields.io/badge/-UX%20designer-8ABAFF' ></img>
        </div>
        {/* <div className='badgeList'>

          <a target='_blank' rel='noopener noreferrer' href='https://www.figma.com/community/plugin/1052801241204192805/Find-and-Replace'>
            <img alt='Find-and-Replace' src='https://img.shields.io/badge/dynamic/json?style=flat-square&color=important&logo=figma&logoColor=ffffff&label=Find-and-Replace&query=%24.meta.plugin.install_count&url=https://www.figma.com/api/plugins/1052801241204192805/versions?org_id=' ></img>
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.figma.com/community/plugin/972907074446766155/Better-Round-to-Pixel'>
            <img alt='Better-Round-to-Pixel' src='https://img.shields.io/badge/dynamic/json?color=848dfb&style=flat-square&logoColor=ffffff&logo=figma&label=Better%20Round%20to%20Pixel&query=%24.meta.plugin.install_count&url=https%3A%2F%2Fwww.figma.com%2Fapi%2Fplugins%2F972907074446766155%2Fversions%3Forg_id%3D' ></img>
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.figma.com/community/plugin/1048103390719092358/Table-of-contents'>
            <img alt='Table-of-contents' src='https://img.shields.io/badge/dynamic/json?color=dd5327&label=Table of contents&logoColor=ffffff&style=flat-square&logo=figma&query=$.meta.plugin.install_count&url=https://www.figma.com/api/plugins/1048103390719092358/versions?org_id=' ></img>
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.figma.com/community/plugin/961125519572930689/Markdown'>
            <img alt='Markdown' src='https://img.shields.io/badge/dynamic/json?color=313131&style=flat-square&label=Markdown&logoColor=ffffff&logo=figma&query=%24.meta.plugin.install_count&url=https%3A%2F%2Fwww.figma.com%2Fapi%2Fplugins%2F961125519572930689%2Fversions%3Forg_id%3D' ></img>
          </a>

        </div> */}
      </div>

      {postsToShow.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}

      {showNext && <Pagination page={page} showNext={showNext} />}

    </Container>
  )
}

export default blog
