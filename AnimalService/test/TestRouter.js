var app = require('./app');
var reqTest = require('supertest');

describe('todos',function(){
	it('should get all todos',function(done){
		request(app).get('/lions').set('Accept','application/json').
		expect('Content-Type','/json/').expect(200).done(
			function(err,resp){
				expect(resp.id).toBeDefined();
				done();
		});
	});
});