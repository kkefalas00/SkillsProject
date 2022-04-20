const express = require('express');
var app = express();

const fs = require("fs");
const session = require('express-session');
const fileUpload = require('express-fileupload');
var md5 = require('md5');



const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(session({secret: "secret pass for me"}));

const mysql = require('mysql');

const con = mysql.createConnection({
 host: "",
 user: "",
 password: "",
 database: ""
});


app.use('/static', express.static('files'));

app.get('/', function (req, res) {
	
	var html=fs.readFileSync(__dirname +'/public/up.html');
		html+=fs.readFileSync(__dirname +'/public/mainmenu.html');
		html+=fs.readFileSync(__dirname +'/public/index.html');
		html+=fs.readFileSync(__dirname +'/public/footer.html');
	 res.send(html);
	 
});

//initial signup

app.get('/signup', function (req, res) {
	
	var html=fs.readFileSync(__dirname +'/public/up.html');
		html+=fs.readFileSync(__dirname +'/public/mainmenu.html');
		html+=fs.readFileSync(__dirname +'/public/signup.html');
		html+=fs.readFileSync(__dirname +'/public/footer.html');
		
	 res.send(html);
		 
});

//initial login

app.get('/login', function (req, res) {
	
	var html=fs.readFileSync(__dirname +'/public/up.html');
		html+=fs.readFileSync(__dirname +'/public/mainmenu.html');
		html+=fs.readFileSync(__dirname +'/public/login.html');
		html+=fs.readFileSync(__dirname +'/public/footer.html');
		
	 res.send(html);
		 
});

//Create login admin page

app.get('/loginadmin', function (req, res) {
	
	var html=fs.readFileSync(__dirname +'/public/up.html');
		html+=fs.readFileSync(__dirname +'/public/mainmenu.html');
		html+=fs.readFileSync(__dirname +'/public/loginadmin.html');
		html+=fs.readFileSync(__dirname +'/public/footer.html');
		
	 res.send(html);
		 
});


//Create sign up teacher

app.get('/signupteacher', function (req, res) {
	
	var html=fs.readFileSync(__dirname +'/public/up.html');
		html+=fs.readFileSync(__dirname +'/public/mainmenu.html');
		html+=fs.readFileSync(__dirname +'/public/signupteacher.html');
		html+=fs.readFileSync(__dirname +'/public/footer.html');
		
	 res.send(html);
		 
});

//create login teacher page

app.get('/loginteacher', function (req, res) {
	
	var html=fs.readFileSync(__dirname +'/public/up.html');
		html+=fs.readFileSync(__dirname +'/public/mainmenu.html');
		html+=fs.readFileSync(__dirname +'/public/loginteacher.html');
		html+=fs.readFileSync(__dirname +'/public/footer.html');
		
	 res.send(html);
		 
});


//create admin main page

app.get('/mainadmin', function (req, res) {
	
	if(req.session.adid=="") res.send("No connection");
	 else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/adminmenu.html');
				html+=fs.readFileSync(__dirname +'/public/lesson.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
		 
			res.send(html);
		}	 
});

//Create new Admin page

app.get('/createadmin', function (req, res) {
	
	if(req.session.adid=="") res.send("No connection");
	 else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/adminmenu.html');
				html+=fs.readFileSync(__dirname +'/public/createadmin.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
		 
			res.send(html);
		}	 
});


//create student main page

app.get('/mainstudent', function (req, res) {
	
	if(req.session.stid=="") res.send("No connection");
	 else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/studentmenu.html');
				html+=fs.readFileSync(__dirname +'/public/mainstudent.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
		 
			res.send(html);
		}	 
});


//Create profile admin page

app.get('/profileadmin', function (req, res) {
	
	if(req.session.adid=="") res.send("No connection");
	 else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/adminmenu.html');
				html+=fs.readFileSync(__dirname +'/public/profileadmin.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
		 
			res.send(html);
		}	 
});


//create list of Admins

app.get('/listofadmins', function (req, res) {
	
	if(req.session.adid=="") res.send("No connection");
	 else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/adminmenu.html');
				html+=fs.readFileSync(__dirname +'/public/listofadmins.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
		 
			res.send(html);
		}	 
});



//create profile page for student


app.get('/profstudent', function (req, res) {
	
	if(req.session.stid=="") res.send("No connection");
	 else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/studentmenu.html');
				html+=fs.readFileSync(__dirname +'/public/profilestudent.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
		 
			res.send(html);
		}	 
});


//create main page of teacher

app.get('/mainteacher', function (req, res) {
	
	if(req.session.tid=="") res.send("No connection");
	 else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/teachermenu.html');
				html+=fs.readFileSync(__dirname +'/public/teacherpage.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
		 
			res.send(html);
		}	 
});




// create lesson page

app.get('/createlesson', function (req, res) {
	
	if(req.session.adid=="") res.send("No connection");
	 else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/adminmenu.html');
				html+=fs.readFileSync(__dirname +'/public/createlesson.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
		 
			res.send(html);
		}	 
});



// Create admin's students page

app.get('/students', function (req, res) {
	
	if(req.session.adid=="") res.send("No connection");
	 else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/adminmenu.html');
				html+=fs.readFileSync(__dirname +'/public/adminsstudents.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
		 
			res.send(html);
		}	 
});




//create student page in order to put them in lesson

app.get('/student', function (req, res) {
	
	if(req.session.adid=="") res.send("No connection");
	 else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/adminmenu.html');
				html+=fs.readFileSync(__dirname +'/public/student.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
		 
			res.send(html);
		}	 
});


//Create teacher's page for Admin


app.get('/teachers', function (req, res) {
	
	if(req.session.adid=="") res.send("No connection");
	 else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/adminmenu.html');
				html+=fs.readFileSync(__dirname +'/public/teachersadmin.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
		 
			res.send(html);
		}	 
});




//Create teacher profile

app.get('/profteacher', function (req, res) {
	
	if(req.session.tid=="") res.send("No connection");
	 else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/teachermenu.html');
				html+=fs.readFileSync(__dirname +'/public/teacherprofile.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
		 
			res.send(html);
		}	 
});





//create my lesson page


app.get('/mylessons', function (req, res) {
	
	if(req.session.tid=="") res.send("No connection");
	 else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/teachermenu.html');
				html+=fs.readFileSync(__dirname +'/public/mylessons.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
		 
			res.send(html);
		}	 
});

//Create the units page of each student


app.get('/seetheunits', function (req, res) {
	
	if(req.session.stid=="") res.send("No connection");
	 else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/studentmenu.html');
				html+=fs.readFileSync(__dirname +'/public/seetheunits.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
		 
			res.send(html);
		}	 
});




//Create the test-units page for each student


app.get('/testunit', function (req, res) {
	
	if(req.session.stid=="") res.send("No connection");
	 else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/studentmenu.html');
				html+=fs.readFileSync(__dirname +'/public/testunit.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
		 
			res.send(html);
		}	 
});


//Create test results page

app.get('/testresults', function (req, res) {
	
	if(req.session.stid=="") res.send("No connection");
	 else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/studentmenu.html');
				html+=fs.readFileSync(__dirname +'/public/testresults.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
		 
			res.send(html);
		}	 
});


// create units page

app.get('/units', function (req, res) {
	
	
	
	if(req.session.tid=="") res.send("No connection");
	  else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/teachermenu.html');
				html+=fs.readFileSync(__dirname +'/public/units.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
			
			res.send(html);
		}	
		
	 
})


//Create test page

app.get('/test', function (req, res) {
	
	
	
	if(req.session.tid=="") res.send("No connection");
	  else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/teachermenu.html');
				html+=fs.readFileSync(__dirname +'/public/test.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
			
			res.send(html);
		}	
		
	 
})

//Create question page

app.get('/question', function (req, res) {
	
	
	
	if(req.session.tid=="") res.send("No connection");
	  else{
	
			var html=fs.readFileSync(__dirname +'/public/up.html');
				html+=fs.readFileSync(__dirname +'/public/teachermenu.html');
				html+=fs.readFileSync(__dirname +'/public/questions.html');
				html+=fs.readFileSync(__dirname +'/public/footer.html');
			
			res.send(html);
		}	
		
	 
})





//Update profile Admin


app.post('/updateadmin', function (req, res) {
	
	if(req.session.adid=="") res.send("No connection");
	else
	{
	 
			var usr=req.body.usr;
			var pwd=md5(req.body.ps);
			
			if(pwd=="")
				
				{
					var sql = "update admin set username='"+usr+"' where adid="+req.session.adid;
				  
					  con.query(sql, function (err, result) {
						if (err) res.send("2");
							else res.send("1");
					  });
				}
				
			if(pwd!="")
				
				{
					var sql = "update admin set username='"+usr+"', ps='"+pwd+"' where adid="+req.session.adid;
				  
					  con.query(sql, function (err, result) {
						if (err) res.send("2");
							else res.send("1");
					  });
				}
	}	
		
	 
});


//Update Teacher's profile

app.post('/updateteacher', function (req, res) {
	
	if(req.session.tid=="") res.send("No connection");
	 else
		{ 	 
			var fn=req.body.fn;
			var em=req.body.em;
			var cs=req.body.cs;
			
			var sql = "update teacher set fname='"+fn+"', temail='"+em+"', occupation='"+cs+"' where tid="+req.session.tid;
						  
							  con.query(sql, function (err, result) {
								if (err) res.send("2");
									else res.send("1");
							  });
	    }


});



//Update students's profile

app.post('/updatestud', function (req, res) {
	
	if(req.session.stid=="") res.send("No connection");
	 else
		{ 	 
			var fn=req.body.fn;
			var em=req.body.em;
			
			var sql = "update student set fname='"+fn+"', stemail='"+em+"' where stid="+req.session.stid;
						  
							  con.query(sql, function (err, result) {
								if (err) res.send("2");
									else res.send("1");
							  });
	    }


});



//new student sign up

app.post('/newstudent', function (req, res) {
	
	 
	var email=req.body.em;
	var onoma=req.body.on;
	
    var sql = "INSERT INTO student (stid,fname,stemail) VALUES ('NULL', '"+onoma+"','"+email+"')";
	  
		  con.query(sql, function (err, result) {
			if (err) res.send("2");
				else res.send("1");
		  });
	 
	 
})

//Post new unit

app.post('/createunit', function (req, res) {
	
	if(req.session.tid=="") res.send("No connection");
	 else
		{ 
	 
				var title=req.body.ut;
				var lid=req.query.lessonid;
				
				var sql = "INSERT INTO units (unid,untitle,lid) VALUES ('NULL', '"+title+"','"+lid+"')";
				  
					  con.query(sql, function (err, result) {
						if (err) res.send("2");
							else res.send("1");
					  });
		}
	 
})

//Post new answer

app.post('/insnewansw', function (req, res) {
	
	if(req.session.tid=="") res.send("No connection");
	 else
		{ 
	 
				var ans=req.body.ans;
				var rans=req.body.rans;
				var qid=req.body.qid;
				
				var sql = "INSERT INTO answer (ansid,anstitle,ranswer,qid) VALUES ('NULL','"+ans+"','"+rans+"','"+qid+"')";
				  
					  con.query(sql, function (err, result) {
						if (err) res.send("2");
							else res.send("1");
					  });
		}
	 
})


//Post new answer for single answer


app.post('/rightans', function (req, res) {
	
	if(req.session.tid=="") res.send("No connection");
	 else
		{ 
	 
				var ans=req.body.ans;
				var qid=req.body.qid;
				var ann=req.body.ann;
				
				var sql = "INSERT INTO answer (ansid,anstitle,ranswer,qid,ansr) VALUES('NULL','"+ans+"','Yes','"+qid+"','"+ann+"')";
				  
					  con.query(sql, function (err, result) {
						if (err) res.send("2");
							else res.send("1");
					  });
		}
	 
})




//Post new test


app.post('/createtest', function (req, res) {
	
	if(req.session.tid=="") res.send("No connection");
	 else
		{ 
	 
				var ttl=req.body.ttl;
				var unitid=req.query.unitid;
				
				var sql = "INSERT INTO test (testid,testtitle,unid) VALUES ('NULL', '"+ttl+"','"+unitid+"')";
				  
					  con.query(sql, function (err, result) {
						if (err) res.send("2");
							else res.send("1");
					  });
		}
	 
})


//Post into Test_student

app.post('/inserttest', function (req, res) {
	
	if(req.session.stid=="") res.send("No connection");
	 else
		{ 
	 
				var testgrade=req.query.testgrade;
				var tstid=req.query.testid;
				var stid=req.session.stid;
				
				var sql = "INSERT INTO test_student (testid,stid,testdate,testgrade) VALUES ('"+tstid+"', '"+stid+"',now(),'"+testgrade+"')";
				  
					  con.query(sql, function (err, result) {
						if (err) res.send("2");
							else res.send("1");
					  });
		}
	 
})


//Post new question

app.post('/createquestion', function (req, res) {
	
	if(req.session.tid=="") res.send("No connection");
	 else
		{ 
	 
				var qtl=req.body.qtl;
				var qtp=req.body.qtp;
				var testid=req.query.testid;
				
				var sql = "INSERT INTO question (testid,qid,qtitle,question_type) VALUES ('"+testid+"', 'NULL', '"+qtl+"','"+qtp+"')";
				  
					  con.query(sql, function (err, result) {
						if (err) res.send("2");
							else res.send("1");
					  });
		}
	 
})
 


//New teacher sign up

app.post('/newteacher', function (req, res) {
	
	 
	var email=req.body.em;
	var onoma=req.body.fn;
	var course=req.body.cs
	
    var sql = "INSERT INTO teacher (tid,fname,occupation,temail) VALUES ('NULL', '"+onoma+"','"+course+"','"+email+"')";
	  
		  con.query(sql, function (err, result) {
			if (err) res.send("2");
				else res.send("1");
		  });
	 
	 
})




//login student

app.post('/loginstudent', function (req, res) {
	
	var email=req.body.em;
	var onoma=req.body.on;
	
    var sql = "select * from student where stemail='"+email+"' and fname='"+onoma+"'";
	
	  
		  con.query(sql, function (err, result) {
			  if(result.length>0) {
				req.session.stid=result[0].stid;
				res.send("1");
			  
			  }
				else {
					
					req.session.stid="";
					res.send("2");
				}
			
		  });
	 
	 
})

//login teacher

app.post('/logteacher', function (req, res) {
	
	var email=req.body.em;
	var fn=req.body.fn;
	
    var sql = "select * from teacher where temail='"+email+"' and fname='"+fn+"'";
	
	  
		  con.query(sql, function (err, result) {
			  if(result.length>0) {
				req.session.tid=result[0].tid;
				res.send("1");
			  
			  }
				else {
					
					req.session.tid="";
					res.send("2");
				}
			
		  });
	 
	 
})




// login admin

app.post('/logadmin', function (req, res) {
	
	var username=req.body.usr;
	var pass=md5(req.body.ps);
	
    var sql = "select * from admin where username='"+username+"' and ps='"+pass+"'";
	
	
	  
		  con.query(sql, function (err, result) {
			  if(result.length>0) {
				req.session.adid=result[0].adid;
				res.send("1");
			  
			  }
				else {
					
					req.session.adid="";
					res.send("2");
				}
			
		  });
	 
	 
})

//create new Admin

app.post('/createad', function (req, res) {
	
	if(req.session.adid=="") res.send("No connection");
	 else{ 
		var username=req.body.usr;
		var ps=md5(req.body.ps);
		
		var sql = "INSERT INTO admin (adid,username,ps) VALUES ('NULL', '"+username+"','"+ps+"')";
		  
			  con.query(sql, function (err, result) {
				if (err) res.send("2");
					else res.send("1");
			  });
		 
	 }
})


//Create New lesson

app.post('/createles', function (req, res) {
	
	if(req.session.adid=="") res.send("No connection");
	 else{ 
		var lt=req.body.lt;
		var tid=req.body.tid;
		
		var sql = "INSERT INTO lesson (lid,ltitle,tid) VALUES ('NULL', '"+lt+"','"+tid+"')";
		  
			  con.query(sql, function (err, result) {
				if (err) res.send("2");
					else res.send("1");
			  });
		 
	 }
})


//insert into student_lesson

app.post('/lessonstudent', function (req, res) {
	
	if(req.session.adid=="") res.send("No connection");
	 else
		{ 
	 
				var stid=req.body.stid;
				var lid=req.query.lid;
				
				var sql = "INSERT INTO lesson_student (lid,stid) VALUES ('"+lid+"','"+stid+"')";
				  
					  con.query(sql, function (err, result) {
						if (err) res.send("2");
							else res.send("1");
					  });
		}
	 
})






//list of Admins

app.get('/getadmin', function (req, res) {
	
	if(req.session.adid=="") res.send("No connection");
	 else{ 
			var sql = "select * from admin";
		  
			  con.query(sql, function (err, result) {
				 res.send(result);
				
			  });
		 
	 }
})






//List of lessons and their teachers

app.get('/getles', function (req, res) {
	
	if(req.session.adid=="") res.send("No connection");
	 else{ 
			var sql = "select * from lesson,teacher where lesson.tid=teacher.tid";
		  
			  con.query(sql, function (err, result) {
				 res.send(result);
				
			  });
		 
	 }
})



//List of students for admin

app.get('/getmystds', function (req, res) {
	
	if(req.session.adid=="") res.send("No connection");
	 else{ 
			var sql = "select * from lesson,lesson_student,student where lesson.lid=lesson_student.lid and lesson_student.stid=student.stid";
		  
			  con.query(sql, function (err, result) {
				 res.send(result);
				
			  });
		 
	 }
})

//List of teachers for admin

app.get('/getmyteachs', function (req, res) {
	
	if(req.session.adid=="") res.send("No connection");
	 else{ 
			var sql = "select * from lesson,teacher where lesson.tid=teacher.tid";
		  
			  con.query(sql, function (err, result) {
				 res.send(result);
				
			  });
		 
	 }
})




//Get test's results for each student

app.get('/getmyRes', function (req, res) {
	
	if(req.session.stid=="") res.send("No connection");
	 else{ 
			var testid=req.query.testid;
			var sql = "select * from question,test,test_student where question.testid=test.testid and test.testid=test_student.testid and test_student.stid="+req.session.stid;
		  
			  con.query(sql, function (err, result) {
				 res.send(result);
				
			  });
		 
	 }
})

//Get questions for the test

app.get('/getQ', function (req, res) {
	
	if(req.session.stid=="") res.send("No connection");
	 else{ 
			var testid=req.query.testid;
			var sql = "select * from question where question.testid="+testid;
		  
			  con.query(sql, function (err, result) {
				 res.send(result);
				
			  });
		 
	 }
})



//Get my lessons

app.get('/getmyles', function (req, res) {
	
	if(req.session.tid=="") res.send("No connection");
	 else{ 
			var sql = "select * from lesson,teacher where lesson.tid=teacher.tid and teacher.tid="+req.session.tid;
		  
			  con.query(sql, function (err, result) {
				 res.send(result);
				
			  });
		 
	 }
})


//Get the answers

app.get('/getMyansw', function (req, res) {
	
	var qid=req.query.qid;
	if(req.session.tid=="") res.send("No connection");
	 else{ 
			var sql = "select * from answer,question where answer.qid=question.qid and answer.qid="+qid;
		  
			  con.query(sql, function (err, result) {
				 res.send(result);
				
			  });
		 
	 }
})


//Get student lesson list


app.get('/getstudlesson', function (req, res) {
	
	var lid=req.query.lessonid;
	if(req.session.adid=="") res.send("No connection");
	 else{ 
			var sql = "select * from lesson,lesson_student,student where lesson.lid=lesson_student.lid and lesson_student.stid=student.stid and lesson.lid="+lid;
		  
			  con.query(sql, function (err, result) {
				 res.send(result);
				
			  });
		 
	 }
})


//Get the student's units for each lesson to go to test

app.get('/getmyun', function (req, res) {
	
	var lid=req.query.lessonid;
	if(req.session.stid=="") res.send("No connection");
	 else{ 
			var sql = "select * from lesson,lesson_student,student,units where lesson.lid=lesson_student.lid and lesson_student.stid=student.stid and units.lid=lesson.lid and units.lid=lesson_student.lid and lesson.lid="+lid+" and student.stid="+req.session.stid;;
		  
			  con.query(sql, function (err, result) {
				 res.send(result);
				
			  });
		 
	 }
})



//Get the test of each unit for each student

app.get('/getTest', function (req, res) {
	
	var unitid=req.query.unid;
	if(req.session.stid=="") res.send("No connection");
	 else{ 
			var sql = "select * from lesson_student,test,student,units where lesson_student.stid=student.stid and test.unid=units.unid and test.unid="+unitid+" and lesson_student.lid=units.lid and student.stid="+req.session.stid;
		  
			  con.query(sql, function (err, result) {
				 res.send(result);
				
			  });
		 
	 }
})



//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////  TEST CREATION ////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


//get the test title for the students

app.get('/gettestfinal', function (req, res) {
	
	var testid=req.query.testid;
	if(req.session.stid=="") res.send("No connection");
	 else{ 
			var sql = "select * from test where  test.testid="+testid
		  
			  con.query(sql, function (err, result) {
				 res.send(result);
				
			  });
		 
	 }
})

//get the questions for the test


app.get('/getQuestions', function (req, res) {
	
	var testid=req.query.testid;
	if(req.session.stid=="") res.send("No connection");
	 else{ 
			var sql = "select * from question where question.testid="+testid
			 console.log(sql);
			  con.query(sql, function (err, result) {
				 res.send(result);
				
				 
				
			  });
		 
	 }
})


//get the answers for the test


app.get('/getAnswers', function (req, res) {
	
	
	var qid=req.query.qid;
	if(req.session.stid=="") res.send("No connection");
	 else{ 
			var sql = "select * from answer where answer.qid="+qid;
		  
			  con.query(sql, function (err, result) {
				 res.send(result);
				
			  });
		 
	 }
})





//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////





//Get the lessons and units for each student

app.get('/getstls', function (req, res) {
	
	
	if(req.session.stid=="") res.send("No connection");
	 else{ 
			var sql = "select * from lesson,student,lesson_student where lesson.lid=lesson_student.lid and lesson_student.stid=student.stid and student.stid="+req.session.stid;
		  
			  con.query(sql, function (err, result) {
				 res.send(result);
				 
				
			  });
		 
	 }
})






//log out admin

app.get('/logoutadmin', function (req, res) {
	 req.session.adid="";
	 var html=fs.readFileSync(__dirname +'/public/up.html');
		 html+=fs.readFileSync(__dirname +'/public/mainmenu.html');
		 html+=fs.readFileSync(__dirname +'/public/index.html');
		 html+=fs.readFileSync(__dirname +'/public/footer.html');
		
	 res.send(html);
	
	 
})





//log out teacher

app.get('/logoutteacher', function (req, res) {
	 req.session.tid="";
	 var html=fs.readFileSync(__dirname +'/public/up.html');
		 html+=fs.readFileSync(__dirname +'/public/mainmenu.html');
		 html+=fs.readFileSync(__dirname +'/public/index.html');
		 html+=fs.readFileSync(__dirname +'/public/footer.html');
		
	 res.send(html);
	
	 
})


//log out student

app.get('/logoutstudent', function (req, res) {
	 req.session.stid="";
	 var html=fs.readFileSync(__dirname +'/public/up.html');
		 html+=fs.readFileSync(__dirname +'/public/mainmenu.html');
		 html+=fs.readFileSync(__dirname +'/public/index.html');
		 html+=fs.readFileSync(__dirname +'/public/footer.html');
		
	 res.send(html);
	
	 
})





//delete Admin

app.get('/del', function (req, res) {
	
	var id=req.query.id;
	if(req.session.adid=="") res.send("No connection");
	 else{
			var sql = "delete from admin where adid="+id;
	
	  
		    con.query(sql, function (err, result) {
					if (err) res.send("2");
					else res.send("1");
		  });
	 }
	 
})


//delete lesson 

app.get('/dellesson', function (req, res) {
	
	var id=req.query.tid;
	if(req.session.adid=="") res.send("No connection");
	 else{
			var sql = "delete from lesson where tid="+id;
		
	  
		    con.query(sql, function (err, result) {
					if (err) res.send("2");
					else res.send("1");
		  });
	 }
	 
})


//Delete Student from lesson


app.get('/delstud', function (req, res) {
	
	var stid=req.query.stid;
	if(req.session.adid=="") res.send("No connection");
	 else{
			var sql = "delete from lesson_student where stid="+stid;
		
	  
		    con.query(sql, function (err, result) {
					if (err) res.send("2");
					else res.send("1");
		  });
	 }
	 
})



//Delete student from Admin

app.get('/delstudent', function (req, res) {
	
	var stid=req.query.studentid;
	if(req.session.adid=="") res.send("No connection");
	 else{
			var sql = "delete from student where stid="+stid;
		
	  
		    con.query(sql, function (err, result) {
					if (err) res.send("2");
					else res.send("1");
		  });
	 }
	 
})





//Delete Teacher from admin

app.get('/delteacher', function (req, res) {
	
	var tid=req.query.tid;
	if(req.session.adid=="") res.send("No connection");
	 else{
			var sql = "delete from teacher where tid="+tid;
			
	  
		    con.query(sql, function (err, result) {
					if (err) res.send("2");
					else res.send("1");
		  });
	 }
	 
})





//Get my list of units

app.get('/getmyunits', function (req, res) {
	
	var lid=req.query.lid;
	if(req.session.tid=="") res.send("No connection");
	 else{
			var sql = "select * from units,lesson where units.lid=lesson.lid and lesson.lid="+lid;
		
	  
		    con.query(sql, function (err, result) {
				 res.send(result);
			  }); 
	 }
	 
})


//Get the tests of the unit

app.get('/getmytest', function (req, res) {
	
	var unitid=req.query.unid;
	if(req.session.tid=="") res.send("No connection");
	 else{
			var sql = "select * from units,test where test.unid=units.unid and test.unid="+unitid;
		
	  
		    con.query(sql, function (err, result) {
				 res.send(result);
			  }); 
	 }
	 
})


//Get all Students

app.get('/getstud', function (req, res) {
	
	
	if(req.session.adid=="") res.send("No connection");
	 else{
			var sql = "select * from student";
		
	  
		    con.query(sql, function (err, result) {
				 res.send(result);
			  }); 
	 }
	 
})





//Get the question of the test

app.get('/getmytestquestion', function (req, res) {
	
	var testid=req.query.testid;
	if(req.session.tid=="") res.send("No connection");
	 else{
			var sql = "select * from question,test where test.testid=question.testid and test.testid="+testid;
		
	  
		    con.query(sql, function (err, result) {
				 res.send(result);
			  }); 
	 }
	 
})


//Get student data

app.get('/getstudentdata', function (req, res) {
	
	
	if(req.session.stid=="") res.send("No connection");
	 else{
			var sql = "select * from student where stid="+req.session.stid;
		
	  
		    con.query(sql, function (err, result) {
				res.send(result[0]);
			  }); 
	 }
	 
})





//Get Admin data to update the profile


app.get('/getadmindata', function (req, res) {
	
	 if(req.session.adid=="") res.send("No connection");
	 else{
	
			var sql = "select * from admin where adid="+req.session.adid;
				
				con.query(sql, function (err, result) {
				res.send(result[0]);
			
				});
	 
		}
})


//Get teacher data to create a lesson

app.get('/getteacher', function (req, res) {
	
	 if(req.session.adid=="") res.send("No connection");
	 else{
	
			var sql = "select * from teacher";
				
				con.query(sql, function (err, result) {
				res.send(result);
			
				});
	 
		}
})


//Get teacher data to update the profile

app.get('/getteacherdata', function (req, res) {
	
	 if(req.session.tid=="") res.send("No connection");
	 else{
	
			var sql = "select * from teacher where tid="+req.session.tid;
				
				con.query(sql, function (err, result) {
				res.send(result[0]);
			
				});
	 
		}
})





/// trexoume to server

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Listen to port http://%s:%s",,)
})