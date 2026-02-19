document.addEventListener('DOMContentLoaded', () => {
    // --- NAVIGATION & HISTORY LOGIC ---
    if (!history.state) {
        history.replaceState({ page: 'grid' }, document.title, location.href);
    }

    window.addEventListener('popstate', function (event) {
        const isSliderOpen = productSlider.classList.contains('active');
        const isCartOpen = orderSidebar.classList.contains('active');

        if (isSliderOpen || isCartOpen) {
            productSlider.classList.remove('active');
            orderSidebar.classList.remove('active');
            return; 
        } else {
            if (sessionStorage.getItem('backPressedOnce')) {
                sessionStorage.removeItem('backPressedOnce');
                history.back(); 
            } else {
                sessionStorage.setItem('backPressedOnce', 'true');
                alert("Press the back button again to exit.");
                setTimeout(function () {
                    sessionStorage.removeItem('backPressedOnce');
                }, 2000);
                history.pushState({ page: 'grid' }, document.title, location.href);
            }
        }
    });
    document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const body = document.body;

    // Only execute logic for screens below 768px
    if (window.innerWidth < 768) {
        if (splash) {
            // 1. Lock scroll while intro plays
            body.classList.add('no-scroll');

            // 2. Wait 5 seconds
            setTimeout(() => {
                // Apply the fade class for visual smoothness
                splash.classList.add('fade-out');
                body.classList.remove('no-scroll');

                // 3. Wait for the 1s CSS fade to finish, then DELETE from DOM
                setTimeout(() => {
                    splash.remove(); 
                    // At this point, the element is gone from the Inspector/Elements tab.
                }, 1000); 
            }, 5000);
        }
    } else {
        // If it's a desktop, remove it immediately without waiting
        if (splash) splash.remove();
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
/*Bevrages*/               
           /*Cold Drink*/{ id: 5, name: "Pepsi",                                    image: "dpepsi.jpg",            cat: "beverages",       subcat: "Cold Drink",       selectedVariant: "S",           variants: { "S":        { price: 40, count: 0, unit: "750ml" }, "L": { price: 90, count: 0, unit: "2L" } } },
                         { id: 7, name: "Maaza",                                    image: "dmaaza.jpg",            cat: "beverages",       subcat: "Cold Drink",       selectedVariant: "S",           variants: { "S":        { price: 40, count: 0, unit: "600ml" }, "L": { price: 80, count: 0, unit: "1.75L" } } },
                         { id: 8, name: "Frooti Mango",                             image: "dfrooti.jpg",           cat: "beverages",       subcat: "Cold Drink",       selectedVariant: "S",           variants: { "S":        { price: 10, count: 0, unit: "150ml" }, "L": { price: 105, count: 0, unit: "2L" } } },
                         { id: 2, name: "Coca-Cola Bottle",                         image: "dcokeb.jpg",            cat: "beverages",       subcat: "Cold Drink",       selectedVariant: "S",           variants: { "S":        { price: 40, count: 0, unit: "750ml" }, "L": { price: 90, count: 0, unit: "2L" } } },

                 /*Milk*/{ id: 9, name: "Amul Kool Kesar",                          image: "damulk.jpg",            cat: "beverages",       subcat: "Milk",             selectedVariant: "S",           variants: { "S":        { price: 25, count: 0, unit: "180ml" } } },
                 
                /*Water*/{ id: 1, name: "Mineral Water",                            image: "dwater.jpg",            cat: "beverages",       subcat: "Water",            selectedVariant: "S",           variants: { "S":        { price: 20, count: 0, unit: "1L" }, "L": { price: 70, count: 0, unit: "5L" } } },
                         
                         { id: 3, name: "Coca-Cola Can",                            image: "dcokec.jpg",            cat: "beverages",       subcat: "Water",            selectedVariant: "S",           variants: { "S":        { price: 40, count: 0, unit: "300ml" } } },
                         { id: 4, name: "Dite Coke Can",                            image: "dcoked.jpg",            cat: "beverages",       subcat: "Water",            selectedVariant: "S",           variants: { "S":        { price: 40, count: 0, unit: "500ml" } } },
                         { id: 6, name: "Pepsi Zero Sugar",                         image: "dpepsiz.jpg",           cat: "beverages",       subcat: "Can",              selectedVariant: "S",           variants: { "S":        { price: 40, count: 0, unit: "300ml" } } },
                
/* Chocolates */
                /*Bars*/{ id: 2001, name: "Crispello",                              image: "chcrispello.jpg",       cat: "chocolates",      subcat: "Bars",             selectedVariant: "Wgt.",        variants: { "Wgt.":     { price: 40, count: 0, unit: "35g" } } },
                        { id: 2004, name: "Fuse",                                   image: "chfuse.jpg",            cat: "chocolates",      subcat: "Bars",             selectedVariant: "Wgt.",        variants: { "Wgt.":     { price: 43, count: 0, unit: "43g" } } },
                        { id: 2006, name: "Kitkat",                                 image: "chkitkat.jpg",          cat: "chocolates",      subcat: "Bars",             selectedVariant: "Wgt.",        variants: { "Wgt.":     { price: 30, count: 0, unit: "38.5g" } } },

                /*Dark*/{ id: 2002, name: "Amul Dark Chocolate",                    image: "chdc.jpg",              cat: "chocolates",      subcat: "Dark",             selectedVariant: "Wgt.",        variants: { "Wgt.":     { price: 45, count: 0, unit: "35g" } } },
                        { id: 2007, name: "Amul Velvett",                           image: "chvelvett.jpg",         cat: "chocolates",      subcat: "Dark",             selectedVariant: "Wgt.",        variants: { "Wgt.":     { price: 50, count: 0, unit: "35g" } } },

             /*Premium*/{ id: 2003, name: "Fruit and Nut",                          image: "chfruitnnut.jpg",       cat: "chocolates",      subcat: "Premium",          selectedVariant: "Wgt.",        variants: { "Wgt.":     { price: 100, count: 0, unit: "75g" } } },

                /*Kids*/{ id: 2005, name: "Kinder joy",                             image: "chkinderjoy.jpg",       cat: "chocolates",      subcat: "Kids",             selectedVariant: "Wgt.",        variants: { "Wgt.":     { price: 45, count: 0, unit: "20g" } } },
                
/* Biscuits */
               /*Salty*/{ id: 3001, name: "Crack Jack",                             image: "bicrakjack.jpg",        cat: "biscuits",        subcat: "Salty",            selectedVariant: "L",           variants: { "L":        { price: 35, count: 0, unit: "176.4g" } } },

             /*Premium*/{ id: 3002, name: "Dark Fantasy",                           image: "bidf.jpg",              cat: "biscuits",        subcat: "Premium",          selectedVariant: "L",           variants: { "L":        { price: 40, count: 0, unit: "69g" } } },
                        { id: 3004, name: "Good Day ChocoChip",                     image: "bigooddaychoco.jpg",    cat: "biscuits",        subcat: "Premium",          selectedVariant: "L",           variants: { "L":        { price: 100, count: 0, unit: "444g" } } },
                        { id: 3006, name: "Hide and Seek",                          image: "bihideandseek.jpg",     cat: "biscuits",        subcat: "Premium",          selectedVariant: "L",           variants: { "L":        { price: 45, count: 0, unit: "200g" } } },
                        { id: 3009, name: "Oreo",                                   image: "bioreo.jpg",            cat: "biscuits",        subcat: "Premium",          selectedVariant: "L",           variants: { "L":        { price: 40, count: 0, unit: "125g" } } },

               /*Sweet*/{ id: 3003, name: "Good Day Cashew",                        image: "bigooddayc.jpg",        cat: "biscuits",        subcat: "Sweet",            selectedVariant: "L",           variants: { "L":        { price: 40, count: 0, unit: "200 g" } } },
                        { id: 3005, name: "Good Day Pista",                         image: "bigooddayp.jpg",        cat: "biscuits",        subcat: "Sweet",            selectedVariant: "L",           variants: { "L":        { price: 50, count: 0, unit: "200 g" } } },
                        { id: 3008, name: "Milk Bikis",                             image: "bimb.jpg",              cat: "biscuits",        subcat: "Sweet",            selectedVariant: "L",           variants: { "L":        { price: 70, count: 0, unit: "500g" } }  },

            /*Tea Time*/{ id: 3007, name: "Marigold",                               image: "bimari.jpg",            cat: "biscuits",        subcat: "TeaTime",          selectedVariant: "L",           variants: { "L":        { price: 40, count: 0, unit: "208g" } } },
                        { id: 3010, name: "Parle-G",                                image: "biparleg.jpg",          cat: "biscuits",        subcat: "TeaTime",          selectedVariant: "L",           variants: { "L":        { price: 80, count: 0, unit: "800g" } } },
                
/* Snacks */
             /*Kurkure*/{ id: 4001, name: "Kurkure Chutney",                        image: "skurkurec.jpg",         cat: "snacks",          subcat: "Kurkure",          selectedVariant: "S",           variants: { "S":        { price: 10, count: 0, unit: "40g" }, "L": { price: 25, count: 0, unit: "75g" } } },
                        { id: 4002, name: "Kurkure Chilli",                         image: "skurkurecc.jpg",        cat: "snacks",          subcat: "Kurkure",          selectedVariant: "S",           variants: { "S":        { price: 10, count: 0, unit: "40g" }, "L": { price: 25, count: 0, unit: "75g" } } },
                        { id: 4003, name: "Kurkure Masala",                         image: "skurkurem.jpg",         cat: "snacks",          subcat: "Kurkure",          selectedVariant: "S",           variants: { "S":        { price: 10, count: 0, unit: "40g" }, "L": { price: 25, count: 0, unit: "75g" } } },

               /*Chips*/{ id: 4004, name: "Lay's India's M",                        image: "slaysb.jpg",            cat: "snacks",          subcat: "Chips",            selectedVariant: "S",           variants: { "S":        { price: 10, count: 0, unit: "75g" }, "L": { price: 25, count: 0, unit: "200g" } } },
                        { id: 4005, name: "Lay's American",                         image: "slaysg.jpg",            cat: "snacks",          subcat: "Chips",            selectedVariant: "S",           variants: { "S":        { price: 10, count: 0, unit: "75g" }, "L": { price: 25, count: 0, unit: "200g" } } },
                        { id: 4006, name: "Lay's Classic",                          image: "slaysy.jpg",            cat: "snacks",          subcat: "Chips",            selectedVariant: "S",           variants: { "S":        { price: 10, count: 0, unit: "75g" }, "L": { price: 25, count: 0, unit: "200g" } } },
                        
             /*Namkeen*/{ id: 4007, name: "Punjabi Tadka",                          image: "spunjabi.jpg",          cat: "snacks",          subcat: "Namkeen",          selectedVariant: "S",           variants: { "S":        { price: 10, count: 0, unit: "75g" }, "L": { price: 20, count: 0, unit: "200g" } } },
                        { id: 4008, name: "Bhujia",                                 image: "sbhujia.jpg",           cat: "snacks",          subcat: "Namkeen",          selectedVariant: "S",           variants: { "S":        { price: 10, count: 0, unit: "75g" }, "L": { price: 20, count: 0, unit: "200g" } } },
                        { id: 4009, name: "Salted Peanuts",                         image: "ssalted.jpg",           cat: "snacks",          subcat: "Namkeen",          selectedVariant: "S",           variants: { "S":        { price: 10, count: 0, unit: "75g" }, "L": { price: 20, count: 0, unit: "200g" } } },
                        { id: 4010, name: "Gup Shup",                               image: "sgup.jpg",              cat: "snacks",          subcat: "Namkeen",          selectedVariant: "S",           variants: { "S":        { price: 10, count: 0, unit: "75g" }, "L": { price: 20, count: 0, unit: "200g" } } },
                
/* Personal */
                /*Hair*/{ id: 5001, name: "Comb 15cm",                              image: "pccomb.jpg",            cat: "personal",        subcat: "Hair",             selectedVariant: "Size",        variants: { "Size":     { price: 50, count: 0, unit: "20cm" } } },
                        { id: 5002, name: "Almond Oil",                             image: "pcalmond.jpg",          cat: "personal",        subcat: "Hair",             selectedVariant: "Bottle",      variants: { "Bottle":   { price: 85, count: 0, unit: "95ml" } } },
                        { id: 5007, name: "Head and Shoulders Anti Dandruff",       image: "pcshampoo.jpg",         cat: "personal",        subcat: "Hair",             selectedVariant: "Bottle",      variants: { "Bottle":   { price: 181, count: 0, unit: "180ml" } } },
                        

                /*Soap*/{ id: 5004, name: "Pears Pack of 3",                        image: "pcpears.jpg",           cat: "personal",        subcat: "Soap",             selectedVariant: "Piece",       variants: { "Piece":    { price: 200, count: 0, unit: "1pk" } } },

            /*Grooming*/{ id: 5005, name: "Scissors 2 X 4.25inch",                  image: "pcscissors.jpg",        cat: "personal",        subcat: "Grooming",         selectedVariant: "Size",        variants: { "Size":     { price: 50, count: 0, unit: "2x4inch" } } },
                        { id: 5006, name: "Handkerchief pack of 3",                 image: "pchandkerchief.jpg",    cat: "personal",        subcat: "Grooming",         selectedVariant: "Piece",       variants: { "Piece":    { price: 170, count: 0, unit: "1pk" } } },
                        { id: 5003, name: "Gillette Mac 3 Razor",                   image: "pcgillette.jpg",        cat: "personal",        subcat: "Grooming",         selectedVariant: "Piece",       variants: { "Piece":    { price: 192, count: 0, unit: "1pc" } } },

              /*Dental*/{ id: 5008, name: "Colgate",                                image: "pccolgate.jpg",         cat: "personal",        subcat: "Dental",           selectedVariant: "Tube",        variants: { "Tube":     { price: 120, count: 0, unit: "180ml" } } },
                        { id: 5009, name: "Oral-B Pro Clean",                       image: "pcoralb.jpg",           cat: "personal",        subcat: "Dental",           selectedVariant: "Piece",       variants: { "Piece":    { price: 50, count: 0, unit: "1pc" } } }
        ];

    let recentAdditions = [];
    let activeCategory = "";
    let userCoords = null;

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
    const pgroupslider = document.getElementById('pgroupslider');

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

    function openCollection(catId, catName) {
        activeCategory = catId;
        document.getElementById('slider-title').innerText = catName;
        renderProducts(catId);
        orderSidebar.classList.remove('active');
        productSlider.classList.add('active');
        updateSidebar();
        history.pushState({ page: 'slider' }, document.title, location.href);
    }

    function renderProducts(catId) {
        const filtered = products.filter(p => p.cat === catId);
        if (filtered.length === 0) {
            productGrid.innerHTML = `<p class="empty-msg">Empty for now.</p>`;
            pgroupslider.innerHTML = "";
            return;
        }

        // ... inside renderProducts(catId) ...

        const subcatData = [];
        filtered.forEach(p => {
            // Check if subcat already exists in our list
            if (!subcatData.find(s => s.name === p.subcat)) {
                subcatData.push({ name: p.subcat, image: p.image });
            }
        });

        // --- ADD THIS SORTING BLOCK HERE ---
        subcatData.sort((a, b) => a.name.localeCompare(b.name));
        // -----------------------------------

        pgroupslider.innerHTML = subcatData.map(sub => `
            <div class="subcat-nav-item" data-target="sub-${sub.name.replace(/\s+/g, '')}">
                <img src="${sub.image}" alt="${sub.name}">
                <span>${sub.name}</span>
            </div>
        `).join('');

        // ... rest of the function ...

        const sortedProducts = [...filtered].sort((a, b) => a.subcat.localeCompare(b.subcat));
        const usedSubcats = new Set();

        productGrid.innerHTML = sortedProducts.map(p => {
            const currentVar = p.variants[p.selectedVariant];
            const cleanSubName = p.subcat.replace(/\s+/g, '');
            let anchorIdAttr = "";
            if (!usedSubcats.has(cleanSubName)) {
                anchorIdAttr = `id="sub-${cleanSubName}"`;
                usedSubcats.add(cleanSubName);
            }

            return `
                <div class="card" ${anchorIdAttr} data-subcat="${cleanSubName}" data-prod-id="${p.id}">
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

    // --- SCROLL SYNC & NAVIGATION ---
    pgroupslider.addEventListener('click', (e) => {
    const item = e.target.closest('.subcat-nav-item');
    if (item) {
        // --- ADD THE HIGHLIGHT ---
        item.classList.add('subcat-active-highlight');
        
        // --- REMOVE IT AFTER 2 SECONDS ---
        setTimeout(() => {
            item.classList.remove('subcat-active-highlight');
        }, 1000);

        const targetId = item.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const container = document.getElementById('product-slider');
            const headerOffset = 85; 
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            container.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }
});

    // Synchronized Scroll Logic
    productGrid.addEventListener('scroll', () => {
        // 1. Move the sidebar scroll position based on product grid scroll percentage
        const productScrollTotal = productGrid.scrollHeight - productGrid.clientHeight;
        if (productScrollTotal > 0) {
            const scrollPct = productGrid.scrollTop / productScrollTotal;
            const sliderScrollTotal = pgroupslider.scrollHeight - pgroupslider.clientHeight;
            pgroupslider.scrollTop = scrollPct * sliderScrollTotal;
        }

        // 2. Auto-Highlight Active Subcategory Icon
        const sections = productGrid.querySelectorAll('.card[id^="sub-"]');
        let currentSectionId = "";
        sections.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            if (rect.top <= productGrid.getBoundingClientRect().top + 100) {
                currentSectionId = sec.id;
            }
        });

        document.querySelectorAll('.subcat-nav-item').forEach(nav => {
            nav.classList.toggle('active', nav.getAttribute('data-target') === currentSectionId);
        });
    });

    function openAndHighlight(productId, catId) {
        const col = collections.find(c => c.id === catId);
        openCollection(catId, col.name);
        setTimeout(() => {
            const el = document.querySelector(`[data-prod-id="${productId}"]`);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.classList.add('highlight-search');
                setTimeout(() => el.classList.remove('highlight-search'), 1000);
            }
        }, 400);
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
        
        document.body.style.marginBottom = totalItems > 0 ? "7rem" : "0";

        if(totalItems > 0 && !orderSidebar.classList.contains('active')) {
            cartPopup.classList.remove('hidden');
            document.getElementById('popup-count').innerText = totalItems;
            document.getElementById('popup-images-container').innerHTML = [...new Set(recentAdditions)].slice(0, 5).map(img => `<img src="${img}" alt="recent">`).join('');
        } else { cartPopup.classList.add('hidden'); }
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
        if (opening) history.pushState({ page: 'cart' }, document.title, location.href);
        updateSidebar();
    };

    document.getElementById('cart-trigger').addEventListener('click', toggleSidebar);
    document.getElementById('cart-popup').addEventListener('click', toggleSidebar);
    document.getElementById('close-sidebar').addEventListener('click', () => history.back());
    document.getElementById('close-slider').addEventListener('click', () => history.back());

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        clearSearch.classList.toggle('hidden', !query);
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
            } else if(query !== "") { alert("Product not found!"); }
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
        if (found) { openAndHighlight(found.id, found.cat); } else { alert("Product not found!"); }
    });

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
    const subtotal = document.getElementById('subtotal-val').innerText;
    const delivery = document.getElementById('delivery-val').innerText;
    const total = document.getElementById('total-price').innerText;
    
    if (total == "0") { alert("Cart is empty!"); return; }
    if (!name || !address) { alert("Please enter Name and Address."); return; }
    
    // Date & Time formatting
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-GB'); 
    const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

    const locationLink = userCoords ? `http://googleusercontent.com/maps.google.com/${userCoords.lat},${userCoords.lon}` : `(Location not tagged)`;
    const divider = "--------------------------%0A";
    
    let msg = `🛍️ *NEW ORDER - WINK IT*%0A`;
    msg += divider;
    msg += `📅 Date: ${dateStr} | ${timeStr}%0A`;
    msg += `👤 Name: ${name}%0A📍 Address: ${address}%0A🗺️ Location: ${locationLink}%0A%0A`;
    msg += `🛒 *ITEMS:*%0A`;
    
    let itemIndex = 1;
    products.forEach(p => {
        Object.keys(p.variants).forEach(vName => {
            const v = p.variants[vName];
            if (v.count > 0) {
                msg += `${itemIndex}. ${p.name} (${v.unit}) x${v.count} - ₹${v.price * v.count}%0A`;
                itemIndex++; 
            }
        });
    });

    msg += divider;
    msg += `Subtotal: ₹${subtotal}%0A`;
    msg += `Delivery: ₹${delivery}%0A`;
    // THIS LINE MAKES IT BOLD:
    msg += `*TOTAL AMOUNT: ₹${total}*%0A`; 
    msg += divider;
    msg += `Cash on Delivery, our delivery partner will call you shortly.`;
    
    window.location.href = `https://api.whatsapp.com/send?phone=917983427187&text=${msg}`;
});

    products.sort((a, b) => a.name.localeCompare(b.name));
    renderCollections();
});