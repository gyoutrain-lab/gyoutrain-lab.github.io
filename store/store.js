* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Arial, sans-serif;
}

body {
  background: #f5f9ff;
  color: #1f2937;
  padding: 20px;
}

/* Header */
.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 32px;
  font-weight: 700;
}

.header p {
  margin-top: 6px;
  font-size: 15px;
  color: #4b5563;
}

/* Category */
.category-wrapper {
  text-align: center;
  margin-bottom: 25px;
}

.category-wrapper select {
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 15px;
  background: white;
  cursor: pointer;
}

/* Product grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  padding: 10px;
}

/* Product card */
.product-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0,0,0,0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 18px rgba(0,0,0,0.15);
}

.product-thumb {
  width: 100%;
  height: 160px;
  object-fit: contain;
  background: #eaf4ff;
  padding: 10px;
}

.product-info {
  padding: 15px;
}

.product-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
}

.product-desc {
  font-size: 14px;
  color: #6b7280;
}

/* Footer */
.footer {
  margin-top: 45px;
  text-align: center;
  font-size: 13px;
  color: #9ca3af;
}
