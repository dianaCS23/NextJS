import { lusitana } from '@/app/ui/fonts';
import FormContact from '@/app/ui/invoices/register-form'; 

export default function Page() {
    return (
<main>
<h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Agregar usuario
      </h1>

      <FormContact />

</main>
      

    );
  }