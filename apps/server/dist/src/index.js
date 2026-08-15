"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const activityController_1 = __importDefault(require("./controller/activityController"));
const logController_1 = __importDefault(require("./controller/logController"));
const babyController_1 = __importDefault(require("./controller/babyController"));
dotenv_1.default.config();
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.post('/babies', babyController_1.default.createBaby);
app.get('/babies', babyController_1.default.getAllBabies);
app.post('/activities', activityController_1.default.createActivity);
app.get('/activities', activityController_1.default.getAllActivities);
app.post('/logs', logController_1.default.createLog);
app.get('/logs', logController_1.default.getAllLogs);
app.get('/logs/latest', logController_1.default.getLatestLogs);
app.get('/logs/today', logController_1.default.getTodayLogs);
app.patch('/logs/:id', logController_1.default.updateLog);
app.delete('/logs/:id', logController_1.default.deleteLog);
app.get('/', (_, res) => {
    res.send('Hello, this server is working fine!');
});
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
