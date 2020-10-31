const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');
Database.then(async(db) => {
    // inserir dados na tabela
    await saveOrphanage(db,{
        lat:"-27.219346",
        lng:"-49.6554425",
        name:"Lar dos meninos",
        about:"Presta assistencia a crianças de 6 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp:"092323123",
        images:[
            "https://images.unsplash.com/photo-1594925782033-0238ef32fca0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1597552816350-edd306e5c06f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),//.toString e uma funcionalidade que esta sendo aplicada no areit []
        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horários de visita Das 18h até 8h",
        open_on_weekends:"1"
    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")  
    console.log(selectedOrphanages)   
   
   //consultar apenas um orphanato pelo id

   const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"')
   console.log( orphanage)
   //remover dados da tabelar

   //console.log(await db.run("DELETE FROM orphanages WHERE id = '1'"))
   //console.log(await db.run("DELETE FROM orphanages WHERE id = '2'"))
})