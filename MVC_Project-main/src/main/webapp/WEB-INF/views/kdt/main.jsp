<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>고객정보 관리</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<link href="${path}/resources/css/cust.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script src="${path}/resources/js/cust.js"></script>
<style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f2f2f2;
}

.container-wrapper {
    display: flex;
    justify-content: center; /* 가운데 정렬 */
    align-items: flex-start; /* 위쪽 정렬 */
    background-color: #f2f2f2; /* 연한 회색 배경 */
    padding: 20px;
}

.sidebar {
    width: 33.333%; /* 사이드바 너비 1:2 비율로 설정 */
    background-color: #FFFFFF; /* 흰색 배경 */
    padding: 10px;
    margin-right: 20px; /* 간격 추가 */
    border-radius: 10px; /* 둥근 모서리 */
}

.main-content {
    width: 66.666%; /* 메인 컨텐츠 너비 1:2 비율로 설정 */
    background-color: #FFFFFF; /* 흰색 배경 */
    padding: 10px;
    border-radius: 10px; /* 둥근 모서리 */
}
</style>
</head>
<body>
<c:import url="header.jsp"></c:import>
<div class="container-wrapper">
    <div class="sidebar">
        <!-- 첫 번째 사이드바 컨텐츠 -->
        <div class="search-section">
            <label>고객성명 :</label>
            <input type="text" name="keyword" placeholder="Enter Keyword" id="keyword"> 
            <input type="button" name="searchOne" id="searchOne" class="search-button" value="조건 검색">
            <input type="button" name="search" id="search" class="search-button" value="전체 검색">
        </div>
        <div class="customer-list">
            <ul id="result">
                <li>고객 1</li>
                <li>고객 2</li>
                <li>고객 3</li>
                <li>고객 4</li>
                <li>고객 5</li>
            </ul>
        </div>
    </div>
    <div class="main-content">
        <div class="main-content">
    <div class="top-box">
        <!-- 상단 상자 1 -->
        <h2>상자 1</h2>
        <p>내용</p>
    </div>
    <div class="top-box">
        <!-- 상단 상자 2 -->
        <h2>상자 2</h2>
        <p>내용</p>
    </div>
    <div class="bottom-box">
        <!-- 하단 상자 -->
        <h2>하단 상자</h2>
        <p>내용</p>
    </div>
</div>
    </div>
</div>
</body>
</html>
