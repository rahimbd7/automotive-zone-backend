//oR4aMimZawl6da8x

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xamqemm.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const usersCollection = client.db('automotiveDB').collection('users');
        const productsCollection = client.db('automotiveDB').collection('products');
        const cartsCollection = client.db('automotiveDB').collection('carts');
        const categoriesCollection = client.db('automotiveDB').collection('categories');

        // ### Users Related APIs

        app.post('/users/add', async (req, res) => {
            const data = req.body;
        })

      
        // ### Brand Related APIs

        app.post('/categories',async(req,res)=>{
            const data = req.body;
            const result = await categoriesCollection.insertOne(data);
            res.send(result);
        })

        app.get('/categories',async(req,res)=>{
            const result = await categoriesCollection.find().toArray();
            res.send(result);
        })

        app.get('/categories/:name',async(req,res)=>{
            const name = req.params.name;
            const query = { brand: name};
            const result = await productsCollection.find(query).toArray();
            res.send(result);
        })




        
        // ### Products Related APIs

        app.get('/products', async (req, res) => {
            const result = await productsCollection.find().toArray();
            res.send(result);
        })

        app.get('/products/details/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await productsCollection.findOne(query);
            res.send(result);
        })

        app.post('/products/add', async (req, res) => {
            const data = req.body;
            const result = await productsCollection.insertOne(data);
            res.send(result);
        })

        app.delete('/products/delete/:id', async (req, res) => {
            const id = req.params.id;
        })

        app.put('/products/update/:id', async (req, res) => {
            const id = req.params.id;
            const data = req.body;
            const filter = {_id: new ObjectId(id)};
            const options = {upsert: true}
            const updatedProduct = {
                $set:{
                    name: data.name,
                    price:data.price,
                    brand:data.brand,
                    image:data.image,
                    rating:data.rating,
                    description: data.description
                }
            }
            const result = await productsCollection.updateOne(filter,updatedProduct,options)
            res.send(result);
        })

        // ### Carts Related APIs

        app.get('/carts', async (req, res) => {
            res.send('all the carts')
        })

        app.post('/carts/add', async (req, res) => {
            const data = req.body;
            const result = await cartsCollection.insertOne(data);
            res.send(result);
        })

        app.delete('/carts/delete/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id)
        })

        

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);











app.get('/', async (req, res) => {
    res.send('Running backend by express...')
})

app.listen(port, () => {
    console.log(`running on port ${port}`)
})