import { Injectable } from '@nestjs/common';
import { InvoiceDto } from './invoice.dto';

@Injectable()
export class InvoiceService {
  private readonly invoiceItems: InvoiceDto[] = [
    {
      id: 1,
      name: 'קבלה חודשית',
      date: new Date('2025-01-01'),
      supplier: 'יוסי',
      status: 2,
      cost: 10000,
      pages:  ['assets/pdfs/invoice.pdf'],
      url: 'assets/pdfs/invoice.pdf',
    },
    {
      id: 2,
      name: 'אוכל',
      date: new Date('2025-02-28'),
      supplier: 'דנית',
      status: 1,
      cost: 400,
      pages:  ['assets/pdfs/invoice.pdf'],
      url: 'assets/pdfs/invoice.pdf',
    },
    {
      id: 3,
      name: 'יום צילום',
      date: new Date('2025-02-09'),
      supplier: 'רעות',
      status: 3,
      cost: 500,
      pages:  ['assets/pdfs/invoice.pdf'],
      url: 'assets/pdfs/invoice.pdf',
    },
    {
      id: 4,
      name: 'יום צילום',
      date: new Date('2025-03-08'),
      supplier: 'אביב',
      status: 1,
      cost: 1000,
      pages:  ['assets/pdfs/invoice.pdf'],
      url: 'assets/pdfs/invoice.pdf',
    },
  ];

  getAllInvoices(): InvoiceDto[] {
    return this.invoiceItems;
  }

  getInvoiceById(id: number): InvoiceDto | undefined {
    return this.invoiceItems.find(invoice => invoice.id === id);
  }
}
