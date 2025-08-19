import { FC } from "react";
import {IPost} from "../../types/types.ts";

interface BlogPostProps {
    post: IPost;
}
const BlogPost: FC<BlogPostProps> = ({post}) => {
    console.log(post)
  return (


      <div
 className="max-w-sm bg-slate-100 border border-primary rounded-lg shadow-sm">
              <img className="rounded-t-lg" src={post.img} alt={post.title}/>
          <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 ">{post.title}</h5>
              <p className="mb-3 font-normal text-slate-900">{post["description"]}</p>
              <a href="#"
                 className="inline-flex items-center  py-2 text-sm font-medium text-primary rounded-lg hover:text-primary/50 ">
                 Читати більше
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                       fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
      </div>

  );
};

export default BlogPost;
