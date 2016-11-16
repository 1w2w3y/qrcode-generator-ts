# qrcode-generator-ts
Typescript QR code generator based on https://github.com/kazuhikoarase/qrcode-generator

Thank kazuhiko arase for his awesome work!

This repo copied from https://github.com/kazuhikoarase/qrcode-generator/tree/master/ts.
The code is packaged as a npm package include the *.ts files and *.d.ts files. 
This can ease the development in typescript projects like angular 2.

## Install npm package
npm install qrcode-generator-ts --save

## Usage
import { QRCode, ErrorCorrectLevel, QRNumber, QRAlphaNum, QR8BitByte, QRKanji  } from 'qrcode-generator-ts/js';
