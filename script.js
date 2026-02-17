document.addEventListener('DOMContentLoaded', () => {
    // --- NAVIGATION & HISTORY LOGIC ---
    // Initialize history state
    if (!history.state) {
        history.replaceState({ page: 'grid' }, document.title, location.href);
    }

    window.addEventListener('popstate', function (event) {
        const isSliderOpen = productSlider.classList.contains('active');
        const isCartOpen = orderSidebar.classList.contains('active');

        if (isSliderOpen || isCartOpen) {
            // If any slider is open, close them and stay on the grid
            productSlider.classList.remove('active');
            orderSidebar.classList.remove('active');
            // Re-push state so the next "back" can be handled again
            history.pushState({ page: 'grid' }, document.title, location.href);
        } else {
            // DOUBLE-TAP TO EXIT LOGIC (When on main grid)
            if (sessionStorage.getItem('backPressedOnce')) {
                sessionStorage.removeItem('backPressedOnce');
                history.back(); 
            } else {
                sessionStorage.setItem('backPressedOnce', 'true');
                alert("Press the back button again to exit.");
                
                setTimeout(function () {
                    sessionStorage.removeItem('backPressedOnce');
                }, 2000);

                // Stay on current page
                history.pushState({ page: 'grid' }, document.title, location.href);
            }
        }
    });

    // --- DATA ---
    const collections = [
        { id: "beverages", name: "Beverages", previews: ["dwater.jpg", "dcokeb.jpg", "dcokec.jpg", "dpepsi.jpg"] },
        { id: "snacks", name: "Snacks", previews: ["ssalted.jpg", "skurkurem.jpg", "slaysg.jpg", "skurkurec.jpg"] },
        { id: "biscuits", name: "Biscuits", previews: ["bicrakjack.jpg", "biparleg.jpg", "bihideandseek.jpg", "bioreo.jpg"] },
        { id: "chocolates", name: "Chocolates", previews: ["chdc.jpg", "chcrispello.jpg", "chfruitnnut.jpg", "chkinderjoy.jpg"] },
        { id: "cleaning", name: "Cleaning", previews: ["commingsoon.jpg", "commingsoon.jpg", "commingsoon.jpg", "commingsoon.jpg"] },
        { id: "personal", name: "Personal Care", previews: ["pccomb.jpg", "pcalmond.jpg", "pcgillette.jpg", "pctowel.jpg"] }
    ];
    
    const products = [
        /*bevrage*/         { id: 1, name: "Mineral Water", image: "dwater.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 20, count: 0, unit: "1L" }, "Large": { price: 70, count: 0, unit: "5L" } } },
                            { id: 2, name: "Coca-Cola Bottle", image: "dcokeb.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 40, count: 0, unit: "750ml" }, "Large": { price: 90, count: 0, unit: "2L" } } },
                            { id: 3, name: "Coca-Cola Can", image: "dcokec.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 40, count: 0, unit: "300ml" } } },
                            { id: 4, name: "Dite Coke Can", image: "dcoked.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 40, count: 0, unit: "500ml" } } },
                            { id: 5, name: "Pepsi", image: "dpepsi.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 40, count: 0, unit: "750ml" }, "Large": { price: 90, count: 0, unit: "2L" } } },
                            { id: 6, name: "Pepsi Zero Sugar", image: "dpepsiz.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 40, count: 0, unit: "300ml" } } },
                            { id: 7, name: "Maaza", image: "dmaaza.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 40, count: 0, unit: "600ml" }, "Large": { price: 80, count: 0, unit: "1.75L" } } },
                            { id: 8, name: "Frooti Mango", image: "dfrooti.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "150ml" }, "Large": { price: 105, count: 0, unit: "2L" } } },
                            { id: 9, name: "Amul Kool Kesar", image: "damulk.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 25, count: 0, unit: "180ml" } } },
                            { id: 10, name: "Mirinda", image: "dmirinda.jpg", cat: "beverages", selectedVariant: "Small", variants: { "Small": { price: 30, count: 0, unit: "300ml" }, "Large": { price: 80, count: 0, unit: "2.25L" } } },
                            
        /*chocolates */     { id: 2001, name: "Crispello", image: "chcrispello.jpg", cat: "chocolates", selectedVariant: "Wgt.", variants: { "Wgt.": { price: 40, count: 0, unit: "35gm" } } },
                            { id: 2002, name: "Amul Dark Chocolate", image: "chdc.jpg", cat: "chocolates", selectedVariant: "Wgt.", variants: { "Wgt.": { price: 45, count: 0, unit: "35gm" } } },
                            { id: 2003, name: "Fruit and Nut", image: "chfruitnnut.jpg", cat: "chocolates", selectedVariant: "Wgt.", variants: { "Wgt.": { price: 100, count: 0, unit: "75gm" } } },
                            { id: 2004, name: "Fuse", image: "chfuse.jpg", cat: "chocolates", selectedVariant: "Wgt.", variants: { "Wgt.": { price: 43, count: 0, unit: "43gm" } } },
                            { id: 2005, name: "Kinder joy", image: "chkinderjoy.jpg", cat: "chocolates", selectedVariant: "Wgt.", variants: { "Wgt.": { price: 45, count: 0, unit: "20gm" } } },
                            { id: 2006, name: "Kitkat", image: "chkitkat.jpg", cat: "chocolates", selectedVariant: "Wgt.", variants: { "Wgt.": { price: 30, count: 0, unit: "38.5gm" } } },
                            { id: 2007, name: "Amul Velvett", image: "chvelvett.jpg", cat: "chocolates", selectedVariant: "Wgt.", variants: { "Wgt.": { price: 50, count: 0, unit: "35gm" } } },

          /*biscuits*/      { id: 3001, name: "Crack Jack", image: "bicrakjack.jpg", cat: "biscuits", selectedVariant: "Large", variants: {"Large": { price: 35, count: 0, unit: "176.4gm" } } },
                            { id: 3002, name: "Dark Fantasy", image: "bidf.jpg", cat: "biscuits", selectedVariant: "Large", variants: {"Large": { price: 40, count: 0, unit: "69gm" } } },
                            { id: 3003, name: "Good Day Cashew", image: "bigooddayc.jpg", cat: "biscuits", selectedVariant: "Large", variants: {"Large": { price: 40, count: 0, unit: "200gm" } } },
                            { id: 3004, name: "Good Day ChocoChip", image: "bigooddaychoco.jpg", cat: "biscuits", selectedVariant: "Large", variants: {"Large": { price: 100, count: 0, unit: "444gm" } } },
                            { id: 3005, name: "Good Day Pista", image: "bigooddayp.jpg", cat: "biscuits", selectedVariant: "Large", variants: {"Large": { price: 50, count: 0, unit: "200gm" } } },
                            { id: 3006, name: "Hide and Seek", image: "bihideandseek.jpg", cat: "biscuits", selectedVariant: "Large", variants: {"Large": { price: 45, count: 0, unit: "200gm" } } },
                            { id: 3007, name: "Marigold", image: "bimari.jpg", cat: "biscuits", selectedVariant: "Large", variants: {"Large": { price: 40, count: 0, unit: "208gm" } } },
                            { id: 3008, name: "Milk Bikis", image: "bimb.jpg", cat: "biscuits", selectedVariant: "Large", variants: {"Large": { price: 70, count: 0, unit: "500gm" } } },
                            { id: 3009, name: "Oreo", image: "bioreo.jpg", cat: "biscuits", selectedVariant: "Large", variants: {"Large": { price: 40, count: 0, unit: "125.25gm" } } },
                            { id: 3010, name: "Parle-G", image: "biparleg.jpg", cat: "biscuits", selectedVariant: "Large", variants: {"Large": { price: 80, count: 0, unit: "800gm" } } },
                                                                                        
            /*Snacks*/      { id: 4001, name: "Kurkure Chutney", image: "skurkurec.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "40gm" }, "Large": { price: 25, count: 0, unit: "75gm" } } },
                            { id: 4002, name: "Kurkure Chilli", image: "skurkurecc.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "40gm" }, "Large": { price: 25, count: 0, unit: "75gm" } } },
                            { id: 4003, name: "Kurkure Masala", image: "skurkurem.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "40gm" }, "Large": { price: 25, count: 0, unit: "75gm" } } },
                            { id: 4004, name: "Lay's India's M", image: "slaysb.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "75g" }, "Large": { price: 25, count: 0, unit: "200g" } } },
                            { id: 4005, name: "Lay's American", image: "slaysg.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "75g" }, "Large": { price: 25, count: 0, unit: "200g" } } },
                            { id: 4006, name: "Lay's Classic", image: "slaysy.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "75g" }, "Large": { price: 25, count: 0, unit: "200g" } } },
                            { id: 4007, name: "Punjabi Tadka", image: "spunjabi.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "75g" }, "Large": { price: 20, count: 0, unit: "200g" } } },
                            { id: 4008, name: "Bhujia", image: "sbhujia.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "75g" }, "Large": { price: 20, count: 0, unit: "200g" } } },
                            { id: 4009, name: "Salted Peanuts", image: "ssalted.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "75g" }, "Large": { price: 20, count: 0, unit: "200g" } } },
                            { id: 4010, name: "Gup Shup", image: "sgup.jpg", cat: "snacks", selectedVariant: "Small", variants: { "Small": { price: 10, count: 0, unit: "75g" }, "Large": { price: 20, count: 0, unit: "200g" } } },
                        
        /*Personal*/        { id: 5001, name: "Comb 15cm", image: "pccomb.jpg", cat: "personal", selectedVariant: "Size", variants: { "Size": { price: 50, count: 0, unit: "20cm" } } },
                            { id: 5002, name: "Almond Oil", image: "pcalmond.jpg", cat: "personal", selectedVariant: "Bottle", variants: { "Bottle": { price: 85, count: 0, unit: "95ml" } } },
                            { id: 5003, name: "Gillette Mac 3 Razor", image: "pcgillette.jpg", cat: "personal", selectedVariant: "Piece", variants: { "Piece": { price: 192, count: 0, unit: "1pc" } } },
                            { id: 5004, name: "Pears Pack of 3", image: "pcpears.jpg", cat: "personal", selectedVariant: "Piece", variants: { "Piece": { price: 200, count: 0, unit: "1pk" } } },
                            { id: 5005, name: "Scissors 2 X 4.25inch", image: "pcscissors.jpg", cat: "personal", selectedVariant: "Size", variants: { "Size": { price: 50, count: 0, unit: "2x4.25inch" } } },
                            { id: 5006, name: "Handkerchief pack of 3", image: "pchandkerchief.jpg", cat: "personal", selectedVariant: "Piece", variants: { "Piece": { price: 170, count: 0, unit: "1pk" } } },
                            { id: 5007, name: "Head and Shoulders Anti Dandruff", image: "pcshampoo.jpg", cat: "personal", selectedVariant: "Bottle", variants: { "Bottle": { price: 181, count: 0, unit: "180ml" } } },
                            { id: 5008, name: "Colgate", image: "pccolgate.jpg", cat: "personal", selectedVariant: "Tube", variants: { "Tube": { price: 120, count: 0, unit: "180ml" } } },
                            { id: 5009, name: "Oral-B Pro Clean", image: "pcoralb.jpg", cat: "personal", selectedVariant: "Piece", variants: { "Piece": { price: 50, count: 0, unit: "1pc" } } },
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
    const clearSearch = document.getElementById('clear-search');
    const searchSuggestions = document.getElementById('search-suggestions');
    const cartPopup = document.getElementById('cart-popup');
    const custNameInput = document.getElementById('cust-name');
    const custAddressInput = document.getElementById('cust-address');
    const whatsappBtn = document.getElementById('checkout-whatsapp');

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

    // --- HIGHLIGHT LOGIC ---
    function openAndHighlight(productId, catId) {
        const col = collections.find(c => c.id === catId);
        openCollection(catId, col.name);

        setTimeout(() => {
            const el = document.getElementById(`prod-${productId}`);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.classList.add('highlight-search');
                setTimeout(() => el.classList.remove('highlight-search'), 1000);
            }
        }, 400);
    }

    // --- CORE LOGIC ---
    function openCollection(catId, catName) {
        activeCategory = catId;
        document.getElementById('slider-title').innerText = catName;
        renderProducts(catId);
        orderSidebar.classList.remove('active');
        productSlider.classList.add('active');
        updateSidebar();
        // Add history state so back button closes slider
        history.pushState({ page: 'slider' }, document.title, location.href);
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
                <div class="card" id="prod-${p.id}">
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

    // --- EVENT LISTENERS ---
    collectionGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.collection-card');
        if (card) openCollection(card.dataset.id, card.dataset.name);
    });

    productGrid.addEventListener('click', (e) => {
        const target = e.target;
        if (target.closest('.variant-btn')) {
            const btn = target.closest('.variant-btn');
            const p = products.find(prod => prod.id == btn.dataset.productId);
            p.selectedVariant = btn.dataset.variant;
            renderProducts(activeCategory);
        }
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

    const toggleSidebar = () => {
        const opening = !orderSidebar.classList.contains('active');
        productSlider.classList.remove('active');
        orderSidebar.classList.toggle('active');
        if (opening) {
            history.pushState({ page: 'cart' }, document.title, location.href);
        }
        updateSidebar();
    };

    const toggleSlider = () => {
        const opening = !productSlider.classList.contains('active');
        orderSidebar.classList.remove('active');
        productSlider.classList.toggle('active');
        if (opening) {
            history.pushState({ page: 'slider' }, document.title, location.href);
        }
    };

    document.getElementById('cart-trigger').addEventListener('click', toggleSidebar);
    document.getElementById('cart-popup').addEventListener('click', toggleSidebar);
    document.getElementById('close-sidebar').addEventListener('click', () => history.back());
    document.getElementById('close-slider').addEventListener('click', () => history.back());

    // --- SEARCH & CLEAR LOGIC ---
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        if (query) clearSearch.classList.remove('hidden');
        else clearSearch.classList.add('hidden');

        if (!query) { searchSuggestions.style.display = "none"; return; }
        const matches = products.filter(p => p.name.toLowerCase().includes(query)).slice(0, 6);
        if (matches.length > 0) {
            searchSuggestions.innerHTML = matches.map(p => `
                <div class="suggestion-item" data-id="${p.id}" data-cat="${p.cat}" data-name="${p.name}">
                    <img src="${p.image}" alt="suggest">
                    <span>${p.name}</span>
                </div>
            `).join('');
            searchSuggestions.style.display = "block";
        } else { searchSuggestions.style.display = "none"; }
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.toLowerCase().trim();
            const found = products.find(p => p.name.toLowerCase().includes(query));
            if (found) {
                searchSuggestions.style.display = "none";
                openAndHighlight(found.id, found.cat);
            } else if(query !== "") { 
                alert("Product not found!"); 
            }
        }
    });

    clearSearch.addEventListener('click', () => {
        searchInput.value = "";
        clearSearch.classList.add('hidden');
        searchSuggestions.style.display = "none";
        searchInput.focus();
    });

    searchSuggestions.addEventListener('click', (e) => {
        const item = e.target.closest('.suggestion-item');
        if (item) {
            searchInput.value = item.dataset.name;
            searchSuggestions.style.display = "none";
            openAndHighlight(item.dataset.id, item.dataset.cat);
        }
    });

    document.getElementById('search-btn').addEventListener('click', () => {
        const query = searchInput.value.toLowerCase().trim();
        const found = products.find(p => p.name.toLowerCase().includes(query));
        if (found) {
            openAndHighlight(found.id, found.cat);
        } else { alert("Product not found!"); }
    });

    // --- CHECKOUT ENTER KEY LOGIC ---
    [custNameInput, custAddressInput].forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                whatsappBtn.click();
            }
        });
    });

    // Location Logic
    document.getElementById('location-btn').addEventListener('click', async () => {
        const display = document.getElementById('location-display');
        if (navigator.geolocation) {
            display.innerText = "Locating...";
            navigator.geolocation.getCurrentPosition(async (pos) => {
                userCoords = { lat: pos.coords.latitude, lon: pos.coords.longitude };
                try {
                    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
                    const data = await res.json();
                    custAddressInput.value = data.display_name || "Location Tagged";
                    display.innerText = `✅ Location Tagged`;
                } catch (e) { 
                    custAddressInput.value = `Lat: ${userCoords.lat}, Lon: ${userCoords.lon}`;
                    display.innerText = "✅ Coordinates Captured"; 
                }
            }, () => { display.innerText = "❌ Access Denied"; });
        }
    });

    whatsappBtn.addEventListener('click', () => {
        const name = custNameInput.value;
        const address = custAddressInput.value;
        const total = document.getElementById('total-price').innerText;
        if (total == "0") { alert("Cart is empty!"); return; }
        if (!name || !address) { alert("Please enter Name and Address."); return; }
        let msg = `*🛍️ NEW ORDER - WINK IT* %0A👤 Name: ${name}%0A📍 Address: ${address}%0A🛒 ITEMS:%0A`;
        products.forEach(p => {
            Object.keys(p.variants).forEach(vName => {
                const v = p.variants[vName];
                if (v.count > 0) msg += `- ${p.name} (${vName}) x${v.count} - ₹${v.price * v.count}%0A`;
            });
        });
        msg += `TOTAL: ₹${total}`;
        window.location.href = `https://api.whatsapp.com/send?phone=917983427187&text=${msg}`;
    });
    products.sort((a, b) => a.name.localeCompare(b.name));

    renderCollections();
});