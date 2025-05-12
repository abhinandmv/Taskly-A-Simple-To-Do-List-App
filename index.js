import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
 user: "postgres",
 host: "localhost",
 database: "[YOUR DATABASE NAME]",
 password: "[YOUR PASSWORD]",
 port: 5432,
});
db.connect();

app.get("/", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM items");
    let items = [];
    results.rows.forEach((item) => {
      items.push({ id: item.id, title: item.title });
    });
    res.render("index.ejs", {
      listTitle: "Today",
      listItems: items,
    });
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).send("Something went wrong");
  }
});


app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  // items.push({ title: item });
  try{
    await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
    res.redirect("/");
  } catch (err) {
    console.error("Database query error:", err);
    res.status(500).send("Something went wrong");
  }
});

app.post("/edit", (req, res) => {
const updatedTitle = req.body.updatedItemTitle;
const itemId = req.body.updatedItemId;
  db.query("UPDATE items SET title = $1 WHERE id = $2", [updatedTitle, itemId])
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.error("Database query error:", err);
      res.status(500).send("Something went wrong");
    });
});

app.post("/delete", async (req, res) => {
  const itemId = req.body.deleteItemId;
  try{
    await db.query("DELETE FROM items WHERE id = $1",[itemId]);
    res.redirect("/");
  } catch(err){
    console.error("Database query error:", err);
    res.status(500).send("Something went wrong");
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
