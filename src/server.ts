import app from "./app";

function normalizaPort(val: any) {
  const port = parseInt(val, 10);

  if (isNaN(port)) return val;

  if (port >= 0) return port;

  return false;
}

const port = normalizaPort(process.env.PORT ?? "3333");

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
