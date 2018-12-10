
if(process.env.NODE_ENV ==='production'){
    module.exports={
        mongoURI:'mongodb://pankaj:pankaj123@ds053176.mlab.com:53176/vidjot-prod'
    }
}else{
    module.exports={
        mongoURI:'mongodb://localhost/vidjot-dev'
    }
}