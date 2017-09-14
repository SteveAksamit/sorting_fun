describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect( split([]) ).toEqual( [] );
  });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect( split([5]) ).toEqual( [5] );
  });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect( split([1,2]) ).toEqual( [[1],[2]] );
  });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect( split([4,1,2,7,6,5,3]) ).toEqual( [[4,1,2], [7,6,5,3]] );
  });
});


describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect( split([4,1,2,8,7,6,5,3]) ).toEqual( [[4,1,2,8], [7,6,5,3]] );
  });
});

describe('Merge func', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect( merge([3,4],[1,2]) ).toEqual( [1,2,3,4] );
  });
});

describe('Merge func', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect( merge([2],[1]) ).toEqual( [1,2] );
  });
});



describe('Merge func', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect( merge([1,4,5,7], [2,3,6,8]) ).toEqual( [1,2,3,4,5,6,7,8] );
  });
});

// describe('Merge Sort', function(){
//   it('is able to merge two sorted arrays into one sorted array', function(){
//     // test the merging algorithm
//     expect( mergeSort([2,1]) ).toEqual( [1,2] );
//   });
// });

// describe('Merge Sort', function(){
//   it('is able to merge two sorted arrays into one sorted array', function(){
//     // test the merging algorithm
//     expect( mergeSort([4,1,2,7,6,5,3]) ).toEqual( [1,2,3,4,5,6,7] );

//   });
// });

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect( mergeSort([4,1,2,8,7,6,5,3]) ).toEqual( [1,2,3,4,5,6,7,8] );

  });
});

