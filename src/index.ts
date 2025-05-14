import app from "./app";

const PORT = process.env.PORT||3000
app.get ('/',(req,res) => {
    res.send('Servidor Express funcionando!');
});

app.listen(PORT,() => {
    console.log ('Servidor rodando na pasta {PORT}');
})