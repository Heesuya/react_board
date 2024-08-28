import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BoardModify = () => {
  const params = useParams();
  const navigate = useNavigate();
  const boardNo = params.boardNo;
  useEffect(() => {
    axios
      .get("http://192.168.10.37:9999/board/view/" + boardNo)
      .then((res) => {
        console.log(res);
        setBoardTitle(res.data.boardTitle);
        setBoardContent(res.data.boardContent);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [boardTitle, setBoardTitle] = useState("");
  const [boardContent, setBoardContent] = useState("");
  const changeTitle = (e) => {
    setBoardTitle(e.target.value);
  };
  const changeContent = (e) => {
    setBoardContent(e.target.value);
  };
  const modify = () => {
    const board = { boardNo, boardTitle, boardContent };
    axios
      .post("http://192.168.10.37:9999/board/modify", board)
      .then((res) => {
        console.log(res);
        navigate("/view/" + boardNo);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="board-modify-wrap">
      <h3>게시글 수정</h3>
      <div className="board-modify">
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
          <label htmlFor="boardContent">내용</label>
          <textarea
            id="boardContent"
            value={boardContent}
            onChange={changeContent}
          ></textarea>
        </div>
        <div className="input-wrap">
          <button onClick={modify}>수정하기</button>
        </div>
      </div>
    </div>
  );
};
export default BoardModify;
