const { MongoClient } = require('mongodb');

async function setupDatabase() {
  const MONGODB_URI = 'mongodb+srv://yuvvrajsinghhrathore:D74rajpcdARqiuTJ@cluster0.owsctzu.mongodb.net/apni-dukan?retryWrites=true&w=majority';
  
  let client;
  
  try {
    console.log('🔄 Connecting to MongoDB...');
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    console.log('✅ Connected to MongoDB successfully!');

    const db = client.db('apni-dukan');
    
    // Create products collection with validation
    console.log('🔄 Setting up products collection...');
    
    try {
      await db.createCollection('products', {
        validator: {
          $jsonSchema: {
            bsonType: 'object',
            required: ['name', 'price', 'category', 'imageUrl', 'imagePublicId'],
            properties: {
              name: {
                bsonType: 'string',
                maxLength: 100,
                description: 'Product name is required and must be a string'
              },
              price: {
                bsonType: 'number',
                minimum: 0,
                description: 'Price must be a positive number'
              },
              category: {
                bsonType: 'string',
                description: 'Category is required'
              },
              imageUrl: {
                bsonType: 'string',
                description: 'Image URL is required'
              },
              imagePublicId: {
                bsonType: 'string',
                description: 'Image public ID is required'
              },
              description: {
                bsonType: 'string',
                maxLength: 500,
                description: 'Description must be a string'
              },
              inStock: {
                bsonType: 'bool',
                description: 'In stock status'
              }
            }
          }
        }
      });
      console.log('✅ Products collection created with validation!');
    } catch (error) {
      if (error.code === 48) {
        console.log('ℹ️  Products collection already exists');
      } else {
        throw error;
      }
    }

    // Create indexes for better performance
    console.log('🔄 Creating indexes...');
    const productsCollection = db.collection('products');
    
    await productsCollection.createIndex({ category: 1 });
    await productsCollection.createIndex({ name: 'text', description: 'text' });
    await productsCollection.createIndex({ createdAt: -1 });
    console.log('✅ Indexes created successfully!');

    // Check existing products
    const existingProducts = await productsCollection.countDocuments();
    console.log(`ℹ️  Current products in database: ${existingProducts}`);

    if (existingProducts === 0) {
      console.log('🔄 Creating sample products...');
      
      const sampleProducts = [
        {
          name: 'Cotton T-Shirt',
          price: 599,
          category: 'Clothing',
          description: 'Comfortable 100% cotton t-shirt available in multiple colors',
          imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
          imagePublicId: 'sample-tshirt',
          inStock: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Wireless Headphones',
          price: 2999,
          category: 'Electronics',
          description: 'High-quality wireless headphones with noise cancellation',
          imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
          imagePublicId: 'sample-headphones',
          inStock: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Coffee Mug',
          price: 299,
          category: 'Home & Garden',
          description: 'Ceramic coffee mug perfect for your morning brew',
          imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&h=400&fit=crop',
          imagePublicId: 'sample-mug',
          inStock: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];

      const result = await productsCollection.insertMany(sampleProducts);
      console.log(`✅ ${result.insertedCount} sample products created!`);
    }

    console.log('🎉 Database setup completed successfully!');
    console.log('📊 Final Database Statistics:');
    console.log(`   Database: apni-dukan`);
    console.log(`   Products: ${await productsCollection.countDocuments()}`);
    
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
      console.log('🔌 Database connection closed');
    }
    process.exit(0);
  }
}

setupDatabase();
