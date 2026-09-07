(() => {
  const body = document.body;
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.mobile-toggle');
  if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));

  const modal = document.getElementById('contactModal');
  const closeBtn = modal?.querySelector('.modal-close');
  const openers = document.querySelectorAll('[data-contact]');
  let lastFocus = null;
  function openModal(e){
    e?.preventDefault();
    if(!modal) return;
    lastFocus = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    body.style.overflow='hidden';
    setTimeout(()=>modal.querySelector('input')?.focus(),50);
  }
  function closeModal(){
    if(!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    body.style.overflow='';
    lastFocus?.focus?.();
  }
  openers.forEach(el=>el.addEventListener('click',openModal));
  closeBtn?.addEventListener('click',closeModal);
  modal?.addEventListener('click',e=>{if(e.target===modal)closeModal()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

  // static-host friendly contact submission via FormSubmit hidden iframe
  const form = document.querySelector('.contact-form');
  const success = document.querySelector('.form-success');
  if(form){
    form.addEventListener('submit',()=>{
      setTimeout(()=>{
        if(success) success.style.display='block';
        form.reset();
      },550);
    });
  }

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('visible')});
  },{threshold:.08});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
})();
