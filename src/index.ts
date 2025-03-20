import express from 'express' //import express vào dự án
const app = express() //dùng express tạo 1 server
const PORT = 3000 //server sẽ chạy trên cổng port 3000
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log('Server BE đang chạy trên PORT: ' + PORT)
})
//chao
//asd/
//cac
//as
