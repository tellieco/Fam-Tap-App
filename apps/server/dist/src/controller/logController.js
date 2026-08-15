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
const logModel_1 = __importDefault(require("../model/logModel"));
const logController = {
    createLog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { babyId, activityId } = req.body;
            if (!babyId || !activityId) {
                return res
                    .status(400)
                    .json({ error: 'Babyid and Activityid are required' });
            }
            const log = yield logModel_1.default.create({ babyId, activityId });
            res.status(201).json({ log });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getAllLogs: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const logs = yield logModel_1.default.getAll();
            if (!logs) {
                return res.status(404).json({ error: 'Logs not found' });
            }
            res.status(200).json({ logs });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getLatestLogs: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const logs = yield logModel_1.default.getLatest();
            if (!logs) {
                return res.status(404).json({ error: 'Log not found' });
            }
            res.status(200).json({ logs });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getTodayLogs: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const logs = yield logModel_1.default.getToday();
            if (!logs) {
                return res.status(404).json({ error: 'Log not found' });
            }
            res.status(200).json({ logs });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    updateLog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const logId = Number(req.params.id);
            const activityId = req.body.activityId;
            if (!logId || !activityId) {
                return res
                    .status(400)
                    .json({ error: 'Logid and Activityid are required.' });
            }
            const log = yield logModel_1.default.update({ logId, activityId });
            res.status(200).json({ log });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error.' });
        }
    }),
    deleteLog: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const logId = Number(req.params.id);
            if (!logId) {
                return res.status(400).json({ error: 'Logid is required.' });
            }
            const log = yield logModel_1.default.delete({ logId });
            res.status(200).json({ log });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal server error.' });
        }
    }),
};
exports.default = logController;
