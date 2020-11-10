const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/',function(req,res){
    res.render('home');
});

app.get('/dbms',function(req,res){
    res.render('dbms');
})
app.get('/algo',function(req,res){
    res.render('algo');
})
app.get('/cn',function(req,res){
    res.render('cn');
})
app.get('/cn.ejs',function(req,res){
    res.send("dasfs");
})
app.get('/ds',function(req,res){
    res.render('ds');
})
app.get('/misc',function(req,res){
    res.render('misc');
})
app.get('/os',function(req,res){
    res.render('os');
})

app.post('/dbms',function(req,res){
    // let ans=0;
    // //console.log(req.body.q1);
    // let check="q";
    // let arr=["C","C","B"];
    // for(let i=1;i<=3;i++){
    //     check = check+i;
    //     console.log(check);
    //     console.log(req.body.check);
    //     if(arr[i-1] == req.body.check){
    //         ans++;
    //     }
    //     check="q";
    // }
    // console.log(ans);
    let ans=0;
    let arr=["C","C","B"];
    if(arr[0] == req.body.q1){
        ans++;
    }
    if(arr[1] == req.body.q2){
        ans++;
    }
    if(arr[2] == req.body.q3){
        ans++;
    }
    console.log(ans);
    res.render('ans',{ans  : ans, subject : 'dbms',userans1 : req.body.q1 , userans2 : req.body.q2,userans3 : req.body.q3});
})

app.post('/os',function(req,res){
    let ans=0;
    let arr=["A","C","B"];
    if(arr[0] == req.body.q1){
        ans++;
    }
    if(arr[1] == req.body.q2){
        ans++;
    }
    if(arr[2] == req.body.q3){
        ans++;
    }
    console.log(ans);
    res.render('ans',{ans  : ans, subject : 'os',userans1 : req.body.q1 , userans2 : req.body.q2,userans3 : req.body.q3});
})
app.post('/algo',function(req,res){
    let ans=0;
    let arr=["B","C","D"];
    if(arr[0] == req.body.q1){
        ans++;
    }
    if(arr[1] == req.body.q2){
        ans++;
    }
    if(arr[2] == req.body.q3){
        ans++;
    }
    console.log(ans);
    res.render('ans',{ans  : ans, subject : 'algo',userans1 : req.body.q1 , userans2 : req.body.q2,userans3 : req.body.q3});
})

app.post('/ds',function(req,res){
    let ans=0;
    let arr=["B","D","D"];
    if(arr[0] == req.body.q1){
        ans++;
    }
    if(arr[1] == req.body.q2){
        ans++;
    }
    if(arr[2] == req.body.q3){
        ans++;
    }
    console.log(ans);
    res.render('ans',{ans  : ans, subject : 'ds',userans1 : req.body.q1 , userans2 : req.body.q2,userans3 : req.body.q3});
})

app.post('/cn',function(req,res){
    let ans=0;
    let arr=["A","B","D"];
    if(arr[0] == req.body.q1){
        ans++;
    }
    if(arr[1] == req.body.q2){
        ans++;
    }
    if(arr[2] == req.body.q3){
        ans++;
    }
    console.log(ans);
    res.render('ans',{ans  : ans, subject : 'cn',userans1 : req.body.q1 , userans2 : req.body.q2,userans3 : req.body.q3});
})

app.post('/misc',function(req,res){
    let ans=0;
    let arr=["B","C","D"];
    if(arr[0] == req.body.q1){
        ans++;
    }
    if(arr[1] == req.body.q2){
        ans++;
    }
    if(arr[2] == req.body.q3){
        ans++;
    }
    console.log(ans);
    res.render('ans',{ans  : ans , subject : 'misc',userans1 : req.body.q1 , userans2 : req.body.q2,userans3 : req.body.q3});
})

// app.post('/cn/result',function(req,res){
//     res.render('results/cnRes',{ userans1 : req.body.q1 , userans2 : req.body.q2,userans3 : req.body.q3 , score : req.body.score});
// })
app.post('/:subject/result',function(req,res){
    const abc= req.params.subject + 'Res';
    const subjUrl = 'results/'+abc;
    res.render(subjUrl,{ userans1 : req.body.q1 , userans2 : req.body.q2,userans3 : req.body.q3 , score : req.body.score});
})
app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on port 3000");
});


