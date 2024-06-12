$(document).ready(function() {
	
	const contextPath = sessionStorage.getItem("contextpath");
	
	$(document).on("click", "input:radio[name='result']", function(){
	var targetId = $(this).attr('id');
    var keyname = "keyword";
    var obj = {};
    obj[keyname] = targetId;
		$.ajax({
      url : `${contextPath}/radioOneAjax`,
      type : "post",
      data : JSON
          .stringify(obj),
      dataType : "json",
      contentType : "application/json",
      success : function(data) {
		var strContent = 
   		 "<input type='hidden' name='cust_sn' id='cust_sn' class='form-control' value='" + data[0].cust_sn + "'>"
         $("#content_cust_sn").html(strContent);
		
		var strContent = 
	   		 "<input type='hidden' name='last_mdfcn_dt' id='last_mdfcn_dt' class='form-control' value='" + window.currentDate + "'>"
	         $("#content_last_mdfcn_dt").html(strContent);
    	 
    	 var strContent = 
    		 "<input type='hidden' name='frst_reg_dt' id='frst_reg_dt' class='text-box' value='" + data[0].frst_reg_dt + "'>"
       		+"<input type='text' name='frst_reg_dt' class='text-box' value='" + data[0].frst_reg_dt + "' readonly disabled>"
          $("#content_frst_reg_dt").html(strContent);
       		
          var strContent = 
        	 "<input type='text' name='cust_nm' id='cust_nm' class='text-box' value='" + data[0].cust_nm + "'>"
          $("#content_cust_nm").html(strContent);
            
          var strContent = 
  			"<input type='text' name='pridtf_no' id='pridtf_no' class='text-box' value='" + data[0].pridtf_no + "'>"     	
          $("#content_pridtf_no").html(strContent);
  			
          var strContent = 
  			"<input type='text' name='eml_addr' id='eml_addr' class='text-box' value='" + data[0].eml_addr + "'>"     	
          $("#content_eml_addr").html(strContent);
  			
          var strContent = 
  			"<input type='text' name='home_telno' id='home_telno' class='text-box' value='" + data[0].home_telno + "'>"  	
          $("#content_home_telno").html(strContent);
  			
          var strContent = 
  			"<input type='text' name='mbl_telno' id='mbl_telno'class='text-box' value='" + data[0].mbl_telno + "'>"    	
          $("#content_mbl_telno").html(strContent);
  			
          var strContent = 
  			"<input type='text' name='cr_nm' id='cr_nm' class='text-box' value='" + data[0].cr_nm + "'>"
          $("#content_cr_nm").html(strContent);
  			
          var strContent = 
  			"<input type='text' name='road_nm_addr' id='road_nm_addr' class='text-box-addr' value='" + data[0].road_nm_addr + "'>"      	
          $("#content_road_nm_addr").html(strContent);

          var strContent = 
  			"<input type='text' name='tkcg_dept_nm' id='tkcg_dept_nm' class='text-box' value='" + window.custDtosDept + "'readonly disabled>"      	
          $("#content_tkcg_dept_nm").html(strContent);
        
    },
    error : function(
        errorThrown) {
      alert(errorThrown.statusText);
    }
  });
	});

 $("#search").on("click", function() {
	 $("#keyword").val("");
    var keyword = $("#keyword").val().trim();
      var keyname = "keyword";
      var obj = {};
      obj[keyname] = keyword;
      $.ajax({
        url : `${contextPath}/searchAllAjax`,
        type : "post",
        data : JSON
            .stringify(obj),
        dataType : "json",
        contentType : "application/json",
        success : function(data) {
          $("#result").empty();
          for (var i = 0; i < data.length; i++) {
            if(i == 0){
            	var str = "<li><label><input type='radio' id='" + data[i].cust_sn + "' name='result' class='result' checked>"
                + data[i].cust_nm
                + "</label><br></li>";
	            console.log(str);
	            $("#result").append(str);
	            var strContent = 
	            	"<input type='hidden' name='" + data[0].cust_sn + "' class='text-box' value='" + data[0].cust_sn + "'>"
	            	+"<input type='text' name='" + data[0].frst_reg_dt + "' class='text-box' value='" + data[0].frst_reg_dt + "' readonly disabled>"
	              $("#content_frst_reg_dt").html(strContent);
	           		
	              var strContent = 
	            	 "<input type='text' name='" + data[0].cust_nm + "' class='text-box' value='" + data[0].cust_nm + "'>"
	              $("#content_cust_nm").html(strContent);
	                
	              var strContent = 
	        			"<input type='text' name='" + data[0].pridtf_no + "' class='text-box' value='" + data[0].pridtf_no + "'>"     	
	                $("#content_pridtf_no").html(strContent);
	      			
	              var strContent = 
	      			"<input type='text' name='" + data[0].eml_addr + "' class='text-box' value='" + data[0].eml_addr + "'>"     	
	              $("#content_eml_addr").html(strContent);
	      			
	              var strContent = 
	      			"<input type='text' name='" + data[0].home_telno + "' class='text-box' value='" + data[0].home_telno + "'>"  	
	              $("#content_home_telno").html(strContent);
	      			
	              var strContent = 
	      			"<input type='text' name='" + data[0].mbl_telno + "' class='text-box' value='" + data[0].mbl_telno + "'>"    	
	              $("#content_mbl_telno").html(strContent);
	      			
	              var strContent = 
	      			"<input type='text' name='" + data[0].cr_nm + "' class='text-box' value='" + data[0].cr_nm + "'>"
	              $("#content_cr_nm").html(strContent);
	      			
	              var strContent = 
	      			"<input type='text' name='" + data[0].road_nm_addr + "' class='text-box-addr' value='" + data[0].road_nm_addr + "'>"      	
	              $("#content_road_nm_addr").html(strContent);
	              
	              var strContent = 
	        			"<input type='text' name='tkcg_dept_nm' id='tkcg_dept_nm' class='text-box' value='" + window.custDtosDept + "'readonly disabled>"      	
	                $("#content_tkcg_dept_nm").html(strContent);
	              
	              
            } else {
            	var str = "<li><label><input type='radio' id='" + data[i].cust_sn + "' name='result'>"
                + data[i].cust_nm
                + "</label><br></li>";
	            $("#result").append(str);
            }
          }
        },
        error : function(
            errorThrown) {
          alert(errorThrown.statusText);
        }
      });
  }); 
  
$("#searchOne").on("click", function() {
    var keyword = $("#keyword").val().trim();
    if (keyword == "") {
      alert('이름를 입력하세요')
    } else {
      var keyname = "keyword";
      var obj = {};
      obj[keyname] = keyword;
      $.ajax({
        url :  `${contextPath}/searchOneAjax`,
        type : "post",
        data : JSON
            .stringify(obj),
        dataType : "json",
        contentType : "application/json",
        success : function(data) {
          $("#result").empty();
          for (var i = 0; i < data.length; i++) {
            if(i == 0){
            	var str = "<li><label><input type='radio' id='" + data[i].cust_sn + "' name='result' class='result' checked>"
                + data[i].cust_nm
                + "</label><br></li>";
	            console.log(str);
	            $("#result").append(str);
	            var strContent = 
	              	"<input type='hidden' name='" + data[0].cust_sn + "' class='text-box' value='" + data[0].cust_sn + "'>"
	              	+"<input type='text' name='" + data[0].frst_reg_dt + "' class='text-box' value='" + data[0].frst_reg_dt + "' readonly disabled>"
	              $("#content_frst_reg_dt").html(strContent);
	           		
	              var strContent = 
	            	 "<input type='text' name='" + data[0].cust_nm + "' class='text-box' value='" + data[0].cust_nm + "'>"
	              $("#content_cust_nm").html(strContent);
	                
	              var strContent = 
	        			"<input type='text' name='" + data[0].pridtf_no + "' class='text-box' value='" + data[0].pridtf_no + "'>"     	
	                $("#content_pridtf_no").html(strContent);
	      			
	              var strContent = 
	      			"<input type='text' name='" + data[0].eml_addr + "' class='text-box' value='" + data[0].eml_addr + "'>"     	
	              $("#content_eml_addr").html(strContent);
	      			
	              var strContent = 
	      			"<input type='text' name='" + data[0].home_telno + "' class='text-box' value='" + data[0].home_telno + "'>"  	
	              $("#content_home_telno").html(strContent);
	      			
	              var strContent = 
	      			"<input type='text' name='" + data[0].mbl_telno + "' class='text-box' value='" + data[0].mbl_telno + "'>"    	
	              $("#content_mbl_telno").html(strContent);
	      			
	              var strContent = 
	      			"<input type='text' name='" + data[0].cr_nm + "' class='text-box' value='" + data[0].cr_nm + "'>"
	              $("#content_cr_nm").html(strContent);
	      			
	              var strContent = 
	      			"<input type='text' name='" + data[0].road_nm_addr + "' class='text-box-addr' value='" + data[0].road_nm_addr + "'>"      	
	              $("#content_road_nm_addr").html(strContent);
	              
	              var strContent = 
	        			"<input type='text' name='tkcg_dept_nm' id='tkcg_dept_nm' class='text-box' value='" + window.custDtosDept + "'readonly disabled>"      	
	                $("#content_tkcg_dept_nm").html(strContent);
	              
            } else {
            	var str = "<li><label><input type='radio' id='" + data[i].cust_sn + "' name='result'>"
                + data[i].cust_nm
                + "</label><br></li>";
	            $("#result").append(str);
            }
          }
        },
        error : function(
            errorThrown) {
          alert(errorThrown.statusText);
        }
      });
    }
  });
  
$("#insert-btn").on("click", function() {
	
	 let isValid = true;

     // 함수 정의: 입력 필드가 비어있는지 확인하고, 비어있으면 오류 메시지 표시 및 포커스 이동
     function validateField(selector, errorMessage) {
         let field = $(selector);
         if (field.val().trim() === "") {
             alert(errorMessage);
             field.focus();
             isValid = false;
             return false; // 검사를 중단하고 포커스를 이동시키기 위해 false 반환
         }
         return true;
     }

     // 각 필드 검사
     if (!validateField("#content_cust_nm input", "고객 이름을 입력해주세요.")) return;
     if (!validateField("#content_pridtf_no input", "실명번호를 입력해주세요.")) return;
     if (!validateField("#content_eml_addr input", "이메일 주소를 입력해주세요.")) return;
     if (!validateField("#content_mbl_telno input", "휴대전화 번호를 입력해주세요.")) return;
     if (!validateField("#content_cr_nm input", "직업을 입력해주세요.")) return;  
     
/*	var formData = new FormData(document.getElementById('custForm'));
	
	var obj = {};
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
        obj[pair[1]];
    } */
    
    var last_mdfcn_dt = $("#last_mdfcn_dt").val();
    var frst_reg_dt = $("#frst_reg_dt").val();
    var cust_nm = $("#cust_nm").val();
    var pridtf_no = $("#pridtf_no").val();
    var eml_addr = $("#eml_addr").val();
    var home_telno = $("#home_telno").val();
    var mbl_telno = $("#mbl_telno").val();
    var cr_nm = $("#cr_nm").val();
    var road_nm_addr = $("#road_nm_addr").val();   
    var tkcg_dept_nm = $("#tkcg_dept_nm").val(); 
    
    console.log(frst_reg_dt);
    
    var kdt_cust_info_basc_dto = {		
    		last_mdfcn_dt : last_mdfcn_dt,
    		frst_reg_dt :frst_reg_dt,
    		cust_nm :cust_nm,
    		pridtf_no : pridtf_no,
    		eml_addr : eml_addr,
    		home_telno : home_telno,
    		mbl_telno : mbl_telno,
    		cr_nm : cr_nm,
    		road_nm_addr : road_nm_addr,
    		tkcg_dept_nm : tkcg_dept_nm
    };
   
       
    console.log(kdt_cust_info_basc_dto);

    $.ajax({
        url : `${contextPath}/insert`,
        type : "post",
        data : JSON.stringify(kdt_cust_info_basc_dto),
        dataType : "json",
        contentType : "application/json",
        success : function(data) {
        	$("#result").empty();
            for (var i = 0; i < data.length; i++) {
              if(i == 0){
              	var str = "<li><label><input type='radio' id='" + data[i].cust_sn + "' name='result' class='result' checked>"
                  + data[i].cust_nm
                  + "</label><br></li>";
  	            console.log(str);
  	            $("#result").append(str);
  	            var strContent = 
  	              	"<input type='hidden' name='" + data[0].cust_sn + "' class='text-box' value='" + data[0].cust_sn + "'>"
  	           		+"<input type='text' name='" + data[0].frst_reg_dt + "' class='text-box' value='" + data[0].frst_reg_dt + "'>"
  	              $("#content_frst_reg_dt").html(strContent);
  	           		
  	              var strContent = 
  	            	 "<input type='text' name='" + data[0].cust_nm + "' class='text-box' value='" + data[0].cust_nm + "'>"
  	              $("#content_cust_nm").html(strContent);
  	                
  	            var strContent = 
  	    			"<input type='text' name='" + data[0].pridtf_no + "' class='text-box' value='" + data[0].pridtf_no + "'>"     	
  	            $("#content_pridtf_no").html(strContent);
  	      			
  	              var strContent = 
  	      			"<input type='text' name='" + data[0].eml_addr + "' class='text-box' value='" + data[0].eml_addr + "'>"     	
  	              $("#content_eml_addr").html(strContent);
  	      			
  	              var strContent = 
  	      			"<input type='text' name='" + data[0].home_telno + "' class='text-box' value='" + data[0].home_telno + "'>"  	
  	              $("#content_home_telno").html(strContent);
  	      			
  	              var strContent = 
  	      			"<input type='text' name='" + data[0].mbl_telno + "' class='text-box' value='" + data[0].mbl_telno + "'>"    	
  	              $("#content_mbl_telno").html(strContent);
  	      			
  	              var strContent = 
  	      			"<input type='text' name='" + data[0].cr_nm + "' class='text-box' value='" + data[0].cr_nm + "'>"
  	              $("#content_cr_nm").html(strContent);
  	      			
  	              var strContent = 
  	      			"<input type='text' name='" + data[0].road_nm_addr + "' class='text-box-addr' value='" + data[0].road_nm_addr + "'>"      	
  	              $("#content_road_nm_addr").html(strContent);
              } else {
              	var str = "<li><label><input type='radio' id='" + data[i].cust_sn + "' name='result'>"
                  + data[i].cust_nm
                  + "</label><br></li>";
  	            $("#result").append(str);
              }
            }
          },
          error : function(
              errorThrown) {
            alert(errorThrown.statusText);
          }
      });
});

/* 변경 버튼 */
$("#update-btn").on("click", function() {
/*    var formData = new FormData(document.getElementById('custForm'));*/
    
    if(!confirm('[변경] 버튼을 클릭하면 해당 고객정보가 변경됩니다. 변경 시 복구가 불가능하므로 주의해야 합니다.')){
        return false;
      }else{
    
/*    var obj = {};
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
        obj[pair[0]] = pair[1];
    }  */
    
    var cust_sn = $("#cust_sn").val();
    var last_mdfcn_dt = $("#last_mdfcn_dt").val();
    var frst_reg_dt = $("#frst_reg_dt").val();
    var cust_nm = $("#cust_nm").val();
    var pridtf_no = $("#pridtf_no").val();
    var eml_addr = $("#eml_addr").val();
    var home_telno = $("#home_telno").val();
    var mbl_telno = $("#mbl_telno").val();
    var cr_nm = $("#cr_nm").val();
    var road_nm_addr = $("#road_nm_addr").val();   
    
    console.log(keynroad_nm_addrame);
    
    var kdt_cust_info_basc_dto = {		
    		cust_sn : cust_sn,
    		last_mdfcn_dt : last_mdfcn_dt,
    		frst_reg_dt :frst_reg_dt,
    		cust_nm :cust_nm,
    		pridtf_no : pridtf_no,
    		eml_addr : eml_addr,
    		home_telno : home_telno,
    		mbl_telno : mbl_telno,
    		cr_nm : cr_nm,
    		keynroad_nm_addrame : keynroad_nm_addrame
    };
   
       
    console.log(kdt_cust_info_basc_dto);
/*    var keyname = "cust_sn";
    var obj = {};
    obj[keyname] = targetId;
    */
    $.ajax({
        url : `${contextPath}/update`,
        type : "post",
        data : JSON.stringify(kdt_cust_info_basc_dto),
        dataType : "json",
        contentType : "application/json",
        success : function(data) {
        	$("#result").empty();
            for (var i = 0; i < data.length; i++) {
              if(i == 0){
              	var str = "<li><label><input type='radio' id='" + data[i].cust_sn + "' name='result' class='result' checked>"
                  + data[i].cust_nm
                  + "</label><br></li>";
  	            console.log(str);
  	            $("#result").append(str);
  	            var strContent = 
  	              	"<input type='hidden' name='" + data[0].cust_sn + "' class='text-box' value='" + data[0].cust_sn + "'>"
  	           		+"<input type='text' name='" + data[0].frst_reg_dt + "' class='text-box' value='" + data[0].frst_reg_dt + "'>"
  	              $("#content_frst_reg_dt").html(strContent);
  	           		
  	              var strContent = 
  	            	 "<input type='text' name='" + data[0].cust_nm + "' class='text-box' value='" + data[0].cust_nm + "'>"
  	              $("#content_cust_nm").html(strContent);
  	                
  	            var strContent = 
  	    			"<input type='text' name='" + data[0].pridtf_no + "' class='text-box' value='" + data[0].pridtf_no + "'>"     	
  	            $("#content_pridtf_no").html(strContent);
  	      			
  	              var strContent = 
  	      			"<input type='text' name='" + data[0].eml_addr + "' class='text-box' value='" + data[0].eml_addr + "'>"     	
  	              $("#content_eml_addr").html(strContent);
  	      			
  	              var strContent = 
  	      			"<input type='text' name='" + data[0].home_telno + "' class='text-box' value='" + data[0].home_telno + "'>"  	
  	              $("#content_home_telno").html(strContent);
  	      			
  	              var strContent = 
  	      			"<input type='text' name='" + data[0].mbl_telno + "' class='text-box' value='" + data[0].mbl_telno + "'>"    	
  	              $("#content_mbl_telno").html(strContent);
  	      			
  	              var strContent = 
  	      			"<input type='text' name='" + data[0].cr_nm + "' class='text-box' value='" + data[0].cr_nm + "'>"
  	              $("#content_cr_nm").html(strContent);
  	      			
  	              var strContent = 
  	      			"<input type='text' name='" + data[0].road_nm_addr + "' class='text-box-addr' value='" + data[0].road_nm_addr + "'>"      	
  	              $("#content_road_nm_addr").html(strContent);
              } else {
              	var str = "<li><label><input type='radio' id='" + data[i].cust_sn + "' name='result'>"
                  + data[i].cust_nm
                  + "</label><br></li>";
  	            $("#result").append(str);
              }
            }
          },
          error : function(
              errorThrown) {
            alert(errorThrown.statusText);
          }
      });
	}
});

/* 삭제 버튼 */
$("#delete-btn").on("click", function() {
    var targetId = $("input:radio[name='result']:checked").attr('id');
    
    if(!confirm('[삭제] 버튼을 클릭하면 해당 고객정보가 삭제됩니다. 삭제 시 복구가 불가능하므로 주의해야 합니다.')){
        return false;
      }else{

    var obj = {};
    obj['targetId'] = targetId;
    $.ajax({
        url : `${contextPath}/delete`,
        type : "post",
        data : JSON.stringify(obj),
        dataType : "json",
        contentType : "application/json",
        success : function(data) {
        	$("#result").empty();
            for (var i = 0; i < data.length; i++) {
              if(i == 0){
              	var str = "<li><label><input type='radio' id='" + data[i].cust_sn + "' name='result' class='result' checked>"
                  + data[i].cust_nm
                  + "</label><br></li>";
  	            console.log(str);
  	            $("#result").append(str);
  	            var strContent = 
  	              	"<input type='hidden' name='" + data[0].cust_sn + "' class='text-box' value='" + data[0].cust_sn + "'>"
  	           		+"<input type='text' name='" + data[0].frst_reg_dt + "' class='text-box' value='" + data[0].frst_reg_dt + "'>"
  	              $("#content_frst_reg_dt").html(strContent);
  	           		
  	              var strContent = 
  	            	 "<input type='text' name='" + data[0].cust_nm + "' class='text-box' value='" + data[0].cust_nm + "'>"
  	              $("#content_cust_nm").html(strContent);
  	                
  	            var strContent = 
  	    			"<input type='text' name='" + data[0].pridtf_no + "' class='text-box' value='" + data[0].pridtf_no + "'>"     	
  	            $("#content_pridtf_no").html(strContent);
  	      			
  	              var strContent = 
  	      			"<input type='text' name='" + data[0].eml_addr + "' class='text-box' value='" + data[0].eml_addr + "'>"     	
  	              $("#content_eml_addr").html(strContent);
  	      			
  	              var strContent = 
  	      			"<input type='text' name='" + data[0].home_telno + "' class='text-box' value='" + data[0].home_telno + "'>"  	
  	              $("#content_home_telno").html(strContent);
  	      			
  	              var strContent = 
  	      			"<input type='text' name='" + data[0].mbl_telno + "' class='text-box' value='" + data[0].mbl_telno + "'>"    	
  	              $("#content_mbl_telno").html(strContent);
  	      			
  	              var strContent = 
  	      			"<input type='text' name='" + data[0].cr_nm + "' class='text-box' value='" + data[0].cr_nm + "'>"
  	              $("#content_cr_nm").html(strContent);
  	      			
  	              var strContent = 
  	      			"<input type='text' name='" + data[0].road_nm_addr + "' class='text-box-addr' value='" + data[0].road_nm_addr + "'>"      	
  	              $("#content_road_nm_addr").html(strContent);
              } else {
              	var str = "<li><label><input type='radio' id='" + data[i].cust_sn + "' name='result'>"
                  + data[i].cust_nm
                  + "</label><br></li>";
  	            $("#result").append(str);
              }
            }
          },
          error : function(
              errorThrown) {
            alert(errorThrown.statusText);
          }
      });
     }
});
	
	
/* 신규 reset 버튼  */
$("#reset-btn").on("click", function() {
	
	$("#content_last_mdfcn_dt input[type='hidden']").val(window.currentDate)
	$("#frst_reg_dt").val(window.currentDate)
	 
	$("#content_frst_reg_dt input[type='text']").val(window.currentDate).prop({'readonly': true, 'disabled': true});
	
	
    $("#content_cust_nm input").val("").removeAttr('name');
    var strContent = "<input type='text' name='cust_nm' id='cust_nm' class='text-box'>";
    $("#content_cust_nm").html(strContent);
    
    $("#content_pridtf_no input").val("").removeAttr('name');
    var strContent = "<input type='text' name='pridtf_no' id='pridtf_no' class='text-box'>";
    $("#content_pridtf_no").html(strContent);
    
    $("#content_eml_addr input").val("").removeAttr('name');
    var strContent = "<input type='text' name='eml_addr' id='eml_addr' class='text-box'>";
    $("#content_eml_addr").html(strContent);
    
    $("#content_home_telno input").val("").removeAttr('name');
    var strContent = "<input type='text' name='home_telno' id='home_telno' class='text-box'>";
    $("#content_home_telno").html(strContent);
    
    $("#content_mbl_telno input").val("").removeAttr('name');
    var strContent = "<input type='text' name='mbl_telno' id='mbl_telno' class='text-box'>";
    $("#content_mbl_telno").html(strContent);
    
    $("#content_cr_nm input").val("").removeAttr('name');
    var strContent = "<input type='text' name='cr_nm' id='cr_nm' class='text-box'>";
    $("#content_cr_nm").html(strContent);
    
    $("#content_road_nm_addr input").val("").removeAttr('name');
    var strContent = "<input type='text' class='text-box-addr' name='road_nm_addr' id='road_nm_addr' class='text-box' style='height: 100px;'>";
    $("#content_road_nm_addr").html(strContent);
    
    console.log($("#content_frst_reg_dt input[type='hidden']").val(window.currentDate));
    
    
}); 

/* 고객 조회 버튼  */
$("#searchButton").on("click", function() {
	 $("#keyword").val("");
   var keyword = $("#keyword").val().trim();
     var keyname = "keyword";
     var obj = {};
     obj[keyname] = keyword;
     $.ajax({
       url :  `${contextPath}/searchAllAjax`,
       type : "post",
       data : JSON.stringify(obj),
       dataType : "json",
       contentType : "application/json",
       success : function(data) {
         $("#result").empty();
         for (var i = 0; i < data.length; i++) {
           if(i == 0){
           	var str = "<li><label><input type='radio' id='" + data[i].cust_sn + "' name='result' class='result' checked>"
               + data[i].cust_nm
               + "</label><br></li>";
	            console.log(str);
	            $("#result").append(str);
	            var strContent = 
	            	"<input type='hidden' name='" + data[0].cust_sn + "' class='text-box' value='" + data[0].cust_sn + "'>"
	           		+"<input type='text' name='" + data[0].frst_reg_dt + "' class='text-box' value='" + data[0].frst_reg_dt + "'>"
	              $("#content_frst_reg_dt").html(strContent);
	           		
	              var strContent = 
	            	 "<input type='text' name='" + data[0].cust_nm + "' class='text-box' value='" + data[0].cust_nm + "'>"
	              $("#content_cust_nm").html(strContent);
	                
	              var strContent = 
	  	    			"<input type='text' name='" + data[0].pridtf_no + "' class='text-box' value='" + data[0].pridtf_no + "'>"     	
	  	            $("#content_pridtf_no").html(strContent);
	      			
	              var strContent = 
	      			"<input type='text' name='" + data[0].eml_addr + "' class='text-box' value='" + data[0].eml_addr + "'>"     	
	              $("#content_eml_addr").html(strContent);
	      			
	              var strContent = 
	      			"<input type='text' name='" + data[0].home_telno + "' class='text-box' value='" + data[0].home_telno + "'>"  	
	              $("#content_home_telno").html(strContent);
	      			
	              var strContent = 
	      			"<input type='text' name='" + data[0].mbl_telno + "' class='text-box' value='" + data[0].mbl_telno + "'>"    	
	              $("#content_mbl_telno").html(strContent);
	      			
	              var strContent = 
	      			"<input type='text' name='" + data[0].cr_nm + "' class='text-box' value='" + data[0].cr_nm + "'>"
	              $("#content_cr_nm").html(strContent);
	      			
	              var strContent = 
	      			"<input type='text' name='" + data[0].road_nm_addr + "' class='text-box-addr' value='" + data[0].road_nm_addr + "'>"      	
	              $("#content_road_nm_addr").html(strContent);
           } else {
           	var str = "<li><label><input type='radio' id='" + data[i].cust_sn + "' name='result'>"
               + data[i].cust_nm
               + "</label><br></li>";
	            $("#result").append(str);
           }
         }
       },
       error : function(
           errorThrown) {
         alert(errorThrown.statusText);
       }
     });
 });

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

});