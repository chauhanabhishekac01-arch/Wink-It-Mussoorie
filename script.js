document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const collections = [
        { id: "beverages", name: "Beverages", previews: ["dwater.jpg", "dcokeb.jpg", "dcokec.jpg", "dpepsi.jpg"] },
        { id: "snacks", name: "Snacks", previews: ["ssalted.jpg", "skurkurem.jpg", "slaysg.jpg", "skurkurec.jpg"] },
        { id: "biscuits", name: "Biscuits", previews: ["bicrakjack.jpg", "biparleg.jpg", "bihideandseek.jpg", "bioreo.jpg"] },
        { id: "chocolates", name: "Chocolates", previews: ["chdc.jpg", "chcrispello.jpg", "chfruitnnut.jpg", "chkinderjoy.jpg"] },
        { id: "cleaning", name: "Cleaning", previews: ["soap.jpg", "surf.jpg", "mop.jpg", "brush.jpg"] },
        { id: "personal", name: "Personal Care", previews: ["pccomb.jpg", "pcalmond.jpg", "pcgillette.jpg", "pctowel.jpg"] }
    ];
    
    const products = [
        /*beverages*/       { id: 1, name: "Mineral Water", image: "dwater.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 20, count: 0, unit: "1L" }, "Large": { price: 70, count: 0, unit: "5L" } } },
                            { id: 2, name: "Coca-Cola Bottel", image: "dcokeb.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 40, count: 0, unit: "750ml" }, "Large": { price: 90, count: 0, unit: "2L" } } },
                            { id: 3, name: "Coca-Cola Can", image: "dcokec.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 40, count: 0, unit: "300ml" } } },
                            { id: 4, name: "Dite Coke Can", image: "dcoked.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 40, count: 0, unit: "500ml" } } },
                            { id: 5, name: "Pepsi", image: "dpepsi.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 40, count: 0, unit: "750ml" }, "Large": { price: 90, count: 0, unit: "2L" } } },
                            { id: 6, name: "Pepsi Zero Sugar", image: "dpepsiz.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 40, count: 0, unit: "300ml" } } },
                            { id: 7, name: "Maaza", image: "dmaaza.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 40, count: 0, unit: "600ml" }, "Large": { price: 80, count: 0, unit: "1.75L" } } },
                            { id: 8, name: "Frooti Mango", image: "dfrooti.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "150ml" }, "Large": { price: 105, count: 0, unit: "2L" } } },
                            { id: 9, name: "Amul Kool Kesar", image: "damulk.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 25, count: 0, unit: "180ml" } } },
                            { id: 10, name: "Mirinda", image: "dmirinda.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 30, count: 0, unit: "300ml" }, "Large": { price: 80, count: 0, unit: "2.25L" } } },
                            
        /*Cleaning*/        
                                                
        /*chocolates */     { id: 2001, name: "Crispello", image: "chcrispello.jpg", cat: "chocolates", selectedVariant: "Pouch", variants: { "Pouch": { price: 33, count: 0, unit: "500ml" }, "Family": { price: 64, count: 0, unit: "1L" } } },
                            { id: 2002, name: "Amul Dark Chocolate", image: "chdc.jpg", cat: "chocolates", selectedVariant: "Pouch", variants: { "Pouch": { price: 33, count: 0, unit: "500ml" }, "Family": { price: 64, count: 0, unit: "1L" } } },
                            { id: 2003, name: "Fruit and Nut", image: "chfruitnnut.jpg", cat: "chocolates", selectedVariant: "Pouch", variants: { "Pouch": { price: 33, count: 0, unit: "500ml" }, "Family": { price: 64, count: 0, unit: "1L" } } },
                            { id: 2004, name: "Fuse", image: "chfuse.jpg", cat: "chocolates", selectedVariant: "Pouch", variants: { "Pouch": { price: 33, count: 0, unit: "500ml" }, "Family": { price: 64, count: 0, unit: "1L" } } },
                            { id: 2005, name: "Kinder joy", image: "chkinderjoy.jpg", cat: "chocolates", selectedVariant: "Pouch", variants: { "Pouch": { price: 33, count: 0, unit: "500ml" }, "Family": { price: 64, count: 0, unit: "1L" } } },
                            { id: 2006, name: "Kitkat", image: "chkitkat.jpg", cat: "chocolates", selectedVariant: "Pouch", variants: { "Pouch": { price: 33, count: 0, unit: "500ml" }, "Family": { price: 64, count: 0, unit: "1L" } } },
                            { id: 2007, name: "Amul Velvett", image: "chvelvett.jpg", cat: "chocolates", selectedVariant: "Pouch", variants: { "Pouch": { price: 33, count: 0, unit: "500ml" }, "Family": { price: 64, count: 0, unit: "1L" } } },

          /*biscuits*/      { id: 3001, name: "Crack Jack", image: "bicrakjack.jpg", cat: "biscuits", selectedVariant: "Medium", variants: { "Small": { price: 180, count: 0, unit: "2kg" }, "Medium": { price: 350, count: 0, unit: "5kg" }, "Large": { price: 650, count: 0, unit: "10kg" } } },
                            { id: 3002, name: "Dark Fantasy", image: "bidf.jpg", cat: "biscuits", selectedVariant: "Medium", variants: { "Small": { price: 180, count: 0, unit: "2kg" }, "Medium": { price: 350, count: 0, unit: "5kg" }, "Large": { price: 650, count: 0, unit: "10kg" } } },
                            { id: 3003, name: "Good Day Cashew", image: "bigooddayc.jpg", cat: "biscuits", selectedVariant: "Medium", variants: { "Small": { price: 180, count: 0, unit: "2kg" }, "Medium": { price: 350, count: 0, unit: "5kg" }, "Large": { price: 650, count: 0, unit: "10kg" } } },
                            { id: 3004, name: "Good Day ChocoChip", image: "bigooddaychoco.jpg", cat: "biscuits", selectedVariant: "Medium", variants: { "Small": { price: 180, count: 0, unit: "2kg" }, "Medium": { price: 350, count: 0, unit: "5kg" }, "Large": { price: 650, count: 0, unit: "10kg" } } },
                            { id: 3005, name: "Good Day Pista", image: "bigooddayp.jpg", cat: "biscuits", selectedVariant: "Medium", variants: { "Small": { price: 180, count: 0, unit: "2kg" }, "Medium": { price: 350, count: 0, unit: "5kg" }, "Large": { price: 650, count: 0, unit: "10kg" } } },
                            { id: 3006, name: "Hide and Seek", image: "bihideandseek.jpg", cat: "biscuits", selectedVariant: "Medium", variants: { "Small": { price: 180, count: 0, unit: "2kg" }, "Medium": { price: 350, count: 0, unit: "5kg" }, "Large": { price: 650, count: 0, unit: "10kg" } } },
                            { id: 3007, name: "Marigold", image: "bimari.jpg", cat: "biscuits", selectedVariant: "Medium", variants: { "Small": { price: 180, count: 0, unit: "2kg" }, "Medium": { price: 350, count: 0, unit: "5kg" }, "Large": { price: 650, count: 0, unit: "10kg" } } },
                            { id: 3008, name: "Milk Bikis", image: "bimb.jpg", cat: "biscuits", selectedVariant: "Medium", variants: { "Small": { price: 180, count: 0, unit: "2kg" }, "Medium": { price: 350, count: 0, unit: "5kg" }, "Large": { price: 650, count: 0, unit: "10kg" } } },
                            { id: 3009, name: "Oreo", image: "bioreo.jpg", cat: "biscuits", selectedVariant: "Medium", variants: { "Small": { price: 180, count: 0, unit: "2kg" }, "Medium": { price: 350, count: 0, unit: "5kg" }, "Large": { price: 650, count: 0, unit: "10kg" } } },
                            { id: 3010, name: "Parle-G", image: "biparleg.jpg", cat: "biscuits", selectedVariant: "Medium", variants: { "Small": { price: 180, count: 0, unit: "2kg" }, "Medium": { price: 350, count: 0, unit: "5kg" }, "Large": { price: 650, count: 0, unit: "10kg" } } },
                                                
            /*Snacks*/      { id: 4001, name: "Kurkure Chutney", image: "skurkurec.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "40gm" }, "Large": { price: 20, count: 0, unit: "75gm" } } },
                            { id: 4002, name: "Kurkure Chilli", image: "skurkurecc.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "40gm" }, "Large": { price: 20, count: 0, unit: "75gm" } } },
                            { id: 4003, name: "Kurkure Masala", image: "skurkurem.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "40gm" }, "Large": { price: 20, count: 0, unit: "75gm" } } },
                            { id: 4004, name: "Lay's India's M", image: "slaysb.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "75g" }, "Medium": { price: 50, count: 0, unit: "150g" }, "Large": { price: 30, count: 0, unit: "200g" } } },
                            { id: 4005, name: "Lay's American", image: "slaysg.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "75g" }, "Medium": { price: 50, count: 0, unit: "150g" }, "Large": { price: 30, count: 0, unit: "200g" } } },
                            { id: 4006, name: "Lay's Classic", image: "slaysy.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "75g" }, "Medium": { price: 50, count: 0, unit: "150g" }, "Large": { price: 30, count: 0, unit: "200g" } } },
                            { id: 4007, name: "Punjabi Tadka", image: "spunjabi.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "75g" }, "Medium": { price: 50, count: 0, unit: "150g" }, "Large": { price: 30, count: 0, unit: "200g" } } },
                            { id: 4008, name: "Bhujia", image: "sbhujia.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "75g" }, "Medium": { price: 50, count: 0, unit: "150g" }, "Large": { price: 30, count: 0, unit: "200g" } } },
                            { id: 4009, name: "Salted Peanuts", image: "ssalted.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "75g" }, "Medium": { price: 50, count: 0, unit: "150g" }, "Large": { price: 30, count: 0, unit: "200g" } } },
                            { id: 4010, name: "Gup Shup", image: "sgup.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "75g" }, "Medium": { price: 50, count: 0, unit: "150g" }, "Large": { price: 30, count: 0, unit: "200g" } } },
                        
        /*Personal*/        { id: 5001, name: "Comb 15cm", image: "pccomb.jpg", cat: "personal", selectedVariant: "Bottle", variants: { "Bottle": { price: 120, count: 0, unit: "180ml" } } },
                            { id: 5002, name: "Almond Oil", image: "pcalmond.jpg", cat: "personal", selectedVariant: "Bottle", variants: { "Bottle": { price: 120, count: 0, unit: "180ml" } } },
                            { id: 5003, name: "Gillette Razor", image: "pcgillette.jpg", cat: "personal", selectedVariant: "Bottle", variants: { "Bottle": { price: 120, count: 0, unit: "180ml" } } },
                            { id: 5004, name: "Pears", image: "pcpears.jpg", cat: "personal", selectedVariant: "Bottle", variants: { "Bottle": { price: 120, count: 0, unit: "180ml" } } },
                            { id: 5005, name: "Scissors", image: "pcscissors.jpg", cat: "personal", selectedVariant: "Bottle", variants: { "Bottle": { price: 120, count: 0, unit: "180ml" } } },
                            { id: 5006, name: "Handkerchief", image: "pchandkerchief.jpg", cat: "personal", selectedVariant: "Bottle", variants: { "Bottle": { price: 120, count: 0, unit: "180ml" } } },
                            { id: 5007, name: "Head and Shoulders", image: "pcshampoo.jpg", cat: "personal", selectedVariant: "Bottle", variants: { "Bottle": { price: 120, count: 0, unit: "180ml" } } },
                            { id: 5008, name: "Colgate", image: "pccolgate.jpg", cat: "personal", selectedVariant: "Bottle", variants: { "Bottle": { price: 120, count: 0, unit: "180ml" } } },
                            { id: 5009, name: "Oral-B Pro Clean", image: "pcoralb.jpg", cat: "personal", selectedVariant: "Bottle", variants: { "Bottle": { price: 120, count: 0, unit: "180ml" } } },

                    
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