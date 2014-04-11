describe('Output Tests', function(){
	it('should return an object', function(){
		calcImageDimensions(1024,768,640).should.be.type("object");
	})

	it('return object should have width and height values', function(){
		calcImageDimensions(1024,768,640).should.have.property("width");
		calcImageDimensions(4000,768,1023).should.have.property("height");
	})
})

describe('Input Tests', function(){
	it('all 2 parameters src image values should be given', function(){
		calcImageDimensions.bind(null, null,768,640).should.throwError()
		calcImageDimensions.bind(null, null,null,640).should.throwError()
		calcImageDimensions.bind(null, 300,null,640).should.throwError()
		calcImageDimensions.bind(null, 300,322,640).should.not.throwError()
	})

	it('newHeight or newWidth should be given', function(){
		calcImageDimensions.bind(null, 2323,768,640).should.not.throwError()
		calcImageDimensions.bind(null, 344,323,null,300).should.not.throwError()
		calcImageDimensions.bind(null, 300,234).should.throwError()
	})
})