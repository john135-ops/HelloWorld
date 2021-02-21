//Just a demonstration for Seule
let app = new Seule('#app')

app
    .find('button')
    .click((e)=> {
    	e.text("Welcome user X")
    	app.find("img").css({width: "150px"})
    })

//You may remove-it !

/* Your Js Code goes here ! */
