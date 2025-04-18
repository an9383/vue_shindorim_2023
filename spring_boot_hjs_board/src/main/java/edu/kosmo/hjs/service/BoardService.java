package edu.kosmo.hjs.service;

import java.util.List;

import edu.kosmo.hjs.page.Criteria;
import edu.kosmo.hjs.vo.BoardVO;



public interface BoardService {
	
	public void writeBoard(BoardVO board);
	public void writeReply(BoardVO board);

	public BoardVO get(int bno);
	public int modify(BoardVO board);
	
	public List<BoardVO> getList();
	public int remove(int bId);
	
    // 페이징 처리 함수
    public int getTotal();
	public List<BoardVO> getListWithPaging(Criteria cri);

}
