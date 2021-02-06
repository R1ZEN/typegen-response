import fs from 'fs';
import path from 'path';
import readline from 'readline';
import axios from 'axios';
import { json2ts } from 'json-ts';
import { isUrl } from './is-url';
import {toPascalCase} from "./to-pascal-case";

const REQUESTS_PATH = process.env.TYPEGEN_DIR || '';
const requestPattern = (fileRequest: string) => `// @request ${fileRequest}`;
const headersPattern = (header: string) => `// @header ${header}`;
const lockPattern = () => '// @lock';

(async function main () {
  const files = fs.readdirSync(REQUESTS_PATH).filter((f) => /\.ts$/.test(f));

  for (const file of files) {
    const filePath = path.join(REQUESTS_PATH, file);
    const rl = readline.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity
    });

    let fileRequest = '';
    let fileLock = false;
    const fileHeaders = [];

    for await (const line of rl) {
      if (line.indexOf('//') === -1) {
        rl.close();

        break;
      }

      if (line.includes('@request')) {
        fileRequest = line.replace('//', '').replace('@request', '').trim();
        fileRequest = isUrl(fileRequest) ? fileRequest : '';
      }

      if (line.includes('@lock')) {
        fileLock = true;
      }

      if (line.includes('@header')) {
        fileHeaders.push(line.replace('//', '').replace('@header', '').trim())
      }
    }

    if (!fileRequest || fileLock) {
      continue;
    }

    const headers = fileHeaders.reduce((acc, row) => {
      const [key, value] = row.split(':');
      // @ts-ignore
      acc[key] = value;

      return acc;
    }, {});

    try {
      const { data } = await axios.get(fileRequest, { headers });

      const jsonInterfaces = json2ts(JSON.stringify(data), {
        rootName: toPascalCase(`${file.replace('.ts', '')}-Response`)
      });
      const writeFileStream = fs.createWriteStream(filePath);
      writeFileStream.write(`${requestPattern(fileRequest)}\n`, 'utf8');
      fileHeaders.map((header) => {
        writeFileStream.write(`${headersPattern(header)}\n`, 'utf8');
      });
      writeFileStream.write(`${lockPattern()}\n`, 'utf8');
      writeFileStream.write('\n', 'utf8');
      writeFileStream.write(jsonInterfaces, 'utf8');
    } catch (e) {
     console.log(e);
    }
  }
})()

