// src/pdf/dto/pdf-item.dto.ts

import { IsString, IsNumber, IsDateString, IsArray } from 'class-validator';

export enum InvoiceStatus {
  WaitingForApproval = 1,
  InProgress = 2,
  Denied = 3
}

export class InvoiceDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsDateString()
  date: Date;

  @IsString()
  supplier: string;

  @IsNumber()
  status: InvoiceStatus;

  @IsNumber()
  cost: number;

  @IsArray()
  @IsString({ each: true })
  pages: string[];

  @IsString()
  url: string;
}
