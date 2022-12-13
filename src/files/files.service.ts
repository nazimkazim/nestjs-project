import { Injectable } from '@nestjs/common';
import path from 'path';
import * as uuid from 'uuid';
import { existsSync, writeFileSync } from 'node:fs';
import { mkdirSync } from 'fs';


@Injectable()
export class FilesService {
    async createFile(file: string):Promise<string> {
        try {
            const fileName = uuid.v4() + '.jpg';
            const filePath = path.resolve(__dirname, '..', 'static');
            if (!existsSync(filePath)) {
                mkdirSync(filePath, { recursive: true });
            } else {
                writeFileSync(path.join(filePath, fileName), file, 'base64');
                return fileName;
            }
        } catch (error) {
            throw new Error("Error creating file");
            
        }
    }
}
