package kr.co.kdt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import kr.co.kdt.dto.kdt_cust_info_basc_dto;
import kr.co.kdt.mapper.kdt_cust_info_basc_mapper;

@Service
public class kdt_cust_info_basc_service {

	@Autowired
	kdt_cust_info_basc_mapper custMapper;
	
	public List<kdt_cust_info_basc_dto> custList() {
		return custMapper.custList();
	}

	public List<kdt_cust_info_basc_dto> radioCustOne(int cust_sn) {
		return custMapper.radioCustOne(cust_sn);
	}

	public List<kdt_cust_info_basc_dto> searchCustOne(String keyword) {
		return custMapper.searchCustOne(keyword);
	}
	
	public void insert(kdt_cust_info_basc_dto custDto) {
		custMapper.insert(custDto);
	} // 신규 고객 입력
	
	
	public void delete(int cust_sn) {
		 custMapper.delete(cust_sn);
	} // 삭제

	public void update(kdt_cust_info_basc_dto custDto) {
		custMapper.update(custDto);
	} // 특정 고객 정보 수정


}
