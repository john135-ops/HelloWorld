//Just a demonstration for Seule
let app = new Seule('#app')

app
    .Find('button')
    .Click((e)=> {
    	e.Text("Welcome user X")
    	app.Find("img").Css({width: "150px"})
    })

//You may remove-it !

/* Your Js Code goes here ! */
