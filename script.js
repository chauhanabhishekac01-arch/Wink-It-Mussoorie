document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
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
        { id: 9, name: "Cold Drink", image: "coke.jpg", cat: "drinks", selectedVariant: "Small", variants: { "Small": { price: 40, count: 0, unit: "500ml" }, "Large": { price: 95, count: 0, unit: "2L" } } },
        { id: 10, name: "Bhujiya", image: ".jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 20, count: 0, unit: "40g" }, "Medium": { price: 50, count: 0, unit: "150g" }, "Large": { price: 100, count: 0, unit: "1kg" } } }
    ];

    let recentAdditions = [];
    let activeCategory = "";
    let userCoords = null;

    // --- DOM ELEMENTS ---
    const collectionGrid = document.getElementById('collection-grid');
    const productGrid = document.getElementById('product-grid');
    const productSlider = document.getElementById('product-slider');
    const orderSidebar = document.getElementById('orderSidebar');
    const searchInput = document.getElementById('product-search');
    const searchSuggestions = document.getElementById('search-suggestions');
    const cartPopup = document.getElementById('cart-popup');

    // --- INITIALIZATION ---
    function renderCollections() {
        collectionGrid.innerHTML = collections.map(c => `
            <div class="collection-card" data-id="${c.id}" data-name="${c.name}">
                <div class="image-preview-box">
                    ${c.previews.map(img => `<div class="image-preview-card"><img src="${img}" alt="preview"></div>`).join('')}
                </div>
                <h3>${c.name}</h3>
            </div>
        `).join('');
    }

    // --- CORE LOGIC ---
    function openCollection(catId, catName) {
        activeCategory = catId;
        document.getElementById('slider-title').innerText = catName;
        renderProducts(catId);
        orderSidebar.classList.remove('active');
        productSlider.classList.add('active');
        updateSidebar();
    }

    function renderProducts(catId) {
        const filtered = products.filter(p => p.cat === catId);
        if (filtered.length === 0) {
            productGrid.innerHTML = `<p class="empty-msg">Empty for now.</p>`;
            return;
        }
        productGrid.innerHTML = filtered.map(p => {
            const currentVar = p.variants[p.selectedVariant];
            return `
                <div class="card">
                    <div class="img-container">
                        <img src="${p.image}" class="iimg" alt="${p.name}">
                    </div>
                    <h4>${p.name}</h4>
                    <div class="variant-selector">
                        ${Object.keys(p.variants).map(v => `
                            <button class="variant-btn ${p.selectedVariant === v ? 'active' : ''}" 
                                data-product-id="${p.id}" data-variant="${v}">
                                <span>${v}</span>
                                <span class="unit-text">${p.variants[v].unit}</span>
                            </button>
                        `).join('')}
                    </div>
                    <p class="price-tag">Rs ${currentVar.price}</p>
                    <div class="controls">
                        <button class="add-btn ${currentVar.count > 0 ? 'hidden' : ''}" data-product-id="${p.id}">Add</button>
                        <div class="qty-controls ${currentVar.count > 0 ? '' : 'hidden'}">
                            <button class="qty-btn" data-product-id="${p.id}" data-change="-1">-</button>
                            <span>${currentVar.count}</span>
                            <button class="qty-btn" data-product-id="${p.id}" data-change="1">+</button>
                        </div>
                    </div>
                </div>`;
        }).join('');
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
                            <img src="${p.image}" alt="item">
                            <div>
                                <strong>${p.name} (${v.unit})</strong><br>
                                Rs ${v.price}
                                <div class="sidebar-controls">
                                    <button class="side-qty-btn" data-id="${p.id}" data-var="${vName}" data-chg="-1">-</button>
                                    <span>${v.count}</span>
                                    <button class="side-qty-btn" data-id="${p.id}" data-var="${vName}" data-chg="1">+</button>
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

        const isCheckoutOpen = orderSidebar.classList.contains('active');
        if(totalItems > 0 && !isCheckoutOpen) {
            cartPopup.classList.remove('hidden');
            document.getElementById('popup-count').innerText = totalItems;
            document.getElementById('popup-images-container').innerHTML = [...new Set(recentAdditions)].slice(0, 5).map(img => `<img src="${img}" alt="recent">`).join('');
        } else { 
            cartPopup.classList.add('hidden'); 
        }
    }

    // --- EVENT LISTENERS (Delegation) ---

    // Collection Cards
    collectionGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.collection-card');
        if (card) {
            openCollection(card.dataset.id, card.dataset.name);
        }
    });

    // Product Grid (Variants, Add, Qty)
    productGrid.addEventListener('click', (e) => {
        const target = e.target;
        
        // Variant Select
        if (target.closest('.variant-btn')) {
            const btn = target.closest('.variant-btn');
            const p = products.find(prod => prod.id == btn.dataset.productId);
            p.selectedVariant = btn.dataset.variant;
            renderProducts(activeCategory);
        }

        // Add Button or Qty Buttons
        if (target.classList.contains('add-btn') || target.classList.contains('qty-btn')) {
            const id = target.dataset.productId;
            const amount = parseInt(target.dataset.change || 1);
            const p = products.find(prod => prod.id == id);
            const v = p.variants[p.selectedVariant];
            v.count += amount;
            if (v.count < 0) v.count = 0;
            if (amount > 0) {
                recentAdditions.unshift(p.image);
                if (recentAdditions.length > 4) recentAdditions.pop();
            }
            renderProducts(activeCategory);
            updateSidebar();
        }
    });

    // Sidebar Qty
    orderSidebar.addEventListener('click', (e) => {
        if (e.target.classList.contains('side-qty-btn')) {
            const btn = e.target;
            const p = products.find(prod => prod.id == btn.dataset.id);
            p.variants[btn.dataset.var].count += parseInt(btn.dataset.chg);
            if (p.variants[btn.dataset.var].count < 0) p.variants[btn.dataset.var].count = 0;
            updateSidebar();
            if(activeCategory === p.cat) renderProducts(p.cat);
        }
    });

    // Toggle Functions
    const toggleSidebar = () => {
        productSlider.classList.remove('active');
        orderSidebar.classList.toggle('active');
        updateSidebar();
    };

    const toggleSlider = () => {
        orderSidebar.classList.remove('active');
        productSlider.classList.toggle('active');
    };

    document.getElementById('cart-trigger').addEventListener('click', toggleSidebar);
    document.getElementById('cart-popup').addEventListener('click', toggleSidebar);
    document.getElementById('close-sidebar').addEventListener('click', toggleSidebar);
    document.getElementById('close-slider').addEventListener('click', toggleSlider);

    // Search Logic
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        if (!query) {
            searchSuggestions.style.display = "none";
            return;
        }
        const matches = products.filter(p => p.name.toLowerCase().includes(query)).slice(0, 6);
        if (matches.length > 0) {
            searchSuggestions.innerHTML = matches.map(p => `
                <div class="suggestion-item" data-name="${p.name}" data-cat="${p.cat}">
                    <img src="${p.image}" alt="suggest">
                    <span>${p.name}</span>
                </div>
            `).join('');
            searchSuggestions.style.display = "block";
        } else {
            searchSuggestions.style.display = "none";
        }
    });

    searchSuggestions.addEventListener('click', (e) => {
        const item = e.target.closest('.suggestion-item');
        if (item) {
            searchInput.value = item.dataset.name;
            searchSuggestions.style.display = "none";
            const col = collections.find(c => c.id === item.dataset.cat);
            openCollection(col.id, col.name);
        }
    });

    document.getElementById('search-btn').addEventListener('click', () => {
        const query = searchInput.value.toLowerCase().trim();
        const found = products.find(p => p.name.toLowerCase().includes(query));
        if (found) {
            const col = collections.find(c => c.id === found.cat);
            openCollection(col.id, col.name);
        } else {
            alert("Product not found!");
        }
    });

    // Location
    document.getElementById('location-btn').addEventListener('click', async () => {
        const display = document.getElementById('location-display');
        if (navigator.geolocation) {
            display.innerText = "Locating...";
            navigator.geolocation.getCurrentPosition(async (pos) => {
                userCoords = { lat: pos.coords.latitude, lon: pos.coords.longitude };
                try {
                    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
                    const data = await res.json();
                    document.getElementById('cust-address').value = data.display_name || "Location Tagged";
                    display.innerText = `✅ Location Tagged`;
                } catch (e) { 
                    document.getElementById('cust-address').value = `Lat: ${userCoords.lat}, Lon: ${userCoords.lon}`;
                    display.innerText = "✅ Coordinates Captured"; 
                }
            }, () => { display.innerText = "❌ Access Denied"; });
        }
    });

    // WhatsApp Order
    document.getElementById('checkout-whatsapp').addEventListener('click', () => {
        const name = document.getElementById('cust-name').value;
        const address = document.getElementById('cust-address').value;
        const total = document.getElementById('total-price').innerText;

        if (total == "0") { alert("Cart is empty!"); return; }
        if (!name || !address) { alert("Please enter Name and Address."); return; }

        let msg = `*🛍️ NEW ORDER - WINK IT* %0A`;
        msg += `--------------------------%0A`;
        msg += `*👤 Name:* ${name}%0A`;
        msg += `*📍 Address:* ${address}%0A`;
        
        if (userCoords) {
            // Updated link to a standard maps link to satisfy CSP and validity
            msg += `*🗺️ Location:* https://www.google.com/maps?q=${userCoords.lat},${userCoords.lon}%0A`;
        }
        
        msg += `%0A*🛒 ITEMS:*%0A`;
        products.forEach(p => {
            Object.keys(p.variants).forEach(vName => {
                const v = p.variants[vName];
                if (v.count > 0) {
                    msg += `- ${p.name} (${vName}) x${v.count} - ₹${v.price * v.count}%0A`;
                }
            });
        });

        msg += `--------------------------%0A`;
        msg += `*TOTAL AMOUNT: ₹${total}*%0A`;
        msg += `_Cash On Delivery_`;

        window.location.href = `https://api.whatsapp.com/send?phone=917983427187&text=${msg}`;
    });

    // Static Link Event Listeners
    document.getElementById('map-link').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = "https://www.google.com/maps/place/Mussoorie,+Uttarakhand+248179";
    });

    // Init
    renderCollections();
});