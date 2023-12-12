import { lusitana } from '@/app/ui/fonts';
import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import FormContact from '@/app/ui/invoices/contact-form';


export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
     <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
       Contactanos
      </h1>
      <FormContact />
    </main>
  );
}