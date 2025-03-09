// src/pdf/pdf.controller.ts

import { Controller, Get, NotFoundException, Param, Res } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceDto } from './invoice.dto';
import * as fs from 'fs';
import * as path from 'path';
import { Response } from 'express';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  getAllInvoices(): InvoiceDto[] {
    return this.invoiceService.getAllInvoices();
  }

  @Get(':id')
  getInvoiceItem(@Param('id') id: number): InvoiceDto {
    let invoiceDto = this.invoiceService.getInvoiceById(id);
    if (!invoiceDto) {
        throw new NotFoundException(`Invoice with id ${id} not found.`)
    }
    return invoiceDto;
  }
}
