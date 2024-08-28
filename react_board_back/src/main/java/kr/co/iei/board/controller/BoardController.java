package kr.co.iei.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.iei.board.model.dto.BoardDTO;
import kr.co.iei.board.model.service.BoardService;

//@Controller   //지금의 구조는 react가 페이지 보내준다. 데이터를 리턴해야 하는 비동기통신
@CrossOrigin("*")//데이터 주려고 만들어졌으니, 어떤 요청이 와도 데이터 줘라는 의미 / 허용
@RestController //컨트롤러의 모든 응답을 비동기로 처리 -> @ResponseBody 생략 //화면 담당x , 필요한 데이터만 되돌려주면 된다
@RequestMapping(value="/board")
public class BoardController {
	@Autowired
	private BoardService boardService;
	
	/*
	@ResponseBody 
	@GetMapping(value="/test")
	public String test() {
		return "test/test1"; 
	}
	*/
	
	@GetMapping(value="/list")
	public List list() {
		List list = boardService.selectBoardList(); 
		return list;
	}
	
	@GetMapping(value="/view/{boardNo}")// ex) /board/view/9   바뀌는 부분 중괄호 @PathVariable 어노테이션 사용해서 경로에 있는 수 받아옴
	public BoardDTO view(@PathVariable int boardNo) {//위 경로에 있는 변수 여기에 넣어줘~
		BoardDTO board = boardService.selectOneBoard(boardNo);
		System.out.println(board);
		return board;
	}
	@PostMapping(value="/insert")
	public int insert(@RequestBody BoardDTO board) {
		int result = boardService.insertBoard(board);
		return result;
	}
	@GetMapping(value="/delete/{boardNo}")
	public int delete(@PathVariable int boardNo) {
		int result = boardService.deleteBoard(boardNo);
		return result;
	}
	@PostMapping(value="/modify")
	public int modify(@RequestBody BoardDTO board) {
		int result = boardService.updateBoard(board);
		return result;
	}
}
