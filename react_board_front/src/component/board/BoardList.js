import { useEffect, useState } from "react";
import "./board.css";
import axios from "axios";
import { Link } from "react-router-dom";
const BoardList = () => {
  const [boardList, setBoardList] = useState([]); //빈 배열로 두고 교체
  /*
    useEffect(()=>{},[])

    useEffect 혹은 컴포넌트가 랜더링이 일어나면 첫번째 매개변수에 있는 함수를 실행히는 함수
    함수가 다사ㅣ 동작하는 조건!!
    두번째 매개변수에 있는 배열에 state를 넣어두면, 해당 state가 변경되면 한번씩 다시 돌아감
    */
  useEffect(() => {
    axios
      .get("http://192.168.10.37:9999/board/list")
      .then((res) => {
        console.log(res);
        setBoardList(res.data); //set랜더링 바뀐배열로 시작하기에, 무한 반복이 됨
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="board-list-wrap">
      <h3>게시글 목록</h3>
      <div className="board-list">
        <table>
          <thead>
            <tr>
              <th style={{ width: "10%" }}>글번호</th>
              <th style={{ width: "50%" }}>제목</th>
              <th style={{ width: "15%" }}>작성자</th>
              <th style={{ width: "25%" }}>작성일</th>
            </tr>
          </thead>
          <tbody>
            {boardList.map((board, index) => {
              return (
                <tr key={"board" + index}>
                  <td>{board.boardNo}</td>
                  <td>
                    <Link to={"/view/" + board.boardNo}>
                      {board.boardTitle}
                    </Link>
                  </td>
                  <td>{board.boardWriter}</td>
                  <td>{board.boardDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default BoardList;
