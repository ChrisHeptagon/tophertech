import Image from "next/image";
import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";


export async function generateStaticParams(): Promise<any>{
    return allPosts.map(({ slug }) => ({
      slug: slug.split('/'),
    }));
  }

export default function FirstLevel({ params }:any) {    
    const page = allPosts.find(({ slug }) => slug === params.slug.join('/')) as Post;
    const MDXContent = useMDXComponent(page.body.code);

  return (
    <div className="bg-[#3a5eff]">
      <div className=" flex p-4 flex-wrap justify-evenly">
        <MDXContent
        components={{
        p: (props) => <p className="text-[blacl] text-justify mt-2 p-4" {...props} />,
        h1: (props) => <h1 className="text-2xl font-bold text-center mt-4 p-4" {...props} />,}}/>
      </div>
    </div>
  );
}
