const express = require('express')
const app = express()
const cors=require('cors');
const connectToMongo=require('./db.js');
const path=require('path');
connectToMongo();
app.use(cors());
app.use(express.json());
app.use('/api',require('./Routes/fetchData.js'));
app.use('/api',require('./Routes/Login.js'));
app.use('/api',require('./Routes/Register.js'));
app.use('/api',require('./Routes/FoodOrders.js'));
app.use('/api',require('./Routes/FoodFetch.js'));

app.use(express.static(path.join(__dirname,'./Client/build')));

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./Client/build/index.html'));
})
app.listen(process.env.PORT, () => {
})