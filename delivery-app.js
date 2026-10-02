// delivery-app.js

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. PRODUCT DATABASE & STATES
    // ==========================================
    const products = [
        // Category: Snacks & Fast Food (munchies)
        { id: 'm1', name: 'Chapo Smokie Roll', category: 'munchies', price: 60, desc: 'A legendary campus classic: two hot chapati rolled with a smokie sausage and fresh kachumbari.', badge: 'popular' },
        { id: 'm2', name: 'Kibandaski Mix', category: 'munchies', price: 80, desc: 'Affordable campus fuel: thick white ugali served with yellow beans and fried sukuma wiki.' },
        { id: 'm3', name: 'Campus Special Fries', category: 'munchies', price: 100, desc: 'Freshly cut Kutus potatoes deep-fried to a golden crisp, seasoned with salt and tomato sauce.' },
        { id: 'm4', name: 'Savannah Potato Crisps (L)', category: 'munchies', price: 150, desc: 'Large pack of salty and vinegar flavored potato chips. Perfect for studying crunch sessions.' },
        { id: 'm5', name: 'Cadbury Dairy Milk Chocolate', category: 'munchies', price: 120, desc: 'Smooth milk chocolate bar (80g) for quick sugar hits during night coding or studies.' },

        // Category: Grocery Kitchen (groceries)
        { id: 'g1', name: 'Eggs (Full Crate)', category: 'groceries', price: 450, desc: 'A full crate of 30 fresh farm eggs. The ultimate protein supply for campus kitchens.', badge: 'best value' },
        { id: 'g2', name: 'Eggs (Half Crate)', category: 'groceries', price: 230, desc: 'A half crate of 15 fresh farm eggs for students with smaller storage spaces.' },
        { id: 'g3', name: 'Comrade Kitchen Combo', category: 'groceries', price: 350, desc: 'Essential cooking kit: 2kg potatoes, 1kg onions, 1kg ripe tomatoes, and 250ml cooking oil.', badge: 'recommended' },
        { id: 'g4', name: 'Dola Maize Flour (2kg)', category: 'groceries', price: 160, desc: 'Premium sifted maize meal for cooking delicious, smooth campus ugali.' },
        { id: 'g5', name: 'Brookside Fresh Milk (500ml)', category: 'groceries', price: 65, desc: 'Pasteurized whole milk. Perfect for morning tea, coffee or cooking.' },
        { id: 'g6', name: 'Daawat Long Grain Rice (2kg)', category: 'groceries', price: 280, desc: 'Easy-to-cook, aromatic long-grain white rice for quick meals.' },

        // Category: Fresh Cuts & Meat (meat)
        { id: 'mt1', name: 'Beef Boneless (1kg)', category: 'meat', price: 680, desc: 'Fresh, lean local beef from Kutus butcheries. Perfect for stews and stir-fries.', badge: 'fresh' },
        { id: 'mt2', name: 'Goat Meat / Mbuzi (1kg)', category: 'meat', price: 800, desc: 'Fresh cuts of goat meat. Ideal for weekend roasting and campus celebrations.' },
        { id: 'mt3', name: 'Fresh Broiler Chicken (Whole)', category: 'meat', price: 600, desc: 'Full dressed broiler chicken ready for baking, boiling, or frying.' },
        { id: 'mt4', name: 'Pork Chops (1kg)', category: 'meat', price: 650, desc: 'Succulent, tender pork chops cut fresh from selected Kutus farms.' },
        { id: 'mt5', name: 'Farmer\'s Choice Sausages (10pk)', category: 'meat', price: 380, desc: 'Pre-packed pork sausages (10 pieces). Easy to shallow fry for breakfast or snacks.' },

        // Category: Comrade Pub & Liquor (liquor)
        { id: 'l1', name: 'Gilbeys Special Dry Gin (750ml)', category: 'liquor', price: 1200, desc: 'Classic dry gin, a campus favorite. Alcohol content: 37.5%. Must be 18+ to order.', badge: '18+ only' },
        { id: 'l2', name: 'Chrome Vodka (750ml)', category: 'liquor', price: 750, desc: 'Smooth Kenyan vodka, budget-friendly for student parties. Must be 18+ to order.' },
        { id: 'l3', name: 'Kenya Cane Original (350ml)', category: 'liquor', price: 450, desc: 'A historic cane spirit (KC), locally loved and very potent. Must be 18+ to order.' },
        { id: 'l4', name: 'Tusker Cider (6-Pack Cans)', category: 'liquor', price: 1100, desc: '6 cans of crisp, apple-flavored cider beer. Crisp and refreshing. Must be 18+ to order.', badge: 'party size' },
        { id: 'l5', name: 'Tusker Cider (Single Can)', category: 'liquor', price: 190, desc: 'Single 500ml can of cold apple Tusker cider.' },
        { id: 'l6', name: 'Guinness Stout Can (500ml)', category: 'liquor', price: 220, desc: 'Rich, dark stout beer for traditionalists. Best served chilled. Must be 18+ to order.' },
        { id: 'l7', name: 'Coca-Cola Mixer (1.25L)', category: 'liquor', price: 120, desc: 'Large cold bottle of Coca-Cola. The ultimate mixer for spirits.' },

        // Category: Party Packages (party)
        { id: 'p1', name: 'Sherehe Starter Pack', category: 'party', price: 950, desc: 'Everything you need: 1 Chrome Vodka 750ml, 1 Coca-Cola 1.25L, 1 Large Crisps pack, and 10 plastic cups.', badge: 'best seller' },
        { id: 'p2', name: 'Friday Cider Vibe Package', category: 'party', price: 1950, desc: '10 cans of cold Tusker Cider, 1 Large family fries bucket, and 1 pack of hot chili chicken wings.', badge: 'weekend fave' },
        { id: 'p3', name: 'Birthday Bash Combo', category: 'party', price: 2200, desc: '1kg Vanilla/Chocolate cake, 2 bottles of Del Monte juice, party balloons, and 10 paper plates/spoons.' },
        { id: 'p4', name: 'Mbuzi Fry Vibe Pack', category: 'party', price: 1900, desc: '2kg Fresh Mbuzi cuts, 1 bunch spinach, 2kg maize flour, 1 pack of onions, and a small sack of charcoal.' },

        // Category: Student Essentials (essentials)
        { id: 'e1', name: 'A4 College Exercise Book', category: 'essentials', price: 100, desc: '200-page ruled college notebook for lecture notes and revision.' },
        { id: 'e2', name: 'Bic Fine Point Pens (5pk)', category: 'essentials', price: 60, desc: 'Pack of 5 high-quality blue ink writing pens. Never run out during exams.' },
        { id: 'e3', name: 'Panadol Painkillers (2 Strips)', category: 'essentials', price: 50, desc: 'Fast-acting paracetamol strips for quick relief from headaches and study strain.' },
        { id: 'e4', name: 'Always Ultra Sanitary Pads', category: 'essentials', price: 100, desc: 'Reliable, comfortable sanitary pads for daily student hygiene.' },
        { id: 'e5', name: 'Pocket Tissues (Pack of 4)', category: 'essentials', price: 80, desc: 'Soft paper pocket tissues. Convenient to carry in your lecture bags.' }
    ];

    let cart = [];
    let isStoreOpen = false;

    // ==========================================
    // 2. DYNAMIC TIMING LOGIC (8:00 AM - 10:00 PM)
    // ==========================================
    function updateStoreStatus() {
        const now = new Date();
        const currentHour = now.getHours();
        const statusMessage = document.getElementById('status-message');
        const statusDot = document.getElementById('status-dot');

        // Open hours: 8:00 AM (8) to 10:00 PM (22)
        if (currentHour >= 8 && currentHour < 22) {
            isStoreOpen = true;
            statusDot.className = 'status-indicator open';
            statusMessage.textContent = '🟢 Open Now: Fast Delivery to Kutus Town & KyU Hostels (Closes at 10:00 PM)';
        } else {
            isStoreOpen = false;
            statusDot.className = 'status-indicator closed';
            statusMessage.textContent = '🔴 Closed: We are closed. Ordering now schedules your delivery for tomorrow at 8:00 AM!';
        }
    }

    // Initialize store status check
    updateStoreStatus();
    // Re-check every 30 seconds
    setInterval(updateStoreStatus, 30000);


    // ==========================================
    // 3. NAVIGATION AND TABS SWITCHING
    // ==========================================
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    const footerNavLinks = document.querySelectorAll('.footer-nav-link');

    function switchTab(tabId, subLinkLegal = null) {
        // Remove active class from all nav items
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-tab') === tabId) {
                item.classList.add('active');
            }
        });

        // Remove active class from mobile nav items
        document.querySelectorAll('.mobile-nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-tab') === tabId) {
                item.classList.add('active');
            }
        });

        // Hide all tab contents
        tabContents.forEach(tab => {
            tab.classList.remove('active');
        });

        // Show selected tab content
        const targetTab = document.getElementById(`tab-${tabId}`);
        if (targetTab) {
            targetTab.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Handle sub-link inside terms/privacy page
        if (tabId === 'legal' && subLinkLegal) {
            const privacyBtn = document.querySelector('.legal-tab-btn[data-legal="privacy"]');
            const termsBtn = document.querySelector('.legal-tab-btn[data-legal="terms"]');
            const privacySec = document.getElementById('legal-privacy');
            const termsSec = document.getElementById('legal-terms');

            if (subLinkLegal === 'privacy') {
                privacyBtn.classList.add('active');
                termsBtn.classList.remove('active');
                privacySec.style.display = 'block';
                termsSec.style.display = 'none';
            } else if (subLinkLegal === 'terms') {
                termsBtn.classList.add('active');
                privacyBtn.classList.remove('active');
                termsSec.style.display = 'block';
                privacySec.style.display = 'none';
            }
        }
    }


    // Header Links Click
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabId = item.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Logo Click triggers home tab
    document.getElementById('logo-link').addEventListener('click', (e) => {
        e.preventDefault();
        switchTab('home');
    });

    // Footer Links Click
    footerNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = link.getAttribute('data-tab');
            const legalSub = link.getAttribute('data-legal');
            switchTab(tabId, legalSub);
        });
    });

    // Header shadow on scroll
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Hamburger Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNavDrawer = document.getElementById('mobile-nav');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

    mobileMenuBtn.addEventListener('click', () => {
        mobileNavDrawer.classList.toggle('open');
    });

    mobileNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabId = item.getAttribute('data-tab');
            switchTab(tabId);
            mobileNavDrawer.classList.remove('open');
        });
    });



    // Legal Sub-Tabs Switch (Privacy vs Terms)
    const legalTabBtns = document.querySelectorAll('.legal-tab-btn');
    const legalPrivacy = document.getElementById('legal-privacy');
    const legalTerms = document.getElementById('legal-terms');

    legalTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            legalTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const section = btn.getAttribute('data-legal');
            if (section === 'privacy') {
                legalPrivacy.style.display = 'block';
                legalTerms.style.display = 'none';
            } else {
                legalTerms.style.display = 'block';
                legalPrivacy.style.display = 'none';
            }
        });
    });


    // ==========================================
    // 4. THEME MANAGEMENT (Light / Dark Mode)
    // ==========================================
    const themeToggle = document.getElementById('theme-toggle');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    const sunIcon = themeToggle.querySelector('.sun-icon');

    // Load theme from cache or check system preferences
    const cachedTheme = localStorage.getItem('delivery-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (cachedTheme === 'dark' || (!cachedTheme && systemPrefersDark)) {
        document.documentElement.classList.add('dark');
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        document.documentElement.classList.remove('dark');
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('delivery-theme', isDark ? 'dark' : 'light');
        
        if (isDark) {
            moonIcon.style.display = 'none';
            sunIcon.style.display = 'block';
            showToast('🌙 Dark Mode Enabled');
        } else {
            moonIcon.style.display = 'block';
            sunIcon.style.display = 'none';
            showToast('☀️ Light Mode Enabled');
        }
    });


    // ==========================================
    // 5. TOAST NOTIFICATION UTILITY
    // ==========================================
    function showToast(text, type = 'default') {
        const toastContainer = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        // Icon matching toast type
        let icon = 'ℹ️';
        if (type === 'success') icon = '✅';
        if (type === 'error') icon = '❌';

        toast.innerHTML = `<span>${icon}</span> <span>${text}</span>`;
        toastContainer.appendChild(toast);

        // Remove after 3.5 seconds
        setTimeout(() => {
            toast.style.animation = 'fadeIn 0.3s ease-out reverse';
            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 3500);
    }


    // ==========================================
    // 6. RENDER PRODUCTS GRID & CATEGORY FILTERS
    // ==========================================
    const categoryBtns = document.querySelectorAll('.category-btn');
    const currentCategoryTitle = document.getElementById('current-category-title');
    const itemsCountDisplay = document.getElementById('items-count-display');
    const productsGrid = document.getElementById('products-grid');

    // Render products based on active category filters
    function renderProducts(categoryFilter = 'all') {
        productsGrid.innerHTML = '';
        
        const filtered = categoryFilter === 'all' 
            ? products 
            : products.filter(p => p.category === categoryFilter);

        itemsCountDisplay.textContent = `${filtered.length} item${filtered.length !== 1 ? 's' : ''} available`;

        filtered.forEach(p => {
            const card = document.createElement('article');
            card.className = 'product-card';
            
            // Build custom SVG shapes representing product placeholders
            let productSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">`;
            if (p.category === 'munchies') {
                productSVG += `<path d="M6 10h12M3 10a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-1z"></path><path d="M6 14v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4"></path><path d="M7 6h10"></path>`;
            } else if (p.category === 'groceries') {
                productSVG += `<path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path>`;
            } else if (p.category === 'meat') {
                productSVG += `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>`;
            } else if (p.category === 'liquor') {
                productSVG += `<path d="M6 3h12v3H6z"></path><path d="M9 6v15h6V6"></path><circle cx="12" cy="12" r="1.5"></circle>`;
            } else if (p.category === 'party') {
                productSVG += `<path d="M12 2L2 22h20L12 2z"></path><path d="M12 8v8"></path><path d="M8 12h8"></path>`;
            } else {
                productSVG += `<path d="M12 20h9M3 20v-8a2 2 0 0 1 2-2h4M3 12h6M9 20h6M9 6a3 3 0 1 1 6 0v14"></path>`;
            }
            productSVG += `</svg>`;

            const badgeHTML = p.badge ? `<span class="product-badge ${p.category === 'party' ? 'party' : ''}">${p.badge}</span>` : '';

            card.innerHTML = `
                <div class="product-img-container">
                    ${badgeHTML}
                    ${productSVG}
                </div>
                <div class="product-info">
                    <h3 class="product-title">${p.name}</h3>
                    <p class="product-desc">${p.desc}</p>
                    <div class="product-footer">
                        <span class="product-price">KES ${p.price}</span>
                        <button class="add-to-cart-btn" data-id="${p.id}">+</button>
                    </div>
                </div>
            `;

            productsGrid.appendChild(card);
        });

        // Bind addToCart triggers
        const addBtns = productsGrid.querySelectorAll('.add-to-cart-btn');
        addBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.getAttribute('data-id');
                addToCart(id);
            });
        });
    }

    // Category Sidebar click handlers
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            
            // Set heading matching selection
            const catName = btn.textContent.trim().substring(3);
            currentCategoryTitle.textContent = category === 'all' ? 'All Categories' : catName;
            
            renderProducts(category);
        });
    });

    // Populate products grid initial run
    renderProducts('all');


    // ==========================================
    // 7. CART DRAWER ANIMATION & OPERATIONS
    // ==========================================
    const cartDrawer = document.getElementById('cart-drawer');
    const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
    const cartTrigger = document.getElementById('cart-trigger');
    const cartClose = document.getElementById('cart-close');
    const checkoutBtn = document.getElementById('checkout-btn');

    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const cartBadgeCount = document.getElementById('cart-badge-count');

    function toggleCartDrawer(open) {
        if (open) {
            cartDrawer.classList.add('active');
            cartDrawerOverlay.classList.add('active');
        } else {
            cartDrawer.classList.remove('active');
            cartDrawerOverlay.classList.remove('active');
        }
    }

    cartTrigger.addEventListener('click', () => toggleCartDrawer(true));
    cartClose.addEventListener('click', () => toggleCartDrawer(false));
    cartDrawerOverlay.addEventListener('click', () => toggleCartDrawer(false));

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existing = cart.find(item => item.id === productId);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...product, qty: 1 });
        }

        showToast(`Added ${product.name} to cart`, 'success');
        updateCartUI();
    }

    function updateCartQty(productId, delta) {
        const item = cart.find(item => item.id === productId);
        if (!item) return;

        item.qty += delta;
        if (item.qty <= 0) {
            // Remove item from cart
            cart = cart.filter(item => item.id !== productId);
            showToast('Item removed from cart');
        }
        updateCartUI();
    }

    function updateCartUI() {
        // Calculate items and counts
        let totalItems = 0;
        let subtotal = 0;

        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-cart-view">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    <p>Your cart is empty</p>
                    <p style="font-size: 0.8rem; margin-top: 0.25rem;">Add groceries, snacks or party packs to get started!</p>
                </div>
            `;
            checkoutBtn.disabled = true;
        } else {
            checkoutBtn.disabled = false;

            cart.forEach(item => {
                totalItems += item.qty;
                const itemTotal = item.price * item.qty;
                subtotal += itemTotal;

                const itemRow = document.createElement('div');
                itemRow.className = 'cart-item';
                itemRow.innerHTML = `
                    <div class="cart-item-info">
                        <h4 class="cart-item-title">${item.name}</h4>
                        <p class="cart-item-price">KES ${item.price} × ${item.qty}</p>
                    </div>
                    <div class="cart-item-controls">
                        <button class="qty-btn minus-btn" data-id="${item.id}">-</button>
                        <span class="qty-value">${item.qty}</span>
                        <button class="qty-btn plus-btn" data-id="${item.id}">+</button>
                    </div>
                `;

                cartItemsContainer.appendChild(itemRow);
            });

            // Bind quantity events
            const minusBtns = cartItemsContainer.querySelectorAll('.minus-btn');
            const plusBtns = cartItemsContainer.querySelectorAll('.plus-btn');

            minusBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = btn.getAttribute('data-id');
                    updateCartQty(id, -1);
                });
            });

            plusBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = btn.getAttribute('data-id');
                    updateCartQty(id, 1);
                });
            });
        }

        // Totals calculations
        const deliveryFee = cart.length > 0 ? 50 : 0;
        const total = subtotal + deliveryFee;

        cartBadgeCount.textContent = totalItems;
        cartSubtotal.textContent = `KES ${subtotal}`;
        cartTotal.textContent = `KES ${total}`;
    }


    // ==========================================
    // 8. CHECKOUT FORM DIALOG CONTROL
    // ==========================================
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckout = document.getElementById('close-checkout');
    const cancelCheckout = document.getElementById('cancel-checkout');
    const checkoutForm = document.getElementById('checkout-form');
    const deliveryLocationSelect = document.getElementById('delivery-location');
    const otherLocationGroup = document.getElementById('other-location-group');
    const otherLocationInput = document.getElementById('other-location');

    function toggleCheckoutModal(open) {
        if (open) {
            // Fill M-Pesa amount display beforehand
            const totalText = cartTotal.textContent;
            document.getElementById('mpesa-amount').textContent = totalText.replace('KES ', '');

            checkoutModal.classList.add('active');
            toggleCartDrawer(false); // Hide the cart drawer
        } else {
            checkoutModal.classList.remove('active');
        }
    }

    checkoutBtn.addEventListener('click', () => toggleCheckoutModal(true));
    closeCheckout.addEventListener('click', () => toggleCheckoutModal(false));
    cancelCheckout.addEventListener('click', () => toggleCheckoutModal(false));

    // Show specified text field if delivery spot is 'Other'
    deliveryLocationSelect.addEventListener('change', () => {
        if (deliveryLocationSelect.value === 'Other') {
            otherLocationGroup.style.display = 'flex';
            otherLocationInput.required = true;
        } else {
            otherLocationGroup.style.display = 'none';
            otherLocationInput.required = false;
        }
    });


    // ==========================================
    // 9. M-PESA POPUP PIN SIMULATION
    // ==========================================
    const mpesaModal = document.getElementById('mpesa-modal');
    const mpesaPinInput = document.getElementById('mpesa-pin');
    const mpesaCancelBtn = document.getElementById('mpesa-cancel');
    const mpesaOkBtn = document.getElementById('mpesa-ok');
    
    let pendingOrderData = null;

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Grab forms parameters
        const name = document.getElementById('student-name').value;
        const mainLoc = deliveryLocationSelect.value;
        const otherLoc = otherLocationInput.value;
        const loc = mainLoc === 'Other' ? otherLoc : mainLoc;
        const room = document.getElementById('room-number').value;
        const mpesaPhone = document.getElementById('mpesa-number').value;
        const instructions = document.getElementById('special-notes').value;

        pendingOrderData = { name, loc, room, mpesaPhone, instructions };

        // Open M-Pesa Simulator
        toggleCheckoutModal(false);
        mpesaModal.classList.add('active');
        mpesaPinInput.value = '';
        mpesaPinInput.focus();
    });

    mpesaCancelBtn.addEventListener('click', () => {
        mpesaModal.classList.remove('active');
        showToast('M-Pesa payment cancelled by user.', 'error');
    });

    mpesaOkBtn.addEventListener('click', () => {
        const pin = mpesaPinInput.value;
        if (pin.length < 4) {
            showToast('Invalid PIN! Please enter a 4-digit PIN.', 'error');
            return;
        }

        // Hide M-Pesa phone mockup
        mpesaModal.classList.remove('active');
        showToast('M-Pesa transaction confirmed! Processing order...', 'success');
        
        // Launch order tracker!
        launchOrderTracker();
    });

    // Handle M-Pesa enter key
    mpesaPinInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            mpesaOkBtn.click();
        }
    });


    // ==========================================
    // 10. GLOVO-LIKE ORDER TRACKER SIMULATION
    // ==========================================
    const trackerModal = document.getElementById('tracker-modal');
    const trackerIdPlaceholder = document.getElementById('tracker-id-placeholder');
    const mapDestinationLabel = document.getElementById('map-destination-label');
    const mapRider = document.getElementById('map-rider');
    const trackerCloseBtn = document.getElementById('tracker-close-btn');

    // Step nodes
    const stepReceived = document.getElementById('step-received');
    const stepPreparing = document.getElementById('step-preparing');
    const stepDispatched = document.getElementById('step-dispatched');
    const stepDelivered = document.getElementById('step-delivered');

    function launchOrderTracker() {
        // Set randomized order ID
        const randId = 'CC-' + Math.floor(100000 + Math.random() * 900000);
        trackerIdPlaceholder.textContent = randId;

        // Set map target matching user checkout location
        mapDestinationLabel.textContent = pendingOrderData.loc;

        // Reset tracking visual steps
        const steps = [stepReceived, stepPreparing, stepDispatched, stepDelivered];
        steps.forEach(s => {
            s.classList.remove('active', 'completed');
        });

        // Set initial state
        stepReceived.classList.add('completed');
        stepPreparing.classList.add('active');
        
        // Reset Map Rider position
        mapRider.style.display = 'none';
        mapRider.style.bottom = '15px'; // shop position
        mapRider.style.top = 'auto';

        trackerCloseBtn.style.display = 'none';
        trackerModal.classList.add('active');

        // Clear cart
        cart = [];
        updateCartUI();
        checkoutForm.reset();

        // SIMULATE TIMELINE PROGRESS
        // Stage 1 (Preparing): finishes in 4 seconds
        setTimeout(() => {
            stepPreparing.classList.remove('active');
            stepPreparing.classList.add('completed');
            stepDispatched.classList.add('active');
            
            // Dispatch Rider! Show rider pin on map
            mapRider.style.display = 'flex';
            showToast('🏍️ Rider is dispatched from Kutus Town!');
            
            // Animate Rider moving up road on mock map (transition)
            setTimeout(() => {
                mapRider.style.transition = 'bottom 5s linear';
                mapRider.style.bottom = '100px'; // Moving along road
            }, 100);

        }, 4000);

        // Stage 2 (Dispatched): finishes in 9 seconds
        setTimeout(() => {
            // Move rider pin close to campus hostel destination on map
            mapRider.style.bottom = '130px';
        }, 6500);

        // Stage 3 (Delivered): finishes in 9 seconds
        setTimeout(() => {
            stepDispatched.classList.remove('active');
            stepDispatched.classList.add('completed');
            stepDelivered.classList.add('completed');
            
            // Move Rider directly onto hostel spot
            mapRider.style.bottom = 'auto';
            mapRider.style.top = '15px'; // Matches campus pin top location

            showToast('🔔 Order Delivered! Enjoy.', 'success');
            trackerCloseBtn.style.display = 'block';
        }, 9500);
    }

    trackerCloseBtn.addEventListener('click', () => {
        trackerModal.classList.remove('active');
    });


    // ==========================================
    // 11. CONTACT FORM MOCK RESPONSE
    // ==========================================
    const contactFormEl = document.getElementById('delivery-contact-form');
    contactFormEl.addEventListener('submit', (e) => {
        e.preventDefault();
        const contactName = document.getElementById('contact-name').value;
        
        showToast(`Thank you, ${contactName}! We received your message.`, 'success');
        contactFormEl.reset();
    });

});