import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BoardWrite = () => {
  const [boardTitle, setBoardTitle] = useState("");
  const [boardContent, setBoardContent] = useState("");
  const [boardWriter, setBoardWriter] = useState("");
  const navigate = useNavigate();
  const changeTitle = (e) => {
    setBoardTitle(e.target.value);
  };
  const changeContent = (e) => {
    setBoardContent(e.target.value);
  };
  const changeWriter = (e) => {
    setBoardWriter(e.target.value);
  };
  const registBoard = () => {
    const board = { boardTitle, boardContent, boardWriter };
    axios
      .post("http://192.168.10.37:9999/board/insert", board) //get 과 post 차이
      .then((res) => {
        console.log(res);
        navigate("/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="board-write-wrap">
      <h3>글쓰기</h3>
      <div className="board-write">
        <div className="input-wrap">
          <label htmlFor="boardTitle">제목</label>
          <input
            type="text"
            id="boardTitle"
            value={boardTitle}
            onChange={changeTitle}
          ></input>
        </div>
        <div className="input-wrap">
          <label htmlFor="boardWriter">작성자</label>
          <input
            type="text"
            id="boardWriter"
            value={boardWriter}
            onChange={changeWriter}
          />
        </div>
        <div className="input-wrap">
          <label htmlFor="boardContent">내용</label>
          <textarea
            value={boardContent}
            onChange={changeContent}
            id="boardContent"
          />
        </div>
        <div className="input-wrap">
          <button onClick={registBoard}>등록하기</button>
        </div>
      </div>
    </div>
  );
};
export default BoardWrite;
