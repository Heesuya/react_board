import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const BoardView = () => {
  const params = useParams();
  const boardNo = params.boardNo;
  const [board, setBoard] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://192.168.10.37:9999/board/view/" + boardNo)
      .then((res) => {
        console.log(res);
        setBoard(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //console.log(boardNo);

  const deleteBoard = () => {
    axios
      .get("http://192.168.10.37:9999/board/delete/" + boardNo)
      .then((res) => {
        console.log(res);
        navigate("/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="board-view-wrap">
      <h3>게시글 상세보기</h3>
      <div className="board-view">
        <table>
          <tbody>
            <tr>
              <th>제목</th>
              <td colSpan={5}>{board.boardTitle}</td>
            </tr>
            <tr>
              <th>글번호</th>
              <td>{board.boardNo}</td>
              <th>작성자</th>
              <td>{board.boardWriter}</td>
              <th>작성일</th>
              <td>{board.boardDate}</td>
            </tr>
            <tr>
              <th>내용</th>
              <td colSpan={5}>
                <div className="board-content">{board.boardContent}</div>
              </td>
            </tr>
            <tr>
              <td colSpan={6}>
                <div className="link-zone">
                  <Link to={"/modify/" + board.boardNo}>수정</Link>
                  <button onClick={deleteBoard}>삭제</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BoardView;
