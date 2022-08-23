import React, { useEffect, useState } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  // const [showParagraph, setShowParagraph] = useState(false);

  // const toggleParagraphHandler = () => {
  //   setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  // };
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setpage] = useState(2);

  useEffect(() => {
    const getComments = async () => {

      const res = await fetch(
        `http://localhost:3004/comments?_page=1&_limit=10`
      );
      const data = await res.json();
      setItems(data);
    };

    getComments();
  }, []);

  console.log(items);

  const fetchComments = async () => {
    const res = await fetch(
      `http://localhost:3004/comments?_page=${page}&_limit=10`
    );
    const data = await res.json();
    return data;
  }

  const fetchData = async () => {
    const commentsFormServer = await fetchComments();

    setItems([...items, ...commentsFormServer]);

    if (commentsFormServer.length === 0 || commentsFormServer.length < 10) {
      setHasMore(false);
    }

    setpage(page + 1);
  };

  return (
    // <div className="app">
    //   <h1>안녕하세요</h1>
    //   {showParagraph && <p>새로운 거</p>}
    //   <Button onClick={toggleParagraphHandler}>문장을 보여줘</Button>
    // </div>
    <InfiniteScroll
      dataLength={items.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>페이지 끝 입니당~!</b>
        </p>
      }
    >
      {items.map((item) => {
        return (
          <div key={item.id}>
            <div>아이디 : {item.id}</div>
            <div>이메일 : {item.email}</div>
            <div>코멘트 : {item.body}</div>
          </div>
        )
      })}
    </InfiniteScroll>
  );
}

export default App;
