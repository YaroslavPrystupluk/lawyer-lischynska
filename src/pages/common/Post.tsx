import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import type { IPost } from "../../types/types";
import Spiner from "../../components/Spiner/Spiner";

const Post: FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [post, setPost] = useState<IPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      if (!id) return;
      setLoading(true);
      setErr(null);
      try {
        const ref = doc(db, "posts", id);
        const snap = await getDoc(ref);
        if (!snap.exists()) {
          if (isMounted) {
            setPost(null);
            setErr("Пост не знайдено");
          }
          return;
        }
        const data = snap.data() as Omit<IPost, "id">;
        if (isMounted) setPost({ id: snap.id, ...data });
      } catch (e: any) {
        if (isMounted) setErr(e.message ?? "Помилка завантаження");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return <Spiner />;
  }

  if (err || !post) {
    return (
      <div className="max-w-3xl mx-auto text-center text-slate-600 mt-10">
        {err ?? "Пост не знайдено"}
        <div className="mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80"
          >
            ← Назад
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={post.img}
        alt={post.title}
        className="w-full h-full sm:h-80 object-cover"
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{post.title}</h1>
        <p className="text-slate-700 leading-relaxed whitespace-pre-line">
          {post.description}
        </p>
        <p className="pt-4">З повагою, Адвокат Ліщинська Тетяна</p>
        <span>моб. тел. </span>
        <a href="tel:+380982592599">0982592599</a>

        {/* Кнопка назад */}
        <div className="mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80"
          >
            ← Назад
          </button>
        </div>
      </div>
    </article>
  );
};

export default Post;
