import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Main from "../../components/main/Main";
import Footer from "../../components/footer/Footer";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      {/* {posts.map((post) => (
        <h2 key={post.id}>{post.title}</h2>
      ))} */}
      {/* posts들이 제대로 들어오는지 확인하는 코드 */}
      <Footer />
    </>
  );
}
