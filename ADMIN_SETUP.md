# Apni Dukan E-commerce Admin System

A complete e-commerce admin system built with Next.js 15, TypeScript, MongoDB, and Cloudinary for image uploads.

## Features

- 🛍️ Product upload with image, name, price, and category
- 📷 Image upload to Cloudinary with automatic optimization
- 🗄️ MongoDB integration with Mongoose ORM
- 📱 Responsive design with Tailwind CSS
- ✅ Form validation with React Hook Form and Zod
- 🎨 Modern UI with shadcn/ui components
- 📊 Product listing with real-time updates
- 🔄 Success feedback and error handling

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **File Storage**: Cloudinary
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form + Zod
- **Notifications**: Sonner

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/apni-dukan
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/apni-dukan?retryWrites=true&w=majority

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### 2. MongoDB Setup

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Use the local connection string: `mongodb://localhost:27017/apni-dukan`

#### Option B: MongoDB Atlas (Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Replace the MONGODB_URI in your .env.local file

### 3. Cloudinary Setup

1. Go to [Cloudinary](https://cloudinary.com/)
2. Create a free account
3. Go to your dashboard
4. Copy your Cloud Name, API Key, and API Secret
5. Add them to your `.env.local` file

### 4. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

### 6. Access the Admin Panel

Navigate to [http://localhost:3000/admin](http://localhost:3000/admin) to access the admin panel.

## Project Structure

```
├── app/
│   ├── admin/
│   │   └── page.tsx              # Admin page
│   ├── api/
│   │   └── products/
│   │       └── route.ts          # Product API endpoints
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── admin/
│   │   ├── product-upload-form.tsx  # Upload form component
│   │   └── products-list.tsx        # Products listing component
│   ├── ui/                       # shadcn/ui components
│   └── navbar.tsx               # Navigation bar
├── lib/
│   ├── cloudinary.ts            # Cloudinary configuration
│   ├── mongodb.ts               # MongoDB connection
│   └── utils.ts
├── models/
│   └── Product.ts               # Mongoose product schema
└── .env.example                 # Environment variables template
```

## API Endpoints

### POST /api/products
Upload a new product with image.

**Request**: FormData with:
- `name`: string (required)
- `price`: string (required, positive number)
- `category`: string (required)
- `description`: string (optional)
- `image`: File (required, image file)

**Response**:
```json
{
  "success": true,
  "message": "Product created successfully",
  "product": {
    "id": "...",
    "name": "Product Name",
    "price": 99.99,
    "category": "Electronics",
    "description": "Product description",
    "imageUrl": "https://res.cloudinary.com/...",
    "inStock": true,
    "createdAt": "2023-..."
  }
}
```

### GET /api/products
Fetch all products.

**Response**:
```json
{
  "success": true,
  "products": [...]
}
```

## Product Schema

```typescript
interface IProduct {
  _id?: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  imagePublicId: string;
  description?: string;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

## Available Categories

- Electronics
- Clothing
- Home & Garden
- Sports & Outdoors
- Books
- Toys & Games
- Health & Beauty
- Automotive
- Food & Beverages
- Other

## Features Overview

### Admin Upload Form
- **Form Validation**: Real-time validation with error messages
- **Image Preview**: Preview selected image before upload
- **Category Selection**: Dropdown with predefined categories
- **Price Validation**: Ensures positive numbers only
- **Success Feedback**: Shows uploaded product details on success

### Product Management
- **Image Optimization**: Automatic resizing and format optimization via Cloudinary
- **Database Storage**: Efficient storage with MongoDB and Mongoose
- **Real-time Updates**: Instant feedback and product listing updates
- **Error Handling**: Comprehensive error handling with user-friendly messages

### UI/UX Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Dark Mode Support**: Built-in dark mode compatibility
- **Loading States**: Loading indicators during upload and fetch operations
- **Toast Notifications**: Success and error notifications
- **Form Reset**: Easy form clearing and reset functionality

## Customization

### Adding New Categories
Edit the `categories` array in `components/admin/product-upload-form.tsx`:

```typescript
const categories = [
  'Electronics',
  'Clothing',
  // Add your new categories here
  'Your New Category',
];
```

### Modifying Product Schema
Update the schema in `models/Product.ts` and add corresponding form fields.

### Styling
The project uses Tailwind CSS. Modify the styling in component files or update the Tailwind configuration.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production
Make sure to set all environment variables in your production environment:
- `MONGODB_URI`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Verify your MongoDB URI
   - Check if MongoDB service is running (for local setup)
   - Ensure network access is allowed (for Atlas)

2. **Cloudinary Upload Fails**
   - Verify your Cloudinary credentials
   - Check image file size (max 10MB)
   - Ensure image format is supported (PNG, JPG, JPEG)

3. **Form Validation Errors**
   - All required fields must be filled
   - Price must be a positive number
   - Image must be selected

4. **Build Errors**
   - Ensure all environment variables are set
   - Check for TypeScript errors
   - Verify all dependencies are installed

## License

This project is licensed under the MIT License.

## Support

For support, please open an issue in the GitHub repository or contact the development team.
