import axios from 'axios';

// 代理测试
axios.get('/api/executive/list').then((res) => {
	console.log(res.data);
});