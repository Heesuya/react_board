package kr.co.iei.board.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.iei.board.model.dto.BoardDTO;

@Mapper
public interface BoardDao {

	List selectBoardList();

	BoardDTO selectOneBoard(int boardNo);

	int insertBoard(BoardDTO board);

	int deleteBoard(int boardNo);

	int updateBoard(BoardDTO board);

}
