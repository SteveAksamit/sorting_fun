describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
  });
});

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([2,1]) ).toEqual( [1,2] );
  });
});

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([4,1,2,8,7,6,5,3]) ).toEqual( [1,2,3,4,5,6,7,8] );
  });
});
