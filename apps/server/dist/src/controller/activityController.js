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
const activityModel_1 = __importDefault(require("../model/activityModel"));
const activityController = {
    createActivity: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name, icon } = req.body;
            if (!name || !icon) {
                return res.status(400).json({ error: 'Name and icon are required' });
            }
            const activity = yield activityModel_1.default.create({ name, icon });
            res.status(201).json({ activity });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getAllActivities: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const activities = yield activityModel_1.default.getAll();
            res.status(200).json({ activities });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
};
exports.default = activityController;
