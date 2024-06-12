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
</head>
<body>
	<div class="row">
		
			<!-- Profile Info and Notifications -->
			<div class="l">
		
				<ul class="user-info pull-left pull-none-xsm" style="padding: unset;margin: unset;">
					<div style="font-size: 25px;font-weight: bold;color: #31271e;"> K-디지털트레이닝 GSITM 부트캠프 금융Project 참여를 환영합니다...</div>				
<!-- 					<div style="font-size: 20px;font-weight: bold;color: #31271e;">관리자시스템</div> -->
				</ul>

			</div>
		
		
			<!-- Raw Links -->
			<div class="col-md-6 col-sm-4">
		
				<ul class="list-inline links-list pull-right" style="padding: unset;margin: unset;">
		
					
					<li>
						<div>
							<span style="font-size: 18px; font-weight: bold; color: black;">${userInfoVO.userId}</span>&nbsp;님
						</div>
					</li>
		
					<li class="sep"></li>
		
					<li>
						<a href="#gm" onclick="cf_logout()">
							Log Out <i class="entypo-logout right"></i>
						</a>
					</li>
				</ul>
		
			</div>
		
		</div>
	<hr />
		
</body>
</html>


				

