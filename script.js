// ── MENU DATA ──
const MENU = [
  // ── FRIES ──
  {id:1,  cat:'Fries',      emoji:'🍟', img:'images/Fries & Chicken Wing.png',
    name:'Fries & Chicken Wing (Small)',      desc:'Crispy golden fries with seasoned chicken wing',          price:40, featured:true},
  {id:2,  cat:'Fries',      emoji:'🍟', img:'images/Fries & Chicken Wing.png',
    name:'Fries & Chicken Wings (Medium)',    desc:'Crispy golden fries with seasoned chicken wings',         price:50},
  {id:3,  cat:'Fries',      emoji:'🍟', img:'images/Fries & Chicken Wing.png',
    name:'Fries & Chicken Wings (Large)',     desc:'Crispy golden fries with seasoned chicken wings',         price:70, featured:true},

  // ── BANKU ──
  {id:4,  cat:'Banku',      emoji:'🐟', img:'images/banku-and-Tilapia.jpg',
    name:'Banku & Tilapia (Small)',           desc:'Smooth fermented banku with perfectly grilled tilapia',   price:40# Navigate to your project folder
cd /d "d:\now ok"

# Initialize and stage changes
git init
git add .

# Commit with a clean message
git commit -m "Optimize: Clean Firebase initialization and secure external links"

# Link to your provided URL
git remote add origin <https://github.com/jack0546/Leesjoint.git> || git remote set-url origin <https://github.com/jack0546/Leesjoint.git>

# Set branch to main and push
git branch -M main
git push -u origin main
, featured:true},
  {id:5,  cat:'Banku',      emoji:'🐟', img:'images/banku-and-Tilapia.jpg',
    name:'Banku & Tilapia (Medium)',          desc:'Smooth fermented banku with perfectly grilled tilapia',   price:50},
  {id:6,  cat:'Banku',      emoji:'🐟', img:'images/banku-and-Tilapia.jpg',
    name:'Banku & Tilapia (Large)',           desc:'Smooth fermented banku with perfectly grilled tilapia',   price:70},
  {id:7,  cat:'Banku',      emoji:'🐠', img:'images/Banku & Fried Fish.jpg',
    name:'Banku & Fried Fish (Small)',        desc:'Classic banku with crispy fried fish and pepper sauce',   price:20},
  {id:8,  cat:'Banku',      emoji:'🐠', img:'images/Banku & Fried Fish.jpg',
    name:'Banku & Fried Fish (Medium)',       desc:'Classic banku with crispy fried fish and pepper sauce',   price:25},
  {id:9,  cat:'Banku',      emoji:'🐠', img:'images/Banku & Fried Fish.jpg',
    name:'Banku & Fried Fish (Large)',        desc:'Classic banku with crispy fried fish and pepper sauce',   price:35},

  // ── SALAD ──
  {id:10, cat:'Salad',      emoji:'🥗', img:'images/Salad (Egg, Sardine, Canned Beef).jpg',
    name:'Salad (Egg, Sardine, Canned Beef)', desc:'Fresh garden salad with egg, sardine and canned beef',   price:20},
  {id:11, cat:'Salad',      emoji:'🥗', img:'images/Salad with Chicken (Egg, Sardine, Canned Beef).jpg',
    name:'Salad with Chicken (Egg, Sardine, Canned Beef)', desc:'Garden salad with chicken, egg, sardine and canned beef', price:30},

  // ── DRINKS ──
  {id:12, cat:'Drinks',     emoji:'🍍', img:'images/Pineapple Juice.jpg',
    name:'Pineapple Juice',                   desc:'Freshly blended organic pineapple juice',                price:10, featured:true},
  {id:13, cat:'Drinks',     emoji:'🥤', img:'images/Pineapple Ginger.png',
    name:'Pineapple Ginger',                  desc:'Refreshing pineapple blended with natural ginger',       price:10},
  {id:14, cat:'Drinks',     emoji:'🍹', img:'images/Mixed Fruits Juice.avif',
    name:'Mixed Fruits Juice',                desc:'A blend of fresh seasonal tropical fruits',              price:10},
  {id:15, cat:'Drinks',     emoji:'🍊', img:'images/Orange Juice.jpg',
    name:'Orange Juice',                      desc:'Freshly squeezed natural orange juice',                  price:10},
  {id:16, cat:'Drinks',     emoji:'🌺', img:'images/Sobolo.jpg',
    name:'Sobolo',                            desc:'Natural Ghanaian sobolo – hibiscus flower drink with spices', price:5},

  // ── PLAIN RICE / COCONUT RICE ──
  {id:17, cat:'Plain Rice',  emoji:'🍙', img:'images/Plain Coconut Rice with Gravy Sauce.jpg',
    name:'Plain / Coconut Rice with Gravy Sauce (Small)',  desc:'Fluffy plain or coconut rice served with rich gravy sauce', price:25},
  {id:18, cat:'Plain Rice',  emoji:'🍙', img:'images/Plain Coconut Rice with Gravy Sauce.jpg',
    name:'Plain / Coconut Rice with Gravy Sauce (Medium)', desc:'Fluffy plain or coconut rice served with rich gravy sauce', price:30},
  {id:19, cat:'Plain Rice',  emoji:'🍙', img:'images/Plain Coconut Rice with Gravy Sauce.jpg',
    name:'Plain / Coconut Rice with Gravy Sauce (Large)',  desc:'Fluffy plain or coconut rice served with rich gravy sauce', price:50},

  // ── JOLLOF RICE ──
  {id:20, cat:'Jollof Rice', emoji:'🍚', img:'images/Jollof & Chicken or Fish or Cow Meat (Small).jpg',
    name:'Jollof & Chicken / Fish / Cow Meat (Small)',     desc:'Classic Ghanaian jollof rice with your choice of protein', price:20, featured:true},
  {id:21, cat:'Jollof Rice', emoji:'🍚', img:'images/Jollof & Chicken or Fish or Cow Meat (Small).jpg',
    name:'Jollof & Chicken / Fish / Cow Meat (Medium)',    desc:'Classic Ghanaian jollof rice with your choice of protein', price:25},
  {id:22, cat:'Jollof Rice', emoji:'🍚', img:'images/Jollof & Chicken or Fish or Cow Meat (Small).jpg',
    name:'Jollof & Chicken / Cow Meat (Large)',            desc:'Classic Ghanaian jollof rice with your choice of protein', price:30},
  {id:23, cat:'Jollof Rice', emoji:'🍛', img:'images/Assorted Jollof Chicken or Meat.jpg',
    name:'Assorted Jollof Chicken / Meat (Small)',         desc:'Jollof rice loaded with assorted chicken and meat',        price:35},
  {id:24, cat:'Jollof Rice', emoji:'🍛', img:'images/Assorted Jollof Chicken or Meat.jpg',
    name:'Assorted Jollof Chicken / Cow Meat (Large)',     desc:'Jollof rice loaded with assorted chicken and cow meat',    price:35},

  // ── FRIED RICE ──
  {id:25, cat:'Fried Rice',  emoji:'🥘', img:'images/Fried Rice & Chicken or Fish or Cow Meat.webp',
    name:'Fried Rice & Chicken / Fish / Cow Meat (Small)', desc:'Flavourful fried rice with vegetables and your choice of protein', price:20},
  {id:26, cat:'Fried Rice',  emoji:'🥘', img:'images/Fried Rice & Chicken or Fish or Cow Meat.webp',
    name:'Fried Rice & Chicken / Fish / Cow Meat (Medium)',desc:'Flavourful fried rice with vegetables and your choice of protein', price:25},
  {id:27, cat:'Fried Rice',  emoji:'🥘', img:'images/Fried Rice & Chicken or Fish or Cow Meat.webp',
    name:'Fried Rice & Chicken / Fish / Cow Meat (Large)', desc:'Flavourful fried rice with vegetables and your choice of protein', price:30},
  {id:28, cat:'Fried Rice',  emoji:'🍱', img:'images/Assorted Fried Rice Chicken or Cow Meat.jpg',
    name:'Assorted Fried Rice Chicken / Cow Meat (Small)', desc:'Fried rice with assorted chicken and cow meat',             price:35},
  {id:29, cat:'Fried Rice',  emoji:'🍱', img:'images/Assorted Fried Rice Chicken or Cow Meat.jpg',
    name:'Assorted Fried Rice Chicken / Cow Meat (Large)', desc:'Fried rice with assorted chicken and cow meat',             price:50, featured:true},
  {id:30, cat:'Fried Rice',  emoji:'🌽', img:'images/Additional Fried Plantain.jpg',
    name:'Additional Fried Plantain',                      desc:'Extra crispy fried plantain as a side',                     price:5},

  // ── NOODLES / SPAGHETTI ──
  {id:31, cat:'Noodles',     emoji:'🍜', img:'images/Assorted Noodles.jpg',
    name:'Assorted Noodles (Small)',          desc:'Stir-fried noodles with assorted meat and vegetables',   price:25},
  {id:32, cat:'Noodles',     emoji:'🍜', img:'images/Assorted Noodles.jpg',
    name:'Assorted Noodles (Medium)',         desc:'Stir-fried noodles with assorted meat and vegetables',   price:30},
  {id:33, cat:'Noodles',     emoji:'🍜', img:'images/Assorted Noodles.jpg',
    name:'Assorted Noodles (Large)',          desc:'Stir-fried noodles with assorted meat and vegetables',   price:40},
];

// ── STATE ──
let cart = [];
let currentCategory = 'All';
let receiptData = null;
let authMode = 'login'; // login or register

// ── PAGE NAVIGATION ──
function showPage(id, linkEl, bnEl) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  if(linkEl) linkEl.classList.add('active');
  document.querySelectorAll('.bn-item').forEach(b=>b.classList.remove('active'));
  if(bnEl) bnEl.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
  if(id==='menu') renderMenu();
  if(id==='orders') loadUserOrders();
}

// ── MOBILE NAV ──
function toggleMobileNav(){
  document.getElementById('mobileNav').classList.toggle('open');
}

// ── RENDER FEATURED ──
function renderFeatured(){
  _cardIndex = 0;
  const featured = MENU.filter(m=>m.featured);
  const grid = document.getElementById('featuredGrid');
  grid.innerHTML = featured.map(foodCard).join('');
  observeCards(grid);
}

// ── RENDER MENU ──
const CATS = ['All', ...new Set(MENU.map(m=>m.cat))];
function renderCatPills(){
  document.getElementById('catPills').innerHTML = CATS.map(c=>
    `<button class="cat-pill${c===currentCategory?' active':''}" onclick="filterByCategory('${c}')">${c}</button>`
  ).join('');
}
function filterByCategory(cat){
  currentCategory = cat;
  renderCatPills();
  filterMenu();
}
function filterMenu(){
  _cardIndex = 0;
  const q = (document.getElementById('menuSearch').value||'').toLowerCase();
  const items = MENU.filter(m=>{
    const matchCat = currentCategory==='All'||m.cat===currentCategory;
    const matchQ = !q||m.name.toLowerCase().includes(q)||m.cat.toLowerCase().includes(q)||m.desc.toLowerCase().includes(q);
    return matchCat&&matchQ;
  });
  document.getElementById('menuGrid').innerHTML = items.map(foodCard).join('');
  document.getElementById('menuEmpty').style.display = items.length?'none':'block';
  observeCards(document.getElementById('menuGrid'));
}
function renderMenu(){
  renderCatPills();
  filterMenu();
}

let _cardIndex = 0;
function foodCard(item){
  const delay = (_cardIndex++ % 12) * 60;
  return `
  <div class="food-card" data-id="${item.id}" onclick="addToCart(${item.id})" style="transition-delay:${delay}ms">
    <div class="food-img">
      <img src="${item.img}" alt="${item.name}" class="food-item-img" loading="lazy" />
      <span class="food-emoji" style="display:none">${item.emoji}</span>
      <div class="img-shimmer" style="animation-delay:${delay}ms"></div>
      ${item.featured?'<div class="food-badge">🔥 Popular</div>':''}
    </div>
    <div class="food-body">
      <div class="food-cat">${item.cat}</div>
      <div class="food-name">${item.name}</div>
      <div class="food-desc">${item.desc}</div>
      <div class="food-footer">
        <div class="food-price">GH₵ ${item.price.toFixed(2)}</div>
        <button class="add-btn" onclick="event.stopPropagation();doAddToCart(event,${item.id})" title="Add to cart">+</button>
      </div>
    </div>
  </div>`;
}

// ── CART ──
function toggleCart(){
  document.getElementById('cartPanel').classList.toggle('open');
  document.getElementById('cartOverlay').classList.toggle('open');
}
function addToCart(id){
  const item = MENU.find(m=>m.id===id);
  const existing = cart.find(c=>c.id===id);
  if(existing) existing.qty++;
  else cart.push({...item,qty:1});
  updateCartUI();
  showToast(`${item.emoji} ${item.name.split('(')[0].trim()} added!`);
}
function doAddToCart(e, id){
  const btn = e.currentTarget;
  const rip = document.createElement('span');
  rip.className = 'ripple';
  btn.appendChild(rip);
  setTimeout(()=>rip.remove(), 500);
  
  const card = btn.closest('.food-card');
  const emojiEl = card && card.querySelector('.food-emoji');
  const cartCountEl = document.getElementById('cartCount');
  if(emojiEl && cartCountEl){
    const src = emojiEl.getBoundingClientRect();
    const dst = cartCountEl.getBoundingClientRect();
    const fly = document.createElement('div');
    fly.className = 'fly-emoji';
    fly.textContent = emojiEl.textContent;
    fly.style.cssText = `left:${src.left+src.width/2-20}px;top:${src.top+src.height/2-20}px`;
    document.body.appendChild(fly);
    fly.animate([
      {transform:'translate(0,0) scale(1)',opacity:1},
      {transform:`translate(${dst.left-src.left-src.width/2+dst.width/2}px,${dst.top-src.top-src.height/2+dst.height/2}px) scale(0.2)`,opacity:0}
    ],{duration:550,easing:'cubic-bezier(.4,0,.6,1)',fill:'forwards'}).onfinish=()=>fly.remove();
  }
  addToCart(id);
  
  const cc = document.getElementById('cartCount');
  cc.classList.remove('cart-bounce');
  void cc.offsetWidth;
  cc.classList.add('cart-bounce');
}
function removeFromCart(id){
  cart = cart.filter(c=>c.id!==id);
  updateCartUI();
}
function changeQty(id,delta){
  const item = cart.find(c=>c.id===id);
  if(item){
    item.qty+=delta;
    if(item.qty<=0) removeFromCart(id);
    else updateCartUI();
  }
}
function updateCartUI(){
  const count = cart.reduce((s,c)=>s+c.qty,0);
  document.getElementById('cartCount').textContent = count;
  const bn = document.getElementById('bnBadge');
  bn.textContent = count;
  bn.classList.toggle('show',count>0);
  const subtotal = cart.reduce((s,c)=>s+c.price*c.qty,0);
  const total = subtotal;
  document.getElementById('cartTotal').textContent=`GH₵ ${subtotal.toFixed(2)}`;
  if(!cart.length){
    document.getElementById('cartItems').innerHTML=`<div class="cart-empty"><div class="icon">🛒</div><div>Your cart is empty<br><small style="font-size:.75rem">Add items from the menu</small></div></div>`;
  } else {
    document.getElementById('cartItems').innerHTML=cart.map(c=>`
      <div class="cart-item">
        <div class="cart-item-icon">${c.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${c.name}</div>
          <div class="cart-item-price">GH₵ ${(c.price*c.qty).toFixed(2)}</div>
        </div>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="changeQty(${c.id},-1)">−</button>
          <span class="qty-num">${c.qty}</span>
          <button class="qty-btn" onclick="changeQty(${c.id},1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${c.id})">🗑</button>
      </div>`).join('');
  }
}
function updateDelivery(el){
  const addrGroup = document.getElementById('addressGroup');
  addrGroup.style.display = el.value==='pickup'?'none':'block';
  updateCartUI();
}

// ── ORDER ──
function openOrderModal(){
  if(!cart.length){showToast('Your cart is empty!');return;}
  document.getElementById('orderModal').classList.add('open');
  toggleCart();
}
function closeOrderModal(){document.getElementById('orderModal').classList.remove('open')}

function placeOrder(){
  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const rawEmail = document.getElementById('custEmail').value.trim();
  const orderType = document.querySelector('input[name="orderType"]:checked').value;
  const address = document.getElementById('custAddress').value.trim();
  const paymentNetwork = document.getElementById('paymentNetwork').value;

  if(!name||!phone){showToast('Please enter your name and phone number.');return;}
  if(orderType==='delivery'&&!address){showToast('Please enter your delivery address.');return;}

  const email = rawEmail || `${phone.replace(/[^0-9]/g, '') || Date.now()}@chezlee.com`;
  const subtotal = cart.reduce((s,c)=>s+c.price*c.qty,0);
  const total = subtotal;

  const btn = document.querySelector('#orderModal .btn-order');
  if(btn) {
    btn.disabled = true;
    btn.textContent = 'Processing Payment...';
  }

  console.log('placeOrder: total=', total, 'email=', email, 'name=', name);
  
  if (typeof PaystackPop === 'undefined') {
    showToast('Payment system not loaded. Please refresh page.');
    if(btn) { btn.disabled = false; btn.textContent = '✅ Confirm Order'; }
    return;
  }

  let paymentMeans = 'Mobile Money';
  let isp = paymentNetwork;
  if(paymentNetwork === 'Card') {
    paymentMeans = 'Card';
    isp = 'Card';
  }

  let handler = PaystackPop.setup({
    key: 'pk_live_4f5e7d35d201c81efd615f2f98ba08c7b049f4ae',
    email: email,
    amount: Math.round(total * 100),
    currency: 'GHS',
    ref: 'CL-' + Date.now().toString().slice(-6),
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: name
        },
        {
          display_name: "Phone Number",
          variable_name: "phone_number",
          value: phone
        },
        {
          display_name: "Location",
          variable_name: "location",
          value: `Eastern Region, Koforidua - ${orderType==='pickup'?'Pickup':address}`
        }
      ]
    },
    callback: function(response){
      receiptData={
        receiptNo: response.reference,
        date: new Date().toLocaleString('en-GH',{dateStyle:'medium',timeStyle:'short'}),
        name, phone,
        email: email,
        address: orderType==='pickup'?'Pickup':'Eastern Region, Koforidua - '+address,
        orderType,
        notes: document.getElementById('custNotes').value||'None',
        items: [...cart],
        total,
        paystackRef: response.reference,
        paymentMeans: paymentMeans,
        isp: isp
      };
      
      if (window.firebaseDb && window.firebaseAuth?.currentUser) {
        addDoc(collection(window.firebaseDb, 'orders'), {
          ...receiptData,
          userId: window.firebaseAuth.currentUser.uid,
          userEmail: window.firebaseAuth.currentUser.email,
          createdAt: serverTimestamp()
        }).catch(e => console.error('Failed to save order: ', e));
      }
      
      closeOrderModal();
      buildReceipt();
      document.getElementById('receiptModal').classList.add('open');
      sendWhatsAppToOwner();
      
      if(btn) {
        btn.disabled = false;
        btn.textContent = '✅ Confirm Order';
      }
    },
    onClose: function(){
      showToast('Payment cancelled');
      if(btn) {
        btn.disabled = false;
        btn.textContent = '✅ Confirm Order';
      }
    }
  });
  
  try {
    handler.openIframe();
  } catch (e) {
    console.error('Paystack openIframe error:', e);
    showToast('Payment error: ' + e.message);
    if(btn) { btn.disabled = false; btn.textContent = '✅ Confirm Order'; }
  }
}

function buildReceipt(){
  const r = receiptData;
  const itemRows = r.items.map(i=>`
    <tr>
      <td>${i.emoji} ${i.name}</td>
      <td style="text-align:center">${i.qty}</td>
      <td style="text-align:right">GH₵${i.price.toFixed(2)}</td>
      <td style="text-align:right">GH₵${(i.price*i.qty).toFixed(2)}</td>
    </tr>`).join('');
  document.getElementById('receiptContent').innerHTML=`
    <div class="receipt-logo">
      <h2>🍽 Chez Lee</h2>
      <p>Unique Taste · Koforidua, Ghana<br/>📞 +233 24 410 7536</p>
    </div>
    <hr class="receipt-divider"/>
    <div class="receipt-info">
      <table>
        <tr><td>Receipt #</td><td>${r.receiptNo}</td></tr>
        <tr><td>Date</td><td>${r.date}</td></tr>
        <tr><td>Customer</td><td>${r.name}</td></tr>
        <tr><td>Phone</td><td>${r.phone}</td></tr>
        <tr><td>Type</td><td>${r.orderType==='delivery'?'🚗 Delivery':'🏃 Pickup'}</td></tr>
        <tr><td>Location</td><td>${r.address}</td></tr>
      </table>
    </div>
    <hr class="receipt-divider"/>
    <div class="receipt-items">
      <table>
        <thead><tr><th>Item</th><th>Qty</th><th>Price</th><th>Total</th></tr></thead>
        <tbody>${itemRows}</tbody>
      </table>
    </div>
    <hr class="receipt-divider"/>
    <div class="receipt-totals">
      <table>
        <tr><td>Subtotal</td><td>GH₵${r.total.toFixed(2)}</td></tr>
        <tr class="grand"><td><strong>TOTAL PAID</strong></td><td><strong>GH₵${r.total.toFixed(2)}</strong></td></tr>
      </table>
    </div>
    <hr class="receipt-divider"/>
    <div class="receipt-info" style="margin-top:8px">
      <table>
        <tr><td>Means of Payment</td><td>${r.paymentMeans}</td></tr>
        <tr><td>ISP/Network Used</td><td>${r.isp}</td></tr>
        <tr><td>Paystack Ref</td><td>${r.paystackRef}</td></tr>
      </table>
    </div>
    <div class="receipt-status" style="background:#2ECC71">✅ PAID via Paystack</div>
    <div class="receipt-thanks">
      Thank you for choosing Chez Lee!<br/>
      We'll confirm your order shortly via WhatsApp or SMS.<br/><br/>
      <em>Unique Taste, Every Time 🍽</em>
    </div>`;
}

function closeReceiptModal(){
  document.getElementById('receiptModal').classList.remove('open');
  cart=[];
  updateCartUI();
}

function downloadReceipt(){
  if(!receiptData) return;
  const el = document.getElementById('receiptContent');
  html2canvas(el,{scale:2,backgroundColor:'#ffffff',useCORS:true}).then(canvas=>{
    const a=document.createElement('a');
    a.download=`ChezLee-${receiptData.receiptNo}.jpg`;
    a.href=canvas.toDataURL('image/jpeg',0.95);
    a.click();
    showToast('Receipt downloaded!');
  }).catch(()=>showToast('Download failed. Please try again.'));
}

function sendWhatsApp(){
  if(!receiptData) return;
  const r = receiptData;
  const itemList = r.items.map(i=>`• ${i.emoji} ${i.name} x${i.qty} = GH₵${(i.price*i.qty).toFixed(2)}`).join('\n');
  const msg=`🍽 *NEW FOOD ORDER – Chez Lee*

*Customer Name:* ${r.name}
*Customer Phone:* ${r.phone}
*Order Type:* ${r.orderType==='delivery'?'🚗 Delivery':'🏃 Pickup'}
*Location:* ${r.address}
*Date/Time:* ${r.date}

*Order Details:*
${itemList}

*Subtotal:* GH₵${r.total.toFixed(2)}
*TOTAL PAID: GH₵${r.total.toFixed(2)}*

*Payment Method (Means):* ${r.paymentMeans}
*Payment Network (ISP):* ${r.isp}
*Transaction Reference:* ${r.paystackRef}
*Status:* PAID (via Paystack)

*Notes:* ${r.notes}

Receipt No: ${r.receiptNo}
Please confirm this order 🙏`;
  window.open(`https://wa.me/233244107536?text=${encodeURIComponent(msg)}`,'_blank');
}

function sendSMS(){
   if(!receiptData) return;
   const r = receiptData;
   const itemList = r.items.map(i=>`${i.name} x${i.qty}`).join(', ');
   const msg = `Chez Lee Order:
Phone: ${r.phone}
Loc: ${r.address}
Items: ${itemList}
Paid: GH₵${r.total.toFixed(2)} (${r.paymentMeans} via ${r.isp})
Ref: ${r.receiptNo}
Status: PAID`;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const separator = isIOS ? '&' : '?';
  const smsUrl = `sms:+233244107536${separator}body=${encodeURIComponent(msg)}`;
  window.location.href = smsUrl;
}

// Auto-send order to owner WhatsApp
function sendWhatsAppToOwner(){
   if(!receiptData) return;
   const r = receiptData;
   const itemList = r.items.map(i=>`• ${i.emoji} ${i.name} x${i.qty} = GH₵${(i.price*i.qty).toFixed(2)}`).join('\n');
   const msg = `🍽 *NEW ORDER – Chez Lee*\n
*Customer:* ${r.name}
*Phone:* ${r.phone}
*Email:* ${r.email || 'N/A'}
*Type:* ${r.orderType === 'delivery' ? '🚗 Delivery' : '🏃 Pickup'}
*Location:* ${r.address}
*Time:* ${r.date}

*Items:*
${itemList}

*Total: GH₵${r.total.toFixed(2)}*

*Payment:* ${r.paymentMeans} via ${r.isp}
*Ref:* ${r.paystackRef}
*Status:* ✅ PAID`;
   
   const waUrl = `https://wa.me/233598716291?text=${encodeURIComponent(msg)}`;
   window.open(waUrl, '_blank');
}

// ── CONTACT FORM ──
function sendContactForm(){
  const name=document.getElementById('cfName').value.trim();
  const phone=document.getElementById('cfPhone').value.trim();
  const msg=document.getElementById('cfMessage').value.trim();
  if(!name||!msg){showToast('Please fill in your name and message.');return;}
  const text=`Hello, my name is ${name}${phone?' ('+phone+')':''}.\n\n${msg}`;
  window.open(`https://wa.me/233244107536?text=${encodeURIComponent(text)}`,'_blank');
}

// ── MAP ──
function openMap(){
  window.open('https://www.google.com/maps/search/Chez+The+Restaurant+Accra+Ghana','_blank');
}

// ── TOAST ──
let toastTimer;
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),2500);
}

// ── SCROLL REVEAL OBSERVER ──
function observeCards(container){
  if(!container) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        en.target.classList.add('card-visible');
        io.unobserve(en.target);
      }
    });
  },{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
  container.querySelectorAll('.food-card').forEach(c=>io.observe(c));
}

// ── INIT ──
renderFeatured();
updateCartUI();

// Check Paystack availability
if (typeof PaystackPop === 'undefined') {
  console.warn('Paystack inline.js not loaded. Payment may not work.');
} else {
  console.log('Paystack inline.js loaded successfully.');
}

// Global error handler
window.addEventListener('error', function(e) {
  console.error('Global error:', e.error, e.filename, e.lineno);
});

// ── AUTH ──
function openAuthModal(mode){
  authMode = mode || 'login';
  document.getElementById('authTitle').textContent = authMode === 'login' ? 'Login' : 'Register';
  document.getElementById('authSubmitBtn').textContent = authMode === 'login' ? 'Login' : 'Register';
  const switchLink = document.getElementById('authSwitchLink');
  if(switchLink) switchLink.textContent = authMode === 'login' ? 'Switch to Register' : 'Switch to Login';
  const forgotLink = document.getElementById('forgotPasswordLink');
  if(forgotLink) forgotLink.style.display = authMode === 'login' ? 'inline' : 'none';
  document.getElementById('authModal').classList.add('open');
  document.getElementById('authEmail').value = '';
  document.getElementById('authPassword').value = '';
}
function closeAuthModal(){document.getElementById('authModal').classList.remove('open')}
function toggleAuthMode(){
  authMode = authMode === 'login' ? 'register' : 'login';
  document.getElementById('authTitle').textContent = authMode === 'login' ? 'Login' : 'Register';
  document.getElementById('authSubmitBtn').textContent = authMode === 'login' ? 'Login' : 'Register';
  const switchLink = document.getElementById('authSwitchLink');
  if(switchLink) switchLink.textContent = authMode === 'login' ? 'Switch to Register' : 'Switch to Login';
  const forgotLink = document.getElementById('forgotPasswordLink');
  if(forgotLink) forgotLink.style.display = authMode === 'login' ? 'inline' : 'none';
}

let isAuthenticating = false;
async function submitAuth(){
   if(isAuthenticating) return;
   const email = document.getElementById('authEmail').value.trim();
   const password = document.getElementById('authPassword').value.trim();
   if(!email||!password){showToast('Please enter email and password');return;}
   isAuthenticating = true;
   const btn = document.getElementById('authSubmitBtn');
   btn.textContent = 'Please wait...';
   btn.disabled = true;
   try {
     if(authMode==='register'){
       if(window.registerWithEmail) await window.registerWithEmail(email,password);
     }else{
       if(window.loginWithEmail) await window.loginWithEmail(email,password);
     }
     closeAuthModal();
     showPage('home'); // Redirect to home after successful login
   } catch(e) {
     // Error already shown in registerWithEmail/loginWithEmail
   } finally {
     isAuthenticating = false;
     btn.textContent = authMode === 'login' ? 'Login' : 'Register';
     btn.disabled = false;
   }
 }

async function handleForgotPassword() {
  const email = document.getElementById('authEmail').value.trim();
  if(!email) {
    showToast('Please enter your email first to reset password');
    return;
  }
  
  const lastReset = localStorage.getItem('lastReset_' + email);
  if (lastReset && Date.now() - parseInt(lastReset) < 120000) {
    const waitSecs = Math.ceil((120000 - (Date.now() - parseInt(lastReset))) / 1000);
    showToast(`Please wait ${waitSecs} seconds before requesting another reset.`);
    return;
  }
  
  try {
    if (window.sendPasswordResetEmail && window.firebaseAuth) {
      await window.sendPasswordResetEmail(window.firebaseAuth, email);
      localStorage.setItem('lastReset_' + email, Date.now());
      showToast('Password reset email sent!');
    } else {
      showToast('Password reset not available.');
    }
  } catch(e) {
    showToast('Reset failed: ' + e.message);
  }
}

// ── SESSION TIMEOUT ──
let sessionTimeoutTimer;
const SESSION_EXPIRY_MS = 15 * 60 * 1000; // 15 minutes
function resetSessionTimer() {
  if (window.firebaseAuth && window.firebaseAuth.currentUser) {
    clearTimeout(sessionTimeoutTimer);
    sessionTimeoutTimer = setTimeout(() => {
      if (window.logout) {
        window.logout();
        showToast('Session expired due to inactivity.');
      }
    }, SESSION_EXPIRY_MS);
  }
}
['mousemove', 'keydown', 'scroll', 'touchstart'].forEach(evt => {
  document.addEventListener(evt, resetSessionTimer);
});

 // Handle Google sign-in redirect
 window.addEventListener('authSuccess', function(){
   showPage('home');
 });

// ── HERO IMAGE ROTATOR ──
// Collect unique images from the menu for the hero plate slideshow
const HERO_IMAGES = [...new Set(MENU.map(m => m.img))];
let heroImageIndex = 0;
let heroRotationInterval = null;

// Auth state listener
document.addEventListener('DOMContentLoaded', function() {
  if (window.firebaseAuth && window.onAuthStateChanged) {
    window.onAuthStateChanged(window.firebaseAuth, (user) => {
      const userPanel = document.getElementById('userPanel');
      const userEmail = document.getElementById('userEmail');
      const userPhoto = document.getElementById('userPhoto');
      const loginBtns = document.querySelectorAll('.auth-btn');
      if (user) {
        userPanel.style.display = 'block';
        userEmail.textContent = user.email || 'Logged in';
        if (user.photoURL) {
          userPhoto.src = user.photoURL;
          userPhoto.style.display = 'block';
        } else {
          userPhoto.style.display = 'none';
        }
        loginBtns.forEach(btn => btn.style.display = 'none');
      } else {
        userPanel.style.display = 'none';
        loginBtns.forEach(btn => btn.style.display = 'inline-block');
      }
    });
  }
});

// Load user orders from Firestore
async function loadUserOrders(){
  if (!window.firebaseDb || !window.firebaseAuth?.currentUser) {
    document.getElementById('ordersPlaceholder').textContent = 'Please log in to view your order history.';
    return;
  }
  
  const ordersList = document.getElementById('ordersList');
  const ordersRef = window.collection(window.firebaseDb, 'orders');
  // Must explicitly filter by userId to pass Firestore Security Rules
  const q = window.query(ordersRef, window.where('userId', '==', window.firebaseAuth.currentUser.uid));
  
  try {
    const querySnapshot = await window.getDocs(q);
    const userOrders = [];
    querySnapshot.forEach((doc) => {
      userOrders.push({id: doc.id, ...doc.data()});
    });
    
    // Sort locally to avoid composite index requirements
    userOrders.sort((a, b) => {
      const timeA = a.createdAt ? a.createdAt.toMillis() : 0;
      const timeB = b.createdAt ? b.createdAt.toMillis() : 0;
      return timeB - timeA;
    });
    
    if (userOrders.length === 0) {
      ordersList.innerHTML = '<div style="text-align:center;padding:40px;color:var(--muted)"><div style="font-size:3rem">📋</div><div>No orders yet. Place your first order!</div></div>';
    } else {
      ordersList.innerHTML = userOrders.map(orderCard).join('');
    }
  } catch (error) {
    console.error('Error loading orders:', error);
    ordersList.innerHTML = '<div style="text-align:center;padding:40px;color:var(--muted)">Error loading orders. (' + error.message + ')</div>';
  }
}

function orderCard(order){
  const date = order.date || 'N/A';
  const items = order.items?.map(i => `${i.emoji} ${i.name} x${i.qty}`).join(', ') || 'N/A';
  return `
    <div class="order-card" style="background:var(--card);border:1px solid var(--border);border-radius:8px;padding:16px;margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <strong>Order #${order.receiptNo || order.id?.slice(0,8)}</strong>
        <span style="color:var(--gold)">GH₵ ${order.total?.toFixed(2)}</span>
      </div>
      <div style="font-size:.85rem;color:var(--muted);margin-bottom:8px">${date}</div>
      <div style="font-size:.9rem">${items}</div>
      <div style="margin-top:8px">
        <span style="background:#2ECC71;color:white;padding:2px 8px;border-radius:4px;font-size:.75rem">PAID</span>
      </div>
    </div>`;
}

function rotateHeroImage() {
  const imgEl = document.getElementById('heroRotatingImg');
  if (!imgEl) return;

  // Fade out current image
  imgEl.classList.add('fade-out');
  imgEl.classList.remove('fade-in');

  setTimeout(() => {
    // Move to next image
    heroImageIndex = (heroImageIndex + 1) % HERO_IMAGES.length;
    imgEl.src = HERO_IMAGES[heroImageIndex];
    imgEl.alt = MENU.find(m => m.img === HERO_IMAGES[heroImageIndex])?.name || 'Chez Lee food';

    // Fade in new image
    imgEl.classList.remove('fade-out');
    imgEl.classList.add('fade-in');
  }, 600); // wait for fade-out to complete
}

// Start rotation every 5 seconds
function startHeroRotation() {
  if (heroRotationInterval) clearInterval(heroRotationInterval);
  heroRotationInterval = setInterval(rotateHeroImage, 5000);
}

// Init: add the fade-in class to the first image, then start rotation
const heroImg = document.getElementById('heroRotatingImg');
if (heroImg) {
  heroImg.classList.add('fade-in');
  startHeroRotation();
}
