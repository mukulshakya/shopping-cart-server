const {
  Types: { ObjectId },
} = require("mongoose");
const db = require("../../../models");

const productProjection = {
  images: 1,
  features: 1,
  views: 1,
  sizes: 1,
  name: 1,
  actualPrice: 1,
  discountedPrice: 1,
  description: 1,
  stockCount: 1,
  createdAt: 1,
  updatedAt: 1,
  category: { _id: 1, name: 1, image: 1 },
};

exports.getAllProducts = async (req, res) => {
  try {
    const { categoryId, productId, search, sort } = req.query;

    const query = {};
    if (categoryId) query.categoryId = ObjectId(categoryId);
    if (productId) query._id = ObjectId(productId);

    const searchQuery = {};
    if (search) {
      const searches = [
        "name",
        "description",
        "category.name",
        "features",
      ].map((key) => ({ [key]: { $regex: search, $options: "i" } }));
      Object.assign(searchQuery, { $or: searches });
    }

    const sortQuery = {};
    switch (sort) {
      case "p-lth":
        sortQuery.discountedPrice = 1;
        break;
      case "p-htl":
        sortQuery.discountedPrice = -1;
        break;
      default:
        sortQuery.createdAt = -1;
        break;
    }

    const products = await db.Product.aggregate([
      { $match: { ...query, stockCount: { $gt: 0 } } },
      {
        $lookup: {
          from: "categories",
          localField: "categoryId",
          foreignField: "_id",
          as: "category",
        },
      },
      { $unwind: "$category" },
      { $project: { ...productProjection } },
      { $match: searchQuery },
      { $sort: { ...sortQuery } },
    ]);
    return res.success(products);
  } catch (e) {
    console.log({ e });
    return res.error(e);
  }
};

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await db.Category.find({});
    return res.success(categories);
  } catch (e) {
    console.log({ e });
    return res.error(e);
  }
};

exports.addToCart = async (req, res) => {
  try {
    const {
      body: { productId, quantity },
      user: { _id: userId },
    } = req;
    const product = await db.Product.findById(productId);
    if (product.stockCount < quantity)
      return res.error({}, "Insufficient product stock");

    let cart = null;
    // Check if product is already in the cart
    cart = await db.Cart.findOne({ userId, productId });
    if (cart) cart.quantity += quantity;
    else
      cart = await new db.Cart({
        ...req.body,
        userId: req.user._id,
      }).save();

    product.stockCount -= quantity;
    await product.save();
    await cart.save();
    if (!cart) return res.error({}, "Error adding to cart");

    return res.success(cart, "Added to cart");
  } catch (e) {
    console.log({ e });
    return res.error(e);
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const {
      body: { productId, quantity },
      user: { _id: userId },
    } = req;
    const cart = await db.Cart.findOne({ productId, userId });
    if (!cart) return res.success({}, "Already removed from cart");

    let updatedQuantity = quantity > cart.quantity ? cart.quantity : quantity;

    let isUpdated = null;
    if (
      cart.quantity === quantity ||
      cart.quantity === 1 ||
      cart.quantity - quantity <= 0
    )
      isUpdated = await db.Cart.findByIdAndRemove(cart._id);
    else
      isUpdated = await db.Cart.findByIdAndUpdate(
        cart._id,
        { $inc: { quantity: -updatedQuantity } },
        { new: true }
      );

    await db.Product.findByIdAndUpdate(productId, {
      $inc: { stockCount: updatedQuantity },
    });

    return res.success(isUpdated);
  } catch (e) {
    console.log({ e });
    return res.error(e);
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await db.Cart.aggregate([
      { $match: { userId: ObjectId(req.user._id) } },
      {
        $lookup: {
          from: "products",
          let: { productId: "$productId" },
          pipeline: [
            { $match: { $expr: { $eq: ["$$productId", "$_id"] } } },
            {
              $lookup: {
                from: "categories",
                localField: "categoryId",
                foreignField: "_id",
                as: "category",
              },
            },
            { $unwind: "$category" },
          ],
          as: "product",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$product" },
      { $unwind: "$user" },
      {
        $project: {
          productId: 1,
          userId: 1,
          quantity: 1,
          product: { ...productProjection },
          user: { email: 1 },
        },
      },
    ]);

    return res.success(cart);
  } catch (e) {
    console.log({ e });
    return res.error(e);
  }
};

exports.placeOrder = async (req, res) => {
  try {
    const {
      body: { products },
      user: { _id: userId },
    } = req;

    const order = await new db.Order({ userId, products }).save();
    if (!order) return res.error({}, "Error placing order");

    const productIds = products.map(({ productId }) => ObjectId(productId));
    await db.Cart.deleteMany({ userId, productId: { $in: productIds } });

    return res.success(order, "Order placed successfully");
  } catch (e) {
    console.log({ e });
    return res.error(e);
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const {
      user: { _id: userId },
    } = req;

    const orders = await db.Order.aggregate([
      { $match: { userId } },
      { $unwind: "$products" },
      {
        $lookup: {
          from: "products",
          let: { productId: "$products.productId" },
          pipeline: [
            { $match: { $expr: { $eq: ["$$productId", "$_id"] } } },
            {
              $lookup: {
                from: "categories",
                localField: "categoryId",
                foreignField: "_id",
                as: "category",
              },
            },
            { $unwind: "$category" },
            { $project: { ...productProjection } },
          ],
          as: "product",
        },
      },
      { $unwind: "$product" },
      {
        $group: {
          _id: "$_id",
          products: {
            $push: { product: "$product", quantity: "$products.quantity" },
          },
          createdAt: { $first: "$createdAt" },
        },
      },
      { $sort: { createdAt: -1 } },
    ]);

    return res.success(orders);
  } catch (e) {
    console.log({ e });
    return res.error(e);
  }
};
