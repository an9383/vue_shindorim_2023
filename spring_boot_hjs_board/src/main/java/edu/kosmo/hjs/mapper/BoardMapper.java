package edu.kosmo.hjs.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import edu.kosmo.hjs.page.Criteria;
import edu.kosmo.hjs.vo.BoardVO;

@Mapper
public interface BoardMapper {
	public List<BoardVO> getList();	
	public BoardVO read(int bno);	
	public int updateShape(BoardVO boardVO);		
	public int insertReply(BoardVO boardVO);	
	public int insertBoard(BoardVO boardVO);
	public int delete(int bId);	
	public int updateBoard(BoardVO boardVO);	
	public List<BoardVO> getListWithPaging(Criteria cri);	
	public int getTotalCount();
}
