import request from '../config'

export default {
	getHotList() {
		return request.get({
		    url: '/api/topics/hot.json', 
		});
		
	}
}