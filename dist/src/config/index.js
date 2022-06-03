"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const convict_1 = __importDefault(require("convict"));
const config = (0, convict_1.default)({
    env: {
        format: ['production', 'development', 'test'],
        default: 'development',
        env: 'NODE_ENV',
    },
    port: {
        format: 'port',
        default: 3000,
        env: 'PORT',
    },
});
exports.config = config;
// Perform validation
config.validate({ allowed: 'strict' });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uZmlnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUE2QjtBQUU3QixNQUFNLE1BQU0sR0FBRyxJQUFBLGlCQUFPLEVBQUM7SUFDckIsR0FBRyxFQUFFO1FBQ0gsTUFBTSxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUM7UUFDN0MsT0FBTyxFQUFFLGFBQWE7UUFDdEIsR0FBRyxFQUFFLFVBQVU7S0FDaEI7SUFDRCxJQUFJLEVBQUU7UUFDSixNQUFNLEVBQUUsTUFBTTtRQUNkLE9BQU8sRUFBRSxJQUFJO1FBQ2IsR0FBRyxFQUFFLE1BQU07S0FDWjtDQUNGLENBQUMsQ0FBQTtBQUtPLHdCQUFNO0FBSGYscUJBQXFCO0FBQ3JCLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb252aWN0IGZyb20gJ2NvbnZpY3QnXG5cbmNvbnN0IGNvbmZpZyA9IGNvbnZpY3Qoe1xuICBlbnY6IHtcbiAgICBmb3JtYXQ6IFsncHJvZHVjdGlvbicsICdkZXZlbG9wbWVudCcsICd0ZXN0J10sXG4gICAgZGVmYXVsdDogJ2RldmVsb3BtZW50JyxcbiAgICBlbnY6ICdOT0RFX0VOVicsXG4gIH0sXG4gIHBvcnQ6IHtcbiAgICBmb3JtYXQ6ICdwb3J0JyxcbiAgICBkZWZhdWx0OiAzMDAwLFxuICAgIGVudjogJ1BPUlQnLFxuICB9LFxufSlcblxuLy8gUGVyZm9ybSB2YWxpZGF0aW9uXG5jb25maWcudmFsaWRhdGUoeyBhbGxvd2VkOiAnc3RyaWN0JyB9KVxuXG5leHBvcnQgeyBjb25maWcgfVxuIl19