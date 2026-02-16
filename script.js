const collections = [
    { id: "snacks", name: "Snacks", previews: ["alu.jpg", "bikkit.jpg", "namkeen.jpg", "namkeen.jpg"] },
    { id: "grocery", name: "Grocery", previews: ["atta.jpg", "oil.jpg", "dal.jpg", "rice.jpg"] },
    { id: "dairy", name: "Dairy", previews: ["milk.jpg", "egg.jpg", "bread.jpg", "cheese.jpg"] },
    { id: "cleaning", name: "Cleaning", previews: ["soap.jpg", "surf.jpg", "mop.jpg", "brush.jpg"] },
    { id: "personal", name: "Personal Care", previews: ["paste.jpg", "shampoo.jpg", "cream.jpg", "perfume.jpg"] },
    { id: "drinks", name: "Beverages", previews: ["coke.jpg", "juice.jpg", "tea.jpg", "water.jpg"] }
];

const products = [
    { id: 1, name: "Alu Bhujiya", image: "alu.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 20, count: 0, unit: "40g" }, "Medium": { price: 50, count: 0, unit: "150g" }, "Large": { price: 100, count: 0, unit: "1kg" } } },
    { id: 2, name: "Cream Biscuits", image: "bikkit.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "75g" }, "Medium": { price: 50, count: 0, unit: "150g" }, "Large": { price: 30, count: 0, unit: "200g" } } },
    { id: 3, name: "Atta Bag", image: "atta.jpg", cat: "grocery", selectedVariant: "Medium", variants: { "Small": { price: 180, count: 0, unit: "2kg" }, "Medium": { price: 350, count: 0, unit: "5kg" }, "Large": { price: 650, count: 0, unit: "10kg" } } },
    { id: 4, name: "Mustard Oil", image: "oil.jpg", cat: "grocery", selectedVariant: "Standard", variants: { "Small": { price: 80, count: 0, unit: "25ml" },"Standard": { price: 165, count: 0, unit: "1L" },"Large": { price: 280, count: 0, unit: "2L" }, } },
    { id: 5, name: "Fresh Milk", image: "milk.jpg", cat: "dairy", selectedVariant: "Pouch", variants: { "Pouch": { price: 33, count: 0, unit: "500ml" }, "Family": { price: 64, count: 0, unit: "1L" } } },
    { id: 6, name: "Brown Bread", image: "bread.jpg", cat: "dairy", selectedVariant: "Standard", variants: { "Standard": { price: 50, count: 0, unit: "400g" } } },
    { id: 7, name: "Detergent Powder", image: "surf.jpg", cat: "cleaning", selectedVariant: "Small", variants: { "Small": { price: 70, count: 0, unit: "500g" }, "Large": { price: 130, count: 0, unit: "1kg" } } },
    { id: 8, name: "Shampoo", image: "shampoo.jpg", cat: "personal", selectedVariant: "Bottle", variants: { "Bottle": { price: 120, count: 0, unit: "180ml" } } },
    { id: 9, name: "Cold Drink", image: "coke.jpg", cat: "drinks", selectedVariant: "Small", variants: { "Small": { price: 40, count: 0, unit: "500ml" }, "Large": { price: 95, count: 0, unit: "2L" } } }
];

let recentAdditions = [];
let activeCategory = "";
let userCoords = null; 

function renderCollections() {
    document.getElementById('collection-grid').innerHTML = collections.map(c => `
        <div class="collection-card" onclick="openCollection('${c.id}', '${c.name}')">
            <div class="image-preview-box">
                ${c.previews.map(img => `<div class="image-preview-card"><img src="${img}" onerror="this.src='https://via.placeholder.com/64'"></div>`).join('')}
            </div>
            <h3 style="margin: 5px 0 0 0; font-size: 1.5rem;">${c.name}</h3>
        </div>
    `).join('');
}

function toggleSlider() { 
    document.getElementById('orderSidebar').classList.remove('active');
    document.getElementById('product-slider').classList.toggle('active'); 
    updateSidebar(); 
}

function toggleSidebar() { 
    document.getElementById('product-slider').classList.remove('active');
    document.getElementById('orderSidebar').classList.toggle('active'); 
    updateSidebar(); 
}

function openCollection(catId, catName) {
    activeCategory = catId;
    document.getElementById('slider-title').innerText = catName;
    renderProducts(catId);
    document.getElementById('orderSidebar').classList.remove('active');
    document.getElementById('product-slider').classList.add('active');
    updateSidebar(); 
}

function renderProducts(catId) {
    const grid = document.getElementById('product-grid');
    const filtered = products.filter(p => p.cat === catId);
    if (filtered.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; padding: 50px; text-align: center;">Empty for now.</p>`;
        return;
    }
    grid.innerHTML = filtered.map(p => {
        const currentVar = p.variants[p.selectedVariant];
        return `
        <div class="card">
            <div class="img-container">
                <img src="${p.image}" class="iimg" onerror="this.src='https://via.placeholder.com/150'">
            </div>
            <h4 style="margin: 5px 0; font-size: 1.2rem;">${p.name}</h4>
            <div class="variant-selector">
                ${Object.keys(p.variants).map(v => `
                    <button class="variant-btn ${p.selectedVariant === v ? 'active' : ''}" 
                        onclick="selectVariant(${p.id}, '${v}', '${catId}')">
                        <span>${v}</span>
                        <span class="unit-text">${p.variants[v].unit}</span>
                    </button>
                `).join('')}
            </div>
            <p style="margin: 5px 0; font-size: 1.3rem"><strong>Rs ${currentVar.price}</strong></p>
            <div class="controls">
                <button class="${currentVar.count > 0 ? 'hidden' : ''}" onclick="changeQty(${p.id}, 1, '${catId}')">Add</button>
                <div class="${currentVar.count > 0 ? '' : 'hidden'}">
                    <button class="qty-btn" onclick="changeQty(${p.id}, -1, '${catId}')">-</button>
                    <span style="margin: 0 8px; font-weight: bold;">${currentVar.count}</span>
                    <button class="qty-btn" onclick="changeQty(${p.id}, 1, '${catId}')">+</button>
                </div>
            </div>
        </div>`;
    }).join('');
}

function selectVariant(productId, variantName, catId) {
    products.find(p => p.id === productId).selectedVariant = variantName;
    renderProducts(catId);
}

function changeQty(productId, amount, catId) {
    const p = products.find(p => p.id === productId);
    const v = p.variants[p.selectedVariant];
    v.count += amount;
    if (v.count < 0) v.count = 0;
    if (amount > 0) {
        recentAdditions.unshift(p.image);
        if (recentAdditions.length > 4) recentAdditions.pop();
    }
    renderProducts(catId);
    updateSidebar();
}

function sidebarChangeQty(productId, variantName, amount) {
    const p = products.find(p => p.id === productId);
    p.variants[variantName].count += amount;
    if (p.variants[variantName].count < 0) p.variants[variantName].count = 0;
    updateSidebar();
    if(activeCategory === p.cat) renderProducts(p.cat);
}

function updateSidebar() {
    let itemsTotal = 0, totalItems = 0;
    let html = "";
    products.forEach(p => {
        Object.keys(p.variants).forEach(vName => {
            const v = p.variants[vName];
            if (v.count > 0) {
                itemsTotal += (v.count * v.price);
                totalItems += v.count;
                html += `
                <div class="order-item-detail">
                    <img src="${p.image}" onerror="this.src='https://via.placeholder.com/45'">
                    <div>
                        <strong>${p.name} (${v.unit})</strong><br>
                        Rs ${v.price}
                        <div class="sidebar-controls">
                            <button class="sidebar-qty-btn" onclick="sidebarChangeQty(${p.id}, '${vName}', -1)">-</button>
                            <span>${v.count}</span>
                            <button class="sidebar-qty-btn" onclick="sidebarChangeQty(${p.id}, '${vName}', 1)">+</button>
                        </div>
                    </div>
                </div>`;
            }
        });
    });

    let delivery = itemsTotal > 0 ? (itemsTotal < 300 ? 50 : (itemsTotal <= 1000 ? 100 : 200)) : 0;
    document.getElementById('sidebar-content').innerHTML = html || "<p>Cart is empty</p>";
    document.getElementById('subtotal-val').innerText = itemsTotal;
    document.getElementById('delivery-val').innerText = delivery;
    document.getElementById('total-price').innerText = itemsTotal + delivery;
    document.getElementById('cart-count').innerText = totalItems;
    
    document.body.style.marginBottom = totalItems > 0 ? "6rem" : "0";

    const popup = document.getElementById('cart-popup');
    const isCheckoutOpen = document.getElementById('orderSidebar').classList.contains('active');
    
    if(totalItems > 0 && !isCheckoutOpen) {
        popup.classList.remove('hidden');
        document.getElementById('popup-count').innerText = totalItems;
        document.getElementById('popup-images-container').innerHTML = [...new Set(recentAdditions)].slice(0, 5).map(img => `<img src="${img}" onerror="this.src='https://via.placeholder.com/30'">`).join('');
    } else { 
        popup.classList.add('hidden'); 
    }
}

async function getLocation() {
    const status = document.getElementById('location-display');
    if (navigator.geolocation) {
        status.innerText = "Locating...";
        navigator.geolocation.getCurrentPosition(async (pos) => {
            userCoords = { lat: pos.coords.latitude, lon: pos.coords.longitude };
            try {
                const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
                const data = await res.json();
                document.getElementById('cust-address').value = data.display_name || "Location Tagged";
                status.innerText = `✅ Location Tagged`;
            } catch (e) { 
                document.getElementById('cust-address').value = `Lat: ${userCoords.lat}, Lon: ${userCoords.lon}`;
                status.innerText = "✅ Coordinates Captured"; 
            }
        }, () => { status.innerText = "❌ Access Denied"; });
    }
}

function confirmAndSend() {
    const name = document.getElementById('cust-name').value;
    const address = document.getElementById('cust-address').value;

    if (document.getElementById('total-price').innerText == "0") { 
        alert("Cart is empty!"); 
        return; 
    }
    
    // Validate name and address fields
    if (!name && !address) {
        alert("Please enter your Name and Address.");
        return;
    } else if (!name) {
        alert("Please enter your Name.");
        return;
    } else if (!address) {
        alert("Please enter your Address.");
        return;
    }

    if (confirm("Safely proceed to Whatsapp")) sendToWhatsApp();
}

function sendToWhatsApp() {
    const name = document.getElementById('cust-name').value;
    const address = document.getElementById('cust-address').value;
    
    const subtotal = document.getElementById('subtotal-val').innerText;
    const delivery = document.getElementById('delivery-val').innerText;
    const total = document.getElementById('total-price').innerText;
    const currentDate = new Date().toLocaleDateString();

    let msg = `*NEW ORDER* - ${currentDate}%0A`;
    msg += `*Name:* ${name}%0A`;
    msg += `*Address:* ${address}%0A`;
    
    if (userCoords) {
        msg += `*Google Maps:* https://www.google.com/maps?q=${userCoords.lat},${userCoords.lon}%0A%0A`;
    } else {
        msg += `%0A`;
    }

    msg += `*Order:*%0A`;
    let itemIndex = 1;
    products.forEach(p => {
        Object.keys(p.variants).forEach(vName => {
            const v = p.variants[vName];
            if (v.count > 0) {
                msg += `${itemIndex}. ${p.name} (${vName} - ${v.unit}) x${v.count} - Rs ${v.price * v.count}%0A`;
                itemIndex++;
            }
        });
    });

    msg += `%0A*Items Total:* Rs ${subtotal}`;
    msg += `%0A*Delivery Cost:* Rs ${delivery}`;
    msg += `%0A*Total Amount:* Rs ${total}%0A%0A`;
    msg += `_The order shall be delivered in 30 mins._`;

    window.open(`https://wa.me/7983427187?text=${msg}`, '_blank');
}

renderCollections();

