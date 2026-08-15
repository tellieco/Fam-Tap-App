"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../../prisma/db"));
const logModel = {
    create: (_a) => __awaiter(void 0, [_a], void 0, function* ({ babyId, activityId, }) {
        const log = yield db_1.default.log.create({ data: { babyId, activityId } });
        console.log(log);
        return log;
    }),
    getAll: () => __awaiter(void 0, void 0, void 0, function* () {
        const logs = yield db_1.default.log.findMany();
        console.log(logs);
        return logs;
    }),
    getLatest: () => __awaiter(void 0, void 0, void 0, function* () {
        const latestLog = yield db_1.default.log.findFirst({
            orderBy: { timeStamp: 'desc' },
        });
        console.log(latestLog);
        return latestLog;
    }),
    getToday: () => __awaiter(void 0, void 0, void 0, function* () {
        const startDate = new Date();
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date();
        endDate.setHours(23, 59, 59, 999);
        const todayLog = yield db_1.default.log.findMany({
            where: { timeStamp: { gte: startDate, lte: endDate } },
            orderBy: { timeStamp: 'asc' },
        });
        console.log(todayLog);
        return todayLog;
    }),
    update: (_a) => __awaiter(void 0, [_a], void 0, function* ({ logId, activityId, }) {
        const updatedLog = yield db_1.default.log.update({
            where: { id: logId },
            data: { activityId: activityId },
        });
        console.log(updatedLog);
        return updatedLog;
    }),
    delete: (_a) => __awaiter(void 0, [_a], void 0, function* ({ logId }) {
        const deletedLog = yield db_1.default.log.delete({
            where: { id: logId },
        });
        console.log(deletedLog);
        return deletedLog;
    }),
};
exports.default = logModel;
