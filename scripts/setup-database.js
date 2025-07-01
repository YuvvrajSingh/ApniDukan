import dbConnect from '../lib/mongodb';
import Product from '../models/Product';

async function setupDatabase() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await dbConnect();
    console.log('✅ Connected to MongoDB successfully!');

    console.log('🔄 Setting up Product collection...');
    
    // This will create the collection if it doesn't exist
    await Product.init();
    console.log('✅ Product collection initialized!');

    // Create some sample products for testing (optional)
    const existingProducts = await Product.countDocuments();
    
    if (existingProducts === 0) {
      console.log('🔄 Creating sample products...');
      
      const sampleProducts = [
        {
          name: 'Sample T-Shirt',
          price: 599,
          category: 'Clothing',
          description: 'A comfortable cotton t-shirt',
          imageUrl: 'https://via.placeholder.com/400x400?text=Sample+T-Shirt',
          imagePublicId: 'sample-tshirt',
          inStock: true,
        },
        {
          name: 'Sample Smartphone',
          price: 15999,
          category: 'Electronics',
          description: 'A modern smartphone with great features',
          imageUrl: 'https://via.placeholder.com/400x400?text=Sample+Phone',
          imagePublicId: 'sample-phone',
          inStock: true,
        },
      ];

      await Product.insertMany(sampleProducts);
      console.log('✅ Sample products created!');
    } else {
      console.log(`ℹ️  Database already has ${existingProducts} products`);
    }

    console.log('🎉 Database setup completed successfully!');
    console.log('📊 Database Statistics:');
    console.log(`   Products: ${await Product.countDocuments()}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Database setup failed:', error);
    process.exit(1);
  }
}

setupDatabase();
