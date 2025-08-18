import { FC, useEffect, useState } from "react";
import SEOHelper from "../../SEOHelpers/SEOHelper.tsx";
import { db } from "../../firebase/firebaseConfig.ts";
import { IPost } from "../../types/types.ts";
import { collection, doc, getDocs } from "firebase/firestore";

const siteUrl = "https://advocate-lishchynska.rivne.ua/blog";

const Blog: FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const posts = querySnapshot.docs.map((post) => {
        return {
          id: post.id,
          ...post.data(),
        };
      });
      setPosts(posts as IPost[]);
    };
    getAllPosts();
  }, []);

  console.log(posts);

  return (
    <>
      <SEOHelper
        title="Блог — Адвокат Ліщинська"
        description="Корисні статті та поради з права від адвоката Ліщинської."
        keywords="адвокат блог, юридичні статті, правова допомога"
        url={siteUrl}
        image={`${siteUrl}/images/og-image.png`}
      />

      <p>Blog</p>
    </>
  );
};

export default Blog;
