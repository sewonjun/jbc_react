import axios from "axios";
import { useState, useEffect } from "react";
import "./banner.css";

export default function Banner() {
  const [blogInfo, setBlogInfo] = useState(undefined);
  useEffect(() => {
    axios
      .get("http://localhost:3001/blog")
      .then((blog) => {
        setBlogInfo(blog.data);
      })
      .catch((e) => {
        setBlogInfo(undefined);
      });
  }, []);
  console.log(blogInfo);
  return (
    <div>
      {blogInfo === undefined ? (
        <div>로딩중..</div>
      ) : (
        <div>
          <div className="banner">
            <div className="max-width">
              <div className="banner-contents">
                <p className="sub-text">{blogInfo.subTitle}</p>
                <p className="main-text">{blogInfo.mainTitle}</p>
                <p className="description">{blogInfo.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
