// Test script to verify API endpoints
const testAPI = async () => {
  try {
    console.log('🔄 Testing API endpoints...');
    
    // Test GET /api/products
    const response = await fetch('http://localhost:3000/api/products');
    const data = await response.json();
    
    if (data.success) {
      console.log('✅ GET /api/products working!');
      console.log(`📊 Found ${data.products.length} products`);
      
      data.products.forEach((product, index) => {
        console.log(`   ${index + 1}. ${product.name} - ₹${product.price} (${product.category})`);
      });
    } else {
      console.log('❌ API test failed:', data.error);
    }
    
  } catch (error) {
    console.error('❌ API test error:', error.message);
  }
};

// Run the test after a short delay to ensure server is ready
setTimeout(testAPI, 3000);
