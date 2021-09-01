const {
  Types: { ObjectId },
} = require("mongoose");

module.exports = {
  categories: [
    {
      _id: new ObjectId(),
      name: "Appliances",
      image: "https://i.imgur.com/LXcsMb7.jpg",
      getProducts() {
        return [
          {
            name: "SAMSUNG 65 inch 4k TV",
            categoryId: this._id,
            actualPrice: 222999,
            discountedPrice: 149999,
            features: [
              "Supported Apps: Netflix|Prime Video|Apple TV|Disney+Hotstar|Youtube",
              "Operating System: Tizen",
              "Resolution: Ultra HD (4K) 3840 x 2160 Pixels",
              "Sound Output: 40 W",
              "Refresh Rate: 120 Hz",
            ],
            description:
              "Samsung The Frame 163cm (65 inch) Ultra HD (4K) QLED Smart TV (QA65LS03TAKXXL)",
            views: 0,
            stockCount: 39,
            images: [
              "https://i.imgur.com/AzW1VNK.jpg",
              "https://i.imgur.com/vM0fRzx.jpg",
              "https://i.imgur.com/AzW1VNK.jpg",
              "https://i.imgur.com/vM0fRzx.jpg",
              "https://i.imgur.com/AzW1VNK.jpg",
            ],
          },
          {
            name: "IFB 6 KG Washing Machine",
            categoryId: this._id,
            actualPrice: 24990,
            discountedPrice: 20990,
            features: [
              "Fully Automatic Front Load Washing Machines have Great Wash Quality with very less running cost",
              "800 rpm : Higher the spin speed, lower the drying time",
              "Number of wash programs - 8 : With higher wash programs-Wash a variety of fabrics",
              "5 Star Rating",
              "6 kg : Great for Single/Couple",
            ],
            description:
              "IFB 6 kg 5 Star Fully Automatic Front Load with In-built Heater White (Diva Aqua VX)",
            views: 0,
            stockCount: 1008,
            images: [
              "https://i.imgur.com/vM0fRzx.jpg",
              "https://i.imgur.com/AzW1VNK.jpg",
            ],
          },
          {
            name: "Hisense 1.5 Ton 3 Star Split Inverter AC",
            categoryId: this._id,
            actualPrice: 38990,
            discountedPrice: 29987,
            features: [
              "1.5 Ton",
              "3 Star BEE Rating 2020 : For energy savings upto 15% (compared to Non-Inverter 1 Star)",
              "Auto Restart: No need to manually reset the settings post power-cut",
              "Copper : Energy efficient, best in class cooling with easy maintenance.",
              "Sleep Mode: Auto-adjusts the temperature to ensure comfort during your sleep",
            ],
            description:
              "Hisense 1.5 Ton 3 Star Split Inverter AC with Wi-fi Connect - White  (AS-18TW4RGSKA00, Copper Condenser)",
            views: 0,
            stockCount: 126,
            images: ["https://i.imgur.com/KSeRzlk.jpg"],
          },
        ];
      },
    },
    {
      _id: new ObjectId(),
      name: "Gadgets",
      image: "https://i.imgur.com/ljxbUgS.jpg",
      getProducts() {
        return [
          {
            name: "APPLE iPhone 11 (Black, 128GB)",
            categoryId: this._id,
            actualPrice: 73300,
            discountedPrice: 69999,
            features: [
              "128 GB ROM",
              "15.49 cm (6.1 inch) Liquid Retina HD Display",
              "12MP + 12MP | 12MP Front Camera",
              "A13 Bionic Chip Processor",
            ],
            description: "APPLE iPhone 11 (Black, 128GB)",
            views: 0,
            stockCount: 39,
            images: [
              "https://i.imgur.com/KgKOxUv.jpg",
              "https://i.imgur.com/IIdiSum.jpg",
              "https://i.imgur.com/i5m5QTL.jpg",
              "https://i.imgur.com/UqysPEE.jpg",
              "https://i.imgur.com/1YwB9c0.jpg",
            ],
          },
          {
            name: "ASUS Gaming Laptop (i7 9th gen)",
            categoryId: this._id,
            actualPrice: 87745,
            discountedPrice: 82000,
            features: [
              "NVIDIA Geforce GTX 1650 for Desktop Level Performance",
              "15.6 inch Full HD LED Backlit Anti-glare Display(120 Hz Refresh Rate)",
              "Light Laptop without Optical Disk Drive",
              "Pre-installed Genuine Windows 10 OS",
            ],
            description:
              "Asus ROG Strix G Core i7 9th Gen - (8 GB/512 GB SSD/Windows 10 Home/4 GB Graphics/NVIDIA Geforce GTX 1650) G531GT-AL017T Gaming Laptop  (15.6 inch, Black, 2.4 kg)",
            views: 0,
            stockCount: 1008,
            images: ["https://i.imgur.com/PXrqQ00.jpg"],
          },
          {
            name: "MI Smart TV Box",
            categoryId: this._id,
            actualPrice: 4999,
            discountedPrice: 3499,
            features: [
              "Works with HD, FHD, 4K HDR TVs",
              "Android TV 9.0 with 5000+ apps and games",
              "Google Assistant | Chromecast built-in",
              "Powerful 64bit 2.0Ghz Quad core processor",
              "Dolby + DTS 2.0 digital out",
              "Type: HDMI",
              "Power Requirement: DC 5.2 V, 2.1 A",
            ],
            description: "Mi Box 4k Media Streaming Device (Black)",
            views: 0,
            stockCount: 126,
            images: ["https://i.imgur.com/uf6SkCN.jpg"],
          },
        ];
      },
    },
    {
      _id: new ObjectId(),
      name: "Books",
      image: "https://i.imgur.com/I50R86q.jpg",
      getProducts() {
        return [
          {
            name: "The Power of Your Subconscious Mind",
            categoryId: this._id,
            actualPrice: 150,
            discountedPrice: 118,
            features: [
              "Language: English",
              "Binding: Paperback",
              "Publisher: Rupa & Co",
              "Genre: Literary Collections",
              "ISBN: 9789353338459, 9789353338459",
              "Pages: 224",
            ],
            description:
              "The Power of Your Subconscious Mind  (English, Paperback, Murphy Joseph)",
            views: 0,
            stockCount: 10,
            images: ["https://i.imgur.com/962bGxe.jpg"],
          },
          {
            name: "Computer Networks",
            categoryId: this._id,
            actualPrice: 789,
            discountedPrice: 481,
            features: [
              "Language: English",
              "Binding: Paperback",
              "Publisher: Pearson Education India",
              "Genre: Computers",
              "ISBN: 9789332518742, 9789332518742",
              "Pages: 816",
            ],
            description:
              "Computer Networks  (English, Paperback, Tanenbaum Andrew S.)",
            views: 0,
            stockCount: 39,
            images: ["https://i.imgur.com/QwNrHJh.jpg"],
          },
        ];
      },
    },
    {
      _id: new ObjectId(),
      name: "Men's Clothing",
      image: "https://i.imgur.com/7q5HSVT.jpg",
      getProducts() {
        return [
          {
            name: "Red Hooded T-Shirt",
            categoryId: this._id,
            actualPrice: 1299,
            discountedPrice: 699,
            features: [
              "Great for summers.",
              "On huge discount.",
              "Limited stocks.",
            ],
            description: "Typography Men Hooded Neck Red T-Shirt",
            views: 0,
            stockCount: 39,
            images: ["https://i.imgur.com/2zGtgoK.jpg"],
            sizes: ["S", "M", "XL"],
          },
          {
            name: "Men's Striped T-Shirt",
            categoryId: this._id,
            actualPrice: 999,
            discountedPrice: 399,
            features: [
              "Great for summers.",
              "On huge discount.",
              "Limited stocks.",
            ],
            description:
              "Striped Men Polo Neck Dark Blue, Green, Black T-Shirt",
            views: 0,
            stockCount: 78,
            images: ["https://i.imgur.com/G25gohs.jpg"],
            sizes: ["XS", "S", "L", "XXL"],
          },
          {
            name: "Slim Men's Blue Jeans",
            categoryId: this._id,
            actualPrice: 1299,
            discountedPrice: 699,
            features: ["Perfect fit.", "On huge discount.", "Limited stocks."],
            description: "Typography Men Hooded Neck Red T-Shirt",
            views: 0,
            stockCount: 126,
            images: ["https://i.imgur.com/VfGkmdB.jpg"],
            sizes: [28, 32, 34, 36],
          },
          {
            name: "Men Multicolor Regular Shorts",
            categoryId: this._id,
            actualPrice: 999,
            discountedPrice: 299,
            features: ["Perfect fit.", "On huge discount.", "Limited stocks."],
            description: "Self Design Men Multicolor Regular Shorts",
            views: 0,
            stockCount: 65,
            images: ["https://i.imgur.com/Ip27CsC.jpg"],
            sizes: ["S", "M", "XL"],
          },
        ];
      },
    },
    {
      _id: new ObjectId(),
      name: "Women's Clothing",
      image: "https://i.imgur.com/EOEAzdp.jpg",
      getProducts() {
        return [
          {
            name: "Women Multicolor Top",
            categoryId: this._id,
            actualPrice: 1299,
            discountedPrice: 699,
            features: [
              "Great for summers.",
              "On huge discount.",
              "Limited stocks.",
            ],
            description:
              "Casual Butterfly Sleeve Self Design Women Multicolor Top",
            views: 0,
            stockCount: 39,
            images: ["https://i.imgur.com/51q1onk.jpg"],
            sizes: ["XS", "S", "M", "XL"],
          },
          {
            name: "Light Blue Jeans",
            categoryId: this._id,
            actualPrice: 1299,
            discountedPrice: 699,
            features: ["Perfect fit.", "On huge discount.", "Limited stocks."],
            description: "Skinny Women Light Blue Jeans",
            views: 0,
            stockCount: 126,
            images: ["https://i.imgur.com/nEZvMEe.jpg"],
            sizes: [26, 28, 32, 34, 36],
          },
        ];
      },
    },
    {
      _id: new ObjectId(),
      name: "Furniture",
      image: "https://i.imgur.com/AYaeQos.jpg",
      getProducts() {
        return [
          {
            name: "Godrej Metal Almirah",
            categoryId: this._id,
            actualPrice: 23709,
            discountedPrice: 23709,
            features: [
              "Type: Almirah",
              "Contemporary & Modern Style",
              "Suitable For: Bedroom",
              "W x H x D: 916 mm x 1980 mm x 486 mm (3 ft x 6 ft 5 in x 1 ft 7 in)",
              "Pre Assembled (Ready to Use)",
            ],
            description:
              "Godrej Interio Storwel M2 Metal Almirah (Finish Color - Spring Blue)",
            views: 0,
            stockCount: 39,
            images: ["https://i.imgur.com/ARr1w0C.jpg"],
          },
          {
            name: "Office Executive Chair",
            categoryId: this._id,
            actualPrice: 9490,
            discountedPrice: 9000,
            features: [
              "Adjustable Seat Height, Recline, Seat Lock, Wheels, Swivel, Armrest, Locking Mechanism",
              "W x H: 49 cm x 101 cm (1 ft 7 in x 3 ft 3 in)",
              "Frame Material: Plastic",
              "Upholstery Type: Cushion",
              "Knock Down - Delivered in non-assembled pieces, installation by service partner",
            ],
            description: "Wipro Fabric Office Executive Chair (Black)",
            views: 0,
            stockCount: 39,
            images: ["https://i.imgur.com/i0dlUDT.jpg"],
          },
        ];
      },
    },
  ],
};
