import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const products = [
  { id: 1, name: "Laptop", price: 25000, image: "https://speedcom.co.th/cdn/shop/files/lenovo-ideapad-slim-5-16ahp9-83dd001ata-ryzen-7-cloud-grey-389567.jpg?v=1738298684", category: "Electronics" },
  { id: 2, name: "Smartphone", price: 15000, image: "https://images.samsung.com/is/image/samsung/p6pim/ph/sm-a165fzadphl/gallery/ph-galaxy-a16-sm-a165-sm-a165fzadphl-thumb-544321716?$UX_EXT2_PNG$", category: "Electronics" },
  { id: 3, name: "Headphones", price: 3000, image: "https://munkong.sgp1.cdn.digitaloceanspaces.com/munkong-production/2024-07-11/1720674152548.jpg", category: "Accessories" },
  { id: 4, name: "Smartwatch", price: 5000, image: "https://i5.walmartimages.com/seo/Smart-Watch-Fits-for-Android-and-iPhone-EEEkit-Fitness-Health-Tracker-Waterproof-Smartwatch-for-Women-Men_819cb65b-8437-4eb3-aba1-ce6513dc8d58.312f5775b50ab18c130fe5a454149fa9.jpeg", category: "Accessories" },
  { id: 5, name: "Gaming Mouse", price: 1200, image: "https://logitech.e-express.co.th/wp-content/uploads/2023/01/Cover_LGT-25.webp", category: "Accessories" },
  { id: 6, name: "Keyboard", price: 2000, image: "https://logitech.e-express.co.th/wp-content/uploads/2024/05/Cover_LGT-1.webp", category: "Accessories" },
  { id: 7, name: "Monitor", price: 8000, image: "https://www.jib.co.th/img_master/product/original/20240819161209_69871_287_1.jpg", category: "Electronics" },
  { id: 8, name: "Tablet", price: 10000, image: "https://media-cdn.bnn.in.th/434202/samsung-tablet-galaxy-s10-12256gb-moonstone-gray-5g-8-square_medium.jpg", category: "Electronics" },
  { id: 9, name: "Bluetooth Speaker", price: 2500, image: "https://media.education.studio7thailand.com/58222/Tronsmart-Bluetooth-Speaker-T7-Mini-15W-Black-1-square_medium.jpg", category: "Accessories" },
  { id: 10, name: "External HDD", price: 4500, image: "https://media-cdn.bnn.in.th/360420/wd-hdd-ext-my-passport-2019-usb-30-red-2-square_medium.jpg", category: "Accessories" },
  { id: 11, name: "Printer", price: 7000, image: "https://www.uboncomputer.co.th/pub/media/catalog/product/cache/566bac40c34e1b79304197de40a22c99/2/8/2875.jpg", category: "Electronics" },
  { id: 12, name: "Scanner", price: 6000, image: "https://www.brother.co.th/-/media/ap2/products/scanner/ads-4900w/ads-4900w_l.jpg?rev=23cf5726fa8c4cc89ffc96ff0fb8cbdb", category: "Electronics" },
  { id: 13, name: "Router", price: 3500, image: "https://lh5.googleusercontent.com/proxy/f-j1JSf7U6ZCIokGsKc1d8wF1XnqxeW935p9z3cwF3jhfpAKTqtyjb6qBPulIjncIP9l82e0iwjMVtVQutXZdkIH1tWQn4XfUbVI0qfHCGyfpEEmgxBqmNaDHj0gapVTmAJ7", category: "Electronics" },
  { id: 14, name: "Microphone", price: 4000, image: "https://row.hyperx.com/cdn/shop/products/hyperx_quadcast_02_side.jpg?v=1662449692", category: "Accessories" },
  { id: 15, name: "Tripod", price: 1500, image: "https://reeflexstore.com/cdn/shop/files/T4A3163_1800x.jpg?v=1715777862", category: "Accessories" },
  { id: 16, name: "VR Headset", price: 12000, image: "https://mtxr.co/wp-content/uploads/2022/03/Templete-Product-MTXRDronexr.png", category: "Electronics" },
  { id: 17, name: "Power Bank", price: 1800, image: "https://storage.remaxthailand.co.th/img.php?src=img/product/D2301182/1.jpg", category: "Accessories" },
  { id: 18, name: "Camera", price: 22000, image: "https://tcads.com.ph/wp-content/uploads/2018/06/Canon-EOS-1500D-a3.jpg", category: "Electronics" },
  { id: 19, name: "Drone", price: 30000, image: "https://www.zoomcamera.net/wp-content/uploads/2023/09/DJI-Mini-4-ProRC2.png", category: "Electronics" },
  { id: 20, name: "E-Reader", price: 8000, image: "https://down-th.img.susercontent.com/file/th-11134207-7r98s-lpakzbvo7w5adb", category: "Electronics" },
];

const ProductCard = ({ product }) => {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-3">
      <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '10px' }}>
        <img src={product.image} className="card-img-top" alt={product.name} style={{ padding: '10px', borderRadius: '10px' }} />
        <div className="card-body p-2 text-center">
          <h6 className="card-title text-truncate" style={{ fontSize: '14px' }}>{product.name}</h6>
          <p className="card-text text-danger font-weight-bold" style={{ fontSize: '16px' }}>฿{product.price.toLocaleString()}</p>
          <button className="btn btn-warning btn-sm w-100" style={{ borderRadius: '20px' }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const ProductList = ({ products }) => {
  return (
    <div className="row g-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#FF5722" }}
      >
        <div className="container d-flex align-items-center">
          <a href="/">
            <img
              src="logo.png"
              alt="ShopPee Logo"
              style={{ height: "50px", marginLeft: "10px", cursor: "pointer" }}
            />
          </a>
        </div>
      </nav>
      <div className="container mt-4">
        <h2 className="mb-4 text-center">สินค้าของเรา</h2>
        <ProductList products={products} />
      </div>
      <footer className="bg-light py-3 mt-4 text-center">
        <p className="mb-0">&copy; 2025 ShopPee. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default App;
