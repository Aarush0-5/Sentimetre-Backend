import morgan from "morgan";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const log = path.join(__dirname, '../log');
if (!fs.existsSync(log)) {
    fs.mkdirSync(log);
}
const accessLogStream = fs.createWriteStream(path.join(log, 'logfiles.log'), { flags: 'a' });

const logger = morgan('combined', { stream: accessLogStream });

export default logger;


