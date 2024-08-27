package kr.co.iei.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.iei.board.model.service.BoardService;

//@Controller   //지금의 구조는 react가 페이지 보내준다. 데이터를 리턴해야 하는 비동기통신
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
}
