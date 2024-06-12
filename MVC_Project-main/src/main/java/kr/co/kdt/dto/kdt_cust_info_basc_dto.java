package kr.co.kdt.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class kdt_cust_info_basc_dto {
	@JsonProperty("cust_sn")
	private int cust_sn;
	@JsonProperty("cust_nm")
	private String cust_nm;
	@JsonProperty("eml_addr")
	private String eml_addr;
	@JsonProperty("brdt")
	private String brdt;
	@JsonProperty("home_telno")
	private String home_telno;
	@JsonProperty("mbl_telno")
	private String mbl_telno;
	@JsonProperty("pridtf_no")
	private String pridtf_no;
	@JsonProperty("cr_nm")
	private String cr_nm;
	@JsonProperty("road_nm_addr")
	private String road_nm_addr;
	@JsonProperty("pic_sn_vl")
	private String pic_sn_vl;
	@JsonProperty("tkcg_dept_nm")
	private String tkcg_dept_nm;
	@JsonProperty("frst_reg_dt")
	private String frst_reg_dt;
	@JsonProperty("frst_rgtr_sn")
	private int frst_rgtr_sn;
	@JsonProperty("last_mdfcn_dt")
	private String last_mdfcn_dt;
	@JsonProperty("use_yn")
	private char use_yn;

}
