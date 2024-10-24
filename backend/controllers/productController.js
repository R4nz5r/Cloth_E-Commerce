import { v2 as cloudinary } from "cloudinary";

// function for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    // cloudinary
    let imagesUrl = await Promise.all(
      images.map(async (item) => { 
        let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' }); 
        return result.secure_url;
      })
    );

    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestSeller
    );
    console.log(imagesUrl);

    res.json({ success: true, message: "Product added successfully!" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
// function for list product
const listProduct = async (req, res) => {};
// function for removing product
const removeProduct = async (req, res) => {};
// function for single product info
const singleProduct = async (req, res) => {};

export { addProduct, removeProduct, listProduct, singleProduct };
