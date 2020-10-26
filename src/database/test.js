const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');
Database.then(async db => {
    await saveOrphanage(db, {
        id: 1,
        lat: "-27.222633",
        lng: "-49.6655874",
        name: "Lar dos manos",
        about: "e eu sei lá pô, um lugar de crianças aí e bla bla bla.",
        whatsapp: "(11) 4002-8922",
        images: [
            "https://images.unsplash.com/photo-1602571833995-03aa80922957?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1602571833995-03aa80922957?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),

        instructions: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa eu to malucooooooooooooooooooo",

        opening_hours: "Horário de visitas é só chegar, 24hrs",
        open_on_weekends: "1"
    })
    

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
    console.log( orphanage)

    // console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))
})