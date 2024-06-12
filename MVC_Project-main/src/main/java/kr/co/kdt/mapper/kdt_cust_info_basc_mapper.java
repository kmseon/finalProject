package kr.co.kdt.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import kr.co.kdt.dto.kdt_cust_info_basc_dto;

@Mapper
public interface kdt_cust_info_basc_mapper {

	List<kdt_cust_info_basc_dto> custList();

	List<kdt_cust_info_basc_dto> radioCustOne(int cust_sn);

	List<kdt_cust_info_basc_dto> searchCustOne(@Param("keyword") String keyword);
	
	void insert(kdt_cust_info_basc_dto custDto); // 신규 고객 입력
	
	void update(kdt_cust_info_basc_dto custDto); // 특정 고객 정보 변경
	
	void delete(@Param("cust_sn") int cust_sn); // 특정 고객 삭제 (y->n)


}
