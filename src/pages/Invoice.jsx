import { useParams } from 'react-router-dom';

import { getInvoice } from '../assets/invoices'

const InvoicePage = () => {
  const { slug } = useParams();

  const invoice = getInvoice(slug);

  return(
    <div>
      <h1>Invoice Page #{slug}</h1>
      <pre>
        {JSON.stringify(invoice, null, 2)}
      </pre>
    </div>
  )
}

export default InvoicePage
