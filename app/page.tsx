import Image from "next/image";
import { allPosts } from "contentlayer/generated"
import 'public/globals.css'

// This is the component that renders a single post card
export function PostCard ({ post }: { post:any }) {
  return (
    <div className=" max-w-[500px] min-h-fit inline shadow-md rounded-lg bg-[#5b9400] border border-[#025c5c]">
      <div className="flex items-center justify-center shadow-black drop-shadow">
    <a href={post.url}>
      <Image className="rounded-t-lg" src={post.thumbnail} width='500' height='500' alt={post.title}/>
    </a>
      </div>
    <div className="p-3">
      <span className="w-fit">
    <a className="flex text-[#000000] items-end justify-center text-center text-[2vw]" href={post.url}>
      <h2>{post.title}</h2>
    </a>
    <a href={post.url} className=" text-[#000000] flex items-end justify-center text-center text-[1.5vw]">
      {post.description}
    </a>
    </span>
    </div>
    </div>
  );
}




  export default function IndexPage() {
    return (
      <div className="bg-[#3a5eff]">    
          <div className=" flex p-4 flex-wrap justify-evenly">
            {allPosts.sort((a, b) => a.title.localeCompare(b.title)).map((unit, idx) => (<PostCard post={unit} key={idx}></PostCard>))}
            </div>       
          </div>
    )
  }