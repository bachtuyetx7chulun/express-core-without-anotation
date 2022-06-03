"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const example_controller_1 = require("./example.controller");
const router = express_1.default.Router();
exports.router = router;
router.get('/', example_controller_1.example);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2V4YW1wbGVzL2V4YW1wbGUucm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBQTZCO0FBQzdCLDZEQUE4QztBQUU5QyxNQUFNLE1BQU0sR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBSXRCLHdCQUFNO0FBRmYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsNEJBQU8sQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCB7IGV4YW1wbGUgfSBmcm9tICcuL2V4YW1wbGUuY29udHJvbGxlcidcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuXG5yb3V0ZXIuZ2V0KCcvJywgZXhhbXBsZSlcblxuZXhwb3J0IHsgcm91dGVyIH1cbiJdfQ==