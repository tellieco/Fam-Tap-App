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
const babyModel_1 = __importDefault(require("../model/babyModel"));
const babyController = {
    createBaby: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { name } = req.body;
            if (!name) {
                return res.status(400).json({ error: 'Name is required' });
            }
            const baby = yield babyModel_1.default.create({ name });
            res.status(201).json({ baby });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
    getAllBabies: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const babies = yield babyModel_1.default.getAll();
            res.status(200).json({ babies });
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }),
};
exports.default = babyController;
