(function () {
  /* ── Fallback photo for items without a specific product shot ───────────
     Replace an item's `img` path with a real product photo later.          */
  var FALLBACK = './img/cafe/menu/Menu-fallback.webp';

  /* ── Menu data ─────────────────────────────────────────────────────────────
     norteOnly: true  → hidden when the "Sur" tab is active
     img              → path to product photo; replace '' to hide badge/preview
     desc             → optional description line                             */
  var MENU = [
    {
      name: 'Panini',
      items: [
        { name: 'Sándwich Leonardo',    price: '$6,00', img: './img/cafe/menu/sandwich-leonardo.webp', desc: 'Pan de molde clásico, jamón ahumado, jamón de pierna, tocineta, queso gouda y mayonesa. Acompañado de tostones y yuquitas.' },
        { name: 'Sándwich Gioconda',    price: '$6,25', img: './img/cafe/menu/sandwich-gioconda.webp', desc: 'Pan de molde clásico, jamón de pierna, tocineta, queso gouda, huevo y mayonesa. Acompañado de tostones y yuquitas.' },
        { name: 'Sándwich Omelette',    price: '$6,00', img: FALLBACK, desc: 'Pan de molde multigranos, jamón ahumado, queso gouda, huevo. Acompañado de tostones y yuquitas.', norteOnly: true },
        { name: 'Prensadito',           price: '$3,50', img: './img/cafe/menu/prensadito.webp', desc: 'Pan francés, jamón de pierna, queso blanco y salsa cóctel. Acompañado de tostones y yuquitas.' },
        { name: 'Deli de Pavo',         price: '$7,00', img: FALLBACK, desc: 'Pan suave de orégano, jamón de pavo, queso gouda, mozzarella y salsa de mostaza dulce. Acompañado de tostones y yuquitas.' },
        { name: 'Deli Clásico',         price: '$7,00', img: './img/cafe/menu/sandwich-deli-clasico.webp', desc: 'Pan suave de orégano, jamón de pierna, queso gouda, mozzarella y salsa cóctel. Acompañado de tostones y yuquitas.' },
        { name: 'Rústico de Pollo',     price: '$7,55', img: './img/cafe/menu/rustico-de-pollo.webp', desc: 'Pan de molde multigranos, pollo, tomates secos, queso gouda, mozzarella y mayo pesto. Acompañado de tostones y yuquitas.', norteOnly: true },
      ],
    },
    {
      name: 'Empanadas Horneadas o Integrales',
      items: [
        { name: 'Maíz y ricotta',   price: '$3,85', img: './img/cafe/menu/empanada-maiz-y-ricota.webp' },
        { name: 'Espinaca',         price: '$3,85', img: FALLBACK },
        { name: 'Ricotta Pollo',    price: '$3,85', img: './img/cafe/menu/empanada-ricota-de-pollo.webp' },
      ],
    },
    {
      name: 'Cachitos',
      items: [
        { name: 'Pavo y queso crema', price: '$5,00', img: FALLBACK },
        { name: 'Tres quesos',        price: '$3,50', img: FALLBACK },
        { name: 'Jamón ahumado',      price: '$2,00', img: './img/cafe/menu/cachitos-jamon-ahumado.webp' },
        { name: 'Jamón y Queso',      price: '$2,50', img: FALLBACK },
      ],
    },
    {
      name: 'Hojaldres',
      items: [
        { name: 'Jamón y queso crema', price: '$5,15', img: FALLBACK },
        { name: 'Pollo',               price: '$4,00', img: FALLBACK },
        { name: 'Jamón y queso',       price: '$4,25', img: FALLBACK },
      ],
    },
    {
      name: 'Infusiones 14 oz',
      items: [
        { name: 'Té negro',                 price: '$2,50', img: FALLBACK },
        { name: 'Té negro con parchita',    price: '$2,75', img: FALLBACK },
        { name: 'Frutos rojos',             price: '$2,50', img: FALLBACK },
        { name: 'Frutos rojos con parchita',price: '$2,75', img: FALLBACK },
        { name: 'Limonada',                 price: '$2,85', img: FALLBACK },
        { name: 'Limonada con menta',       price: '$3,00', img: FALLBACK },
      ],
    },
    {
      name: 'Infusiones Frías',
      items: [
        { name: 'Limonada Detox',       price: '$3,25', img: './img/cafe/menu/limonada-detox.webp', desc: 'Pepino, jengibre y hierbabuena.' },
        { name: 'Sparkling Frutos Rojos', price: '$3,00', img: './img/cafe/menu/sparkling-frutos-rojos.webp', desc: 'Té de frutos rojos, agua sparkling, fresas, arándanos y limón.' },
      ],
    },
    {
      name: 'Jugos Naturales 14 oz',
      items: [
        { name: 'Jugo de naranja', price: '$4,00', img: FALLBACK },
        { name: 'Fresa',           price: '$4,00', img: FALLBACK },
        { name: 'Melón',           price: '$3,00', img: FALLBACK },
        { name: 'Piña',            price: '$4,00', img: FALLBACK },
        { name: 'Jugo Verde',      price: '$4,00', img: FALLBACK, desc: 'Piña, célery, espinacas, pepino, jengibre y hierbabuena.' },
      ],
    },
    {
      name: 'Otras Bebidas',
      items: [
        { name: 'Agua mineral 300ml',   price: '$1,50', img: FALLBACK },
        { name: 'Agua Sparkling 500ml', price: '$2,75', img: FALLBACK },
        { name: 'Gaseosas en Lata',     price: '$2,95', img: FALLBACK, desc: 'Pepsi (Regular, Light, Zero), 7up.' },
      ],
    },
    {
      name: 'Café Frío 14 oz',
      items: [
        { name: 'Iced Latte Vainilla',       price: '$4,50', img: FALLBACK, desc: 'Crema de café, leche y vainilla.' },
        { name: 'Iced Latte Salted Caramel', price: '$4,50', img: FALLBACK, desc: 'Crema de café, leche y caramelo salado.' },
        { name: 'Iced Latte Moka',           price: '$4,50', img: FALLBACK, desc: 'Crema de café, leche y sirope de chocolate.' },
        { name: 'Iced Latte Tiramisú',       price: '$4,75', img: FALLBACK, desc: 'Crema de café, crema tiramisú, leche y cacao.' },
        { name: 'Iced Latte Pistacchio',     price: '$7,00', img: FALLBACK, desc: 'Crema de café y pistacho, leche y topping.' },
        { name: 'Frozen Cappuccino',         price: '$4,50', img: FALLBACK, desc: 'Crema de café, leche, topping y sirope de chocolate. Servido frappe.' },
      ],
    },
    {
      name: 'Café 6oz',
      items: [
        { name: 'Americano',        price: '$2,50', img: FALLBACK },
        { name: 'Latte',            price: '$3,30', img: FALLBACK },
        { name: 'Latte Vainilla',   price: '$3,55', img: FALLBACK },
        { name: 'Latte Salt Caramel', price: '$3,50', img: FALLBACK },
        { name: 'Cappuccino',       price: '$3,25', img: FALLBACK },
        { name: 'Pistacchino',      price: '$6,00', img: FALLBACK },
        { name: 'Moka',             price: '$4,00', img: FALLBACK },
      ],
    },
    {
      name: 'Café 4oz',
      items: [
        { name: 'Americano',  price: '$2,00', img: FALLBACK },
        { name: 'Ristretto',  price: '$2,25', img: FALLBACK },
        { name: 'Espresso',   price: '$2,00', img: FALLBACK },
        { name: 'Doppio',     price: '$2,25', img: FALLBACK },
        { name: 'Macchiato',  price: '$2,25', img: FALLBACK },
        { name: 'Latte',      price: '$2,25', img: FALLBACK },
      ],
    },
    {
      name: 'Promos',
      items: [
        { name: 'Prensadito + Cappuccino',       price: '$4,00', img: FALLBACK },
        { name: 'Cachito + Cappuccino',          price: '$3,00', img: FALLBACK },
        { name: 'Torta del Día + Cappuccino',    price: '$5,95', img: FALLBACK },
        { name: 'Ponque + Cappuccino',           price: '$2,95', img: FALLBACK },
        { name: 'Combo Pranzo',                  price: '$7,50', img: FALLBACK, desc: 'Pastelito + Refresco + Pan.' },
      ],
    },
  ];

  /* ── DOM refs ───────────────────────────────────────────────────────────── */
  var MENU_HASHES  = new Set(['#menu', '#menu-norte', '#menu-sur']);
  var modal        = document.getElementById('cafe-menu-modal');
  var listEl       = modal && modal.querySelector('[data-cafe-menu-list]');
  var tabBtns      = modal && modal.querySelectorAll('[data-cafe-menu-tab]');
  var previewEl    = modal && modal.querySelector('[data-cafe-menu-preview]');
  var previewClose = modal && modal.querySelector('[data-cafe-preview-close]');
  var previewMedia = modal && modal.querySelector('.cafe-menu__preview-media');
  var previewImg   = modal && modal.querySelector('[data-cafe-menu-preview-img]');
  var previewName  = modal && modal.querySelector('[data-cafe-menu-preview-name]');
  if (!modal) return;

  /* ── Preview overlay (mobile: show/hide) ────────────────────────────────── */
  function openPreview()  { previewEl.classList.add('is-visible'); }
  function closePreview() { previewEl.classList.remove('is-visible'); }

  /* ── Preview update ─────────────────────────────────────────────────────── */
  var _currentSrc = '';

  function setPreview(el) {
    if (!el) return;
    listEl.querySelectorAll('.cafe-menu__item.is-active').forEach(function (x) {
      x.classList.remove('is-active');
    });
    el.classList.add('is-active');

    var newSrc   = el.dataset.img   || '';
    var newName  = el.dataset.name  || '';

    /* Fade out the preview panel */
    previewEl.classList.add('is-transitioning');

    setTimeout(function () {
      /* Update text immediately (visible once image is ready) */
      previewName.textContent  = newName;
      previewImg.alt           = newName;

      /* If same image, just fade back in — no reload needed */
      if (!newSrc || newSrc === _currentSrc) {
        previewEl.classList.remove('is-transitioning');
        return;
      }

      /* Show shimmer while the new image loads */
      previewImg.src = '';
      previewMedia.classList.add('is-loading');

      var tmp = new Image();
      tmp.onload = function () {
        _currentSrc    = newSrc;
        previewImg.src = newSrc;
        previewMedia.classList.remove('is-loading');
        previewEl.classList.remove('is-transitioning');
      };
      tmp.onerror = function () {
        _currentSrc    = newSrc;
        previewImg.src = newSrc;
        previewMedia.classList.remove('is-loading');
        previewEl.classList.remove('is-transitioning');
      };
      tmp.src = newSrc;
    }, 110);
  }

  /* ── Category anchors ───────────────────────────────────────────────────── */
  function slug(str) {
    return String(str)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  /* ── Build menu list ────────────────────────────────────────────────────── */
  function buildMenu(loc) {
    listEl.innerHTML = '';
    var firstItem = null;

    MENU.forEach(function (cat) {
      var items = cat.items.filter(function (it) {
        return loc === 'norte' || !it.norteOnly;
      });
      if (!items.length) return;

      var catEl = document.createElement('div');
      catEl.className = 'cafe-menu__cat';
      catEl.id = 'cafe-cat-' + slug(cat.name);
      catEl.textContent = cat.name;
      listEl.appendChild(catEl);

      items.forEach(function (item) {
        var hasPhoto = !!item.img && item.img !== FALLBACK;

        var row = document.createElement('button');
        row.type = 'button';
        row.className = 'cafe-menu__item';
        if (!hasPhoto) row.classList.add('cafe-menu__item--no-photo');
        row.dataset.img   = item.img   || '';
        row.dataset.name  = item.name;
        row.dataset.desc  = item.desc  || '';
        row.dataset.price = item.price;

        /* Camera badge (visible on mobile, only for real product photos) */
        if (hasPhoto) {
          var badge = document.createElement('span');
          badge.className = 'cafe-menu__badge';
          badge.setAttribute('aria-hidden', 'true');
          badge.innerHTML =
            '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"' +
            ' stroke="currentColor" stroke-width="2.2" stroke-linecap="round"' +
            ' stroke-linejoin="round">' +
            '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2' +
            'h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>' +
            '<circle cx="12" cy="13" r="4"/></svg>';
          row.appendChild(badge);
        }

        /* Name + description */
        var info = document.createElement('span');
        info.className = 'cafe-menu__item-info';

        var nameEl = document.createElement('span');
        nameEl.className = 'cafe-menu__item-name';
        nameEl.textContent = item.name;
        info.appendChild(nameEl);

        if (item.desc) {
          var descEl = document.createElement('span');
          descEl.className = 'cafe-menu__item-desc';
          descEl.textContent = item.desc;
          info.appendChild(descEl);
        }

        row.appendChild(info);

        /* Price */
        var priceEl = document.createElement('span');
        priceEl.className = 'cafe-menu__item-price';
        priceEl.textContent = item.price;
        row.appendChild(priceEl);

        /* Interactions — items without a real photo don't open the overlay */
        if (hasPhoto) {
          row.addEventListener('click', function () { setPreview(row); openPreview(); });
        }
        row.addEventListener('mouseenter', function () { setPreview(row); });
        row.addEventListener('focus',      function () { setPreview(row); });

        listEl.appendChild(row);
        if (!firstItem) firstItem = row;
      });
    });

    /* Default: set first item immediately, no fade */
    if (firstItem) {
      _currentSrc = firstItem.dataset.img || '';
      firstItem.classList.add('is-active');
      previewEl.classList.remove('is-transitioning');
      previewMedia.classList.remove('is-loading');
      previewImg.src           = _currentSrc;
      previewImg.alt           = firstItem.dataset.name  || '';
      previewName.textContent  = firstItem.dataset.name  || '';
    }

    listEl.scrollTop = 0;
  }

  /* ── Open / close ───────────────────────────────────────────────────────── */
  var _targetCat = null;

  function scrollToCategory(catName) {
    var id = 'cafe-cat-' + slug(catName);
    requestAnimationFrame(function () {
      var el = listEl.querySelector('#' + id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function open(tab, targetCat) {
    _targetCat = targetCat || null;
    modal.removeAttribute('hidden');
    requestAnimationFrame(function () { modal.classList.add('is-open'); });
    document.body.style.overflow = 'hidden';
    setTab(tab || 'norte');
  }

  function close() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    _targetCat = null;
    if (MENU_HASHES.has(location.hash)) {
      history.replaceState(null, '', location.pathname + location.search);
    }
    modal.addEventListener('transitionend', function () {
      modal.setAttribute('hidden', '');
    }, { once: true });
  }

  function setTab(name) {
    tabBtns.forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.cafeMenuTab === name);
    });
    buildMenu(name);
    history.replaceState(null, '', '#menu-' + name);
    if (_targetCat) scrollToCategory(_targetCat);
  }

  /* ── Hash / deep-linking ────────────────────────────────────────────────── */
  function handleHash() {
    var hash = location.hash;
    if (hash === '#menu' || hash === '#menu-norte') open('norte');
    else if (hash === '#menu-sur') open('sur');
  }

  /* ── Event wiring ───────────────────────────────────────────────────────── */
  document.querySelectorAll('[data-cafe-menu-open]').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); open(); });
  });

  document.querySelectorAll('[data-cafe-menu-cat]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      open('norte', el.dataset.cafeMenuCat);
    });
  });

  modal.querySelectorAll('[data-cafe-menu-close]').forEach(function (el) {
    el.addEventListener('click', close);
  });

  /* Mobile preview overlay: close via × button or tap on scrim */
  if (previewClose) {
    previewClose.addEventListener('click', function (e) {
      e.stopPropagation();
      closePreview();
    });
  }
  if (previewEl) {
    previewEl.addEventListener('click', function (e) {
      /* Only close if tapping the scrim backdrop (not the card itself) */
      if (e.target === previewEl) closePreview();
    });
  }

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () { setTab(btn.dataset.cafeMenuTab); });
  });

  window.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      /* On mobile, Escape closes preview first; second press closes modal */
      if (previewEl && previewEl.classList.contains('is-visible')) {
        closePreview();
      } else {
        close();
      }
    }
  });

  window.addEventListener('hashchange', handleHash);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleHash);
  } else {
    handleHash();
  }
})();
