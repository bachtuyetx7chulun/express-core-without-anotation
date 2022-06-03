"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const _app_1 = require("@app");
const http_1 = __importDefault(require("http"));
const index_1 = require("@config/index");
const PORT = index_1.config.get('port');
const server = http_1.default.createServer(_app_1.app);
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUEyQjtBQUMzQixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBRWYsK0JBQTBCO0FBQzFCLGdEQUF1QjtBQUN2Qix5Q0FBc0M7QUFFdEMsTUFBTSxJQUFJLEdBQUcsY0FBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUUvQixNQUFNLE1BQU0sR0FBRyxjQUFJLENBQUMsWUFBWSxDQUFDLFVBQUcsQ0FBQyxDQUFBO0FBRXJDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQ2xELENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnXG5kb3RlbnYuY29uZmlnKClcblxuaW1wb3J0IHsgYXBwIH0gZnJvbSAnQGFwcCdcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAY29uZmlnL2luZGV4J1xuXG5jb25zdCBQT1JUID0gY29uZmlnLmdldCgncG9ydCcpXG5cbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGFwcClcblxuc2VydmVyLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgcnVubmluZyBvbiBwb3J0ICR7UE9SVH1gKVxufSlcbiJdfQ==