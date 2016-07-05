var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin")
module.exports = {
	entry: "./src/app/bootstrap.ts",
	output:{
		path:"./public",
		filename:"bundle.js"
	},
	module:{
		loaders:[
			{
				test:/\.ts$/,loader:"ts-loader"
			}
		]
	},
	resolve:{
		extensions:['','.js','.ts']	
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:"./src/index.html"
		}),
	  new BrowserSyncPlugin({
	  	host:'localhost',
	  	port:3000,
	  	server:{baseDir:['public']}
	  }) 
	]
};