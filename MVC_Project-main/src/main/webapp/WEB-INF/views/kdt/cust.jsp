<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="path" value="${pageContext.request.contextPath }"></c:set>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<link href="${path}/resources/css/cust.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.7.1.min.js"
		integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
		crossorigin="anonymous"></script>
<script src="${path}/resources/js/cust.js"></script>
<script>
	sessionStorage.setItem("contextpath", "${pageContext.request.contextPath }");
	
	var currentDate = "${currentDate}";    
	window.currentDate = currentDate;
	
	var custDtosDept = "${custDtosDept}";    
	window.custDtosDept = custDtosDept;
		
</script>
</head>
<body>
	<div class="container">
		<div class="header">
			<h1>고객정보 관리</h1>
			<button class="close-button">X</button>
		</div>
		
		<div class="content">
			<div class="left-panel">
				<div class="search-section">
					<label>고객성명 :</label>
					<!--                     	고객 검색 입력 -->
					<input type="text" name="keyword" placeholder="Enter Keyword" id="keyword"> 
					<input type="button" name="searchOne" id="searchOne" class="search-button" value="조건 검색">
					<input type="button" name="search" id="search" class="search-button" value="전체 검색">
				</div>
				<div class="customer-list">
					<ul id="result" >
					</ul>
				</div>
			</div>
			
				<!-- 고객 | 담당자 정보 -->
				<div class="center-panel">
					<form id="custForm" name="custForm">
					<div class="customer-info">
						<div class="form-group">
							<div id="content_cust_sn">
								<input type="hidden" class="text-box" name="cust_sn" id="cust_sn"/>
							</div>
							<div id="content_last_mdfcn_dt">
								<input type="hidden" class="text-box" name="last_mdfcn_dt" id="last_mdfcn_dt" value="${currentDate}" />
							</div>
							<p>**작성일자 :</p>
							<div id="content_frst_reg_dt">
								<input type="hidden" class="text-box" name="frst_reg_dt" id="frst_reg_dt" value="${currentDate}"/>
								<input type="text" class="text-box" name="frst_reg_dt" value="${currentDate}" readonly disabled/>
							</div>
						</div>
						<div class="form-group">
							<p>*고객명 :</p>
							<div id="content_cust_nm">
								<input type="text" class="text-box" name="cust_nm" id="cust_nm"/>
							</div>
						</div>
						<div class="form-group">
							<p>*실명번호 :</p>
							<div id="content_pridtf_no">
								<input type="text" class="text-box" name="pridtf_no" id="pridtf_no"/>
							</div>
						</div>
						<div class="form-group">
							<p>*E-mail :</p>
							<div id="content_eml_addr">
								<input type="text" class="text-box" name="eml_addr" id="eml_addr"/>
							</div>
						</div>
						<div class="form-group">
							<p>전화번호 :</p>
							<div id="content_home_telno">
								<input type="text" class="text-box" name="home_telno" id="home_telno"/>
							</div>
						</div>
						<div class="form-group">
							<p>*핸드폰번호 :</p>
							<div id="content_mbl_telno">
								<input type="text" class="text-box" name="mbl_telno" id="mbl_telno"/>
							</div>
						</div>
						<div class="form-group">
							<p>*직업 :</p>
							<div id="content_cr_nm">
								<input type="text" class="text-box" name="cr_nm" id="cr_nm"/>
							</div>
						</div>
						<div class="form-group">
							<p>주소 :</p>
							<div id="content_road_nm_addr">
								<input type="text" class="text-box-addr" name="road_nm_addr" id="road_nm_addr"/>
							</div>
						</div>
					</div>
					<div class="manager-info">
						<div class="form-group">
							<p>관리담당자 :</p>
							<div id="contentSearch" >
								<input type="text" class="text-box" id="inputContent" value="강하게" readonly>
								<button class="btn-custom" type="button" onclick="showValue()">
    								<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        								<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
    								</svg>
								</button>

							</div>
						</div>
						<div class="form-group">
							<p>**부서 :</p>
							<div id="content_tkcg_dept_nm">
								<input type="text" class="text-box" id='tkcg_dept_nm' value="${custDtosDept}" readonly disabled>
							</div>
						</div>
						<div class="form-group">
							<p>**직위 :</p>
							<div id="content">
								<input type="text" value="사원" class="text-box" readonly disabled>
							</div>
						</div>
						<div class="form-group">
							<p>**연락처 :</p>
							<div id="content">
								<input type="text" value="010-2300-4100" class="text-box" readonly disabled>
							</div>
						</div>

					</div>
					</form>
				</div>
				
				<!-- 상담내역 -->
				<div class="right-panel">
					<div class="search-section">
						<label>상담내역 :</label>
						<textarea>
2023-09-12 오후 2시 통화 요청함
2023-09-16 오후 4시 미팅 약속을 오전 10시로 변경
2023-09-19 오후 2시 청약 저축 가입 안내 미팅
                    </textarea>
					</div>
					<div class="buttons">
						<input type="button" id="insert-btn" class="action-button" value="등록">
						<input type="button" id="update-btn" class="action-button" value="변경">
						<input type="button" id="delete-btn" class="action-button" value="삭제">
						<input type="reset" id="reset-btn" class="action-button" value="신규">
						<br>
						<input type="button" name="searchButton" id="searchButton" class="action-button" value="고객조회">
						<button class="action-button">종료</button>
					</div>
		</div>

	</div>

</body>

<script>
function showValue() {
    var input = document.getElementById("inputContent");
    if (input.style.visibility === "hidden") {
        input.style.visibility = "visible";
    } else {
        input.style.visibility = "hidden";
    }
}
window.onload = function() {
    var input = document.getElementById("inputContent");
    input.style.visibility = "hidden"; // 초기에는 입력 값은 안 보이게 설정
    input.style.border = "1px solid #ced4da"; // 보더 추가
};
</script>
</html>