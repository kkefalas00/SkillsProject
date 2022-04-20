$(document).ready(function(){


//sign up new student
	
$("#frm1").submit(function(){
		event.preventDefault();
		$.post("/newstudent",$("#frm1").serialize(),function(res){
			if(res==1){
				 $("#frm1").hide(1000);
				$("#message").html("<div class='alert alert-success msgs'>New student is inserted<br><a href='/login'>Go to login page</a></div>");
			}
			else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
			
			
		});
});


//sign up new teacher

$("#frmsignuptchr").submit(function(){
		event.preventDefault();
		$.post("/newteacher",$("#frmsignuptchr").serialize(),function(res){
			if(res==1){
				 $("#frmsignuptchr").hide(1000);
				$("#message").html("<div class='alert alert-success msgs'>New student is inserted<br><a href='/loginteacher'>Go to login page</a></div>");
			}
			else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
			
			
		});
});


//login new student

$("#frm2").submit(function(){
		event.preventDefault();
		$.post("/loginstudent",$("#frm2").serialize(),function(res){
			if(res==1){
				 $("#frm2").hide(1000);
				$("#message").html("<div class='alert alert-success msgs'>Login accepted<br><a href='/mainstudent'>Go to main page</a></div>");
			}
			else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
			
			
		});
});


//login teacher

$("#frmlogintch").submit(function(){
		event.preventDefault();
		$.post("/logteacher",$("#frmlogintch").serialize(),function(res){
			if(res==1){
				 $("#frmlogintch").hide(1000);
				$("#message").html("<div class='alert alert-success msgs'>Login accepted<br><a href='/mylessons'>Go to main page</a></div>");
			}
			else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
			
			
		});
});



//login admin

$("#frmlogadmin").submit(function(){
	
		event.preventDefault();
		$.post("/logadmin",$("#frmlogadmin").serialize(),function(res){
			if(res==1){
				
				 $("#frmlogadmin").hide(1000);
				$("#message").html("<div class='alert alert-success msgs'>Login accepted<br><a href='/mainadmin'>Go to main page</a></div>");
			}
			else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
			
			
		});
});

//create new Admin

$("#frmcrtadmin").submit(function(){
		event.preventDefault();
		$.post("/createad",$("#frmcrtadmin").serialize(),function(res){
			if(res==1){
				
				$("#frmcrtadmin").hide(1000);
				$("#message").html("<div class='alert alert-success msgs'>New admin is inserted<br><a href='/listofadmins'>Go to list of Admins</a></div>");
			}
			else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
			
			
		});
});


//Insert into lesson

$("#frmlesson").submit(function(){
		event.preventDefault();
		$.post("/createles",$("#frmlesson").serialize(),function(res){
			if(res==1){
				
				$("#frmlesson").hide(1000);
				$("#message").html("<div class='alert alert-success msgs'>New lesson is inserted<br><a href='/mainadmin'>Go to your main page</a></div>");
			}
			else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
			
			
		});
});


//insert into units

$("#frmunits").submit(function(){
		event.preventDefault();
		var url = window.location.search;
		var q=new URLSearchParams(url);
		var lid=q.get("lessonid");
		$.post("/createunit?lessonid="+lid,$("#frmunits").serialize(),function(res){
			if(res==1){
				
				
				$("#message").html("<div class='alert alert-success msgs'>New unit is inserted</div>");
				getMyunits();
			}
			else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
			
			
		});
});



//insert into test

$("#frmtest").submit(function(){
		event.preventDefault();
		var url = window.location.search;
		var q=new URLSearchParams(url);
		var unitid=q.get("unitid");
		$.post("/createtest?unitid="+unitid,$("#frmtest").serialize(),function(res){
			if(res==1){
				
				$("#message").show(2000);
				$("#message").html("<div class='alert alert-success msgs'>New test is inserted</div>");
				$("#message").hide(2000);
				getMytest();
			}
			else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
			
			
		});
});


//insert into lesson_student

$("#frmstud").submit(function(){
		event.preventDefault();
		var url = window.location.search;
		var q=new URLSearchParams(url);
		var lessonid=q.get("lessonid");
		$.post("/lessonstudent?lid="+lessonid,$("#frmstud").serialize(),function(res){
			if(res==1){
				
				$("#message").show(2000);
				$("#message").html("<div class='alert alert-success msgs'>Student is added to class</div>");
				$("#message").hide(2000);
				$("#dt2").val("");
				getStudLesson();
				
			}
			else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
			
			
		});
});



//insert into question


$("#frmquestion").submit(function(){
		event.preventDefault();
		var url = window.location.search;
		var q=new URLSearchParams(url);
		var testid=q.get("testid");
		$.post("/createquestion?testid="+testid,$("#frmquestion").serialize(),function(res){
			if(res==1){
				
				$("#message").show(2000);
				$("#message").html("<div class='alert alert-success msgs'>New question is inserted</div>");
				$("#message").hide(2000);
				
			}
			else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
			
			
		});
});


//Insert into test_student

$("#formtst").submit(function(){
		event.preventDefault();
		var x=$("#t").val();
		var k=score;
		$.post("/inserttest?testid="+x+"&testgrade="+k,$("#formtst").serialize(),function(res){
			if(res==1){
				
				
				$("#formtst").hide(4000);
				$("#message").html("<div class='alert alert-success msgs'>Test is submitted<br><a href='/testresults?testid="+x+"'>See your results</a></div>");
				
			}
			else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
			}
			
			
		});
});






//Update Admin profile

$("#frmupdatead").submit(function(){
		event.preventDefault();
		$.post("/updateadmin",$("#frmupdatead").serialize(),function(res){
			if(res==1){
				
				
				$("#frmupdatead").hide(1000);
				$("#message").html("<div class='alert alert-success msgs'>New profile is saved<br><a href='/listofadmins'>Go to list of Admins</a></div>");
			}
			else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
			
			
		});
});


//Update teacher's profile

$("#frmupdteacher").submit(function(){
		event.preventDefault();
		$.post("/updateteacher",$("#frmupdteacher").serialize(),function(res){
			if(res==1){
				
				$("#frmupdteacher").hide(1000);
				$("#message").html("<div class='alert alert-success msgs'>New profile is saved<br><a href='/mainteacher'>Go to your main page</a></div>");
			}
			else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
			
			
		});
});


//Update Student's profile
$("#frmupdtst").submit(function(){
		event.preventDefault();
		$.post("/updatestud",$("#frmupdtst").serialize(),function(res){
			if(res==1){
				
				$("#frmupdtst").hide(1000);
				$("#message").html("<div class='alert alert-success msgs'>New profile is saved<br><a href='/mainstudent'>Go to your main page</a></div>");
			}
			else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
			
			
		});
});


//post answer for single answer

$(".frmansw").submit(function(){
		event.preventDefault();
		var x=$(this).serializeArray();
		$.post("/rightans",$(".frmansw").serialize(),function(res){
			if(res==1){
				
				$("#message").show(3000);
				$("#message").html("<div class='alert alert-success msgs'>Right answer is saved</div>");
				$(".ll").val("");
				$(".lll").val("");
				$("#message").hide(3000);
			}
			else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
			
			
		});
});
 




//post new answer

$(".singleans").submit(function(){
		event.preventDefault();
		var x=$(this).serializeArray();
		$.post("/insnewansw",$(this).serialize(),function(res){
			if(res==1){
				let uid=x[1].value;
				
				$.getJSON("/getMyansw?qid="+uid,(u2)=>{
												var s="";
											 
													
													s+="<h2>Answers</h2><table class='table table-hover tb'>";
													for(i=0;i<u2.length;i++)
													{
														s+="<tr class='c"+u2[i].ranswer+"'><td>"+u2[i].anstitle+"</td>";
														s+="<td>"+u2[i].ranswer+"</td><td><span class='glyphicon glyphicon-ok' style='color:green'></span></td></tr>";
														
													}
													s+="</table>";
												
												$("#qq"+uid).html(s); 
											});
			}
			else
			{
				$("#message1").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
			
			
		});
});



		$("#dt1").change(function(){
			
				var x=$("#dt1").val();
				$("#tid").val(x);
		});
		
		$("#dt2").change(function(){
			
				var x=$("#dt2").val();
				$("#stid").val(x);
		});
		
		
		$(".btt").click(function(){
			
			var i=$(this).attr("ii");
			
			$("#kk"+i).toggle();
			
		});
		var allq=0;
		 
		$("#t").change(function(){
			$("#d6").html("");
			let x=$("#t").val();
			$.getJSON("/gettestfinal?testid="+x,function(u1){
							
							var html="";
								html+="<h2>Test title:"+u1[0].testtitle+"</h2><input type='hidden' name=score id=score1>";
								
								$("#d6").append(html);
								
								$.getJSON("/getQuestions?testid="+x,(u2)=>{
										
										allq=u2.length;
											for(var j=0;j<u2.length;j++)
											{
												let q=u2[j];
												let qj=j;
												
													if(q.question_type=='Single answer')
														{	
															
															html="<h3>Question:"+q.qtitle+"</h3>";
															html+="<br><input type='text' name=q"+q.qid+" value='' cor='"+q.ansr+"' old=0 onchange='fun10(this)' ></br>";
															
														}
													
													if(q.question_type=='Single choice')
														
														{	

															$.getJSON("/getAnswers?qid="+q.qid,(u3)=>{
																
															 var html="<h3>Question:"+q.qtitle+"</h3><input type=hidden id='ansa2"+q.qid+"' value=''  old=0 onchange='fun10(this)'>";
																html+="<table class='table table-hover tb'>";
																html+="<tr><th>Answers</th><th>Choice</th></tr>";															 
																for(k=0;k<u3.length;k++)		
																	{
																		html+="<tr><td>"+u3[k].anstitle+"</td><td><input type='radio'  name=ans2_"+q.qid+"  value="+u3[k].ansid+" class=k2 style='margin-left:20px' cor='"+u3[k].ranswer+"' onchange=\"document.getElementById('ansa2"+q.qid+"').value='"+u3[k].ranswer+"'; $('#ansa2"+q.qid+"').change();\"																		\"></td></tr>";
																
																	}
																		html+="</table>";
																		$("#d6").append(html);
															});
														}
													
													if(q.question_type=='Multiple choice')
														
														{	
													
															$.getJSON("/getAnswers?qid="+q.qid,(u3)=>{
																
																	var html="<h3>Question:"+q.qtitle+"</h3>";
																
																		html+="<table class='table table-hover tb'>";
																		html+="<tr><th>Answers</th><th>Choice</th></tr>";
																		
																for(k=0;k<u3.length;k++)
																	
																	{
																		html+="<tr><td>"+u3[k].anstitle+"</td><td><input type='checkbox' name=ans"+q.qid+"[] value="+u3[k].ansid+" class=k3 style='margin-left:20px' cor='"+u3[k].ranswer+"' onchange='fun10(this)'></td></tr>";
																
																	}
																		html+="</table>";
																		html+="<input type=hidden id=score value="+score+">";
																		$("#d6").append(html);	
															});
														}
													
											}
												
										});
										
										
										
										
									
						
						
							
		
					});
			
		

});


	$("#search1").keyup(function(){
			
			var s1=$(this).val().toLowerCase();
			$("#tt1 tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(s1) > -1)
		});
			
		
	});
	
	
	$("#search2").keyup(function(){
			
			var s1=$(this).val().toLowerCase();
			$("#tt2 tr").filter(function() {
			$(this).toggle($(this).text().toLowerCase().indexOf(s1) > -1)
		});
			
		
	});

	
});




var score=0;

function fun10(o)
{
	if($(o).attr("type")=="checkbox")
	{
		if($(o).attr("cor")=="Yes")
		{
			if($(o).is(':checked')){
		
				score++;
			}
			else
			{
				score--;
			}
		}
		
	
	}
	else
	{	

		
		if($(o).attr("type")=="hidden")
		{
			console.log(score+" "+$(o).attr("old")+" |"+$(o).val()+"|");
			if($(o).attr("old")==0)
			{
				
				if($(o).val()=="Yes")
				{
					console.log(score+" "+$(o).attr("old"));
					score++;
					$(o).attr("old","1");
				}
			}
			else
			{
				if($(o).val()!="Yes")
				{
					score--;
					$(o).attr("old","0");
				}
			}
			
		}
		else
		{
		
		if($(o).attr("old")==0)
		{
			if($(o).attr("cor")==$(o).val())
			{
				score++;
				$(o).attr("old","1");
			}
		}
		else
		{
			if($(o).attr("cor")!=$(o).val())
			{
				score--;
				$(o).attr("old","0");
			}
		}
		
		}
		
	}
}


function getAdmins()
{
	$.getJSON("/getadmin",function(u){
		
		var html="";
			html+="<table class='table table-hover tb'>";
			html+="<tr><th>Username</th><th>Delete</th></tr>";
				for(i=0;i<u.length;i++)
				{
						html+="<tr><td>"+u[i].username+"</td><td><a onclick='del("+u[i].adid+")'><span class='glyphicon glyphicon-trash' style='margin-left:18px;'></span></a></td></tr>";
				
				}
		
			html+="</table>";
			$("#admins").html(html);
		
	});
	
	
}


function getlessons()
{
	$.getJSON("/getles",function(u){
		
		var html="";
			html+="<table class='table table-hover tb'>";
			html+="<tr><th>Lesson title</th><th>Teacher</th><th>Delete</th><th>Add student to lesson</th></tr>";
				for(i=0;i<u.length;i++)
				{
						html+="<tr><td>"+u[i].ltitle+"</td><td>"+u[i].fname+"</td><td><a onclick='$(\"#tid\").val("+u[i].tid+");$(\"#myModal\").modal(\"show\");'><span class='glyphicon glyphicon-trash' style='margin-left:15px;'></span></a></td><td><a href=/student?lessonid="+u[i].lid+"><span class='glyphicon glyphicon-plus' style='margin-left:50px;'></span></a></td></tr>";
				
				}
		
			html+="</table>";
			$("#lessons").html(html);
		
	});
	
	
}

function getStudLessons()
{
	$.getJSON("/getstls",function(u){
		
		var html="";
			html="<h2>Welcome "+u[0].fname+"</h2>";
			html+="<table class='table table-hover tb'>";
			html+="<tr><th>Lesson title</th><th>See the units</th></tr>";
				for(i=0;i<u.length;i++)
				{
						html+="<tr><td>"+u[i].ltitle+"</td><td><a href=/seetheunits?lesid="+u[i].lid+"><span class='glyphicon glyphicon-plus' style='margin-left:30px;'></span></a></td></tr>";
				
				}
		
			html+="</table>";
			$("#stdlessons").html(html);
		
	});
	
	
}





function getMylessons()
{
	$.getJSON("/getmyles",function(u){
		
		var html="";
			html+="<h2>Welcome "+u[0].fname+"</h2>";
			html+="<table class='table table-hover tb'>";
			html+="<tr><th>Lesson title</th><th>Add units</th></tr>";
				for(i=0;i<u.length;i++)
				{
						html+="<tr><td>"+u[i].ltitle+"</td><td><a href=/units?lessonid="+u[i].lid+"><span class='glyphicon glyphicon-plus' style='margin-left:15px;'></span></a></td></tr>";
				
				}
		
			html+="</table>";
			$("#mylessons").html(html);
		
	});
	
	
}

function getMyResults()
{
		var url = window.location.search;
		var q=new URLSearchParams(url);
		var testid=q.get("testid");
	$.getJSON("/getmyRes?testid="+testid,function(u){
		
		var html="";
		$.getJSON("/getQ?testid="+testid,(u4)=>{
			sumq=u4.length;
			
			html+="<h2>Tests results</h2>";
			html+="<table class='table table-hover tb'>";
			html+="<tr><th>Test title</th><th>Test date</th><th>Test grade</th></tr>";
				for(i=0;i<u.length;i++)
				{
						var d=new Date(u[i].testdate);
						var sd=d.toDateString();
						html+="<tr><td>"+u[i].testtitle+"</td><td>"+sd+"</td><td>"+(Number(u[i].testgrade).toFixed(2))+ " / "  +Number(sumq).toFixed(2)+"</td></tr>";
				
				}
		
			html+="</table>";
			$("#myresults").html(html);
		});
		
	});
	
	
}




function getStudLesson()

{
	var url=window.location.search;
	var p=new URLSearchParams(url);
	var x=p.get("lessonid");
	$.getJSON("/getstudlesson?lessonid="+x,function(u){
		var html="";
			html+="<table class='table table-hover tb'>";
			html+="<tr><th>Lesson title</th><th>Students</th><th>Delete</th></tr>";
				for(i=0;i<u.length;i++)
				{
						html+="<tr><td>"+u[i].ltitle+"</td><td>"+u[i].fname+"</td><td><a onclick='$(\"#stid\").val("+u[i].stid+");$(\"#myModal1\").modal(\"show\");'><span class='glyphicon glyphicon-trash' style='margin-left:15px;'></span></a></td></tr>";
				
				}
		
			html+="</table>";
			$("#stud1").html(html);
	
	
	});
}


function dellesson()
{
	
	var x=$("#tid").val();
	
	if(x!="")
	{
	
		$.get("/dellesson?tid="+x,function(res){
			if(res=="1")
					{
						$("#message").html("<div class=\"alert alert-success msgd\">Lesson is deleted</div>");
						$("#message").hide(5000);
						getlessons();
					}
					else
					{
						$("#message").html("<div class=\"alert alert-danger msgd\">Error during process</div>");
						$("#message").hide(5000);
					}
			
		});
	}
	
	
}


function delstud()

{
	var x=$("#stid").val();
	
	if(x!="")
	{
	
		$.get("/delstud?stid="+x,function(res){
			if(res=="1")
					{
						$("#message").html("<div class=\"alert alert-success msgd\">Student is deleted from this lesson</div>");
						$("#message").hide(4000);
						getStudLesson();
					}
					else
					{
						$("#message").html("<div class=\"alert alert-danger msgd\">Error during process</div>");
						$("#message").hide(4000);
					}
			
		});
	}
	
	
	
	
}

function delstudent()
{
	
	var x=$("#studentid").val();
	
	if(x!="")
	{
	
		$.get("/delstudent?studentid="+x,function(res){
			if(res=="1")
					{
						$("#message").html("<div class=\"alert alert-success msgd\">Student is deleted</div>");
						$("#message").hide(4000);
						getMyStuds();
					}
					else
					{
						$("#message").html("<div class=\"alert alert-danger msgd\">Error during process</div>");
						$("#message").hide(4000);
					}
			
		});
	}
	
	
}




function delteacher()

{
	var x=$("#teacherid").val();
	
	if(x!="")
	{
	
		$.get("/delteacher?tid="+x,function(res){
			if(res=="1")
					{
						$("#message").html("<div class=\"alert alert-success msgd\">Teacher is deleted</div>");
						$("#message").hide(4000);
						getMyTeachers();
					}
					else
					{
						$("#message").html("<div class=\"alert alert-danger msgd\">Error during process</div>");
						$("#message").hide(4000);
					}
			
		});
	}
	
	
	
	
}

function getMyunits()

{
	
	var url=window.location.search;
	var p=new URLSearchParams(url);
	var x=p.get("lessonid");
	$.getJSON("/getmyunits?lid="+x,function(u){
		
		var html="";
			html="<h2>The units of "+u[0].ltitle+" are:</h2>";
			html+="<table class='table table-hover tb'>";
			html+="<tr><th>Unit title</th><th>Add test</th></tr>";
				for(i=0;i<u.length;i++)
				{
						html+="<tr><td>"+u[i].untitle+"</td><td><a href=/test?unitid="+u[i].unid+"><span class='glyphicon glyphicon-plus' style='margin-left:15px;'></span></a></td></tr>";
				
				}
		
			html+="</table>";
			$("#myunits").html(html);
		
	});
	
	
	
	
}

function getMytest()

{
	
	var url=window.location.search;
	var p=new URLSearchParams(url);
	var x=p.get("unitid");
	$.getJSON("/getmytest?unid="+x,function(u){
		
		var html="";
			html="<h2>The tests of "+u[0].untitle+" are:</h2>";
			html+="<table class='table table-hover tb'>";
			html+="<tr><th>Test title</th><th>Add question</th></tr>";
				for(i=0;i<u.length;i++)
				{
						html+="<tr><td>"+u[i].testtitle+"</td><td><a href=/question?testid="+u[i].testid+"><span class='glyphicon glyphicon-plus' style='margin-left:30px;'></span></a></td></tr>";
				
				}
		
			html+="</table>";
			$("#mytest").html(html);
		
	});
	
	
	
	
}


function getMyUnits2()

{
	
	var url=window.location.search;
	var p=new URLSearchParams(url);
	var x=p.get("lesid");
	$.getJSON("/getmyun?lessonid="+x,function(u){
		
		var html="";
			html="<h2>The units of "+u[0].ltitle+" are:</h2>";
			html+="<table class='table table-hover tb'>";
			html+="<tr><th>Unit title</th><th>Go to test</th></tr>";
				for(i=0;i<u.length;i++)
				{
						html+="<tr><td>"+u[i].untitle+"</td><td><a href=/testunit?unitid="+u[i].unid+"><span class='glyphicon glyphicon-plus' style='margin-left:30px;'></span></a></td></tr>";
				
				}
		
			html+="</table>";
			$("#myunitsstd").html(html);
		
	});
	
	
	
	
}

function getMyStuds() 

{
	
	$.getJSON("/getmystds",function(u){
		
		var html="";
			html+="<table class='table table-hover tb'>";
			html+="<tr><th>Lesson title</th><th>Student's name</th><th>Student's email</th><th>Delete</th><tbody id=tt1></tr>";
				for(i=0;i<u.length;i++)
				{
						html+="<tr><td>"+u[i].ltitle+"</td><td>"+u[i].fname+"</td><td>"+u[i].stemail+"</td><td><a onclick='$(\"#studentid\").val("+u[i].stid+");$(\"#myModal3\").modal(\"show\");'><span class='glyphicon glyphicon-trash' style='margin-left:15px;'></span></a></td></tr>";
				
				}
		
			html+="</tbody></table>";
			$("#mystuds").html(html);
		
	});
	
	
	
}


function getMyTeachers()
{
	
	$.getJSON("/getmyteachs",function(u){
		
		var html="";
			html+="<table class='table table-hover tb'>";
			html+="<tr><th>Lesson title</th><th>Teacher's name</th><th>Teacher's occupation</th><th>Teacher's email</th><th>Delete</th><tbody id=tt2></tr>";
				for(i=0;i<u.length;i++)
				{
						html+="<tr><td>"+u[i].ltitle+"</td><td>"+u[i].fname+"</td><td>"+u[i].occupation+"</td><td>"+u[i].temail+"</td><td><a onclick='$(\"#teacherid\").val("+u[i].tid+");$(\"#myModal4\").modal(\"show\");'><span class='glyphicon glyphicon-trash' style='margin-left:15px;'></span></a></td></tr>";
				
				}
		
			html+="</tbody></table>";
			$("#myteachers").html(html);
		
	});
	
	
}




function getMytestquestion()

{
	
	var url=window.location.search;
	var p=new URLSearchParams(url);
	var x=p.get("testid");
	$.getJSON("/getmytestquestion?testid="+x,function(u){
			
			var html="";
				
				html+="<h2>Test title:"+u[0].testtitle+" </h2>";	
				for(i=0;i<u.length;i++)
				
				{
						
						
							html+="Question title:"+u[i].qtitle+" <span class='glyphicon glyphicon-chevron-down btt'  id=bt"+i+" ii="+i+" ></span><br>";
								html+="<div id=kk"+i+" style='display:none;'>";
									if(u[i].question_type!='Single answer')
										{	
											html+="<form action='' method=post class=singleans>";
													html+="<div class='form-group'>";
														html+="Answer:";
														html+="<input type=\"text\" name=\"ans\" class='form-control'>";
													html+="</div>";
													html+="<input type=\"hidden\"  name=\"qid\" value="+u[i].qid+">";
													html+="<div class='form-group'>";
														html+="<label>Right answer:</label>";
														html+="<select class='form-control'  name='rans'>";
														html+="<option selected disabled>Choose the right answer</option>";
														html+="<option>Yes</option>";
														html+="<option>No</option>";
														html+="</select>";
												html+="</div>";
												html+="<button type=\"submit\"><span class='glyphicon glyphicon-plus'></button>";
											html+="</form>";
											
											html+="<div id=qq"+u[i].qid+"></div>"
											let uid=u[i].qid;
											$.getJSON("/getMyansw?qid="+uid,(u2)=>{
												var s="";
											 
													
													s+="<h2>Answers</h2><table class='table table-hover tb'>";
													for(i=0;i<u2.length;i++)
													{
																s+="<tr class='c"+u2[i].ranswer+"'><td>"+u2[i].anstitle+"</td>";
												
												
														s+="<td>"+u2[i].ranswer+"</td></tr>";
														
													}
													s+="</table>";
												
												$("#qq"+uid).html(s); 
											});
											
										}
										
										if(u[i].question_type=='Single answer')
											{		
													htmml="";
													html+="<form action='' method=post class=frmansw>";
													html+="<div class='form-group'>";
														html+="Answer title:";
														html+="<input type=\"text\" name=\"ans\" class='form-control ll'>";
													html+="</div>";
													html+="<div class='form-group'>";
															html+="Right answer:";
															html+="<input type=\"text\" name=\"ann\" class='form-control lll'>";
													html+="</div>";
													html+="<input type=\"hidden\"  name=\"qid\" value="+u[i].qid+">";
													html+="<button type=\"submit\"><span class='glyphicon 		glyphicon-plus'></button>";
													html+="</form>";
											}
									
									html+="</div><br><br>";
									
				}
			
			$("#testquest").html(html);

	});
	
}






function del(id)
{
	$.get("/del?id="+id,function(res){
		if(res==1)
		   {
				
				getAdmins();
		    }
		else
			{
				$("#message").html("<div class='alert alert-danger msgs'>Error during process</div>");
				
			}
		
	});
	
}

function getAdmindata()
{
	$.getJSON("/getadmindata",function(u){
		$("#usr").val(u.username);
		$("#ps").val("");
		
	});
	
}


function getTeacherdata()
{
	$.getJSON("/getteacherdata",function(u){
		$("#fn").val(u.fname);
		$("#em").val(u.temail);
		$("#cs").val(u.occupation);
		
	});
	
}

function getStudentData()
{
	$.getJSON("/getstudentdata",function(u){
		$("#fn").val(u.fname);
		$("#em").val(u.stemail);
		
	});
	
}


function getTeacher()
{
	 $.getJSON("/getteacher",function(u){
			 
		var s="";
			s+="<label>Teacher Name:</label>";
			s+="<select class='form-control' id='dt1' name='dt1'>";
			s+="<option selected disabled>Choose teacher</option>";
			 for (i=0;i<u.length;i++)
			{	
				s+="<option value="+u[i].tid+">"+u[i].fname+"</option>";
				
			}
			s+="</select>";
			$("#d1").html(s);
	 });
	
}

function getStudent()
{
	 $.getJSON("/getstud",function(u){
			 
		var s="";
			s+="<label>Student Name:</label>";
			s+="<select class='form-control' id='dt2' name='dt2'>";
			s+="<option selected disabled>Choose student</option>";
			 for (i=0;i<u.length;i++)
			{	
				s+="<option value="+u[i].stid+">"+u[i].fname+"</option>";
				
			}
			s+="</select>";
			$("#d4").html(s);
	 });
	
}

function getMyTstUnts2()

{
	
	var url=window.location.search;
	var p=new URLSearchParams(url);
	var x=p.get("unitid");
	$.getJSON("/getTest?unid="+x,function(u){
		
			 
		var s="";
			s+="<h2 id=hr1>Choose your tests:</h2>";
			s+="<select class='dtt' id='t'>";
			s+="<option selected disabled>Choose test</option>";
			 for (i=0;i<u.length;i++)
			{	
				s+="<option value="+u[i].testid+">"+u[i].testtitle+"</option>";
				
			}
			s+="</select>";
			$("#d5").html(s);
		
	});
	
	
	
	
}