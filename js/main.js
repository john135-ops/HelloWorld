//Just a demonstration for Seule
let app = new Seule({
  el: '#app',
  style:'root',
  data:{
    message: 'Click Me!'
  },
  handler($app, $scope){
    $scope('button').Click(e=>{
      e
        .Text('Welcome user X').set()
      $scope('img')
        .Css('width').set('150px')
    })
  }
})



//You may remove-it !

/* Your Js Code goes here ! */
