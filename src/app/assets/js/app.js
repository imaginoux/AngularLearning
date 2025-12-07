// src/assets/js/app.js
(function(){
  // expose init so Angular can call after render
  function initApp() {
    try {
      /* ======= Mock Data & Helpers ======= */
      const mockTx = Array.from({length:57}).map((_,i)=>({date: new Date(Date.now()-i*86400000).toISOString().slice(0,10), details:`Txn ${i+1}`, type: i%3===0? 'credit':'debit', amount: Math.round(Math.random()*10000)/100}));
      let currentPage = 1, pageSize = 8, sortField=null, sortDir=1;

      function formatAmount(n){ return '₹ '+Number(n).toLocaleString('en-IN',{minimumFractionDigits:2}); }

      /* ======= Render Table with Pagination, Sorting, Search & Filters ======= */
      function renderTable(){
        const tbody=document.getElementById('mainTbody'); if(!tbody) return;
        tbody.innerHTML='';
        let data = [...mockTx];
        const qEl = document.getElementById('tableSearch');
        const q = qEl ? qEl.value.trim().toLowerCase() : '';
        const typeEl = document.getElementById('typeFilter');
        const type = typeEl ? typeEl.value : 'all';
        if(type!=='all') data = data.filter(d=>d.type===type);
        if(q) data = data.filter(d=> d.details.toLowerCase().includes(q) || d.date.includes(q));
        if(sortField){ data.sort((a,b)=> (a[sortField]>b[sortField]?1:-1)*sortDir); }
        const total = data.length; const pages = Math.max(1, Math.ceil(total/pageSize));
        if(currentPage>pages) currentPage=pages;
        const start=(currentPage-1)*pageSize; const pageData=data.slice(start,start+pageSize);
        pageData.forEach(d=>{
          const tr=document.createElement('tr');
          tr.innerHTML=`<td>${d.date}</td><td>${d.details}</td><td class="text-capitalize">${d.type}</td><td class="text-end">${formatAmount(d.amount)}</td><td><div class="btn-group btn-group-sm"><button class="btn btn-outline-secondary viewBtn">View</button><button class="btn btn-outline-warning editBtn">Edit</button><button class="btn btn-outline-danger deleteBtn">Delete</button></div></td>`;
          tbody.appendChild(tr);
        });
        // pagination
        const pager=document.getElementById('tablePagination'); if(!pager) return;
        pager.innerHTML='';
        for(let i=1;i<=pages;i++){ const li=document.createElement('li'); li.className='page-item '+(i===currentPage?'active':''); li.innerHTML=`<a class="page-link" href="#">${i}</a>`; li.addEventListener('click',e=>{ e.preventDefault(); currentPage=i; renderTable(); }); pager.appendChild(li); }
      }

      renderTable();

      // UI bindings
      ['tableSearch','typeFilter'].forEach(id=>{
        const el = document.getElementById(id);
        if(el) el.addEventListener('input', ()=>{ currentPage=1; renderTable(); });
      });
      const sortDateBtn = document.getElementById('sortDate');
      if(sortDateBtn) sortDateBtn.addEventListener('click', ()=>{ sortField='date'; sortDir*=-1; renderTable(); });
      const sortAmountBtn = document.getElementById('sortAmount');
      if(sortAmountBtn) sortAmountBtn.addEventListener('click', ()=>{ sortField='amount'; sortDir*=-1; renderTable(); });

      // export
      const exportBtn = document.getElementById('exportCsv');
      if(exportBtn) exportBtn.addEventListener('click', ()=>{
        const rows=[['Date','Details','Type','Amount']]; mockTx.forEach(r=>rows.push([r.date,r.details,r.type,r.amount]));
        const csv = rows.map(r=> r.map(c=> '"'+String(c).replace(/"/g,'""')+'"').join(',')).join('\n');
        const blob=new Blob([csv],{type:'text/csv'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='txns.csv'; a.click(); URL.revokeObjectURL(url);
      });

      // form validation
      const fullForm = document.getElementById('fullForm');
      if(fullForm) fullForm.addEventListener('submit', function(e){ e.preventDefault(); if(!this.checkValidity()){ this.classList.add('was-validated'); return; } showToast('Form submitted'); });

      // modal form mock
      const modalForm = document.getElementById('modalForm');
      if(modalForm) modalForm.addEventListener('submit', function(e){ e.preventDefault(); const modalEl = document.getElementById('newTxModal'); if(modalEl){ const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl); modal.hide(); } showToast('Transfer created'); });

      /* ======= Image gallery modal ======= */
      document.querySelectorAll('.gallery-img').forEach(img=> img.addEventListener('click', e=>{ const modalImg = document.getElementById('imageModalImg'); if(modalImg) modalImg.src=e.target.src; }));

      /* ======= Toasts & Notifications ======= */
      function showToast(message, opts={type:'primary', delay:4000}){
        const container=document.getElementById('toastContainer'); if(!container) return;
        const toastEl=document.createElement('div'); toastEl.className='toast align-items-center text-bg-'+opts.type+' border-0'; toastEl.setAttribute('role','alert'); toastEl.setAttribute('aria-live','assertive'); toastEl.setAttribute('aria-atomic','true'); toastEl.innerHTML=`<div class="d-flex"><div class="toast-body">${message}</div><button class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div>`;
        container.appendChild(toastEl);
        const t=new bootstrap.Toast(toastEl,{delay:opts.delay}); t.show();
        setTimeout(()=>{ t.dispose(); toastEl.remove(); }, opts.delay+500);
      }

      // openNotifications (may not be present)
      const openNotificationsBtn = document.getElementById('openNotifications');
      if(openNotificationsBtn) openNotificationsBtn.addEventListener('click', ()=>{ showToast('You have 3 unread notifications'); });

      /* ======= Context Menu (right click) ======= */
      const ctx = document.getElementById('ctxMenu');
      if(ctx){
        document.addEventListener('contextmenu', e=>{
          e.preventDefault();
          ctx.style.left=e.pageX+'px';
          ctx.style.top=e.pageY+'px';
          ctx.style.display='block';
          ctx.innerHTML='<div class="p-2"><a class="d-block small text-decoration-none">Action 1</a><a class="d-block small text-decoration-none">Action 2</a></div>';
        });
        document.addEventListener('click', ()=>ctx.style.display='none');
      }

      /* ======= Spinner & Progress demo ======= */
      function showSpinner(show=true){ const s = document.getElementById('spinnerOverlay'); if(s) s.style.display = show? 'flex':'none'; }

      /* ======= Activity / Audit log === */
      const activity = ['Login','Viewed Account','Transfer created','Logout'];
      const logEl=document.getElementById('activityLog');
      if(logEl){
        activity.forEach(a=>{
          const li=document.createElement('li');
          li.className='list-group-item small';
          li.textContent = `${new Date().toISOString().slice(0,19).replace('T',' ')} — ${a}`;
          logEl.appendChild(li);
        });
      }

      /* ======= Auth / Session (mock) ======= */
      function logout(){ localStorage.removeItem('session'); showToast('Logged out'); }
      const logoutBtn = document.getElementById('logoutBtn');
      if(logoutBtn) logoutBtn.addEventListener('click', e=>{ e.preventDefault(); logout(); });

      /* ======= Theme & Language ======= */
      const themeToggle = document.getElementById('themeToggle');
      if(themeToggle) themeToggle.addEventListener('click', ()=>{
        const el=document.body; const t = el.getAttribute('data-theme')==='dark'? 'light':'dark'; el.setAttribute('data-theme', t); localStorage.setItem('theme', t); themeToggle.innerHTML = t==='dark'? '<i class="bi bi-moon-fill"></i>':'<i class="bi bi-sun-fill"></i>';
      });
      const savedTheme = localStorage.getItem('theme'); if(savedTheme) document.body.setAttribute('data-theme', savedTheme);

      const langSelect = document.getElementById('langSelect');
      if(langSelect) langSelect.addEventListener('change', (e)=>{ showToast('Language changed to '+(e.target.value || '')); /* i18n placeholder */ });

      /* ======= Simple API layer & local cache ======= */
      async function apiFetch(path, opts={}){ showSpinner(true); try{ const res = await fetch(path, opts); const json = await res.json(); localStorage.setItem('cache:'+path, JSON.stringify({ts:Date.now(),data:json})); return json; }catch(err){ console.error(err); const cached = localStorage.getItem('cache:'+path); if(cached) return JSON.parse(cached).data; throw err; }finally{ showSpinner(false); }}

      /* ======= Initialization ======= */
      // tooltips
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(function (el) { return new bootstrap.Tooltip(el); });
    } catch (err) {
      console.error('appInit error', err);
    }
  }

  // expose to global window so Angular can call after view init
  window.appInit = initApp;

  // also run if DOM already ready (helps in non-Angular contexts)
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // delay slightly to allow Angular DOM insertion if needed
    setTimeout(initApp, 200);
  } else {
    document.addEventListener('DOMContentLoaded', function(){ setTimeout(initApp, 200); });
  }
})();
