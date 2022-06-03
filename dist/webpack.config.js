"use strict";
// @ts-nocheck
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: './index',
    output: {
        path: path.join(__dirname, 'temp'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\\.tsx?$/,
                exclude: /^node_modules/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.json',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: 'tsconfig.json',
                logLevel: 'error',
                extensions: ['.ts'],
                mainFields: ['browser', 'main', 'server'],
            }),
        ],
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicGFjay5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi93ZWJwYWNrLmNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsY0FBYztBQUNkLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUM1QixNQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO0FBRXBFLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixJQUFJLEVBQUUsYUFBYTtJQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDO0lBQ3ZDLEtBQUssRUFBRSxTQUFTO0lBQ2hCLE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7UUFDbEMsUUFBUSxFQUFFLFdBQVc7S0FDdEI7SUFDRCxNQUFNLEVBQUU7UUFDTixLQUFLLEVBQUU7WUFDTDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsT0FBTyxFQUFFLGVBQWU7Z0JBQ3hCLE1BQU0sRUFBRSxXQUFXO2dCQUNuQixPQUFPLEVBQUU7b0JBQ1AsVUFBVSxFQUFFLGVBQWU7aUJBQzVCO2FBQ0Y7U0FDRjtLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUMxQixPQUFPLEVBQUU7WUFDUCxJQUFJLG1CQUFtQixDQUFDO2dCQUN0QixVQUFVLEVBQUUsZUFBZTtnQkFDM0IsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDbkIsVUFBVSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUM7YUFDMUMsQ0FBQztTQUNIO0tBQ0Y7Q0FDRixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IFRzY29uZmlnUGF0aHNQbHVnaW4gPSByZXF1aXJlKCd0c2NvbmZpZy1wYXRocy13ZWJwYWNrLXBsdWdpbicpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtb2RlOiAnZGV2ZWxvcG1lbnQnLFxuICBjb250ZXh0OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXG4gIGVudHJ5OiAnLi9pbmRleCcsXG4gIG91dHB1dDoge1xuICAgIHBhdGg6IHBhdGguam9pbihfX2Rpcm5hbWUsICd0ZW1wJyksXG4gICAgZmlsZW5hbWU6ICdidW5kbGUuanMnLFxuICB9LFxuICBtb2R1bGU6IHtcbiAgICBydWxlczogW1xuICAgICAge1xuICAgICAgICB0ZXN0OiAvXFxcXC50c3g/JC8sXG4gICAgICAgIGV4Y2x1ZGU6IC9ebm9kZV9tb2R1bGVzLyxcbiAgICAgICAgbG9hZGVyOiAndHMtbG9hZGVyJyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGNvbmZpZ0ZpbGU6ICd0c2NvbmZpZy5qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGV4dGVuc2lvbnM6IFsnLnRzJywgJy5qcyddLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIG5ldyBUc2NvbmZpZ1BhdGhzUGx1Z2luKHtcbiAgICAgICAgY29uZmlnRmlsZTogJ3RzY29uZmlnLmpzb24nLFxuICAgICAgICBsb2dMZXZlbDogJ2Vycm9yJyxcbiAgICAgICAgZXh0ZW5zaW9uczogWycudHMnXSxcbiAgICAgICAgbWFpbkZpZWxkczogWydicm93c2VyJywgJ21haW4nLCAnc2VydmVyJ10sXG4gICAgICB9KSxcbiAgICBdLFxuICB9LFxufVxuIl19