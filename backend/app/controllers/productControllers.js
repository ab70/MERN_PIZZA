//schema import
const {catSchema, prodSchema} = require('../models/Product')


function productControllers(){
    return{
        //fetch all products from DB
        async allProducts(req,res){
            const allProduct = await prodSchema.find({})
            res.status(200).json({message: "its working", data: allProduct})
        },
        //post product
        async postProduct(req,res){
            try{
                console.log(req.body);
                const newProduct = new prodSchema({
                    product_name: req.body.productName,
                    product_desc: req.body.productDetails,
                    prod_cat: req.body.category,
                    prod_img: req.file.filename,
                    pro_price: req.body.pro
                })
                
               
                const addProduct = await newProduct.save()
                if(addProduct){
                    res.status(200).json({message: "Product saved saved"})
                }
                
            }
            catch(err){
                console.log(err);
            }
        },
        async updateProduct(req,res){
            let product = await prodSchema.findById(req.params.id)
            if(!product){
                return res.status(500).json({message: "Product with ID was not found"})
            } 
            if(product){
                const productup = await prodSchema.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators: true, useFindAndModify: false})
                if(productup){
                    res.status(200).json({message: "Updated product", data: productup})
                }
                else{
                    console.log("was error");
                }

            }
        },

        //update product
        async deleteProduct(req,res){
            const findProd = await prodSchema.findById(req.params.id);
            if(!findProd) return res.status(500).json({message: "Cant find the product"})
            await findProd.remove()
            res.status(200).json({message: "Product Was removed!!!!"})
        }
         
    }//return ends
}//ends main function

module.exports = productControllers