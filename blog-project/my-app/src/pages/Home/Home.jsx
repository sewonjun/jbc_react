import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import "./home.css";

export default function Home() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((json) => {
      setPosts(json.data);
    });
  }, []);
  // console.log(posts);
  return (
    <Fragment>
      <Header />
      <Banner />
      <Main posts={posts} />
      {/* {posts.map((post) => (
        <h2 key={post.id}>{post.title}</h2>
      ))} */}
      {/* posts들이 제대로 들어오는지 확인하는 코드 */}
      <Footer />
    </Fragment>
  );
}
