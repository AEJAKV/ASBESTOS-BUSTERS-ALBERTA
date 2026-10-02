(() => {
  'use strict';
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  function closeMenu() {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu(); toggle.focus();
      }
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.site-header')) closeMenu();
    });
    window.matchMedia('(min-width: 801px)').addEventListener('change', closeMenu);
  }
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.section-heading, .split-copy, .process-grid, .cta-inner').forEach(el => observer.observe(el));
  }
  const form = document.getElementById('contact-form');
  if (!form) return;
  const service = document.getElementById('service');
  const requested = new URLSearchParams(window.location.search).get('service');
  if (requested && Array.from(service.options).some(option => option.value === requested)) service.value = requested;
  const message = document.getElementById('message');
  message.addEventListener('input', () => message.setCustomValidity(''));
  const status = document.getElementById('form-status');
  const submit = form.querySelector('[type="submit"]');
  let sending = false;
  function showStatus(text, error = false) {
    status.textContent = text;
    status.classList.toggle('error', error);
    status.hidden = false;
    status.focus({ preventScroll: true });
    status.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
  }
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending) return;
    if (message.value.trim().length < 20) {
      message.setCustomValidity('Please describe your project in at least 20 characters.');
    }
    if (!form.reportValidity()) return;
    if (form.elements.botcheck.value) {
      showStatus('Unable to submit this enquiry. Please reload the page and try again.', true);
      return;
    }
    const accessKey = window.PRAIRIECLEAR_CONFIG?.web3formsAccessKey || '';
    const endpoint = 'https://api.web3forms.com/submit';
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(accessKey)) {
      showStatus('The enquiry form is not accepting submissions yet. Your message has not been sent. Please try again later.', true);
      return;
    }
    sending = true;
    submit.disabled = true;
    submit.textContent = 'Sending your enquiry…';
    form.setAttribute('aria-busy', 'true');
    status.hidden = true;
    const controller = new AbortController();
    const timer = window.setTimeout(() => controller.abort(), 20000);
    try {
      const data = new FormData(form);
      data.set('service', service.options[service.selectedIndex].textContent);
      data.set('access_key', accessKey);
      data.set('subject', 'New A1 Asbestos Buster project enquiry');
      data.set('from_name', 'A1 Asbestos Buster website');
      const response = await fetch(endpoint, { method: 'POST', body: data, headers: { 'Accept': 'application/json' }, signal: controller.signal });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true) {
        throw new Error(response.status === 429 ? 'Too many attempts. Please wait a few minutes before trying again.' : 'Your enquiry could not be sent. Please try again. Your details are still in the form.');
      }
      form.reset();
      showStatus('Thank you. Your enquiry has been sent. We’ll reply to the email you provided.');
    } catch (error) {
      showStatus(error.name === 'AbortError' ? 'We could not confirm delivery. Please wait before trying again to avoid sending a duplicate enquiry. Your details are still in the form.' : (error instanceof TypeError ? 'We could not confirm delivery. Please check your connection before trying again. Your details are still in the form.' : error.message), true);
    } finally {
      window.clearTimeout(timer);
      sending = false;
      submit.disabled = false;
      submit.textContent = 'Send my enquiry';
      form.removeAttribute('aria-busy');
    }
  });
})();
