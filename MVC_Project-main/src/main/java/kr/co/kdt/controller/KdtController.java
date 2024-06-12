package kr.co.kdt.controller;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.apache.ibatis.javassist.expr.NewExpr;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import kr.co.kdt.dto.kdt_cust_info_basc_dto;
import kr.co.kdt.service.kdt_cust_info_basc_service;

@Controller
public class KdtController {
	
	@Autowired
	kdt_cust_info_basc_service custService;

	
	@GetMapping("/main")
	public String main(Model model) {
		List<kdt_cust_info_basc_dto> custDtos = custService.custList();
		System.out.println(custDtos.toString());
		
		 if (!custDtos.isEmpty()) {
	           model.addAttribute("custDtosDept", custDtos.get(0).getTkcg_dept_nm());
	       } else {
	           model.addAttribute("custDtosDept", ""); // 데이터가 없는 경우 공백 문자열을 전달
	           System.out.println("2");
	       }
		
		model.addAttribute("currentDate", LocalDate.now());
		model.addAttribute("custDtos", custDtos);
		return "/kdt/main";
	}
	
	
	
	@GetMapping("")
	public String likeIdol(Model model) {
		List<kdt_cust_info_basc_dto> custDtos = custService.custList();
		System.out.println(custDtos.toString());
		
		 if (!custDtos.isEmpty()) {
	           model.addAttribute("custDtosDept", custDtos.get(0).getTkcg_dept_nm());
	       } else {
	           model.addAttribute("custDtosDept", ""); // 데이터가 없는 경우 공백 문자열을 전달
	           System.out.println("2");
	       }
		
		model.addAttribute("currentDate", LocalDate.now());
		model.addAttribute("custDtos", custDtos);
		return "/kdt/cust";
	}

	
	@PostMapping("/searchAllAjax")
	@ResponseBody
	public List<kdt_cust_info_basc_dto> getListCust(@RequestBody Map<String, String> body) {
		String keyword = body.get("keyword");
		System.out.println("keyword = " + keyword);

//		List<AdminDto> adminDtos = adminService.adminList();
		List<kdt_cust_info_basc_dto> custDtos = custService.custList();
		System.out.println(custDtos.toString());

		return custDtos;
	}
	
	@PostMapping("/radioOneAjax")
	@ResponseBody
	public List<kdt_cust_info_basc_dto> getOneRadioCust(@RequestBody Map<String, String> body) {
		String keywordStr = body.get("keyword");
	    int keyword = Integer.parseInt(keywordStr);
		System.out.println("keyword = " + keyword);
	
		List<kdt_cust_info_basc_dto> custDtos = custService.radioCustOne(keyword);
		System.out.println(custDtos.toString());
		return custDtos;
	}
	
	@PostMapping("/searchOneAjax")
	@ResponseBody
	public List<kdt_cust_info_basc_dto> getOneListCust(@RequestBody Map<String, String> body) {
		String keyword = body.get("keyword");
		System.out.println("keyword = " + keyword);
	
		List<kdt_cust_info_basc_dto> custDtos = custService.searchCustOne(keyword);
		System.out.println(custDtos.toString());
		return custDtos;
	}
	
	
	@PostMapping("/insert")
	@ResponseBody
	public List<kdt_cust_info_basc_dto> getOneInsert(@RequestBody kdt_cust_info_basc_dto kdt_cust_info_basc_dto) {

		System.out.println("insert"+kdt_cust_info_basc_dto.toString());
		
		String frst_reg_dt = LocalDate.now().toString();
		
		kdt_cust_info_basc_dto.setFrst_reg_dt(frst_reg_dt);
		
		
		kdt_cust_info_basc_dto.setTkcg_dept_nm("영업부");
		
		System.out.println("insert"+kdt_cust_info_basc_dto.toString());
		
		custService.insert(kdt_cust_info_basc_dto);
		
		List<kdt_cust_info_basc_dto> custDtos = custService.custList();
		
		return custDtos;
	}
	
	
	
	@PostMapping("/update")
	@ResponseBody
	public List<kdt_cust_info_basc_dto> getOneUpdate(@RequestBody kdt_cust_info_basc_dto kdt_cust_info_basc_dto) {

		System.out.println("update"+kdt_cust_info_basc_dto.toString());
		
		List<String> formDataList = new ArrayList<>(); 

		custService.update(kdt_cust_info_basc_dto);
		
		List<kdt_cust_info_basc_dto> custDtos = custService.custList();
		
		return custDtos;
	}
	
	
	 @PostMapping("/delete")
		@ResponseBody
		public List<kdt_cust_info_basc_dto> getOneDelete(@RequestBody Map<String, String> body) {
			String targetIdStr = body.get("targetId");
		    int targetId = Integer.parseInt(targetIdStr);
			System.out.println("targetId = " + targetId);
		
			custService.delete(targetId);
			
			List<kdt_cust_info_basc_dto> custDtos = custService.custList();
			System.out.println(custDtos.toString());
			return custDtos;
		}
}
















