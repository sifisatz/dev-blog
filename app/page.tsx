import Link from 'next/link'
import useGitHubJsonData from './hooks/useGitHubJsonData';

interface IPosts {
  id: string;
  title: string;
  body: string;
  likes: number;
}
interface Res  {
posts: Array<IPosts>;
}

export default async function Home  () {

  const {posts} : Res = await getData()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {posts.map((post) => (
         <Link key={post.id} href={'/post/[id]'} as={`/post/${post.id}`}>
          {post.title}
      </Link>))}

    </div>
  )
}



async function getData() {
  const res = await fetch(`https://raw.githubusercontent.com/sifisatz/dev-blog/master/resources/db.json`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}