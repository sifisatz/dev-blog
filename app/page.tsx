import Link from 'next/link'
import useGitHubJsonData from './hooks/useGitHubJsonData';

interface IPosts {
  id: string;
  title: string;
  body: string;
  likes: number;
}

export default async function Home  () {

const { data, loading, error } = useGitHubJsonData(``);
  console.log('data', data)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Link href={'/about'}>About</Link>
      <Link href={'/blog/1'}>Blog 1</Link>
      <Link href={'/blog/2'}>Blog 2</Link>
      <Link href={'/blog/3'}>Blog 3 </Link>
    </div>
  )
}


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://raw.githubusercontent.com/sifisatz/dev-blog/master/resources/db.json`)
  const data :IPosts = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}
