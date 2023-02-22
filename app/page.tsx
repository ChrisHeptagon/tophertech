import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import "public/globals.css";
import Link from "next/link";

// This is the component that renders a single post card
export function PostCard({ post }: { post: any }) {
  return (
    <div className="bg-white rounded-lg shadow-lg m-4 w-96">
      <div className="flex flex-col">
        <Link href={post.url}>
        <Image
          src={post.thumbnail}
          width={384}
          height={384}
          className="rounded-ts-lg"
          alt={post.title}
        />
        </Link>
        <Link href={post.url}>
        <h1 className="text-2xl font-bold text-center mt-4 p-4">{post.title}</h1>
        </Link>
        <Link href={post.url}>
        <p className="text-gray-500 text-justify mt-2 p-4">{post.description}</p>
        </Link>
        <div className="flex flex-row mt-4 p-2">
          <div className="flex flex-row items-center ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1z" />
              <path d="M8 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h2.5V3.5A.5.5 0 0 1 8 3z" />
            </svg>
            <p className="text-gray-500 ml-2">{post.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IndexPage() {
  return (
    <div className="bg-[#3a5eff]">
      <div className=" flex p-4 flex-wrap justify-evenly">
        {allPosts
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((unit, idx) => (
            <PostCard post={unit} key={idx}></PostCard>
          ))}
      </div>
    </div>
  );
}
