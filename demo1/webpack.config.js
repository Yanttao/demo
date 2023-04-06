const path = require("path")
const HTMLplugin = require("html-webpack-plugin")
module.exports = {
    mode:"production",
    // entry:["./src/a.js" , "./src/b.js"]
    // entry:{
    //     hello:"./src/a.js",
    //     b:"./src/b.js"
    // }

    // entry:"./src/a.js",

    
    output:{
        path:path.resolve(__dirname , "dist"),
        filename:"main.js",
        clean:true
    },


    module:{
        rules:[
            {
                test:/\.css$/i,
                use:["style-loader" , "css-loader"]
            },{
                test:/\.jpg$/i,
                type:"asset/resource"
            },{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },

    plugins:[
        new HTMLplugin({
            template:"./src/index.html"
        }) 
    ],

    devtool:"inline-source-map"
}