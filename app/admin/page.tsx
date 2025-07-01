import ProductUploadForm from '@/components/admin/product-upload-form';
import ProductsList from '@/components/admin/products-list';
import { Toaster } from 'sonner';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <ProductUploadForm />
        <div className="border-t pt-8">
          <ProductsList />
        </div>
      </div>
      <Toaster 
        position="top-right"
        richColors
        expand={false}
        duration={4000}
      />
    </div>
  );
}
